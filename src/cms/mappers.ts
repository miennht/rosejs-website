import type { BlogPost, CaseStudy, Service } from './types.ts'
import type { InsightTeaser } from '../components/sections/FeaturedInsights.tsx'

function formatDateShort(iso: string): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

export function formatBlogPostMetaLine(post: BlogPost): string {
  const date = formatDateShort(post.publishedDate)
  if (post.category != null) return `${date} · ${post.category.title}`
  return date
}

export function mapServiceToOverviewTeaser(service: Service): {
  title: string
  description: string
} {
  return { title: service.title, description: service.summary }
}

export function mapBlogPostToInsightTeaser(post: BlogPost): InsightTeaser {
  return {
    title: post.title,
    summary: post.summary,
    to: `/insights/${post.slug}`,
    meta: formatBlogPostMetaLine(post),
  }
}

export function mapServiceToServiceCardProps(service: Service): {
  title: string
  summary: string
  to: string
} {
  return {
    title: service.title,
    summary: service.summary,
    to: `/services/${service.slug}`,
  }
}

export function mapCaseStudyToCaseStudyCardProps(study: CaseStudy): {
  title: string
  summary: string
  to: string
} {
  return {
    title: study.title,
    summary: study.summary,
    to: `/case-studies/${study.slug}`,
  }
}
