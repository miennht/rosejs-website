import { SEO } from '../components/seo/SEO.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'

const whereRoseJSHelps = [
  'Healthcare and eCommerce platform modernization',
  'Legacy application refactoring and rebuild planning',
  'API, cloud, and integration strategy',
  'Technical debt assessment',
  'AI-first software delivery practices',
]

export function About() {
  return (
    <Container className="py-10">
      <SEO
        path="/about"
        title="About RoseJS | Healthcare software architecture consulting"
        description="RoseJS helps organizations modernize legacy healthcare and eCommerce platforms with practical architecture discipline, integration strategy, and AI-first engineering practices."
      />
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">About RoseJS</h1>
      <div className="mb-10 max-w-3xl space-y-4 text-lg text-muted">
        <p>
          RoseJS was created from years of software development and architecture experience across
          healthcare technology, healthcare insurance, and eCommerce platforms.
        </p>
        <p>
          Most of my career has been spent working with healthcare insurance systems, where software
          has to support complex workflows, integrations, data accuracy, security, and production
          reliability. That experience shaped the way RoseJS approaches modernization: practical,
          disciplined, and focused on systems that teams can actually maintain and scale.
        </p>
        <p>
          RoseJS helps organizations modernize legacy platforms, simplify integrations, reduce
          technical debt, and adopt AI-first engineering practices without sacrificing quality,
          security, or delivery control.
        </p>
      </div>

      <div className="max-w-3xl space-y-10 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Philosophy</h2>
          <p>Modernization should make systems easier to understand, operate, and evolve.</p>
          <p className="mt-3">
            RoseJS uses clear architecture boundaries, phased migration paths, observability, and
            review gates to reduce risk. AI is used to accelerate analysis, documentation,
            development, and testing — while engineering judgment, security, and production
            accountability remain human-owned.
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
