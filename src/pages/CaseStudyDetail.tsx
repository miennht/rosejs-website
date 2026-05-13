import { Link, useLoaderData } from 'react-router-dom'
import type { CaseStudyDetailLoaderData } from '../app/cmsLoaders.ts'
import { Container } from '../components/ui/Container.tsx'

export function CaseStudyDetail() {
  const { study } = useLoaderData() as CaseStudyDetailLoaderData

  if (study == null) {
    return (
      <Container className="py-10">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Case study</h1>
        <p className="mb-6 text-muted">This case study could not be found.</p>
        <Link
          to="/case-studies"
          className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Back to case studies
        </Link>
      </Container>
    )
  }

  const sections = [
    { title: 'Summary', body: study.summary },
    { title: 'Problem', body: study.problem },
    { title: 'Context', body: study.context },
    { title: 'Approach', body: study.approach },
    { title: 'Solution', body: study.solution },
    { title: 'Outcome', body: study.outcome },
    { title: 'Lessons learned', body: study.lessonsLearned },
  ]

  return (
    <Container className="py-10">
      <p className="mb-4 text-sm text-muted">
        <Link to="/case-studies" className="underline-offset-4 hover:underline">
          Case studies
        </Link>
        <span aria-hidden="true" className="px-2">
          /
        </span>
        <span className="text-foreground">{study.title}</span>
      </p>
      <article className="max-w-3xl">
        <header className="mb-10 border-b border-border pb-8">
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">
            {study.title}
          </h1>
          <p className="text-lg text-muted">{study.summary}</p>
        </header>
        <div className="space-y-10">
          {sections
            .filter((s) => s.title !== 'Summary')
            .map((section) => (
              <section key={section.title}>
                <h2 className="mb-2 text-lg font-semibold text-foreground">{section.title}</h2>
                <p className="text-sm leading-relaxed text-muted">{section.body}</p>
              </section>
            ))}
        </div>
      </article>
    </Container>
  )
}
