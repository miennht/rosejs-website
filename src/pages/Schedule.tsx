import { SEO } from '../components/seo/SEO.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'
import { trackEvent } from '../lib/analytics.ts'
import { getCalendlyEmbedSrc, getCalendlyUrl } from '../lib/calendly.ts'

export function Schedule() {
  const calendlyUrl = getCalendlyUrl()
  const embedSrc = getCalendlyEmbedSrc(calendlyUrl)

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
        Pick a 30-minute slot on Calendly. You can also use the contact form if written context fits
        your procurement process better.
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        <LinkButton
          href={calendlyUrl}
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('calendly_click', { source: 'schedule_page' })}
        >
          Open in Calendly
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
    </Container>
  )
}
