import { z } from 'zod'

const MAX_BODY_BYTES = 16 * 1024
const singleLine = (value: string) => !/[\r\n]/.test(value)
const contactSchema = z.object({
  name: z.string().trim().min(1).max(120).refine(singleLine),
  email: z.string().trim().email().max(254),
  projectType: z.string().trim().max(100).refine(singleLine).optional(),
  budget: z.string().trim().max(100).refine(singleLine).optional(),
  message: z.string().trim().min(1).max(5000),
})

export interface ContactEmail {
  from: string
  to: string
  replyTo: string
  subject: string
  html: string
}

export class ContactEmailUnavailableError extends Error {}

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function json(body: object, status: number) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })
}

async function readBody(request: Request) {
  const reader = request.body?.getReader()
  if (!reader) throw new SyntaxError('Empty body')
  const chunks: Uint8Array[] = []
  let size = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > MAX_BODY_BYTES) {
        await reader.cancel()
        throw new RangeError('Body too large')
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }
  const bytes = new Uint8Array(size)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk, offset)
    offset += chunk.byteLength
  }
  return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)) as unknown
}

export function createContactHandler(sendEmail: (email: ContactEmail) => Promise<void>) {
  return async function handleContact(request: Request) {
    if (Number(request.headers.get('content-length')) > MAX_BODY_BYTES) {
      return json({ error: 'Request is too large' }, 413)
    }
    let body: unknown
    try {
      body = await readBody(request)
    } catch (error) {
      return error instanceof RangeError
        ? json({ error: 'Request is too large' }, 413)
        : json({ error: 'Request must contain valid JSON' }, 400)
    }
    const result = contactSchema.safeParse(body)
    if (!result.success) {
      return json({ error: 'Provide a valid name, email, and message within the allowed lengths' }, 400)
    }
    const { name, email, projectType, budget, message } = result.data
    try {
      await sendEmail({
        from: 'PixelsCraft Website <noreply@pixelscraft.online>',
        to: 'contact@pixelscraft.online',
        replyTo: email,
        subject: `New Inquiry: ${projectType || 'General'} from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Project Type:</strong> ${escapeHtml(projectType || 'Not specified')}</p>
              <p><strong>Budget:</strong> ${escapeHtml(budget || 'Not specified')}</p>
            </div>
            <h3>Message:</h3>
            <p style="background: #f1f5f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        `,
      })
      return json({ success: true, message: 'Message sent successfully' }, 200)
    } catch (error) {
      if (error instanceof ContactEmailUnavailableError) {
        return json({ error: 'Contact email is temporarily unavailable' }, 503)
      }
      console.error('Contact email delivery failed')
      return json({ error: 'Failed to send message. Please try again later.' }, 502)
    }
  }
}
