# Architecture.md

# RoseJS Website Architecture

## 1. Architecture Overview

### 1.1 Project Name

RoseJS Website — AI-First Healthcare Software Architecture Consulting Website

### 1.2 Architecture Purpose

This document defines the technical architecture for the RoseJS website. It translates the PRD into an implementation-ready architecture that supports the MVP while remaining reusable as a template for future AI-First projects.

The architecture is designed to support:

- Healthcare-focused consulting website
- CMS-managed content
- SEO-driven content publishing
- Free downloadable lead magnet
- Contact form workflow
- Calendly scheduling
- Plausible Analytics tracking
- GitHub-based source control
- CI/CD-first delivery
- Automated quality checks
- Future backend/database expansion without requiring a full rewrite

### 1.3 Architecture Decision Summary

| Area               | Decision                                                          |
| ------------------ | ----------------------------------------------------------------- |
| Frontend Framework | React + Vite                                                      |
| Language           | TypeScript                                                        |
| Styling            | Tailwind CSS                                                      |
| Content Management | CMS                                                               |
| Source Control     | GitHub                                                            |
| CI/CD              | GitHub Actions or hosting-provider CI/CD integrated with GitHub   |
| Backend for MVP    | No custom backend required                                        |
| Database for MVP   | No custom database required                                       |
| Contact Form       | Third-party form provider or serverless function                  |
| Scheduling         | Calendly                                                          |
| Analytics          | Plausible Analytics                                               |
| Hosting            | Railway, Vercel, Netlify, or self-hosted static hosting           |
| SEO                | Sitemap, robots.txt, metadata, structured content, CMS SEO fields |
| Future Expansion   | Backend-ready and database-ready architecture                     |

---

## 2. Architecture Goals

The architecture must satisfy the following goals:

1. Deliver a professional, fast, SEO-ready company website.
2. Support healthcare and healthcare insurance positioning.
3. Keep MVP implementation simple by avoiding unnecessary backend/database complexity.
4. Use CMS-managed content for services, blog posts, case studies, and lead magnets.
5. Support automated testing and CI/CD from the beginning.
6. Make the project reusable as a future AI-First project template.
7. Keep the architecture modular so new pages, services, content types, and backend integrations can be added later.
8. Ensure code review, test suites, and deployment are built into the engineering workflow.

---

## 3. High-Level System Architecture

### 3.1 MVP Architecture

```text
Visitor Browser
      ↓
React + Vite Frontend
      ↓
CMS Content API
      ↓
Static Hosting / Railway / Vercel / Netlify / Self-Hosted
      ↓
GitHub + CI/CD
```

Supporting third-party services:

```text
React + Vite Frontend
      ├── CMS for services, blog posts, case studies, lead magnets
      ├── Calendly for scheduling
      ├── Form Provider or Serverless Function for contact form
      ├── Plausible Analytics for tracking
      ├── Google Search Console for indexing visibility
      └── Static Hosting for production delivery
```

### 3.2 Architecture Boundary

The MVP intentionally does **not** include:

- Custom backend platform
- Custom database
- User authentication
- Client portal
- CRM integration
- Payment processing
- Storage of PHI/PII
- AI chatbot
- Multi-tenant functionality

These may be added in later phases if business requirements justify them.

### 3.3 Future-Ready Architecture

The project should be structured so future services can be added cleanly:

```text
React + Vite Frontend
      ↓
API Layer / Backend Service - Future
      ↓
Database / CRM / AI Services - Future
```

Future backend-ready areas include:

- Client portal
- Secure project intake workflow
- CRM integration
- Private resource library
- AI assistant
- Payment workflow
- Admin dashboard
- Custom lead management

---

## 4. Recommended Technology Stack

### 4.1 Frontend

| Component    | Technology                                 |
| ------------ | ------------------------------------------ |
| Build Tool   | Vite                                       |
| UI Framework | React                                      |
| Language     | TypeScript                                 |
| Styling      | Tailwind CSS                               |
| Routing      | React Router                               |
| Forms        | React Hook Form or native controlled forms |
| Validation   | Zod or lightweight validation utilities    |
| Testing      | Vitest, React Testing Library, Playwright  |

### 4.2 Content Layer

| Component        | Technology                                                     |
| ---------------- | -------------------------------------------------------------- |
| CMS              | Sanity, Strapi, Contentful, or selected CMS                    |
| Content Delivery | CMS API                                                        |
| Content Types    | Services, blog posts, case studies, lead magnets, SEO metadata |
| Local Fallback   | Static placeholder content for development only                |

### 4.3 Third-Party Services

| Need              | Recommended Service                                      |
| ----------------- | -------------------------------------------------------- |
| Scheduling        | Calendly                                                 |
| Analytics         | Plausible Analytics                                      |
| Contact Form      | Formspree, Netlify Forms, Resend, or serverless function |
| Search Visibility | Google Search Console                                    |
| Hosting           | Railway, Vercel, Netlify, or static self-hosting         |

### 4.4 DevOps

| Need                | Tool                                                                 |
| ------------------- | -------------------------------------------------------------------- |
| Source Control      | GitHub                                                               |
| CI/CD               | GitHub Actions or hosting-provider CI/CD                             |
| Pull Request Review | GitHub Pull Requests                                                 |
| Issue Tracking      | GitHub Issues                                                        |
| Secrets             | GitHub Actions Secrets and/or hosting provider environment variables |
| Preview Deployments | Railway, Vercel, or Netlify preview environments where supported     |

---

## 5. Repository Architecture

### 5.1 Recommended Repository Structure

```text
rosejs-website/
  .github/
    workflows/
      ci.yml
      deploy.yml
    pull_request_template.md
    ISSUE_TEMPLATE/
      bug_report.md
      feature_request.md
      task.md

  docs/
    PRD.md
    Architecture.md
    SEO_Strategy.md
    Content_Plan.md
    Component_Map.md
    Traceability_Matrix.md
    Tasks.md
    Testing_Strategy.md
    Deployment_Guide.md
    AI_Workflow_Guide.md
    Code_Review_Checklist.md

  public/
    downloads/
      legacy-application-modernization-checklist.pdf
    robots.txt
    sitemap.xml
    favicon.ico
    og-image.png

  src/
    app/
      App.tsx
      routes.tsx
      providers.tsx

    pages/
      Home.tsx
      About.tsx
      Services.tsx
      Insights.tsx
      BlogArticle.tsx
      CaseStudies.tsx
      CaseStudyDetail.tsx
      Contact.tsx
      Schedule.tsx
      NotFound.tsx

    components/
      layout/
        Header.tsx
        Footer.tsx
        Navigation.tsx
        MobileNavigation.tsx
      sections/
        Hero.tsx
        ServicesOverview.tsx
        MethodologySection.tsx
        CTASection.tsx
        LeadMagnetSection.tsx
        FeaturedInsights.tsx
        TrustSection.tsx
      cards/
        ServiceCard.tsx
        BlogCard.tsx
        CaseStudyCard.tsx
      forms/
        ContactForm.tsx
      seo/
        SEO.tsx
        StructuredData.tsx
      ui/
        Button.tsx
        Container.tsx
        Section.tsx
        Badge.tsx

    cms/
      client.ts
      queries.ts
      types.ts
      mappers.ts
      schemas/
        services.ts
        blogPosts.ts
        caseStudies.ts
        leadMagnets.ts

    content/
      fallback/
        services.ts
        blogPosts.ts
        caseStudies.ts
        leadMagnets.ts

    lib/
      analytics.ts
      calendly.ts
      constants.ts
      env.ts
      form.ts
      seo.ts
      utils.ts

    styles/
      index.css

    tests/
      unit/
      components/
      e2e/

  .env.example
  .gitignore
  index.html
  package.json
  package-lock.json
  tsconfig.json
  vite.config.ts
  vitest.config.ts
  playwright.config.ts
  tailwind.config.ts
  postcss.config.js
  README.md
```

### 5.2 Repository Principles

- Keep business documentation inside `/docs`.
- Keep GitHub automation inside `/.github`.
- Keep reusable UI components inside `/src/components`.
- Keep CMS integration isolated inside `/src/cms`.
- Keep analytics, SEO, environment, and utility logic inside `/src/lib`.
- Keep page-level composition inside `/src/pages`.
- Keep fallback content separate from CMS logic.
- Keep tests close to the domain they validate.

---

## 6. Frontend Architecture

### 6.1 Frontend Responsibilities

The React + Vite frontend is responsible for:

- Rendering all public pages
- Fetching or receiving CMS-managed content
- Displaying services, blog posts, case studies, and lead magnet content
- Rendering SEO metadata
- Providing navigation and responsive layout
- Handling contact form validation
- Sending contact form submissions to selected form provider or serverless endpoint
- Linking or embedding Calendly
- Tracking analytics events through Plausible

### 6.2 Page Architecture

| Page            | Responsibility                                                                 |
| --------------- | ------------------------------------------------------------------------------ |
| Home            | Value proposition, services overview, AI-First methodology, trust section, CTA |
| Services        | List consulting services and explain business value                            |
| About           | Founder/company background, philosophy, credibility                            |
| Insights        | Blog listing page                                                              |
| BlogArticle     | Individual CMS-managed blog article                                            |
| CaseStudies     | Case study listing page                                                        |
| CaseStudyDetail | Individual CMS-managed case study                                              |
| Contact         | Contact form, direct contact options, Calendly CTA                             |
| Schedule        | Calendly embed or scheduling redirect page                                     |
| NotFound        | 404 fallback page                                                              |

### 6.3 Component Architecture

Components should be organized by responsibility:

```text
components/
  layout/      Global site structure
  sections/    Page sections and marketing blocks
  cards/       Reusable content cards
  forms/       Contact and future form components
  seo/         SEO and structured data helpers
  ui/          Small reusable UI primitives
```

### 6.4 Styling Architecture

Tailwind CSS should be used for styling.

Design principles:

- Black-and-white brand palette
- Clean spacing
- High contrast
- Clear hierarchy
- Professional consulting tone
- Responsive first
- Accessible focus states
- Minimal but not empty visual design

Recommended theme direction:

```text
Primary background: white
Primary text: black
Secondary background: near-white or light gray
Borders: neutral gray
CTA buttons: black background with white text
Secondary buttons: white background with black text and border
```

---

## 7. CMS Architecture

### 7.1 CMS Role

The CMS is the content data source for the MVP. It replaces the need for a custom database for marketing content.

The CMS should manage:

- Services
- Blog posts
- Case studies
- Lead magnets
- SEO metadata
- Author information
- Categories and tags
- CTA text where useful

### 7.2 CMS Provider Options

| CMS        | Strength                                                    | Tradeoff                                                     |
| ---------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| Sanity     | Flexible schema, strong developer workflow, polished editor | Hosted service unless self-hosted alternatives are preferred |
| Strapi     | Self-hosted, API-first, full control                        | Requires more infrastructure maintenance                     |
| Contentful | Enterprise-friendly, managed CMS                            | Can become more expensive and less flexible                  |

### 7.3 CMS provider decision (MVP)

**Selected provider:** **Sanity** (TASK-014 / DEC-001). Strapi and Contentful remain valid alternatives; the implementation keeps provider-specific code isolated under `src/cms/` so a future swap does not rewrite marketing pages.

Sanity fits the MVP priorities in `docs/Tasks.md`: structured content for services, insights, case studies, and lead magnets, with a strong editor workflow. When the Studio and Content Lake are connected, configure **read-only** browser access via:

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET` (for example `production`)

**Never** ship write tokens or other secrets in the Vite client bundle. Content mutations belong in Studio, CI, or server-side automation—not in this SPA.

Until Sanity is wired, the site uses **normalized TypeScript types** (`src/cms/types.ts`) and **fallback modules** under `src/content/fallback/` loaded through `src/cms/queries.ts` (TASK-017–018).

Architecture should keep the CMS provider replaceable by isolating CMS logic inside:

```text
src/cms/
  client.ts
  queries.ts
  types.ts
  mappers.ts
```

No page component should directly depend on provider-specific query syntax. Pages should consume normalized content types.

### 7.4 CMS Content Models

#### Service

```text
Service
  id
  title
  slug
  summary
  problemSolved
  description
  businessOutcome
  deliverables
  relatedBlogPosts
  relatedCaseStudies
  seoTitle
  seoDescription
  status
```

#### Blog Post

```text
BlogPost
  id
  title
  slug
  summary
  body
  author
  publishedDate
  updatedDate
  tags
  category
  relatedServices
  seoTitle
  seoDescription
  ogImage
  status
```

#### Case Study

```text
CaseStudy
  id
  title
  slug
  summary
  problem
  context
  approach
  solution
  outcome
  lessonsLearned
  relatedServices
  seoTitle
  seoDescription
  status
```

#### Lead Magnet

```text
LeadMagnet
  id
  title
  slug
  summary
  fileUrl
  ctaText
  relatedServices
  seoTitle
  seoDescription
  status
```

### 7.5 CMS Fallback Strategy

During development, the site may use fallback static content from:

```text
src/content/fallback/
```

Fallback content should only be used for local development and early implementation. Production content should come from the selected CMS.

---

## 8. Routing Architecture

### 8.1 Route Map

```text
/                         Home
/services                 Services
/about                    About
/insights                 Blog listing
/insights/:slug           Blog detail
/case-studies             Case study listing
/case-studies/:slug       Case study detail
/contact                  Contact
/schedule                 Schedule consultation
*                         404 Not Found
```

### 8.2 Routing Rules

- Use React Router for client-side routes.
- Keep route definitions centralized in `src/app/routes.tsx`.
- Use clear and SEO-friendly URLs.
- Keep slugs CMS-managed for blog posts and case studies.
- Include a 404 fallback route.

### 8.3 SEO Note for React + Vite

React + Vite is suitable for a lightweight marketing site, but client-side rendering can be less ideal for SEO than server-rendered frameworks. To reduce SEO risk:

- Ensure all important pages have unique metadata.
- Generate sitemap.xml.
- Use semantic HTML.
- Use structured content from CMS.
- Consider prerendering/static generation later if SEO performance becomes a limitation.

Future options include:

- Vite static prerender plugin
- Hosting-level prerendering
- Migration to SSR/static framework if required later

---

## 9. Form Architecture

### 9.1 MVP Form Decision

The MVP should not create a custom backend just for the contact form.

Contact form submissions should use one of:

- Formspree
- Netlify Forms
- Resend through a serverless function
- Hosting-provider serverless function

### 9.1.1 Selected provider (MVP)

**Formspree** is the chosen contact receiver (aligned with Traceability / DEC-002). The SPA posts `multipart/form-data` to the HTTPS URL in **`VITE_FORM_ENDPOINT`**. That URL is public in the browser bundle by design; do not embed privileged API keys or write tokens in the client.

### 9.1.2 Spam and abuse (MVP)

Expect a hidden honeypot field on the client plus Formspree dashboard spam controls (and escalation paths described in §9.5). Escalate to CAPTCHA only if abuse volume warrants it.

### 9.2 Contact Form Fields

```text
name
email
company
serviceInterest
message
```

### 9.3 Validation Requirements

- Name is required.
- Email is required.
- Email format must be valid.
- Message is required.
- Service interest should be optional or selected from a controlled list.
- Inputs should be sanitized before submission.
- No PHI/PII beyond basic business contact information should be requested.

### 9.4 Form Flow

```text
Visitor fills out Contact form
      ↓
Frontend validation
      ↓
Submit to form provider or serverless function
      ↓
Success or error response
      ↓
Display confirmation or correction message
      ↓
Track successful submission where feasible
```

### 9.5 Spam Protection

Recommended options:

- Honeypot field
- Provider-level spam filtering
- CAPTCHA only if spam becomes a problem
- Rate limiting if serverless function is used

---

## 10. Calendly Architecture

### 10.1 Scheduling Decision

Calendly will be used for scheduling consultations.

### 10.2 Integration Options

| Option        | Description                           | Recommendation            |
| ------------- | ------------------------------------- | ------------------------- |
| External Link | CTA opens Calendly in new tab         | Simple and reliable       |
| Embed         | Calendly embedded on `/schedule` page | Better on-site experience |

### 10.3 Recommended MVP Approach

Use a clear CTA on Contact and Home pages. Create a `/schedule` page that either embeds Calendly or redirects to the external Calendly link.

### 10.4 Calendly Tracking

Track Calendly CTA clicks through Plausible custom events where feasible.

Example event:

```text
Calendly Click
```

---

## 11. Analytics Architecture

### 11.1 Analytics Decision

Plausible Analytics is recommended for MVP because it is lightweight, privacy-friendly, and easy to understand.

### 11.2 Events to Track

| Event               | Trigger                                |
| ------------------- | -------------------------------------- |
| Page View           | User views page                        |
| CTA Click           | User clicks primary CTA                |
| Contact Submit      | User submits contact form successfully |
| Calendly Click      | User clicks Calendly CTA               |
| Lead Magnet Click   | User downloads checklist               |
| External Link Click | User clicks LinkedIn or external site  |
| Blog View           | User opens blog article                |

### 11.3 Analytics Module

Analytics logic should be isolated in:

```text
src/lib/analytics.ts
```

Recommended interface:

```text
trackEvent(eventName, properties?)
```

This allows Plausible to be replaced later without changing every component.

---

## 12. SEO Architecture

### 12.1 SEO Responsibilities

The site must support:

- Unique page titles
- Unique meta descriptions
- Open Graph metadata
- Structured data where useful
- Sitemap.xml
- Robots.txt
- Clean URL slugs
- Internal linking
- CMS-managed SEO fields

### 12.2 SEO Components

```text
src/components/seo/
  SEO.tsx
  StructuredData.tsx
```

### 12.3 SEO Utility Layer

```text
src/lib/seo.ts
```

Responsibilities:

- Build default metadata
- Merge page-specific metadata
- Normalize CMS SEO fields
- Generate structured data payloads where useful

### 12.4 Sitemap Strategy

For MVP, sitemap can be generated during build or manually maintained initially.

Sitemap should include:

- Home
- Services
- About
- Insights
- Blog post URLs
- Case study URLs
- Contact
- Schedule

Future improvement:

- Generate sitemap dynamically from CMS content during CI/build.

### 12.5 Structured Data

Recommended schema types:

- Organization
- ProfessionalService
- BlogPosting
- Article
- BreadcrumbList

---

## 13. Security Architecture

### 13.1 Security Principles

- Do not expose secrets in frontend code.
- Use environment variables for public configuration.
- Use platform secrets for private keys.
- Do not collect PHI/PII through MVP forms.
- Validate form input before submission.
- Use HTTPS in production.
- Keep dependencies updated.
- Run automated checks in CI.

### 13.2 Secrets Management

Use:

```text
.env.local              Local developer environment
.env.example            Safe documented environment template
GitHub Actions Secrets  CI/CD secrets
Hosting Provider Env    Production environment variables
```

Never commit:

- API tokens
- CMS write tokens
- Form provider secrets
- Analytics secrets if applicable
- Deployment tokens

### 13.3 Environment Variables

Example:

```text
VITE_CMS_PROJECT_ID=
VITE_CMS_DATASET=
VITE_SITE_URL=
VITE_PLAUSIBLE_DOMAIN=
VITE_CALENDLY_URL=
VITE_CALENDLY_EMBED=
VITE_FORM_ENDPOINT=
```

Only variables safe for browser exposure should use the `VITE_` prefix.

Private secrets must stay in serverless functions, GitHub Actions secrets, or hosting provider secrets.

---

## 14. Testing Architecture

### 14.1 Testing Goals

Testing must ensure:

- Pages render correctly.
- Navigation works.
- Contact form validation works.
- Calendly CTA works.
- Lead magnet download works.
- Important components behave correctly.
- Build passes before deployment.
- CI/CD protects the main branch.

### 14.2 Test Types

| Test Type           | Tool                  | Scope                                  |
| ------------------- | --------------------- | -------------------------------------- |
| Unit Tests          | Vitest                | Utilities, mappers, analytics wrappers |
| Component Tests     | React Testing Library | UI components and forms                |
| E2E Tests           | Playwright            | Visitor flows                          |
| Accessibility Tests | Playwright + axe-core | Core pages and forms                   |
| Build Test          | Vite build            | Production build validation            |
| Link Check          | Link checker          | Internal/external links                |

### 14.3 Minimum MVP Test Coverage

Required test cases:

- Home page renders.
- Header navigation works.
- Services page renders service cards.
- Blog listing renders posts from mocked CMS data.
- Blog detail page renders a selected article.
- Case study listing renders case studies.
- Contact form validates required fields.
- Contact form validates email format.
- Contact form displays success/error states.
- Calendly CTA is visible and clickable.
- Lead magnet download CTA is visible and clickable.
- 404 page renders for invalid route.

### 14.4 CI Test Commands

Recommended scripts:

```text
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

---

## 15. GitHub and CI/CD Architecture

### 15.1 Source Control

GitHub will be the source control platform.

### 15.2 Branching Strategy

Recommended MVP strategy: GitHub Flow.

```text
main
  ↑
feature/*
fix/*
docs/*
```

Rules:

- `main` represents production-ready code.
- All changes should be made through pull requests.
- Pull requests must pass CI checks before merge.
- Production deployment is triggered from approved merges to `main`.

### 15.3 Pull Request Requirements

Each PR should include:

- Summary of changes
- Related requirement or task ID
- Screenshots for UI changes
- Testing evidence
- Accessibility notes if UI changed
- SEO notes if page metadata changed
- Deployment risk notes if applicable

### 15.4 CI Workflow

Recommended `.github/workflows/ci.yml` responsibilities:

```text
On pull request:
  - Install dependencies
  - Run lint
  - Run typecheck
  - Run unit/component tests
  - Run production build
```

Optional:

```text
  - Run Playwright smoke tests
  - Run accessibility checks
  - Check broken links
```

### 15.5 Deployment Workflow

Deployment can be handled by:

1. Hosting provider GitHub integration, or
2. GitHub Actions deploy workflow.

Recommended MVP approach:

- Use Railway, Vercel, or Netlify GitHub integration for preview and production deployments.
- Use GitHub Actions for quality checks.
- Production deployment should happen only after merge to `main`.

### 15.6 CI/CD Flow

```text
Developer / AI-assisted change
      ↓
Feature branch
      ↓
Pull request
      ↓
CI checks: lint, typecheck, tests, build
      ↓
Preview deployment where supported
      ↓
Human code review
      ↓
Merge to main
      ↓
Production deployment
      ↓
Post-deployment verification
```

---

## 16. Deployment Architecture

### 16.1 Hosting Options

| Hosting Option | Strength                                                                   |
| -------------- | -------------------------------------------------------------------------- |
| Railway        | Flexible hosting with service-based deployments and environment management |
| Vercel         | Strong frontend workflow, preview deployments, GitHub integration          |
| Netlify        | Strong static hosting, forms option, preview deployments                   |
| Self-hosted    | More control, more maintenance                                             |

### 16.2 Recommended MVP Hosting

For fastest MVP delivery, use Railway, Vercel, or Netlify.

Netlify is attractive if using Netlify Forms.

Railway is attractive if you want a unified platform that can host the frontend now and future backend services later.

Vercel is attractive if prioritizing frontend deployment simplicity and preview environments.

### 16.3 Deployment Environments

Recommended environments:

```text
Local Development
Preview Deployment
Production Deployment
```

### 16.4 Production Readiness Checklist

Before production launch:

- Domain connected
- SSL enabled
- Environment variables configured
- CMS read access configured
- Form provider configured
- Calendly URL configured
- Plausible Analytics domain configured
- Sitemap available
- Robots.txt available
- Contact form tested
- Lead magnet download tested
- CI checks passing
- Rollback process documented

---

## 17. AI-First Engineering Workflow

### 17.1 AI-First Pillars

This project follows four AI-First pillars:

1. Skill
2. Code Review
3. Test Suites
4. Deployment

### 17.2 Skill Pillar

AI can assist with:

- Requirements drafting
- Content outlines
- Component planning
- Code scaffolding
- Test generation
- SEO metadata drafts
- Documentation drafts

Human architect owns:

- Final architecture decisions
- Content accuracy
- Security boundaries
- Code acceptance
- Deployment approval

### 17.3 Code Review Pillar

AI-generated code must be reviewed for:

- Architecture alignment
- Maintainability
- Accessibility
- SEO
- Security
- Test coverage
- CMS isolation
- Environment variable handling

### 17.4 Test Suites Pillar

AI may generate tests, but tests must be meaningful and validated.

Minimum test gates:

- Lint
- Typecheck
- Unit/component tests
- Production build
- E2E smoke tests where feasible

### 17.5 Deployment Pillar

AI-generated changes should not be deployed directly.

Deployment must flow through:

```text
Branch → PR → CI → Review → Merge → Deploy
```

---

## 18. Data Architecture

### 18.1 MVP Data Sources

| Data Type            | Source                               |
| -------------------- | ------------------------------------ |
| Service content      | CMS                                  |
| Blog content         | CMS                                  |
| Case studies         | CMS                                  |
| Lead magnet metadata | CMS                                  |
| Lead magnet file     | Public downloads or CMS asset store  |
| Contact submissions  | Form provider or serverless function |
| Scheduling data      | Calendly                             |
| Analytics data       | Plausible Analytics                  |

### 18.2 No Custom Database Decision

The MVP does not require a custom database because persistent content and operational data are handled by specialized services.

| Need                  | MVP Solution                      |
| --------------------- | --------------------------------- |
| Marketing content     | CMS                               |
| Scheduling            | Calendly                          |
| Contact messages      | Form provider/serverless function |
| Analytics             | Plausible                         |
| Downloadable resource | Static file or CMS asset          |

### 18.3 Future Database Triggers

A custom database should only be introduced when one or more of these features are approved:

- User accounts
- Client portal
- Secure document uploads
- Custom lead tracking
- CRM-like workflow
- AI conversation memory
- Private resource library
- Payment records
- Admin dashboard beyond CMS capabilities

---

## 19. Backend Architecture Decision

### 19.1 MVP Decision

No custom backend service platform will be built for MVP.

### 19.2 Why No Backend for MVP

The MVP does not require custom backend business logic. The current needs are satisfied through:

- CMS for content
- Form provider/serverless function for contact submissions
- Calendly for scheduling
- Plausible for analytics
- Static hosting for website delivery

### 19.3 Backend-Ready Design

Even though no backend is required now, the frontend should keep external integrations isolated:

```text
src/lib/form.ts
src/lib/analytics.ts
src/lib/calendly.ts
src/cms/client.ts
```

This allows future backend services to replace third-party integrations without rewriting page components.

---

## 20. Accessibility Architecture

### 20.1 Accessibility Requirements

The site should support:

- Keyboard navigation
- Semantic HTML
- Accessible form labels
- Visible focus states
- Sufficient color contrast
- Descriptive alt text
- Screen-reader-friendly navigation
- Mobile-friendly tap targets

### 20.2 Accessibility Testing

Accessibility checks should be included in:

- Manual review
- Component tests where relevant
- Playwright tests for key pages
- Code review checklist

---

## 21. Performance Architecture

### 21.1 Performance Goals

- Fast initial page load
- Lightweight bundle
- Optimized images
- Minimal third-party scripts
- Lighthouse performance target of 90+ preferred

### 21.2 Performance Strategies

- Use Vite build optimization.
- Lazy-load non-critical components where useful.
- Optimize images and OG assets.
- Avoid unnecessary dependencies.
- Keep analytics script lightweight.
- Use CMS image transformations where available.
- Minimize large animation libraries unless needed.

---

## 22. Observability and Monitoring

### 22.1 MVP Observability

MVP observability includes:

- Plausible Analytics for traffic and events
- Hosting provider deployment logs
- GitHub Actions CI logs
- Form provider submission logs
- Search Console indexing reports

### 22.2 Post-Launch Monitoring

Monitor:

- Page views
- Top landing pages
- Traffic sources
- Contact form submissions
- Calendly clicks
- Lead magnet clicks
- 404 errors if available
- Build/deployment failures
- Search indexing status

---

## 23. Architecture Risks and Mitigations

| Risk                                             | Impact                               | Mitigation                                                               |
| ------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------ |
| React + Vite client-side rendering may limit SEO | Lower organic visibility             | Use strong metadata, sitemap, semantic HTML; consider prerendering later |
| CMS provider lock-in                             | Migration difficulty                 | Isolate CMS logic in `/src/cms` and normalize content types              |
| Overbuilding backend too early                   | Slower launch and higher maintenance | Do not build backend/database for MVP                                    |
| Form spam                                        | Operational noise                    | Use honeypot/provider spam protection/CAPTCHA if needed                  |
| AI-generated code quality issues                 | Maintainability risk                 | Enforce PR review, CI checks, and test coverage                          |
| Secrets exposed in frontend                      | Security risk                        | Use environment variables carefully; do not expose private secrets       |
| CI/CD skipped                                    | Lower quality and harder maintenance | Make CI checks required before merge                                     |
| Content feels generic                            | Weak conversion                      | Use healthcare-specific case studies, service copy, and SEO content      |

---

## 24. Architecture Decision Records

### ADR-001: Use React + Vite

Decision: Use React + Vite for the frontend.

Reason:

- Fast development experience
- Good fit for marketing site MVP
- Simple deployment model
- Easy to reuse as a future template

Tradeoff:

- SEO requires more care than server-rendered frameworks.

Mitigation:

- Use strong metadata, sitemap, semantic HTML, and consider prerendering later if needed.

### ADR-002: Use CMS for Content

Decision: Use CMS-managed content.

Reason:

- Non-code content updates
- Scalable blog/case study publishing
- SEO fields per content type

Tradeoff:

- Requires CMS setup and API integration.

Mitigation:

- Keep CMS logic isolated and provider-replaceable.

### ADR-003: No Custom Backend for MVP

Decision: Do not build a custom backend for MVP.

Reason:

- MVP needs are satisfied by CMS, Calendly, form provider/serverless function, and analytics.
- Avoid unnecessary complexity.

Tradeoff:

- Less custom control over workflows.

Mitigation:

- Keep backend-ready integration boundaries.

### ADR-004: No Custom Database for MVP

Decision: Do not build a custom database for MVP.

Reason:

- CMS handles content persistence.
- Other services handle scheduling, forms, and analytics.

Tradeoff:

- Data is distributed across external tools.

Mitigation:

- Add database later only when features justify it.

### ADR-005: Use GitHub and CI/CD

Decision: Use GitHub for source control and CI/CD checks.

Reason:

- Supports maintainability
- Enables PR workflow
- Makes the project reusable as an AI-First template
- Automates lint, test, and build validation

Tradeoff:

- Requires initial workflow setup.

Mitigation:

- Keep CI/CD workflow simple for MVP.

---

## 25. Architecture Definition of Done

Architecture is ready for implementation when:

1. Technology stack is confirmed.
2. CMS provider is selected or integration interface is defined.
3. Hosting provider is selected or deployment strategy is defined.
4. Form provider or serverless form path is selected.
5. GitHub repository is created.
6. Branching strategy is defined.
7. CI workflow requirements are documented.
8. Folder structure is approved.
9. Route map is approved.
10. CMS content models are approved.
11. Testing strategy is aligned with architecture.
12. Deployment strategy is aligned with CI/CD.
13. Backend/database MVP decision is documented.
14. Future backend expansion boundaries are documented.

---

## 26. Confirmed Architecture Decisions

The following architecture decisions are finalized for MVP implementation:

1. CMS provider: Sanity.
2. Form provider: Formspree.
3. Hosting provider: **Railway** (DEC-003 / TASK-057). Operational steps: **`docs/Deployment_Guide.md`** §7.
4. Calendly integration mode: external scheduling link from CTA locations and `/schedule`.
5. Branching strategy: GitHub Flow.
6. Sitemap generation approach: static/manual initial sitemap, with automation from CMS during build as a future enhancement.

---

## 27. Next Documents

After this Architecture.md is approved, generate or refine these documents:

1. Component_Map.md
2. Traceability_Matrix.md
3. Tasks.md
4. Testing_Strategy.md
5. Deployment_Guide.md
6. AI_Workflow_Guide.md
7. Code_Review_Checklist.md

Tasks.md should be generated from:

- PRD.md
- Architecture.md
- Traceability_Matrix.md

This ensures implementation remains aligned with product requirements, architecture decisions, testing needs, CI/CD workflow, and deployment readiness.
