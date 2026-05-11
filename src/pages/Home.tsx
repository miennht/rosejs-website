import { CTASection } from '../components/sections/CTASection.tsx'
import { FeaturedInsights } from '../components/sections/FeaturedInsights.tsx'
import { Hero } from '../components/sections/Hero.tsx'
import { LeadMagnetSection } from '../components/sections/LeadMagnetSection.tsx'
import { MethodologySection } from '../components/sections/MethodologySection.tsx'
import { ServicesOverview } from '../components/sections/ServicesOverview.tsx'
import { TrustSection } from '../components/sections/TrustSection.tsx'

const services = [
  {
    title: 'Software architecture consulting',
    description:
      'Clarify boundaries, interfaces, and scaling paths for complex healthcare platforms.',
  },
  {
    title: 'Legacy modernization',
    description:
      'Reduce risk while evolving systems toward maintainable, observable architectures.',
  },
  {
    title: 'AI-first delivery',
    description:
      'Ship faster with disciplined review, tests, and deployment gates—not unchecked automation.',
  },
  {
    title: 'Healthcare insurance & RCM',
    description:
      'Navigate claims, enrollment, billing, and integration realities with domain-aware design.',
  },
  {
    title: 'Cloud & API integration',
    description:
      'Connect services securely with clear contracts, versioning, and operational guardrails.',
  },
  {
    title: 'Technical debt assessment',
    description: 'Prioritize remediation so teams invest where risk and customer impact intersect.',
  },
]

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

const featuredPosts = [
  {
    title: 'How to modernize a legacy application',
    summary:
      'A practical framing for sequencing refactors, strangler patterns, and validation gates.',
    to: '/insights/legacy-modernization',
  },
  {
    title: 'AI-first software development methodology',
    summary: 'Where AI accelerates delivery—and where human review must stay non-negotiable.',
    to: '/insights/ai-first-methodology',
  },
]

export function Home() {
  return (
    <div>
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
        services={services}
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
        description="Long-form guidance for leaders and architects—CMS-backed content arrives in later tasks."
        posts={featuredPosts}
      />

      <LeadMagnetSection
        eyebrow="Lead magnet"
        title="Legacy application modernization checklist"
        description="A practical checklist teams can use to align stakeholders before a modernization program. Download wiring will connect to CMS or static assets later."
        ctas={[
          {
            label: 'Download checklist (preview)',
            href: '/downloads/legacy-application-modernization-checklist.pdf',
            variant: 'primary',
          },
          { label: 'Talk through your context', to: '/contact', variant: 'secondary' },
        ]}
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
