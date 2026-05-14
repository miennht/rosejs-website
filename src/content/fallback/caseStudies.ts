/**
 * Demo / local fallback case studies — replace with CMS-backed content.
 */
import type { CaseStudy } from '../../cms/types.ts'

export const fallbackCaseStudies: CaseStudy[] = [
  {
    id: 'cs-payer',
    title: 'Regional payer: claims modernization',
    slug: 'payer-claims-modernization',
    summary:
      'Reduced batch contention and clarified service boundaries so new regulatory payloads could ship without weekend war rooms.',
    problem:
      'Nightly claims batches missed SLAs whenever new payer rules landed, and on-call teams could not tell whether failures were data, network, or code.',
    context:
      'A regional payer with legacy mainframe adjacency, a growing cloud footprint, and strict audit expectations for every change window.',
    approach:
      'Mapped critical batch paths, introduced idempotent stages with observable checkpoints, and split monolithic jobs into bounded workloads with explicit ownership.',
    solution:
      'Event-first handoffs for exceptions, contract tests for partner payloads, and executive dashboards tied to business SLAs—not only CPU graphs.',
    outcome:
      'Cut critical-path batch duration materially and restored predictable release windows for compliance-driven changes.',
    lessonsLearned:
      'Invest early in payload provenance and ownership boundaries; retries without traceability only defer outages.',
    relatedServiceSlugs: [
      'legacy-application-modernization',
      'healthcare-insurance-rcm-consulting',
      'cloud-api-integration',
    ],
    seo: {
      seoTitle: 'Case study: payer claims modernization | RoseJS',
      seoDescription: 'How a payer team stabilized modernization under regulatory pressure.',
    },
    status: 'published',
  },
  {
    id: 'cs-digital-health',
    title: 'Digital health: platform consolidation',
    slug: 'digital-health-consolidation',
    summary:
      'Unified authentication and audit trails across acquired products while keeping teams on independent release trains.',
    problem:
      'Acquisitions multiplied login experiences and fragmented audit evidence, slowing enterprise deals and security reviews.',
    context:
      'A digital health company integrating multiple product lines while maintaining rapid feature delivery for hospital customers.',
    approach:
      'Defined a thin identity and audit plane, strangler-migrated highest-risk apps first, and aligned data residency narratives for enterprise procurement.',
    solution:
      'Shared session and policy services with clear extension points so product teams kept autonomy without re-implementing security basics.',
    outcome:
      'Shorter security questionnaires, faster enterprise onboarding, and fewer duplicate controls to maintain.',
    lessonsLearned:
      'Platform wins when it removes toil without becoming a bottleneck—govern interfaces, not team cadence.',
    relatedServiceSlugs: ['secure-data-system-integration', 'cloud-api-integration'],
    seo: {
      seoTitle: 'Case study: digital health consolidation | RoseJS',
      seoDescription: 'Identity and audit consolidation after healthcare product acquisitions.',
    },
    status: 'published',
  },
  {
    id: 'cs-sample',
    title: 'Sample case study (slug demo)',
    slug: 'sample-study',
    summary: 'Placeholder study for routing and layout until CMS content is connected.',
    problem: 'Teams need a routed detail page to validate typography and section structure.',
    context: 'RoseJS MVP scaffolding prior to CMS-backed case study library.',
    approach: 'Ship a minimal narrative and replace with CMS-driven fields.',
    solution: 'Use fallback content modules behind `getCaseStudyBySlug`.',
    outcome: 'Engineers can test `/case-studies/:slug` without a live CMS.',
    lessonsLearned: 'Keep demo slugs stable for smoke tests.',
    relatedServiceSlugs: ['software-architecture-consulting'],
    seo: {
      seoTitle: 'Sample case study | RoseJS',
      seoDescription: 'Demo case study for RoseJS website scaffolding.',
    },
    status: 'published',
  },
]
