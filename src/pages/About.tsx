import { SEO } from '../components/seo/SEO.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'

export function About() {
  return (
    <Container className="py-10">
      <SEO
        path="/about"
        title="About RoseJS | Healthcare software architecture consulting"
        description="RoseJS combines enterprise architecture depth with healthcare and payer domain experience—AI-first, security-minded, and pragmatic about modernization."
      />
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">About RoseJS</h1>
      <p className="mb-10 max-w-3xl text-lg text-muted">
        RoseJS is a consulting practice focused on software architecture, legacy modernization, and
        AI-first delivery for healthcare technology and healthcare insurance organizations.
      </p>

      <div className="max-w-3xl space-y-10 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Background</h2>
          <p>
            The practice is led by a software engineer and architect with experience across
            enterprise platforms, healthcare systems, payer and RCM integrations, API and cloud
            modernization, and hybrid delivery models. The emphasis is on decisions you can defend
            under audit—not slide-deck architecture that dissolves at first production incident.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Philosophy</h2>
          <p>
            Architecture should reduce cognitive load for teams: clear boundaries, observable
            behavior, and change paths that respect revenue and patient safety. AI can accelerate
            drafting and analysis, but accountability, review gates, and deployment discipline stay
            human-owned.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Where RoseJS is different</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Healthcare and payer domain language—not generic “digital transformation.”</li>
            <li>
              Integration realism: payloads, retries, clearinghouses, and operational windows.
            </li>
            <li>
              Security defaults: least privilege, PHI-aware flows, and reviewable change records.
            </li>
            <li>
              Pragmatic modernization: strangler paths, measurable milestones, rollback thinking.
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12">
        <LinkButton to="/contact" variant="primary">
          Contact RoseJS
        </LinkButton>
      </div>
    </Container>
  )
}
