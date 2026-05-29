import { SEO } from '../components/seo/SEO.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'

const whereRoseJSHelps = [
  'Modernizing legacy healthcare and eCommerce platforms',
  'Designing cleaner APIs and integration boundaries',
  'Reducing technical debt without stopping delivery',
  'Improving architecture, observability, and release discipline',
  'Applying AI-first engineering safely in production environments',
]

export function About() {
  return (
    <Container className="py-10">
      <SEO
        path="/about"
        title="About RoseJS | Healthcare software architecture consulting"
        description="RoseJS helps healthcare technology and eCommerce teams modernize complex software platforms with architecture discipline and AI-first engineering practices."
      />
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">About RoseJS</h1>
      <div className="mb-10 max-w-3xl space-y-4 text-lg text-muted">
        <p>
          RoseJS helps healthcare technology and eCommerce teams modernize complex software
          platforms with architecture discipline and AI-first engineering practices.
        </p>
        <p>
          The practice focuses on legacy modernization, API and cloud integration, technical debt
          reduction, and secure delivery for systems where reliability, data boundaries, and
          operational trust matter.
        </p>
      </div>

      <div className="max-w-3xl space-y-10 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Background</h2>
          <p>
            RoseJS is led by a software engineer and architect with experience across healthcare
            systems, payer and RCM integrations, eCommerce platforms, APIs, cloud modernization, and
            hybrid delivery teams.
          </p>
          <p className="mt-3">
            The work is grounded in practical architecture: clear boundaries, measurable milestones,
            observable systems, and delivery plans that teams can actually execute.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Philosophy</h2>
          <p>AI can accelerate software delivery, but it does not replace engineering judgment.</p>
          <p className="mt-3">
            RoseJS uses AI-first practices to speed up analysis, documentation, code review,
            testing, and implementation while keeping architecture decisions, security controls, and
            production accountability human-owned.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Where RoseJS helps</h2>
          <ul className="list-inside list-disc space-y-2">
            {whereRoseJSHelps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-12">
        <LinkButton to="/schedule" variant="primary">
          Schedule a consultation
        </LinkButton>
      </div>
    </Container>
  )
}
