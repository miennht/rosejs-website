import { useLoaderData } from 'react-router-dom'
import type { HomeLoaderData } from '../app/cmsLoaders.ts'
import { CTASection } from '../components/sections/CTASection.tsx'
import { Hero } from '../components/sections/Hero.tsx'
import { MethodologySection } from '../components/sections/MethodologySection.tsx'
import { ServicesOverview } from '../components/sections/ServicesOverview.tsx'
import { TrustSection } from '../components/sections/TrustSection.tsx'
import { brandWithDomainSentence } from '../lib/brand.ts'
import { SEO } from '../components/seo/SEO.tsx'

const methodologyPillars = [
  {
    title: 'Skill',
    body: 'Research, planning, and implementation guided by senior architecture judgment—not generic output.',
  },
  {
    title: 'Code review',
    body: 'Structured review for security, accessibility, SEO, and maintainability before merge.',
  },
  {
    title: 'Test suites',
    body: 'Automated checks that protect core journeys and prevent regressions as the site grows.',
  },
  {
    title: 'Deployment',
    body: 'CI/CD-first releases with clear environments and rollback thinking from day one.',
  },
]

const trustPoints = [
  'Healthcare insurance, RCM, and payer-platform depth',
  'Pragmatic modernization with validation gates and observability',
]

export function Home() {
  const { servicesOverview } = useLoaderData() as HomeLoaderData

  return (
    <div>
      <SEO
        path="/"
        title="RoseJS | Healthcare software architecture consulting"
        description={`${brandWithDomainSentence()} helps healthcare and insurance platforms modernize legacy systems, integrate APIs, and adopt AI-first engineering practices with disciplined delivery.`}
      />
      <Hero
        title="Healthcare platform modernization with AI-first engineering discipline."
        subtitle={`${brandWithDomainSentence()} helps healthcare and insurance platforms modernize legacy systems, integrate APIs, and adopt AI-first engineering practices with disciplined delivery.`}
      />

      <ServicesOverview
        eyebrow="Services"
        title="Where RoseJS helps most"
        description="Focused consulting engagements that connect business outcomes to technical execution."
        services={servicesOverview}
        footnote="RoseJS brings specialized depth in healthcare insurance, RCM workflows, cloud/API integration."
        ctas={[
          { label: 'Schedule a consultation', to: '/schedule', variant: 'primary' },
          { label: 'Discuss your roadmap', to: '/contact', variant: 'secondary' },
        ]}
      />

      <MethodologySection
        eyebrow="Methodology"
        title="AI-first delivery pillars"
        description="A repeatable operating model designed for high-trust consulting work."
        pillars={methodologyPillars}
      />

      <TrustSection compact title="Why teams work with RoseJS" points={trustPoints} />

      <CTASection
        eyebrow="Next step"
        title="Ready for a focused architecture conversation?"
        description="Share your constraints, timelines, and risk posture—and we’ll map a pragmatic path forward."
        ctas={[
          { label: 'Schedule a consultation', to: '/schedule', variant: 'primary' },
          { label: 'Contact RoseJS', to: '/contact', variant: 'secondary' },
        ]}
      />
    </div>
  )
}
