/**
 * Demo / local fallback services — healthcare-focused RoseJS messaging.
 * Replace with CMS-backed data in production (see `src/cms/queries.ts`).
 */
import type { Service } from '../../cms/types.ts'

export const fallbackServices: Service[] = [
  {
    id: 'svc-architecture',
    title: 'Software architecture consulting',
    slug: 'software-architecture-consulting',
    summary:
      'Clarify system boundaries, integration patterns, and scalable architecture paths for complex healthcare and payer platforms.',
    problemSolved:
      'Teams ship features faster than the architecture can safely absorb, creating coupling, outages, and audit risk.',
    description:
      'RoseJS leads structured discovery, decision records, and incremental hardening so architecture matches how care and revenue actually flow.',
    businessOutcome:
      'Fewer production incidents, clearer ownership between clinical and finance systems, and roadmaps teams can defend to compliance partners.',
    deliverables: [
      'Current-state and target-state diagrams',
      'Risk-ranked modernization backlog',
      'Architecture review cadence with engineering leadership',
    ],
    relatedBlogPostSlugs: ['legacy-modernization', 'integration-debt'],
    relatedCaseStudySlugs: ['payer-claims-modernization'],
    seo: {
      seoTitle: 'Software architecture consulting | RoseJS',
      seoDescription:
        'Healthcare-focused architecture consulting for platforms, payers, and digital health.',
    },
    status: 'published',
  },
  {
    id: 'svc-legacy',
    title: 'Legacy application modernization',
    slug: 'legacy-application-modernization',
    summary:
      'Reduce modernization risk with strangler patterns, phased migration, observability, and validation gates.',
    problemSolved:
      'Monoliths and batch jobs block new regulations, integrations, and member experiences while attrition erodes institutional knowledge.',
    description:
      'We sequence refactors around revenue-critical paths, add safety nets (tests, telemetry, rollback), and align business and engineering on measurable milestones.',
    businessOutcome:
      'Predictable releases, lower mean-time-to-recover, and defensible documentation for security and payer audits.',
    deliverables: [
      'Strangler-map and cutover plan',
      'Test and release strategy for high-risk domains',
      'Executive-ready risk narrative',
    ],
    relatedBlogPostSlugs: ['legacy-modernization'],
    relatedCaseStudySlugs: ['payer-claims-modernization'],
    seo: {
      seoTitle: 'Legacy modernization consulting | RoseJS',
      seoDescription: 'Practical modernization for healthcare systems without boiling the ocean.',
    },
    status: 'published',
  },
  {
    id: 'svc-ai',
    title: 'AI-first product development',
    slug: 'ai-first-product-development',
    summary:
      'Ship AI-assisted features with human review, data boundaries, and deployment discipline suited to regulated environments.',
    problemSolved:
      'Teams want velocity from AI while compliance and safety teams need traceability and human accountability.',
    description:
      'RoseJS defines where models assist, where humans decide, and how logging and rollback behave when automation misfires.',
    businessOutcome:
      'Faster experimentation without turning models into silent single points of failure.',
    deliverables: [
      'AI boundary and review checklist',
      'Threat-modeling workshop for new AI surfaces',
      'CI/CD hooks for policy checks where applicable',
    ],
    relatedBlogPostSlugs: ['ai-first-methodology'],
    relatedCaseStudySlugs: ['digital-health-consolidation'],
    seo: {
      seoTitle: 'AI-first product development | RoseJS',
      seoDescription: 'Disciplined AI-first delivery for healthcare software teams.',
    },
    status: 'published',
  },
  {
    id: 'svc-cloud',
    title: 'Cloud and API integration',
    slug: 'cloud-api-integration',
    summary:
      'Connect clinical, payer, and operations systems with explicit contracts, versioning, and operational guardrails.',
    problemSolved:
      'Point-to-point integrations hide failures until revenue or care is impacted, and teams fear changing working-but-fragile pipes.',
    description:
      'RoseJS designs event-first boundaries where appropriate, documents failure modes, and sequences cutovers with measurable rollback points.',
    businessOutcome:
      'Safer partner onboarding, clearer ownership of payloads, and reduced weekend-war-room frequency.',
    deliverables: [
      'API and event catalog',
      'Versioning and deprecation policy',
      'Observability plan for cross-system journeys',
    ],
    relatedBlogPostSlugs: ['integration-debt'],
    relatedCaseStudySlugs: ['digital-health-consolidation'],
    seo: {
      seoTitle: 'Cloud & API integration consulting | RoseJS',
      seoDescription: 'Integration architecture for healthcare and payer systems.',
    },
    status: 'published',
  },
]
