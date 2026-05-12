import { Container } from '../components/ui/Container.tsx'
import { CaseStudyCard } from '../components/cards/index.ts'

const studies = [
  {
    title: 'Regional payer: claims modernization',
    summary:
      'Reduced batch contention and clarified service boundaries so new regulatory payloads could ship without weekend war rooms.',
    to: '/case-studies/sample-study',
  },
  {
    title: 'Digital health: platform consolidation',
    summary:
      'Unified authentication and audit trails across acquired products while keeping teams on independent release trains.',
    to: '/case-studies/sample-study',
  },
] as const

export function CaseStudies() {
  return (
    <Container className="py-10">
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Case studies</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Case study cards mirror the fields editors typically manage in the CMS: title, teaser
        summary, and detail route.
      </p>
      <ul className="grid gap-6 md:grid-cols-2">
        {studies.map((study) => (
          <li key={study.title} className="min-h-0">
            <CaseStudyCard title={study.title} summary={study.summary} to={study.to} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
