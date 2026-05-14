import type { LoaderFunctionArgs } from 'react-router-dom'
import {
  mapBlogPostToInsightTeaser,
  mapCaseStudyToCaseStudyCardProps,
  mapServiceToOverviewTeaser,
  mapServiceToServiceCardProps,
} from '../cms/mappers.ts'
import {
  getBlogPostBySlug,
  getBlogPosts,
  getCaseStudies,
  getCaseStudyBySlug,
  getLeadMagnets,
  getServiceBySlug,
  getServices,
} from '../cms/queries.ts'
import type { InsightTeaser } from '../components/sections/FeaturedInsights.tsx'
import type { SectionCta } from '../components/sections/types.ts'
import type { BlogPost, CaseStudy, Service } from '../cms/types.ts'

export type HomeLoaderData = {
  servicesOverview: Array<{ title: string; description: string }>
  featuredPosts: InsightTeaser[]
  leadMagnetSection: {
    eyebrow: string
    title: string
    description: string
    ctas: SectionCta[]
  }
}

export async function homePageLoader(): Promise<HomeLoaderData> {
  const [services, posts, magnets] = await Promise.all([
    getServices(),
    getBlogPosts({ limit: 4 }),
    getLeadMagnets(),
  ])

  const servicesOverview = services.slice(0, 6).map(mapServiceToOverviewTeaser)
  const featuredPosts = posts.slice(0, 2).map(mapBlogPostToInsightTeaser)

  const lead = magnets[0]
  const leadMagnetSection = lead
    ? {
        eyebrow: 'Lead magnet',
        title: lead.title,
        description: lead.summary,
        ctas: [
          { label: lead.ctaText, href: lead.fileUrl, variant: 'primary' as const },
          { label: 'Talk through your context', to: '/contact', variant: 'secondary' as const },
        ] satisfies SectionCta[],
      }
    : {
        eyebrow: 'Lead magnet',
        title: 'Legacy application modernization checklist',
        description:
          'A practical checklist teams can use to align stakeholders before a modernization program. Download wiring will connect to CMS or static assets later.',
        ctas: [
          {
            label: 'Download checklist',
            href: '/downloads/legacy-application-modernization-checklist.pdf',
            variant: 'primary' as const,
          },
          { label: 'Talk through your context', to: '/contact', variant: 'secondary' as const },
        ] satisfies SectionCta[],
      }

  return { servicesOverview, featuredPosts, leadMagnetSection }
}

export type ServicesLoaderData = {
  cards: Array<ReturnType<typeof mapServiceToServiceCardProps>>
}

export async function servicesPageLoader(): Promise<ServicesLoaderData> {
  const services = await getServices()
  return { cards: services.map(mapServiceToServiceCardProps) }
}

export type ServiceDetailLoaderData = {
  service: Service | null
  relatedPosts: BlogPost[]
  relatedStudies: CaseStudy[]
}

export async function serviceDetailLoader({
  params,
}: LoaderFunctionArgs): Promise<ServiceDetailLoaderData> {
  const slug = params.slug
  if (slug == null || slug === '') {
    return { service: null, relatedPosts: [], relatedStudies: [] }
  }
  const [service, posts, studies] = await Promise.all([
    getServiceBySlug(slug),
    getBlogPosts(),
    getCaseStudies(),
  ])
  if (service == null) {
    return { service: null, relatedPosts: [], relatedStudies: [] }
  }
  const relatedPosts = posts.filter((p) => service.relatedBlogPostSlugs.includes(p.slug))
  const relatedStudies = studies.filter((c) => service.relatedCaseStudySlugs.includes(c.slug))
  return { service, relatedPosts, relatedStudies }
}

export type InsightsLoaderData = {
  posts: BlogPost[]
}

export async function insightsPageLoader(): Promise<InsightsLoaderData> {
  const posts = await getBlogPosts()
  return { posts }
}

export type CaseStudiesLoaderData = {
  cards: Array<ReturnType<typeof mapCaseStudyToCaseStudyCardProps>>
}

export async function caseStudiesPageLoader(): Promise<CaseStudiesLoaderData> {
  const studies = await getCaseStudies()
  return { cards: studies.map(mapCaseStudyToCaseStudyCardProps) }
}

export type BlogArticleLoaderData = {
  post: BlogPost | null
  relatedServices: Array<{ title: string; slug: string }>
}

export async function blogArticleLoader({
  params,
}: LoaderFunctionArgs): Promise<BlogArticleLoaderData> {
  const slug = params.slug
  if (slug == null || slug === '') return { post: null, relatedServices: [] }
  const [post, services] = await Promise.all([getBlogPostBySlug(slug), getServices()])
  if (post == null) return { post: null, relatedServices: [] }
  const relatedServices = services
    .filter((s) => post.relatedServiceSlugs.includes(s.slug))
    .map((s) => ({ title: s.title, slug: s.slug }))
  return { post, relatedServices }
}

export type CaseStudyDetailLoaderData = {
  study: CaseStudy | null
  relatedServices: Array<{ title: string; slug: string }>
}

export async function caseStudyDetailLoader({
  params,
}: LoaderFunctionArgs): Promise<CaseStudyDetailLoaderData> {
  const slug = params.slug
  if (slug == null || slug === '') return { study: null, relatedServices: [] }
  const [study, services] = await Promise.all([getCaseStudyBySlug(slug), getServices()])
  if (study == null) return { study: null, relatedServices: [] }
  const relatedServices = services
    .filter((s) => study.relatedServiceSlugs.includes(s.slug))
    .map((s) => ({ title: s.title, slug: s.slug }))
  return { study, relatedServices }
}
