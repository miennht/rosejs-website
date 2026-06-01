import { expect, test } from '@playwright/test'

test.describe('SEO static files (TASK-072 / TASK-074)', () => {
  test('health endpoint returns 200 for Railway healthchecks', async ({ request }) => {
    const res = await request.get('/health')
    expect(res.status()).toBe(200)
  })

  test('sitemap.xml is raw XML, not SPA HTML', async ({ request }) => {
    const res = await request.get('/sitemap.xml')
    expect(res.status()).toBe(200)
    const contentType = res.headers()['content-type'] ?? ''
    expect(contentType).toMatch(/xml/)
    const body = await res.text()
    expect(body).toMatch(/^<\?xml/)
    expect(body).toContain('<urlset')
    expect(body).toContain('<loc>https://www.roseng.org/</loc>')
    expect(body).toContain(
      '<loc>https://www.roseng.org/services/software-architecture-consulting</loc>',
    )
    expect(body).toContain('<loc>https://www.roseng.org/insights/legacy-modernization</loc>')
    expect(body).not.toContain('<!doctype html>')
  })

  test('robots.txt references sitemap', async ({ request }) => {
    const res = await request.get('/robots.txt')
    expect(res.status()).toBe(200)
    expect(res.headers()['content-type']).toMatch(/text\/plain/)
    const body = await res.text()
    expect(body).toContain('Sitemap:')
    expect(body).toContain('sitemap.xml')
  })
})

test.describe('page SEO metadata (TASK-074)', () => {
  test('core pages have title and meta description', async ({ page }) => {
    const routes = [
      { path: '/', title: /RoseJS/i },
      { path: '/services', title: /Services/i },
      { path: '/contact', title: /Contact/i },
      { path: '/insights/legacy-modernization', title: /legacy|modernization/i },
    ]

    for (const { path, title } of routes) {
      await page.goto(path)
      await expect(page).toHaveTitle(title)
      const description = await page.locator('meta[name="description"]').getAttribute('content')
      expect(description, `meta description on ${path}`).toBeTruthy()
      expect(description!.length).toBeGreaterThan(20)
    }
  })

  test('each core page has a single logical H1', async ({ page }) => {
    for (const path of ['/', '/services', '/about', '/insights', '/contact']) {
      await page.goto(path)
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    }
  })
})
