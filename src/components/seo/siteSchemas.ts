import type { BlogPost, CaseStudy } from '../../cms/types.ts'
import { DOMAIN_LABEL, BRAND_NAME } from '../../lib/brand.ts'
import { DEFAULT_SITE_DESCRIPTION, absoluteUrl, siteUrlOrPlaceholder } from '../../lib/seo.ts'

export function organizationGraphSchema() {
  const url = siteUrlOrPlaceholder()
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${url}#organization`,
        name: BRAND_NAME,
        alternateName: DOMAIN_LABEL,
        url,
        description: DEFAULT_SITE_DESCRIPTION,
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${url}#professional-service`,
        name: 'Healthcare software architecture consulting',
        provider: { '@id': `${url}#organization` },
        areaServed: 'US',
        serviceType: 'Software architecture and modernization consulting',
      },
    ],
  }
}

export function blogPostingSchema(post: BlogPost) {
  const pageUrl = absoluteUrl(`/insights/${post.slug}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    author: {
      '@type': 'Person',
      name: post.author.name,
      ...(post.author.role != null ? { jobTitle: post.author.role } : {}),
    },
    ...(post.tags.length > 0 ? { keywords: post.tags.map((t) => t.title).join(', ') } : {}),
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      alternateName: DOMAIN_LABEL,
      url: siteUrlOrPlaceholder(),
    },
  }
}

export function caseStudyArticleSchema(study: CaseStudy) {
  const pageUrl = absoluteUrl(`/case-studies/${study.slug}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.summary,
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    articleSection: 'Case study',
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      alternateName: DOMAIN_LABEL,
      url: siteUrlOrPlaceholder(),
    },
  }
}
