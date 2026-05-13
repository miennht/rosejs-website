import { SEO } from '../components/seo/SEO.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'
import { trackEvent } from '../lib/analytics.ts'

const defaultCalendly = 'https://calendly.com/'

export function Schedule() {
  const calendlyUrlRaw = import.meta.env.VITE_CALENDLY_URL as string | undefined
  const calendlyUrl =
    calendlyUrlRaw != null && calendlyUrlRaw.trim() !== '' ? calendlyUrlRaw.trim() : defaultCalendly
  const embedEnabled = import.meta.env.VITE_CALENDLY_EMBED === 'true'
  const showEmbed =
    embedEnabled && calendlyUrl !== defaultCalendly && /calendly\.com/i.test(calendlyUrl)
  const embedSrc = showEmbed
    ? `${calendlyUrl}${calendlyUrl.includes('?') ? '&' : '?'}embed=true`
    : null

  return (
    <Container className="py-10">
      <SEO
        path="/schedule"
        title="Schedule a consultation | RoseJS"
        description="Book time with RoseJS for healthcare software architecture, modernization, and AI-first delivery."
      />
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
        Schedule a consultation
      </h1>
      <p className="mb-8 max-w-2xl text-muted">
        Use Calendly for a first conversation. This does not replace the contact form—send written
        context anytime if that fits your procurement process better.
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        <LinkButton
          href={calendlyUrl}
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('calendly_click', { source: 'schedule_page' })}
        >
          Open Calendly
        </LinkButton>
        <LinkButton to="/contact" variant="secondary">
          Use contact form instead
        </LinkButton>
      </div>

      {embedSrc != null ? (
        <iframe
          title="Calendly scheduling"
          src={embedSrc}
          className="mt-2 h-[min(700px,80vh)] w-full max-w-3xl rounded-lg border border-border"
        />
      ) : null}

      {calendlyUrl === defaultCalendly ? (
        <p className="max-w-2xl text-sm text-muted">
          Set <code className="rounded bg-surface px-1 py-0.5 text-xs">VITE_CALENDLY_URL</code> to
          your real Calendly scheduling link. Until then, the button opens calendly.com as a neutral
          placeholder.
        </p>
      ) : null}

      {!showEmbed && calendlyUrl !== defaultCalendly ? (
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Optional: set{' '}
          <code className="rounded bg-surface px-1 py-0.5 text-xs">VITE_CALENDLY_EMBED</code> to{' '}
          <code className="rounded bg-surface px-1 py-0.5 text-xs">true</code> to show an embedded
          scheduler on this page (Architecture §10).
        </p>
      ) : null}
    </Container>
  )
}
