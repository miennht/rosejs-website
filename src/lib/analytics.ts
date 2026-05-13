declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void
  }
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>,
): void {
  if (typeof window === 'undefined') return
  const plausible = window.plausible
  if (typeof plausible !== 'function') return
  const props = properties != null ? stringifyProps(properties) : undefined
  plausible(eventName, props != null ? { props } : undefined)
}

function stringifyProps(
  properties: Record<string, string | number | boolean>,
): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(properties)) {
    out[k] = String(v)
  }
  return out
}
