import { useLoaderData } from 'react-router-dom'
import type { ServicesLoaderData } from '../app/cmsLoaders.ts'
import { CTASection } from '../components/sections/CTASection.tsx'
import { ServiceCard } from '../components/cards/index.ts'
import { SEO } from '../components/seo/SEO.tsx'
import { Container } from '../components/ui/Container.tsx'

export function Services() {
  const { cards } = useLoaderData() as ServicesLoaderData

  return (
    <Container className="py-10">
      <SEO
        path="/services"
        title="Services | RoseJS"
        description="RoseJS services: architecture consulting, legacy modernization, AI-first delivery, payer and RCM consulting, cloud and API integration, technical debt assessment, and secure data integration."
      />
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Services</h1>
      <p className="mb-10 max-w-2xl text-muted">
        Core offerings sourced through the CMS layer (`getServices`). Each card links to a detail
        page with problem framing, outcomes, and related reading.
      </p>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => (
          <li key={item.to} className="min-h-0">
            <ServiceCard title={item.title} summary={item.summary} to={item.to} />
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <CTASection
          eyebrow="Consultation"
          title="Want a focused read on your architecture?"
          description="Walk through constraints, timelines, and risk posture—and leave with a pragmatic next-step map."
          ctas={[
            { label: 'Schedule a consultation', to: '/schedule', variant: 'primary' },
            { label: 'Contact RoseJS', to: '/contact', variant: 'secondary' },
          ]}
        />
      </div>
    </Container>
  )
}
