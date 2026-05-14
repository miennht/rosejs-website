import { fallbackBlogPosts } from '../content/fallback/blogPosts.ts'
import { fallbackCaseStudies } from '../content/fallback/caseStudies.ts'
import { fallbackLeadMagnets } from '../content/fallback/leadMagnets.ts'
import { fallbackServices } from '../content/fallback/services.ts'
import type { CmsContentSource } from './client.ts'
import type { BlogPost, CaseStudy, LeadMagnet, Service } from './types.ts'

function publishedOnly<T extends { status: string }>(items: T[]): T[] {
  return items.filter((item) => item.status === 'published')
}

export class FallbackCmsContentSource implements CmsContentSource {
  async listServices(): Promise<Service[]> {
    return publishedOnly(fallbackServices)
  }

  async listBlogPosts(): Promise<BlogPost[]> {
    return publishedOnly(fallbackBlogPosts)
  }

  async listCaseStudies(): Promise<CaseStudy[]> {
    return publishedOnly(fallbackCaseStudies)
  }

  async listLeadMagnets(): Promise<LeadMagnet[]> {
    return publishedOnly(fallbackLeadMagnets)
  }
}
