/**
 * Demo / local fallback lead magnets — replace with CMS or DAM-backed assets.
 */
import type { LeadMagnet } from '../../cms/types.ts'

export const fallbackLeadMagnets: LeadMagnet[] = [
  {
    id: 'lm-checklist',
    title: 'Legacy application modernization checklist',
    slug: 'legacy-application-modernization-checklist',
    summary:
      'A practical checklist teams can use to align stakeholders before a modernization program—scope, risk, and validation gates.',
    fileUrl: '/downloads/legacy-application-modernization-checklist.pdf',
    ctaText: 'Download checklist (preview)',
    relatedServiceSlugs: ['legacy-application-modernization', 'technical-debt-assessment'],
    seo: {
      seoTitle: 'Legacy modernization checklist | RoseJS',
      seoDescription: 'Free checklist for healthcare modernization planning.',
    },
    status: 'published',
  },
]
