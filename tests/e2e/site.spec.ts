import { expect, test } from '@playwright/test'

let pageErrors: string[] = []
test.beforeEach(async ({ page }) => {
  pageErrors = []
  page.on('pageerror', error => pageErrors.push(error.message))
  await page.addInitScript(() => sessionStorage.setItem('preloaderShown', 'true'))
})
test.afterEach(() => expect(pageErrors).toEqual([]))

test('production pages render and navigation works', async ({ page }, testInfo) => {
  for (const path of ['/', '/about', '/services', '/portfolio', '/contact', '/blog']) {
    const response = await page.goto(path, { waitUntil: 'domcontentloaded' })
    expect(response?.status()).toBe(200)
    await expect(page.locator('main').locator('h1, h2').first()).toBeVisible()
    if (path === '/') {
      await expect(page.locator('main').locator('h1, h2').first()).toHaveCSS('opacity', '1')
      await expect.poll(() => page.evaluate(() => {
        const heading = document.querySelector('main h1')!.getBoundingClientRect()
        const header = document.querySelector('header')!.getBoundingClientRect()
        return heading.top - header.bottom
      })).toBeGreaterThanOrEqual(0)
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(page.viewportSize()!.width)
      await page.screenshot({ path: testInfo.outputPath('home.png') })
    }
  }
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  if (page.viewportSize()!.width < 768) {
    await page.getByRole('button', { name: 'Open menu', exact: true }).click()
    await page.getByRole('dialog', { name: 'Site menu' }).getByRole('link', { name: 'Portfolio', exact: true }).click()
  } else {
    await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'Portfolio', exact: true }).click()
  }
  await expect(page).toHaveURL(/\/portfolio$/)
})

test('portfolio filters update the visible projects', async ({ page }) => {
  await page.goto('/portfolio', { waitUntil: 'domcontentloaded' })
  const tabs = page.getByRole('tablist', { name: 'Filter projects by category' }).getByRole('tab')
  const originalCount = await page.locator('main article').count()
  expect(originalCount).toBeGreaterThan(1)
  await tabs.nth(1).click()
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true')
  await expect.poll(() => page.locator('main article').count()).toBeLessThan(originalCount)
  await tabs.first().click()
  await expect.poll(() => page.locator('main article').count()).toBe(originalCount)
})

test('contact form shows delivery success and provider failure correctly', async ({ page }) => {
  let submissions = 0
  await page.route('**/api/contact', async route => {
    const data = route.request().postDataJSON()
    expect(data.email).toBe('visitor@example.com')
    submissions++
    await route.fulfill(submissions === 1
      ? { status: 200, json: { success: true, message: 'Message sent successfully' } }
      : { status: 502, json: { error: 'Failed to send message. Please try again later.' } })
  })
  await page.goto('/contact?service=Website%20Development&message=Please%20build%20a%20website', { waitUntil: 'domcontentloaded' })
  const fill = async () => {
    await page.locator('input[name="name"]').fill('Test Visitor')
    await page.locator('input[name="email"]').fill('visitor@example.com')
    await page.locator('select[name="projectType"]').selectOption('Website Development')
    await page.locator('textarea[name="message"]').fill('Please build a website.')
  }
  await expect(page.locator('textarea[name="message"]')).toHaveValue('Please build a website')
  await fill()
  await page.getByRole('button', { name: 'Send Message', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Message Sent!' })).toBeVisible()
  await page.getByRole('button', { name: 'Send Another Message' }).click()
  await fill()
  await page.getByRole('button', { name: 'Send Message', exact: true }).click()
  await expect(page.locator('main form').getByRole('alert')).toContainText("We couldn't send your message just now")
  await expect(page.getByRole('heading', { name: 'Message Sent!' })).toHaveCount(0)
})

test('contact API rejects invalid requests and handles missing email configuration', async ({ request }) => {
  const invalid = await request.post('/api/contact', { data: { name: 'Test', email: 'invalid', message: 'Hello' } })
  expect(invalid.status()).toBe(400)
  const malformed = await request.post('/api/contact', { data: '{broken', headers: { 'Content-Type': 'application/json' } })
  expect(malformed.status()).toBe(400)
  const oversized = await request.post('/api/contact', { data: { name: 'Test', email: 'visitor@example.com', message: 'x'.repeat(17000) } })
  expect(oversized.status()).toBe(413)
  const unavailable = await request.post('/api/contact', { data: { name: 'Test', email: 'visitor@example.com', message: 'Hello' } })
  expect(unavailable.status()).toBe(503)
  expect((await unavailable.json()).success).toBeUndefined()
})

test('local assets and image optimization work; unapproved image sources are rejected', async ({ request }) => {
  for (const path of ['/icon.svg', '/apple-icon.png', '/team/akhil.jpg', '/team/chakradhar.jpg', '/team/kushal.jpg', '/team/manoj.jpg', '/projects/curo.jpg', '/projects/cvearity.jpg', '/projects/escape-menu.jpg']) {
    expect((await request.get(path)).status()).toBe(200)
  }
  const optimized = await request.get('/_next/image?url=%2Fprojects%2Fcuro.jpg&w=640&q=75', { headers: { Accept: 'image/webp' } })
  expect(optimized.status()).toBe(200)
  expect(optimized.headers()['content-type']).toContain('image/')
  const disallowed = await request.get('/_next/image?url=https%3A%2F%2Fexample.com%2Fimage.jpg&w=640&q=75')
  expect(disallowed.status()).toBe(400)
})
