import { expect, test } from '@playwright/test'

/**
 * PRD §12.3 critical visitor journeys (TASK-083 / EVAL-REG-005 / NFR-EVAL-004).
 * Complements existing e2e specs; adds lead-magnet download + CTA coverage with requirement IDs.
 */
test.describe('critical flows (PRD §12.3 / TASK-083)', () => {
  test('EVAL-REG-005: homepage CTA buttons navigate to schedule and contact', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

    const scheduleCta = page.getByRole('link', { name: /schedule a consultation/i }).first()
    await expect(scheduleCta).toBeVisible()
    await scheduleCta.click()
    await expect(page).toHaveURL(/\/schedule$/)

    await page.goto('/')
    const contactCta = page
      .getByRole('link', { name: /discuss your roadmap|contact rosejs/i })
      .first()
    await expect(contactCta).toBeVisible()
    await contactCta.click()
    await expect(page).toHaveURL(/\/contact$/)
  })

  test('EVAL-REG-005: visitor downloads lead magnet PDF', async ({ page }) => {
    await page.goto('/')
    const downloadLink = page.getByRole('link', { name: /download checklist/i }).first()
    await expect(downloadLink).toBeVisible()
    await expect(downloadLink).toHaveAttribute(
      'href',
      '/downloads/legacy-application-modernization-checklist.pdf',
    )

    const response = await page.request.get(
      '/downloads/legacy-application-modernization-checklist.pdf',
    )
    expect(response.status()).toBe(200)
    const contentType = response.headers()['content-type'] ?? ''
    expect(contentType).toMatch(/pdf|octet-stream/i)
  })

  test('EVAL-REG-005 / EVAL-P2-002: insights article opens from listing', async ({ page }) => {
    await page.goto('/insights')
    await expect(page.getByRole('heading', { name: 'Insights', level: 1 })).toBeVisible()
    const firstArticle = page.getByRole('link', { name: 'Read more' }).first()
    await expect(firstArticle).toBeVisible()
    await firstArticle.click()
    await expect(page).toHaveURL(/\/insights\//)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })
})
