import { expect, test } from '@playwright/test'

test.describe('launch smoke (TASK-072)', () => {
  test('core routes render expected headings', async ({ page }) => {
    const routes: { path: string; heading: string | RegExp }[] = [
      { path: '/', heading: /Healthcare platform modernization/i },
      { path: '/services', heading: 'Services' },
      { path: '/services/software-architecture-consulting', heading: /software architecture/i },
      { path: '/about', heading: 'About RoseJS' },
      { path: '/insights', heading: 'Insights' },
      { path: '/insights/legacy-modernization', heading: /modernize a legacy healthcare/i },
      { path: '/case-studies', heading: /case studies/i },
      { path: '/case-studies/payer-claims-modernization', heading: /Regional payer/i },
      { path: '/contact', heading: 'Contact' },
      { path: '/schedule', heading: 'Schedule a consultation' },
    ]

    for (const { path, heading } of routes) {
      await page.goto(path)
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading)
    }
  })

  test('deep link hard navigation serves SPA shell then route', async ({ page }) => {
    await page.goto('/insights/healthcare-rcm-modernization-guide')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page).toHaveURL(/healthcare-rcm-modernization-guide/)
  })
})

test.describe('mobile navigation (PRD §12.3 / TASK-073 / TASK-083)', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('open menu, tab through links, escape closes', async ({ page }) => {
    await page.goto('/')
    const openMenu = page.getByRole('button', { name: 'Open menu' })
    await expect(openMenu).toBeVisible()
    const nav = page.getByRole('dialog', { name: 'Site navigation' })
    await openMenu.click()
    await expect(nav).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Services' })).toBeFocused()

    await page.keyboard.press('Tab')
    await expect(nav.getByRole('link', { name: 'About' })).toBeFocused()

    await page.keyboard.press('Escape')
    await expect(nav).toBeHidden()
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused()
  })
})
