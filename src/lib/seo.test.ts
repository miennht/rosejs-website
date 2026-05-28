import { afterEach, describe, expect, it, vi } from 'vitest'
import { absoluteUrl, getSiteUrl } from './seo.ts'

describe('getSiteUrl', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('returns undefined when VITE_SITE_URL is unset', () => {
    vi.stubEnv('VITE_SITE_URL', '')
    expect(getSiteUrl()).toBeUndefined()
  })

  it('strips trailing slash', () => {
    vi.stubEnv('VITE_SITE_URL', 'https://rosejs.example/')
    expect(getSiteUrl()).toBe('https://rosejs.example')
  })
})

describe('absoluteUrl', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('uses placeholder when env is missing', () => {
    vi.stubEnv('VITE_SITE_URL', '')
    expect(absoluteUrl('/contact')).toBe('https://www.roseng.org/contact')
  })

  it('joins configured site URL with path', () => {
    vi.stubEnv('VITE_SITE_URL', 'https://app.example')
    expect(absoluteUrl('/insights/a')).toBe('https://app.example/insights/a')
  })
})
