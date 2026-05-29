import { expect, test } from '@playwright/test'

test.describe('Calendly CTA', () => {
  test('schedule page shows Calendly CTA without loading external UI', async ({ page }) => {
    await page.goto('/schedule')
    const calendly = page.getByRole('link', { name: /open calendly/i })
    await expect(calendly).toBeVisible()
    await expect(calendly).toHaveAttribute('href', /^https?:\/\//)
    // Do not navigate away — task: do not depend on Calendly loading
  })
})
