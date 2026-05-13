import type { BlogPost, CaseStudy, LeadMagnet, Service } from './types.ts'
import { FallbackCmsContentSource } from './fallbackContentSource.ts'

/** Content access used by `queries.ts` — no GROQ or provider SDKs in page files. */
export type CmsContentSource = {
  listServices(): Promise<Service[]>
  listBlogPosts(): Promise<BlogPost[]>
  listCaseStudies(): Promise<CaseStudy[]>
  listLeadMagnets(): Promise<LeadMagnet[]>
}

/**
 * Factory for the active CMS implementation.
 * When `VITE_SANITY_PROJECT_ID` is set, a Sanity-backed source can be swapped in
 * without changing route loaders or page components.
 */
export function createContentSource(): CmsContentSource {
  return new FallbackCmsContentSource()
}
