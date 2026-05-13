import { useLoaderData } from 'react-router-dom'
import type { CaseStudiesLoaderData } from '../app/cmsLoaders.ts'
import { CaseStudyCard } from '../components/cards/index.ts'
import { Container } from '../components/ui/Container.tsx'

export function CaseStudies() {
  const { cards } = useLoaderData() as CaseStudiesLoaderData

  return (
    <Container className="py-10">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Case studies</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Narratives loaded via `getCaseStudies`. Detail pages resolve by slug through the same query
        layer.
      </p>
      <ul className="grid gap-6 md:grid-cols-2">
        {cards.map((study) => (
          <li key={study.to} className="min-h-0">
            <CaseStudyCard title={study.title} summary={study.summary} to={study.to} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
