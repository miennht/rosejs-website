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
    id: 'svc-rcm',
    title: 'Healthcare insurance & RCM platform consulting',
    slug: 'healthcare-insurance-rcm-consulting',
    summary:
      'Navigate claims, enrollment, billing, and partner integrations with domain-aware architecture and vendor coordination.',
    problemSolved:
      'RCM platforms accumulate vendor adapters, idiosyncratic payer rules, and fragile batch windows that resist change.',
    description:
      'We align service boundaries to how money and eligibility actually move, and design APIs and events that survive the next payer mandate.',
    businessOutcome:
      'Cleaner integrations, fewer manual interventions, and faster onboarding of new lines of business.',
    deliverables: [
      'Integration landscape map',
      'Payer and clearinghouse touchpoint matrix',
      'Operational playbooks for batch and real-time flows',
    ],
    relatedBlogPostSlugs: ['integration-debt'],
    relatedCaseStudySlugs: ['payer-claims-modernization'],
    seo: {
      seoTitle: 'Healthcare insurance & RCM consulting | RoseJS',
      seoDescription: 'Architecture consulting for payer and revenue-cycle platforms.',
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
  {
    id: 'svc-debt',
    title: 'Technical debt assessment',
    slug: 'technical-debt-assessment',
    summary:
      'Prioritize remediation where risk, customer impact, and regulatory exposure intersect—not where politics is loudest.',
    problemSolved:
      'Debt backlogs become political instead of evidence-led, starving the changes that actually reduce operational risk.',
    description:
      'We score debt across reliability, security, maintainability, and time-to-market, then tie recommendations to business outcomes.',
    businessOutcome: 'A defensible roadmap engineering and product can fund together.',
    deliverables: [
      'Heat-mapped debt inventory',
      'Cost-of-delay framing for top items',
      '90-day execution slice with owners',
    ],
    relatedBlogPostSlugs: ['legacy-modernization'],
    relatedCaseStudySlugs: [],
    seo: {
      seoTitle: 'Technical debt assessment | RoseJS',
      seoDescription: 'Evidence-led technical debt prioritization for healthcare engineering orgs.',
    },
    status: 'published',
  },
  {
    id: 'svc-secure-data',
    title: 'Secure data and system integration',
    slug: 'secure-data-system-integration',
    summary:
      'Design PHI-aware flows, least-privilege access, and integration patterns that auditors and security partners can follow.',
    problemSolved:
      'Data copies proliferate across vendors, warehouses, and internal tools without consistent controls or lineage.',
    description:
      'RoseJS aligns integration design to minimum-necessary data movement, with clear retention and access narratives.',
    businessOutcome: 'Fewer shadow integrations and clearer answers under security review.',
    deliverables: [
      'Data-flow and trust-boundary diagrams',
      'Control mapping for high-risk interfaces',
      'Hardening checklist for new connectors',
    ],
    relatedBlogPostSlugs: [],
    relatedCaseStudySlugs: ['digital-health-consolidation'],
    seo: {
      seoTitle: 'Secure healthcare data integration | RoseJS',
      seoDescription: 'Architecture for PHI-aware integrations and system boundaries.',
    },
    status: 'published',
  },
]
