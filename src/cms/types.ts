/** Normalized CMS shapes — pages depend on these, not on Sanity/GROQ responses. */

export type ContentStatus = 'draft' | 'published' | 'archived'

export type SeoFields = {
  seoTitle: string
  seoDescription: string
  ogImage?: string
}

export type Author = {
  id: string
  name: string
  role?: string
}

export type Category = {
  id: string
  title: string
  slug: string
}

export type Tag = {
  id: string
  title: string
  slug: string
}

export type Service = {
  id: string
  title: string
  slug: string
  summary: string
  problemSolved: string
  description: string
  businessOutcome: string
  deliverables: string[]
  relatedBlogPostSlugs: string[]
  relatedCaseStudySlugs: string[]
  seo: SeoFields
  status: ContentStatus
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  summary: string
  body: string
  author: Author
  publishedDate: string
  updatedDate: string
  tags: Tag[]
  category?: Category
  relatedServiceSlugs: string[]
  seo: SeoFields
  status: ContentStatus
}

export type CaseStudy = {
  id: string
  title: string
  slug: string
  summary: string
  problem: string
  context: string
  approach: string
  solution: string
  outcome: string
  lessonsLearned: string
  relatedServiceSlugs: string[]
  seo: SeoFields
  status: ContentStatus
}

export type LeadMagnet = {
  id: string
  title: string
  slug: string
  summary: string
  fileUrl: string
  ctaText: string
  relatedServiceSlugs: string[]
  seo: SeoFields
  status: ContentStatus
}
