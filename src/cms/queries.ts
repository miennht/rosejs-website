import { createContentSource } from './client.ts'
import type { BlogPost, CaseStudy, LeadMagnet, Service } from './types.ts'

let source: ReturnType<typeof createContentSource> | null = null

function getSource() {
  if (source == null) source = createContentSource()
  return source
}

async function safeList<T>(loader: () => Promise<T[]>, label: string): Promise<T[]> {
  try {
    return await loader()
  } catch (error) {
    console.error(`[cms] ${label} failed`, error)
    return []
  }
}

export async function getServices(): Promise<Service[]> {
  return safeList(() => getSource().listServices(), 'getServices')
}

export type GetBlogPostsOptions = {
  limit?: number
}

export async function getBlogPosts(options?: GetBlogPostsOptions): Promise<BlogPost[]> {
  const posts = await safeList(() => getSource().listBlogPosts(), 'getBlogPosts')
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  )
  const limit = options?.limit
  if (limit != null && limit > 0) return sorted.slice(0, limit)
  return sorted
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getSource().listBlogPosts()
    return posts.find((p) => p.slug === slug && p.status === 'published') ?? null
  } catch (error) {
    console.error('[cms] getBlogPostBySlug failed', error)
    return null
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return safeList(() => getSource().listCaseStudies(), 'getCaseStudies')
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const studies = await getSource().listCaseStudies()
    return studies.find((c) => c.slug === slug && c.status === 'published') ?? null
  } catch (error) {
    console.error('[cms] getCaseStudyBySlug failed', error)
    return null
  }
}

export async function getLeadMagnets(): Promise<LeadMagnet[]> {
  return safeList(() => getSource().listLeadMagnets(), 'getLeadMagnets')
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const services = await getSource().listServices()
    return services.find((s) => s.slug === slug && s.status === 'published') ?? null
  } catch (error) {
    console.error('[cms] getServiceBySlug failed', error)
    return null
  }
}
