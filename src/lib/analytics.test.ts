import { afterEach, describe, expect, it, vi } from 'vitest'
import { trackEvent } from './analytics.ts'

describe('trackEvent', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    delete (window as unknown as { plausible?: unknown }).plausible
  })

  it('no-ops when plausible is unavailable', () => {
    trackEvent('calendly_click', { source: 'test' })
    expect(true).toBe(true)
  })

  it('calls window.plausible with stringified props', () => {
    const plausible = vi.fn()
    ;(window as unknown as { plausible: typeof plausible }).plausible = plausible
    trackEvent('lead_magnet_download', { asset: '/downloads/x.pdf' })
    expect(plausible).toHaveBeenCalledWith('lead_magnet_download', {
      props: { asset: '/downloads/x.pdf' },
    })
  })
})
