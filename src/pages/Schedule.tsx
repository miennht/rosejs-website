import { PageMeta } from '../components/seo/PageMeta.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'

const defaultCalendly = 'https://calendly.com/'

export function Schedule() {
  const calendlyUrlRaw = import.meta.env.VITE_CALENDLY_URL as string | undefined
  const calendlyUrl =
    calendlyUrlRaw != null && calendlyUrlRaw.trim() !== '' ? calendlyUrlRaw.trim() : defaultCalendly

  return (
    <Container className="py-10">
      <PageMeta
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
        <LinkButton href={calendlyUrl} variant="primary" target="_blank" rel="noopener noreferrer">
          Open Calendly
        </LinkButton>
        <LinkButton to="/contact" variant="secondary">
          Use contact form instead
        </LinkButton>
      </div>

      {calendlyUrl === defaultCalendly ? (
        <p className="max-w-2xl text-sm text-muted">
          Set <code className="rounded bg-surface px-1 py-0.5 text-xs">VITE_CALENDLY_URL</code> to
          your real Calendly scheduling link. Until then, the button opens calendly.com as a neutral
          placeholder.
        </p>
      ) : null}
    </Container>
  )
}
