import { ContactForm } from '../components/forms/ContactForm.tsx'
import { SEO } from '../components/seo/SEO.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'
import { trackEvent } from '../lib/analytics.ts'
import { getContactEmail, getLinkedInUrl } from '../lib/site.ts'

export function Contact() {
  const contactEmail = getContactEmail()
  const linkedInUrl = getLinkedInUrl()

  return (
    <Container className="py-10">
      <SEO
        path="/contact"
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
              Prefer a calendar block? Book a 30-minute consultation on our scheduling page.
            </p>
            <LinkButton
              to="/schedule"
              variant="primary"
              onClick={() => trackEvent('calendly_click', { source: 'contact_aside' })}
            >
              Schedule on Calendly
            </LinkButton>
          </div>

          <div className="rounded-xl border border-border bg-surface/40 p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Direct email</h2>
            <p className="mb-3 text-sm text-muted">
              For procurement-friendly threads or attachments, email works well alongside the form.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              {contactEmail}
            </a>
          </div>

          {linkedInUrl != null ? (
            <div className="rounded-xl border border-border bg-surface/40 p-6">
              <h2 className="mb-2 text-lg font-semibold text-foreground">LinkedIn</h2>
              <p className="mb-3 text-sm text-muted">Connect with RoseJS on LinkedIn.</p>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                LinkedIn profile
              </a>
            </div>
          ) : null}
        </aside>
      </div>
    </Container>
  )
}
