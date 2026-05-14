import { expect, test } from '@playwright/test'

test.describe('Calendly and lead magnet CTAs', () => {
  test('schedule page shows Calendly CTA without loading external UI', async ({ page }) => {
    await page.goto('/schedule')
    const calendly = page.getByRole('link', { name: /open calendly/i })
    await expect(calendly).toBeVisible()
    await expect(calendly).toHaveAttribute('href', /^https?:\/\//)
    // Do not navigate away — task: do not depend on Calendly loading
  })

  test('lead magnet download link exists with PDF path', async ({ page }) => {
    await page.goto('/')
    const download = page.getByRole('link', { name: /download checklist/i })
    await expect(download).toBeVisible()
    const href = await download.getAttribute('href')
    expect(href).toMatch(/\/downloads\/.*\.pdf$/)
  })
})
