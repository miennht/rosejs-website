import { Link, useLoaderData } from 'react-router-dom'
import type { ServiceDetailLoaderData } from '../app/cmsLoaders.ts'
import { PageMeta } from '../components/seo/PageMeta.tsx'
import { LinkButton } from '../components/ui/LinkButton.tsx'
import { Container } from '../components/ui/Container.tsx'

export function ServiceDetail() {
  const { service, relatedPosts, relatedStudies } = useLoaderData() as ServiceDetailLoaderData

  if (service == null) {
    return (
      <Container className="py-10">
        <PageMeta
          title="Service not found | RoseJS"
          description="The requested service page does not exist."
        />
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Service</h1>
        <p className="mb-6 text-muted">This service could not be found.</p>
        <Link
          to="/services"
          className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Back to services
        </Link>
      </Container>
    )
  }

  return (
    <Container className="py-10">
      <PageMeta title={service.seo.seoTitle} description={service.seo.seoDescription} />
      <p className="mb-4 text-sm text-muted">
        <Link to="/services" className="underline-offset-4 hover:underline">
          Services
        </Link>
        <span aria-hidden="true" className="px-2">
          /
        </span>
        <span className="text-foreground">{service.title}</span>
      </p>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">
        {service.title}
      </h1>
      <p className="mb-10 max-w-3xl text-lg text-muted">{service.summary}</p>

      <div className="max-w-3xl space-y-10">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Problem</h2>
          <p className="text-sm leading-relaxed text-muted">{service.problemSolved}</p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">How RoseJS helps</h2>
          <p className="text-sm leading-relaxed text-muted">{service.description}</p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Business outcomes</h2>
          <p className="text-sm leading-relaxed text-muted">{service.businessOutcome}</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">Typical deliverables</h2>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted">
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {relatedPosts.length > 0 ? (
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Related insights</h2>
            <ul className="space-y-2">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/insights/${p.slug}`}
                    className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {relatedStudies.length > 0 ? (
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">Related case studies</h2>
            <ul className="space-y-2">
              {relatedStudies.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/case-studies/${c.slug}`}
                    className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <LinkButton to="/schedule" variant="primary">
          Schedule a consultation
        </LinkButton>
        <LinkButton to="/contact" variant="secondary">
          Contact RoseJS
        </LinkButton>
      </div>
    </Container>
  )
}
