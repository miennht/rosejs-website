import { Container } from '../components/ui/Container.tsx'
import { ServiceCard } from '../components/cards/index.ts'

const serviceTeasers: Array<{
  title: string
  summary: string
  to: string
  ctaLabel?: string
}> = [
  {
    title: 'Legacy modernization',
    summary:
      'Incremental migration paths, risk controls, and architecture patterns that keep clinical and payer workflows stable while you modernize.',
    to: '/schedule',
    ctaLabel: 'Schedule consultation',
  },
  {
    title: 'AI-first architecture',
    summary:
      'Design reviews, guardrails, and integration patterns so ML and automation ship safely alongside HIPAA-minded engineering practices.',
    to: '/contact',
  },
  {
    title: 'Platform & integration strategy',
    summary:
      'Event-driven boundaries, API design, and vendor coordination so teams ship faster without painting themselves into operational corners.',
    to: '/schedule',
  },
]

export function Services() {
  return (
    <Container className="py-10">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Services</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Placeholder listings shaped like CMS-backed service cards. Swap `serviceTeasers` for API
        data when the CMS client is wired.
      </p>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceTeasers.map((item) => (
          <li key={item.title} className="min-h-0">
            <ServiceCard
              title={item.title}
              summary={item.summary}
              to={item.to}
              {...(item.ctaLabel != null ? { ctaLabel: item.ctaLabel } : {})}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
