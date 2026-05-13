import type { BlogPost, CaseStudy, Service } from './types.ts'
import type { InsightTeaser } from '../components/sections/FeaturedInsights.tsx'

export function mapServiceToOverviewTeaser(service: Service): {
  title: string
  description: string
} {
  return { title: service.title, description: service.summary }
}

export function mapBlogPostToInsightTeaser(post: BlogPost): InsightTeaser {
  return { title: post.title, summary: post.summary, to: `/insights/${post.slug}` }
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

export function mapBlogPostToBlogCardProps(post: BlogPost): {
  title: string
  summary: string
  to: string
} {
  return {
    title: post.title,
    summary: post.summary,
    to: `/insights/${post.slug}`,
  }
}
