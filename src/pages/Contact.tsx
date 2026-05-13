import { ContactForm } from '../components/forms/ContactForm.tsx'
import { PageMeta } from '../components/seo/PageMeta.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'

export function Contact() {
  return (
    <Container className="py-10">
      <PageMeta
        title="Contact RoseJS | Healthcare software architecture consulting"
        description="Reach RoseJS for architecture, modernization, and AI-first delivery—contact form, email, LinkedIn, or schedule a consultation."
      />
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Contact</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Tell us about your constraints, timelines, and risk posture. We respond to serious
        healthcare and payer inquiries—no spam, no generic outsourcing pitches.
      </p>

      <div className="grid gap-10 lg:grid-cols-2">
        <ContactForm />

        <aside className="space-y-8">
          <div className="rounded-xl border border-border bg-surface/40 p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Schedule</h2>
            <p className="mb-4 text-sm text-muted">
              Prefer a calendar block? Open the scheduling page for a Calendly link (configure
              <code className="mx-1 rounded bg-background px-1 py-0.5 text-xs">
                VITE_CALENDLY_URL
              </code>
              in production).
            </p>
            <LinkButton to="/schedule" variant="primary">
              Go to scheduling
            </LinkButton>
          </div>

          <div className="rounded-xl border border-border bg-surface/40 p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Direct email</h2>
            <p className="mb-3 text-sm text-muted">
              Placeholder inbox until operations publishes the live address. Replace in deployment
              docs and environment branding.
            </p>
            <a
              href="mailto:hello@rosejs.example"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              hello@rosejs.example
            </a>
          </div>

          <div className="rounded-xl border border-border bg-surface/40 p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">LinkedIn</h2>
            <p className="mb-3 text-sm text-muted">
              Placeholder profile URL—swap for the founder or company page during launch prep.
            </p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              LinkedIn (placeholder)
            </a>
          </div>
        </aside>
      </div>
    </Container>
  )
}
