import assert from 'node:assert/strict'
import { test } from 'node:test'
import { ContactEmailUnavailableError, createContactHandler, type ContactEmail } from '../src/lib/contact'
import { POST } from '../src/app/api/contact/route'

const validContact = {
  name: 'Test Visitor', email: 'visitor@example.com',
  projectType: 'Website Development', budget: 'Discuss later', message: 'Please build a website.',
}

function request(body: unknown) {
  return new Request('http://localhost/api/contact', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  })
}

test('sends validated contact details and escapes visitor HTML', async () => {
  const sent: ContactEmail[] = []
  const handler = createContactHandler(async (email) => { sent.push(email) })
  const response = await handler(request({ ...validContact, name: '  <Visitor>  ', message: '<script>alert("x")</script> & test' }))
  assert.equal(response.status, 200)
  assert.equal((await response.json()).success, true)
  assert.equal(sent.length, 1)
  assert.equal(sent[0].replyTo, validContact.email)
  assert.equal(sent[0].to, 'contact@pixelscraft.online')
  assert.match(sent[0].subject, /from <Visitor>$/)
  assert.match(sent[0].html, /&lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt; &amp; test/)
  assert.doesNotMatch(sent[0].html, /<script>/)
})

test('rejects invalid fields, header injection, and overlong values before sending', async () => {
  let sends = 0
  const handler = createContactHandler(async () => { sends++ })
  const invalid = [
    {}, null, [], { ...validContact, name: 123 }, { ...validContact, email: 'not-an-email' },
    { ...validContact, name: 'Visitor\r\nBcc: attacker@example.com' },
    { ...validContact, projectType: 'Website\nInjected header' },
    { ...validContact, name: 'x'.repeat(121) },
    { ...validContact, message: 'x'.repeat(5001) }, { ...validContact, message: '   ' },
  ]
  for (const body of invalid) assert.equal((await handler(request(body))).status, 400)
  assert.equal(sends, 0)
})

test('rejects malformed JSON and oversized request streams', async () => {
  let sends = 0
  const handler = createContactHandler(async () => { sends++ })
  const malformed = new Request('http://localhost/api/contact', { method: 'POST', body: '{broken' })
  assert.equal((await handler(malformed)).status, 400)
  assert.equal((await handler(request({ ...validContact, message: 'x'.repeat(17000) }))).status, 413)
  assert.equal((await handler(request({ ...validContact, message: '😀'.repeat(4500) }))).status, 413)
  assert.equal(sends, 0)
})

test('provider failures return an error without exposing internal details', async () => {
  const handler = createContactHandler(async () => { throw new Error('private-provider-detail') })
  const response = await handler(request(validContact))
  assert.equal(response.status, 502)
  const body = await response.json()
  assert.equal(body.success, undefined)
  assert.doesNotMatch(JSON.stringify(body), /private-provider-detail/)
})

test('missing email configuration returns 503', async () => {
  const handler = createContactHandler(async () => { throw new ContactEmailUnavailableError() })
  assert.equal((await handler(request(validContact))).status, 503)
})

test('the actual route handles Resend error results instead of reporting success', async () => {
  const originalFetch = globalThis.fetch
  const originalKey = process.env.RESEND_API_KEY
  let providerCalls = 0
  process.env.RESEND_API_KEY = 're_test_placeholder'
  globalThis.fetch = async () => {
    providerCalls++
    return Response.json({ name: 'validation_error', message: 'Provider rejection' }, { status: 400 })
  }
  try {
    const response = await POST(request(validContact))
    assert.equal(response.status, 502)
    assert.equal(providerCalls, 1)
    assert.equal((await response.json()).success, undefined)
  } finally {
    globalThis.fetch = originalFetch
    if (originalKey === undefined) delete process.env.RESEND_API_KEY
    else process.env.RESEND_API_KEY = originalKey
  }
})
