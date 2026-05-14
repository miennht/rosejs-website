import { expect, test } from '@playwright/test'

test.describe('primary navigation', () => {
  test('home loads', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('navigates to Services, About, Insights, Contact', async ({ page }) => {
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

    await nav.getByRole('link', { name: 'Contact' }).click()
    await expect(page).toHaveURL(/\/contact$/)
    await expect(page.getByRole('heading', { name: 'Contact', level: 1 })).toBeVisible()
  })

  test('invalid route shows 404', async ({ page }) => {
    await page.goto('/route-that-does-not-exist-rosejs-e2e')
    await expect(page.getByRole('heading', { name: /not available/i })).toBeVisible()
  })
})
