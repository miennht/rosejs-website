/**
 * Demo / local fallback blog posts — replace with CMS-backed content.
 */
import type { BlogPost } from '../../cms/types.ts'

const authorRose = { id: 'author-rose', name: 'RoseJS', role: 'Editorial' }

export const fallbackBlogPosts: BlogPost[] = [
  {
    id: 'post-legacy',
    title: 'How to modernize a legacy healthcare application',
    slug: 'legacy-modernization',
    summary:
      'A practical framing for sequencing refactors, strangler patterns, and validation gates when clinical revenue depends on the system.',
    body: `Legacy systems rarely fail from lack of ambition—they fail from uncontrolled blast radius.

Start by mapping revenue-critical paths and the integrations that touch them. Sequence changes behind observability and rollback, and treat every cutover as a product launch: clear owners, dry runs, and explicit success metrics.

RoseJS uses this pattern with payer and provider teams so modernization becomes predictable instead of heroic.`,
    author: authorRose,
    publishedDate: '2026-04-12',
    updatedDate: '2026-05-01',
    tags: [
      { id: 'tag-modernization', title: 'Modernization', slug: 'modernization' },
      { id: 'tag-architecture', title: 'Architecture', slug: 'architecture' },
    ],
    category: { id: 'cat-engineering', title: 'Engineering', slug: 'engineering' },
    relatedServiceSlugs: ['legacy-application-modernization', 'technical-debt-assessment'],
    seo: {
      seoTitle: 'Modernize legacy healthcare applications | RoseJS',
      seoDescription:
        'Sequencing and risk controls for legacy modernization in regulated environments.',
    },
    status: 'published',
  },
  {
    id: 'post-ai',
    title: 'AI-first software development methodology',
    slug: 'ai-first-methodology',
    summary:
      'Where AI accelerates delivery—and where human review, tests, and deployment gates must stay non-negotiable.',
    body: `AI can compress drafting and analysis, but it cannot own accountability.

Define boundaries: which decisions require human sign-off, which artifacts must be machine-checkable, and how you log provenance for auditors and incident response.

Pair AI assistance with architecture review, automated tests, and staged rollouts so velocity does not trade away patient safety or revenue integrity.`,
    author: authorRose,
    publishedDate: '2026-04-28',
    updatedDate: '2026-05-02',
    tags: [
      { id: 'tag-ai', title: 'AI', slug: 'ai' },
      { id: 'tag-delivery', title: 'Delivery', slug: 'delivery' },
    ],
    category: { id: 'cat-methodology', title: 'Methodology', slug: 'methodology' },
    relatedServiceSlugs: ['ai-first-product-development'],
    seo: {
      seoTitle: 'AI-first methodology for healthcare software | RoseJS',
      seoDescription: 'Practical guardrails for AI-assisted engineering in healthcare.',
    },
    status: 'published',
  },
  {
    id: 'post-integration',
    title: 'Why integration debt outruns feature debt',
    slug: 'integration-debt',
    summary:
      'Signals that your integration layer needs attention before the next vendor swap or payer rule change lands on your roadmap.',
    body: `Features ship with URLs; integrations ship with assumptions.

When payloads drift silently, retries mask partial failures, and nobody owns a contract version, you are paying integration tax on every roadmap item.

Inventory connectors, publish schemas, and instrument cross-system journeys so debt becomes visible—and fundable—before it becomes an outage.`,
    author: authorRose,
    publishedDate: '2026-05-05',
    updatedDate: '2026-05-05',
    tags: [{ id: 'tag-integration', title: 'Integration', slug: 'integration' }],
    category: { id: 'cat-engineering', title: 'Engineering', slug: 'engineering' },
    relatedServiceSlugs: ['cloud-api-integration', 'healthcare-insurance-rcm-consulting'],
    seo: {
      seoTitle: 'Integration debt in healthcare platforms | RoseJS',
      seoDescription: 'How to spot and tame integration debt before it blocks delivery.',
    },
    status: 'published',
  },
  {
    id: 'post-rcm',
    title: 'Healthcare RCM platform modernization guide',
    slug: 'healthcare-rcm-modernization-guide',
    summary:
      'A practical guide for payer and provider teams modernizing revenue cycle platforms without breaking compliance windows.',
    body: `RCM modernization is not a lift-and-shift—it is a choreography problem across claims, enrollment, billing, and partner payloads.

Start with revenue-critical batch paths and the regulatory calendars that constrain them. Document payload contracts, idempotency, and who owns each exception queue before you swap vendors or carve services out of a monolith.

RoseJS helps teams sequence strangler migrations, add contract tests for trading partners, and tie technical milestones to SLA metrics executives already track—so modernization funding survives the next audit cycle.`,
    author: authorRose,
    publishedDate: '2026-05-10',
    updatedDate: '2026-05-10',
    tags: [
      { id: 'tag-rcm', title: 'RCM', slug: 'rcm' },
      { id: 'tag-payer', title: 'Payer', slug: 'payer' },
    ],
    category: { id: 'cat-engineering', title: 'Engineering', slug: 'engineering' },
    relatedServiceSlugs: [
      'healthcare-insurance-rcm-consulting',
      'legacy-application-modernization',
    ],
    seo: {
      seoTitle: 'Healthcare RCM platform modernization | RoseJS',
      seoDescription:
        'Guide to modernizing payer and provider RCM platforms with compliance-aware sequencing.',
    },
    status: 'published',
  },
]
