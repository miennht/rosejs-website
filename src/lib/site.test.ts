import { afterEach, describe, expect, it, vi } from 'vitest'
import { getContactEmail, getLinkedInUrl, getSiteOrigin } from './site.ts'

describe('site branding helpers', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('defaults contact email to hello@roseng.org', () => {
    vi.stubEnv('VITE_CONTACT_EMAIL', '')
    expect(getContactEmail()).toBe('hello@roseng.org')
  })

  it('uses VITE_SITE_URL when set', () => {
    vi.stubEnv('VITE_SITE_URL', 'https://www.roseng.org/')
    expect(getSiteOrigin()).toBe('https://www.roseng.org')
  })

  it('returns undefined LinkedIn when env unset', () => {
    vi.stubEnv('VITE_LINKEDIN_URL', '')
    expect(getLinkedInUrl()).toBeUndefined()
  })
})
