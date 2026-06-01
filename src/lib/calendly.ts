/** Calendly scheduling — public URL via VITE_CALENDLY_URL (no secrets). */

export const DEFAULT_CALENDLY_URL = 'https://calendly.com/roseng0201/30min'

export function getCalendlyUrl(): string {
  const raw = import.meta.env.VITE_CALENDLY_URL as string | undefined
  if (raw != null && raw.trim() !== '') return raw.trim()
  return DEFAULT_CALENDLY_URL
}

/** Embedded scheduler on /schedule unless VITE_CALENDLY_EMBED=false. */
export function isCalendlyEmbedEnabled(): boolean {
  const flag = import.meta.env.VITE_CALENDLY_EMBED as string | undefined
  if (flag === 'false') return false
  return true
}

export function getCalendlyEmbedSrc(url: string = getCalendlyUrl()): string | null {
  if (!isCalendlyEmbedEnabled() || !/calendly\.com/i.test(url)) return null
  return `${url}${url.includes('?') ? '&' : '?'}embed=true`
}
