import { Link, useLoaderData } from 'react-router-dom'
import type { CaseStudyDetailLoaderData } from '../app/cmsLoaders.ts'
import { PageMeta } from '../components/seo/PageMeta.tsx'
import { Container } from '../components/ui/Container.tsx'

export function CaseStudyDetail() {
  const { study, relatedServices } = useLoaderData() as CaseStudyDetailLoaderData

  if (study == null) {
    return (
      <Container className="py-10">
        <PageMeta
          title="Case study not found | RoseJS"
          description="The requested case study does not exist."
        />
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
    { title: 'Problem', body: study.problem },
    { title: 'Context', body: study.context },
    { title: 'Approach', body: study.approach },
    { title: 'Solution', body: study.solution },
    { title: 'Outcome', body: study.outcome },
    { title: 'Lessons learned', body: study.lessonsLearned },
  ]

  return (
    <Container className="py-10">
      <PageMeta title={study.seo.seoTitle} description={study.seo.seoDescription} />
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
        <p className="mb-10 rounded-md border border-border bg-surface/40 px-4 py-3 text-xs text-muted">
          <strong className="font-medium text-foreground">Confidentiality:</strong> These narratives
          are anonymized composites for educational use. They do not name clients, identify
          individuals, or disclose non-public operational data.
        </p>
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-2 text-lg font-semibold text-foreground">{section.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{section.body}</p>
            </section>
          ))}
        </div>

        {relatedServices.length > 0 ? (
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="mb-3 text-lg font-semibold text-foreground">Related services</h2>
            <ul className="space-y-2">
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </Container>
  )
}
