import { expect, test } from '@playwright/test'

/** PRD §12.3 — contact form submit + validation (TASK-083 / EVAL-REG-005). */
test.describe('contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('required fields show errors on submit', async ({ page }) => {
    await page.getByRole('button', { name: /send message/i }).click()
    await expect(page.getByText('Name is required.')).toBeVisible()
    await expect(page.getByText('Email is required.')).toBeVisible()
    await expect(page.getByText('Company is required.')).toBeVisible()
    await expect(page.getByText('Please select a service interest.')).toBeVisible()
    await expect(page.getByText('Message is required.')).toBeVisible()
  })

  test('invalid email shows error', async ({ page }) => {
    await page.getByLabel(/^name/i).fill('Test User')
    await page.getByLabel(/^email/i).fill('not-an-email')
    await page.getByLabel(/company/i).fill('Acme Health')
    await page.getByLabel(/service interest/i).selectOption('other')
    await page.getByLabel(/message/i).fill('Hello from e2e.')
    await page.getByRole('button', { name: /send message/i }).click()
    await expect(page.getByText('Enter a valid email address.')).toBeVisible()
  })

  test('valid submission shows success in demo mode (no remote POST)', async ({ page }) => {
    await page.getByLabel(/^name/i).fill('Test User')
    await page.getByLabel(/^email/i).fill('test.user@example.com')
    await page.getByLabel(/company/i).fill('Acme Health')
    await page.getByLabel(/service interest/i).selectOption('other')
    await page.getByLabel(/message/i).fill('E2E validation message.')
    await page.getByRole('button', { name: /send message/i }).click()
    await expect(page.getByText(/Thanks — your details were validated/i)).toBeVisible()
  })
})
