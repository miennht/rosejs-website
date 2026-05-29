/**
 * Production smoke checks (TASK-072). Usage:
 *   node scripts/verify-production.mjs
 *   PRODUCTION_URL=https://www.roseng.org node scripts/verify-production.mjs
 */
import process from 'node:process'

const BASE = (process.env.PRODUCTION_URL ?? 'https://www.roseng.org').replace(/\/$/, '')

const PAGE_ROUTES = [
  '/',
  '/services',
  '/services/software-architecture-consulting',
  '/about',
  '/insights',
  '/insights/legacy-modernization',
  '/case-studies',
  '/case-studies/payer-claims-modernization',
  '/contact',
  '/schedule',
]

const failures = []

function pass(message) {
  console.log(`✓ ${message}`)
}

function fail(message) {
  failures.push(message)
  console.error(`✗ ${message}`)
}

async function checkPage(path) {
  const url = `${BASE}${path}`
  try {
    const res = await fetch(url, { redirect: 'follow' })
    const html = await res.text()
    if (res.status !== 200) {
      fail(`${path} → HTTP ${res.status}`)
      return
    }
    if (!html.includes('<!doctype html') && !html.includes('<!DOCTYPE html')) {
      fail(`${path} → expected HTML document`)
      return
    }
    if (!html.includes('id="root"')) {
      fail(`${path} → missing React root`)
      return
    }
    pass(`${path} → 200 HTML`)
  } catch (error) {
    fail(`${path} → ${error instanceof Error ? error.message : String(error)}`)
  }
}

async function checkSitemap() {
  const url = `${BASE}/sitemap.xml`
  try {
    const res = await fetch(url)
    const body = await res.text()
    const ct = res.headers.get('content-type') ?? ''
    if (res.status !== 200) {
      fail(`sitemap.xml → HTTP ${res.status}`)
      return
    }
    if (!ct.includes('xml')) {
      fail(`sitemap.xml → Content-Type "${ct}" (expected xml)`)
    }
    if (!body.startsWith('<?xml')) {
      fail('sitemap.xml → body is not raw XML')
      return
    }
    pass(`sitemap.xml → 200 ${ct.trim()}`)
  } catch (error) {
    fail(`sitemap.xml → ${error instanceof Error ? error.message : String(error)}`)
  }
}

async function checkRobots() {
  const url = `${BASE}/robots.txt`
  try {
    const res = await fetch(url)
    const body = await res.text()
    if (res.status !== 200) {
      fail(`robots.txt → HTTP ${res.status}`)
      return
    }
    if (!body.includes('Sitemap:')) {
      fail('robots.txt → missing Sitemap directive')
      return
    }
    pass('robots.txt → 200 with Sitemap directive')
  } catch (error) {
    fail(`robots.txt → ${error instanceof Error ? error.message : String(error)}`)
  }
}

async function checkHttps() {
  if (!BASE.startsWith('https://')) {
    fail('PRODUCTION_URL must use HTTPS')
    return
  }
  pass(`HTTPS base: ${BASE}`)
}

console.log(`Verifying production: ${BASE}\n`)

await checkHttps()
await checkSitemap()
await checkRobots()
for (const path of PAGE_ROUTES) {
  await checkPage(path)
}

console.log('')
if (failures.length === 0) {
  console.log('All production checks passed.')
  process.exit(0)
}

console.error(`${failures.length} check(s) failed.`)
process.exit(1)
