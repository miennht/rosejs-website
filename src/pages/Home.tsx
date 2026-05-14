import { useLoaderData } from 'react-router-dom'
import type { HomeLoaderData } from '../app/cmsLoaders.ts'
import { CTASection } from '../components/sections/CTASection.tsx'
import { FeaturedInsights } from '../components/sections/FeaturedInsights.tsx'
import { Hero } from '../components/sections/Hero.tsx'
import { LeadMagnetSection } from '../components/sections/LeadMagnetSection.tsx'
import { MethodologySection } from '../components/sections/MethodologySection.tsx'
import { ServicesOverview } from '../components/sections/ServicesOverview.tsx'
import { TrustSection } from '../components/sections/TrustSection.tsx'
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
  'Healthcare and healthcare insurance domain experience',
  'Enterprise-scale architecture and integration patterns',
  'Security-minded defaults for forms, links, and content boundaries',
  'Pragmatic modernization: reduce risk without boiling the ocean',
]

export function Home() {
  const { servicesOverview, featuredPosts, leadMagnetSection } = useLoaderData() as HomeLoaderData

  return (
    <div>
      <SEO
        path="/"
        title="RoseJS | Healthcare software architecture consulting"
        description="RoseJS helps healthcare insurance and healthcare technology teams modernize platforms, integrate systems, and ship AI-first software with disciplined architecture—from strategy to deployment."
      />
      <Hero
        title="Healthcare software architecture consulting—with AI-first engineering discipline."
        subtitle="RoseJS helps healthcare insurance and healthcare technology teams modernize platforms, integrate systems, and ship securely—from strategy to deployment."
        primaryCta={{ label: 'Schedule a consultation', to: '/schedule', variant: 'primary' }}
        secondaryCta={{
          label: 'Explore services',
          to: '/services',
          variant: 'secondary',
        }}
      />

      <ServicesOverview
        eyebrow="Services"
        title="Where RoseJS helps most"
        description="Focused consulting engagements that connect business outcomes to technical execution."
        services={servicesOverview}
        ctas={[{ label: 'Discuss your roadmap', to: '/contact', variant: 'primary' }]}
      />

      <MethodologySection
        eyebrow="Methodology"
        title="AI-first delivery pillars"
        description="A repeatable operating model designed for high-trust consulting work."
        pillars={methodologyPillars}
      />

      <TrustSection eyebrow="Trust" title="Why teams work with RoseJS" points={trustPoints} />

      <FeaturedInsights
        eyebrow="Insights"
        title="Featured writing"
        description="Long-form guidance for leaders and architects—served from the CMS layer with local fallback until Sanity is connected."
        posts={featuredPosts}
      />

      <LeadMagnetSection
        eyebrow={leadMagnetSection.eyebrow}
        title={leadMagnetSection.title}
        description={leadMagnetSection.description}
        ctas={leadMagnetSection.ctas}
      />

      <CTASection
        eyebrow="Next step"
        title="Ready for a focused architecture conversation?"
        description="Share your constraints, timelines, and risk posture—and we’ll map a pragmatic path forward."
        ctas={[
          { label: 'Schedule a consultation', to: '/schedule', variant: 'primary' },
          { label: 'Contact RoseJS', to: '/contact', variant: 'secondary' },
          {
            label: 'Repository',
            href: 'https://github.com/miennht/rosejs-website',
            variant: 'secondary',
            external: true,
          },
        ]}
      />
    </div>
  )
}
