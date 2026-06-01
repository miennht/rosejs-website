import { useLoaderData } from 'react-router-dom'
import type { CaseStudiesLoaderData } from '../app/cmsLoaders.ts'
import { CaseStudyCard } from '../components/cards/index.ts'
import { SEO } from '../components/seo/SEO.tsx'
import { Container } from '../components/ui/Container.tsx'

export function CaseStudies() {
  const { cards } = useLoaderData() as CaseStudiesLoaderData

  return (
    <Container className="py-10">
      <SEO
        path="/case-studies"
        title="Case studies | RoseJS"
        description="Anonymized healthcare and payer case studies from RoseJS—modernization, consolidation, and integration outcomes."
      />
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Case studies</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Anonymized examples of platform modernization, consolidation, and integration work in
        healthcare and payer environments—written to teach patterns and outcomes, not to disclose
        client details.
      </p>

      {cards.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border bg-surface/30 px-4 py-8 text-center text-sm text-muted">
          No case studies are published yet. Check back soon for new examples.
        </p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {cards.map((study) => (
            <li key={study.to} className="min-h-0">
              <CaseStudyCard title={study.title} summary={study.summary} to={study.to} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
