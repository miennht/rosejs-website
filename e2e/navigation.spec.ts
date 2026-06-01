import { expect, test } from '@playwright/test'

test.describe('primary navigation', () => {
  test('home loads', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('navigates to Services, About, Insights, and Schedule', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Primary' }).first()
    await nav.getByRole('link', { name: 'Services' }).click()
    await expect(page).toHaveURL(/\/services$/)
    await expect(page.getByRole('heading', { name: 'Services', level: 1 })).toBeVisible()

    await nav.getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL(/\/about$/)
    await expect(page.getByRole('heading', { name: 'About RoseJS', level: 1 })).toBeVisible()

    await nav.getByRole('link', { name: 'Insights' }).click()
    await expect(page).toHaveURL(/\/insights$/)
    await expect(page.getByRole('heading', { name: 'Insights', level: 1 })).toBeVisible()

    await nav.getByRole('link', { name: 'Schedule' }).click()
    await expect(page).toHaveURL(/\/schedule$/)
    await expect(
      page.getByRole('heading', { name: 'Schedule a consultation', level: 1 }),
    ).toBeVisible()
  })

  test('logo links to homepage', async ({ page }) => {
    await page.goto('/services')
    await page.getByRole('link', { name: 'RoseJS', exact: true }).click()
    await expect(page).toHaveURL(/\/$/)
  })

  test('invalid route shows 404', async ({ page }) => {
    await page.goto('/route-that-does-not-exist-rosejs-e2e')
    await expect(page.getByRole('heading', { name: /not available/i })).toBeVisible()
  })
})
