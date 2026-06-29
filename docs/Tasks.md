# Tasks.md

# RoseJS Website Implementation Tasks

## 1. Purpose

This task list defines the implementation plan for the RoseJS website MVP.

It is generated from:

- `PRD.md`
- `Architecture.md`
- `Traceability_Matrix.md`

The goal is to create an implementation-ready, AI-First task list that supports:

- React + Vite frontend implementation
- CMS-managed content
- Healthcare-focused website positioning
- Calendly scheduling
- Contact form integration
- Plausible Analytics
- SEO readiness
- GitHub source control
- CI/CD-first delivery
- No custom backend/database for MVP
- Backend-ready future expansion
- Reuse as a future AI-First project template
- Post-MVP AI evaluation roadmap (Phases 1–3; see **§29**, PRD **§26**, PRD **§27**)

---

## 2. Task Status Legend

| Status      | Meaning                                     |
| ----------- | ------------------------------------------- |
| Not Started | Task has not begun                          |
| In Progress | Task is actively being worked on            |
| Blocked     | Task is blocked by a decision or dependency |
| Review      | Task is ready for code/content review       |
| Done        | Task is completed and validated             |

---

## 3. Priority Legend

| Priority | Meaning                                                      |
| -------- | ------------------------------------------------------------ |
| P0       | Required for MVP launch                                      |
| P1       | Important for MVP quality; can be deferred only if necessary |
| P2       | Optional enhancement or post-MVP improvement                 |

---

## 4. AI-First Execution Rules

All implementation work should follow the AI-First delivery pillars:

1. **Skill** — Use AI to assist with planning, code generation, documentation, SEO drafts, and test creation.
2. **Code Review** — Do not accept AI-generated code without human review.
3. **Test Suites** — Add tests for core behavior and run automated checks before merge.
4. **Deployment** — Deploy through GitHub-based CI/CD, not direct manual production changes.

### Required Workflow

```text
Requirement → Task → AI-assisted implementation → Human review → Tests → Pull request → CI checks → Merge → Deployment
```

### Required PR Rules

Each pull request should include:

- Summary of changes
- Related task IDs
- Screenshots for UI changes
- Testing evidence
- Accessibility notes if UI changed
- SEO notes if metadata or routing changed
- Deployment risk notes if applicable

---

## 5. Key Architectural Decisions Embedded in Tasks

These decisions must guide all tasks:

| Area           | Decision                                    |
| -------------- | ------------------------------------------- |
| Frontend       | React + Vite                                |
| Language       | TypeScript                                  |
| Styling        | Tailwind CSS                                |
| CMS            | CMS-managed content                         |
| Backend        | No custom backend for MVP                   |
| Database       | No custom database for MVP                  |
| Source Control | GitHub                                      |
| CI/CD          | Required                                    |
| Scheduling     | Calendly                                    |
| Analytics      | Plausible Analytics                         |
| Form Handling  | Third-party provider or serverless function |
| Hosting        | Railway, Vercel, Netlify, or self-hosted    |
| Brand Palette  | Black and white                             |
| Industry Focus | Healthcare / Healthcare Insurance           |

---

## 6. Confirmed Decisions Before Implementation

These implementation decisions are finalized and should be used for all MVP tasks.

| Decision ID | Decision           | Recommendation                      | Required Before             |
| ----------- | ------------------ | ----------------------------------- | --------------------------- |
| DEC-001     | CMS provider       | Sanity                              | CMS implementation          |
| DEC-002     | Form provider      | Formspree                           | Contact form implementation |
| DEC-003     | Hosting provider   | Railway                             | Deployment setup            |
| DEC-004     | Calendly mode      | External link                       | Scheduling implementation   |
| DEC-005     | Branching strategy | GitHub Flow                         | GitHub setup                |
| DEC-006     | Sitemap approach   | Static/manual first; automate later | SEO implementation          |

---

# 7. Implementation Sprint Plan

Use this sprint plan to execute the implementation in a controlled AI-First sequence. Each sprint should produce reviewable work through GitHub pull requests, with CI checks passing before merge.

| Sprint   | Focus                                                              | Key Task Areas                                                                                                                                             |
| -------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sprint 1 | Repository, documentation, React/Vite setup, Tailwind, routing, CI | GitHub repository, branching strategy, documentation structure, React + Vite scaffold, TypeScript, Tailwind, React Router, linting, formatting, initial CI |
| Sprint 2 | Layout, design system, shared components                           | UI primitives, global layout, navigation, footer, marketing sections, cards, responsive black-and-white design system                                      |
| Sprint 3 | CMS setup, content models, fallback content                        | CMS provider decision, CMS client abstraction, content models, fallback content, CMS data-fetching functions                                               |
| Sprint 4 | Core pages: Home, Services, About, Contact                         | Home page, Services page, About page, Contact page, contact form component, initial content review                                                         |
| Sprint 5 | Blog, case studies, lead magnet                                    | Blog listing, blog detail template, case study listing, case study detail template, free downloadable lead magnet                                          |
| Sprint 6 | SEO, analytics, accessibility, tests                               | SEO component, page metadata, sitemap, robots.txt, Plausible Analytics, accessibility baseline, Vitest, React Testing Library, Playwright tests            |
| Sprint 7 | Deployment, production validation, Search Console                  | Hosting provider setup, deployment workflow, environment variables, domain/SSL, production verification, Google Search Console, launch checklist           |

## Sprint Execution Rules

- Each sprint should map back to task IDs in this document.
- Each sprint should end with a pull request review.
- CI checks should pass before merging sprint work.
- Documentation should be updated when implementation decisions change.
- Do not introduce a custom backend or custom database for MVP unless the PRD is formally revised.

---

# 8. Foundation and Repository Setup

## TASK-001: Create GitHub Repository

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-018, NFR-SCM-001, DEP-008  
**Implementation Area:** DevOps, Repository Setup

### Description

Create the GitHub repository for the RoseJS website.

### Acceptance Criteria

- GitHub repository exists.
- Repository name follows project naming convention, recommended: `rosejs-website`.
- Repository contains initial README placeholder.
- Repository visibility is selected intentionally: private during development, public only if desired later.

### Validation

- Manual verification in GitHub.
- Local git repository initialized.
- README placeholder created.
- GitHub repository created: `https://github.com/miennht/rosejs-website`
- Local `main` branch pushed and tracking `origin/main`.

---

## TASK-002: Define Branching Strategy

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-SCM-002, NFR-SCM-003, DEP-012  
**Implementation Area:** DevOps, Documentation

### Description

Define the branching strategy for the project.

### Recommended Decision

Use GitHub Flow:

```text
main
feature/*
fix/*
docs/*
```

### Acceptance Criteria

- `main` is treated as production-ready.
- All changes go through pull requests.
- Branch naming convention is documented.
- Branch protection rules are planned or configured.

### Validation

- Branching strategy documented in README or `Deployment_Guide.md`.
- Branch naming convention documented in `README.md`.
- Branch protection plan documented in `README.md` and `Deployment_Guide.md`.
- Attempted GitHub branch protection configuration; private-repo plan limitation prevents enforcement until repository visibility or plan changes.

---

## TASK-003: Create Initial Repository Structure

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-MAINT-003, PROD-005, MVP-021  
**Implementation Area:** Foundation, Documentation

### Description

Create the base folder structure for source code, documentation, GitHub workflows, public assets, and tests.

### Expected Structure

```text
rosejs-website/
  .github/
  docs/
  public/
  src/
  README.md
```

### Acceptance Criteria

- Required top-level folders exist.
- `docs/` folder exists for PRD, Architecture, Traceability Matrix, Tasks, Testing Strategy, Deployment Guide, and AI workflow docs.
- `.github/` folder exists for templates and workflows.
- `public/` folder exists for static assets and downloads.
- `src/` folder exists for application code.

### Validation

- Manual file structure review.
- Confirmed top-level folders exist: `.github/`, `docs/`, `public/`, and `src/`.
- Confirmed `README.md` exists at repository root.

---

## TASK-004: Add Core Project Documentation Files

**Priority:** P0  
**Status:** Done  
**Source Requirements:** PROD-005, MVP-021, NFR-MAINT-005  
**Implementation Area:** Documentation

### Description

Add the core documentation files that make the project reusable as an AI-First project template.

### Files to Add

```text
docs/PRD.md
docs/Architecture.md
docs/Traceability_Matrix.md
docs/Tasks.md
docs/Testing_Strategy.md
docs/Deployment_Guide.md
docs/AI_Workflow_Guide.md
docs/Code_Review_Checklist.md
docs/SEO_Strategy.md
docs/Content_Plan.md
docs/Component_Map.md
```

### Acceptance Criteria

- Documentation files exist.
- Current PRD, Architecture, Traceability Matrix, and Tasks are stored in `/docs`.
- Placeholder files exist for remaining planned documents.

### Validation

- Manual documentation review.
- Added required `docs/` file set for PRD, Architecture, Traceability Matrix, Tasks, Testing Strategy, and Deployment Guide.
- Added placeholders for `AI_Workflow_Guide.md`, `Code_Review_Checklist.md`, `SEO_Strategy.md`, `Content_Plan.md`, and `Component_Map.md`.
- Confirmed standard documentation paths now exist under `/docs` for AI-First template reuse.

---

# 9. React + Vite Project Setup

## TASK-005: Scaffold React + Vite TypeScript Project

**Priority:** P0  
**Status:** Done  
**Source Requirements:** ADR-001, MVP-001 to MVP-021  
**Implementation Area:** Frontend, Foundation

### Description

Scaffold the frontend application using React + Vite + TypeScript.

### Acceptance Criteria

- React + Vite project is initialized.
- TypeScript is enabled.
- Project starts locally with `npm run dev`.
- Production build runs with `npm run build`.
- Default generated files are cleaned up.

### Validation

```text
npm install
npm run dev
npm run build
```

- React + Vite + TypeScript scaffold generated and merged into repository root.
- `npm run dev` starts successfully (Vite served at localhost:5173 during verification).
- `npm run build` completes successfully and outputs production assets to `dist/`.

---

## TASK-006: Configure TypeScript Strictness

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-MAINT-004, CR-002  
**Implementation Area:** Frontend, Quality

### Description

Configure TypeScript for maintainable production-grade code.

### Acceptance Criteria

- `tsconfig.json` is reviewed and configured.
- Strict mode is enabled if feasible.
- Path aliases are configured if used.
- Type errors fail CI.

### Validation

```text
npm run typecheck
```

- Enabled TypeScript strict mode in app and node TypeScript configs.
- Added additional compiler safety checks (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`).
- Path aliases are not currently used; alias setup deferred until first alias use.
- Added `npm run typecheck` script so CI can enforce type validation.

---

## TASK-007: Configure ESLint and Formatting

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-MAINT-004, NFR-SCM-005  
**Implementation Area:** Quality, DevOps

### Description

Set up linting and formatting rules for consistent code quality.

### Acceptance Criteria

- ESLint is configured.
- Formatting rules are documented.
- `npm run lint` exists.
- Lint failures block CI.

### Validation

```text
npm run lint
```

- Integrated **eslint-config-prettier** so ESLint does not conflict with Prettier.
- Added **Prettier** (`prettier.config.js`, `.prettierignore`) with `npm run format` and `npm run format:check`.
- **`npm run lint`** runs `eslint .` then `prettier --check .`.
- Documented lint/format workflow in `README.md`.
- Added **`.github/workflows/ci.yml`** so lint (and typecheck/build) runs on PRs and pushes to `main`.

---

## TASK-008: Configure Tailwind CSS

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-016, NFR-A11Y-004  
**Implementation Area:** UX/UI, Frontend

### Description

Install and configure Tailwind CSS for the black-and-white RoseJS design system.

### Acceptance Criteria

- Tailwind CSS is installed and configured.
- Global CSS entry is created.
- Base typography, spacing, and layout utilities are available.
- Black-and-white palette direction is documented.

### Validation

- Manual UI verification.
- Build succeeds.
- Installed `tailwindcss` and `@tailwindcss/vite`; registered plugin in `vite.config.ts`.
- `src/index.css` uses `@import "tailwindcss"` and `@theme` tokens for the black-and-white palette; base `body` styles use Tailwind `@apply`.
- `README.md` documents semantic color tokens and usage.
- `App.tsx` uses Tailwind utility classes to verify the pipeline.

---

## TASK-009: Configure React Router

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-001 to MVP-006, Routing Architecture  
**Implementation Area:** Routing, Frontend

### Description

Configure React Router and centralize route definitions.

### Routes

```text
/
/services
/about
/insights
/insights/:slug
/case-studies
/case-studies/:slug
/contact
/schedule
*
```

### Acceptance Criteria

- Routes are defined in `src/app/routes.tsx` or equivalent.
- App renders through route provider.
- 404 route exists.
- Navigation works locally.

### Validation

- Manual route testing.
- E2E navigation smoke test later.
- Added `react-router-dom` and centralized routes in `src/app/routes.tsx` using `createBrowserRouter`.
- `App` renders `RouterProvider` with that router; `RootLayout` provides primary nav + `<Outlet />`.
- Placeholder pages under `src/pages/` for all MVP routes; catch-all `*` maps to `NotFound`.

---

# 10. Design System and Layout Components

## TASK-010: Create Base UI Primitives

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-MAINT-001, MVP-016  
**Implementation Area:** UX/UI, Frontend

### Description

Create reusable UI primitives for consistent layout and styling.

### Components

```text
Button
Container
Section
Badge
LinkButton
```

### Acceptance Criteria

- Components are reusable.
- Components support black-and-white styling.
- Components support accessible focus states.
- Components are typed with TypeScript.

### Validation

- Component tests where useful.
- Manual UI review.
- Added `src/components/ui/` primitives: `Button`, `Container`, `Section`, `Badge`, `LinkButton` (semantic tokens, `focus-visible` outlines, TypeScript props).

---

## TASK-011: Create Global Layout Components

**Priority:** P0  
**Status:** Done  
**Source Requirements:** HOME-008, NFR-A11Y-005, MVP-016  
**Implementation Area:** Layout, Frontend

### Description

Create the global layout components used across all pages.

### Components

```text
Header
Navigation
MobileNavigation
Footer
PageLayout
```

### Acceptance Criteria

- Header renders on all public pages.
- Footer renders on all public pages.
- Navigation includes Home, Services, About, Insights, Case Studies, Contact, Schedule Consultation.
- Mobile navigation works.
- Keyboard navigation works.

### Validation

- Component test for navigation rendering.
- E2E test for navigation.
- Manual mobile review.
- Added `src/components/layout/`: `Header`, `Navigation`, `MobileNavigation`, `Footer`, `PageLayout`; shared `navConfig` with **Schedule Consultation** label.
- `RootLayout` composes header, `PageLayout` + `<Outlet />`, and footer on all routes.
- Mobile menu: toggle, overlay close, **Escape** to dismiss, keyboard-focusable controls (automated nav test in TASK-045 / E2E in TASK-049).

---

## TASK-012: Create Shared Marketing Section Components

**Priority:** P0  
**Status:** Done  
**Source Requirements:** HOME-001 to HOME-009, SERV-003, LEAD-001  
**Implementation Area:** UI, Frontend

### Description

Create reusable page sections for marketing content.

### Components

```text
Hero
ServicesOverview
MethodologySection
TrustSection
FeaturedInsights
CTASection
LeadMagnetSection
```

### Acceptance Criteria

- Components are reusable across pages.
- Components receive content through props.
- CTA components support internal links and external links.
- Components are responsive.

### Validation

- Component tests for key rendering.
- Manual UI review.
- Added `src/components/sections/`: `Hero`, `ServicesOverview`, `MethodologySection`, `TrustSection`, `FeaturedInsights`, `CTASection`, `LeadMagnetSection`, plus `CtaRow` and `SectionCta` types for internal vs external CTAs.
- Composed placeholder **Home** page from these sections; responsive layout and `focus-visible` styles inherited from Tailwind + primitives.

---

## TASK-013: Create Card Components

**Priority:** P0
**Status:** Done
**Source Requirements:** HOME-004, BLOG-001, CASE-001, SERV-001
**Implementation Area:** UI, Frontend, CMS

### Description

Create reusable card components for services, blog posts, and case studies.

### Components

```text
ServiceCard
BlogCard
CaseStudyCard
```

### Acceptance Criteria

- Cards render title, summary, and CTA.
- Cards support CMS-sourced data.
- Cards are responsive.
- Cards use consistent black-and-white styling.

### Validation

- Component tests.
- Manual UI review.
- Added `src/components/cards/`: shared `MarketingCardLayout` (border, hover shadow, responsive stack), **`ServiceCard`**, **`BlogCard`**, **`CaseStudyCard`** — props `title`, `summary`, `to`, optional `ctaLabel` / `className` for CMS-shaped data. **`FeaturedInsights`** uses `BlogCard`. **`Services`**, **`Insights`**, **`CaseStudies`** pages render responsive grids with placeholder teaser arrays documented as CMS stand-ins. Automated component tests not in repo yet (no Vitest/Jest task); manual verification via `npm run dev`.

---

# 11. CMS Integration

## TASK-014: Select CMS Provider

**Priority:** P0  
**Status:** Done  
**Source Requirements:** DEC-001, ADR-002, BLOG-008, CASE-005  
**Implementation Area:** CMS, Architecture

### Description

Choose the CMS provider for RoseJS.

### Options

- Sanity
- Strapi
- Contentful
- Other CMS

### Recommendation

Use **Sanity** if speed, flexibility, and editor experience are highest priority. Use **Strapi** if self-hosting control is highest priority.

### Acceptance Criteria

- CMS provider is selected.
- Decision is documented in Architecture.md or an ADR.
- Required credentials and project setup steps are documented.

### Validation

- Manual decision review.
- **Sanity** selected for MVP; documented in **`docs/Architecture.md` §7.3** with `VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET` and explicit “no write secrets in the browser” guidance.

---

## TASK-015: Create CMS Client Abstraction

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-010, NFR-DB-002, ADR-002  
**Implementation Area:** CMS, Frontend

### Description

Create a CMS integration layer that isolates provider-specific logic.

### Files

```text
src/cms/client.ts
src/cms/queries.ts
src/cms/types.ts
src/cms/mappers.ts
```

### Acceptance Criteria

- CMS client is isolated from page components.
- CMS query logic is centralized.
- Normalized TypeScript types exist.
- Page components consume normalized content, not provider-specific response shapes.

### Validation

- Unit tests for mappers.
- Build succeeds.
- Implemented **`src/cms/client.ts`** (`CmsContentSource`, `createContentSource`), **`fallbackContentSource.ts`** (fallback implementation), **`types.ts`**, **`mappers.ts`**, **`queries.ts`**. Route **loaders** in **`src/app/cmsLoaders.ts`** call queries only—pages do not import fallback files. **Mapper unit tests** still pending until a test runner task lands; `npm run build` passes.

---

## TASK-016: Define CMS Content Models

**Priority:** P0  
**Status:** Done  
**Source Requirements:** BLOG-003, BLOG-004, CASE-002, LEAD-005, NFR-SEO-008  
**Implementation Area:** CMS

### Description

Define CMS content models for services, blog posts, case studies, lead magnets, and SEO metadata.

### Content Models

```text
Service
BlogPost
CaseStudy
LeadMagnet
SEOFields
Author
Category
Tag
```

### Acceptance Criteria

- Service model supports title, slug, summary, description, outcomes, deliverables, related content, SEO fields.
- Blog model supports title, slug, summary, body, author, dates, tags, category, related services, SEO fields.
- Case study model supports problem, context, approach, solution, outcome, lessons, related services, SEO fields.
- Lead magnet model supports title, slug, summary, file URL, CTA text, related services, SEO fields.
- SEO fields are reusable.

### Validation

- CMS schema review.
- Manual content entry test.
- **`src/cms/types.ts`** defines **`SeoFields`**, **`Author`**, **`Category`**, **`Tag`**, **`Service`**, **`BlogPost`**, **`CaseStudy`**, **`LeadMagnet`** aligned with Architecture §7.4. Related links expressed as **slug arrays** for services/case studies/blogs until relational CMS IDs exist.

---

## TASK-017: Add Local Fallback Content

**Priority:** P1  
**Status:** Done  
**Source Requirements:** CMS Architecture, NFR-MAINT-002  
**Implementation Area:** CMS, Content

### Description

Add fallback content for local development and early UI scaffolding.

### Files

```text
src/content/fallback/services.ts
src/content/fallback/blogPosts.ts
src/content/fallback/caseStudies.ts
src/content/fallback/leadMagnets.ts
```

### Acceptance Criteria

- Fallback content exists for all core content types.
- Fallback content uses healthcare-focused RoseJS messaging.
- Fallback content is clearly marked for development/demo use.

### Validation

- Local render review.
- Files created with top-of-file comments and **seven** demo services, **four** posts, **three** case studies, **one** lead magnet; messaging is healthcare / payer / digital-health oriented.

---

## TASK-018: Implement CMS Data Fetching Functions

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-010, BLOG-008, CASE-005, NFR-DB-002  
**Implementation Area:** CMS, Frontend

### Description

Implement functions to fetch CMS content.

### Functions

```text
getServices()
getBlogPosts()
getBlogPostBySlug(slug)
getCaseStudies()
getCaseStudyBySlug(slug)
getLeadMagnets()
```

### Acceptance Criteria

- Functions return normalized TypeScript objects.
- Functions handle empty or missing CMS data gracefully.
- Errors are handled without breaking the entire site.

### Validation

- Unit tests for mappers.
- Manual CMS fetch test.
- **`src/cms/queries.ts`** implements the listed getters plus **`getServiceBySlug`** for service detail pages. **Try/catch** with `console.error` and safe fallbacks (`[]` / `null`). **`npm run build`** passes. **Unit tests** deferred with TASK-015 mapper tests until Vitest (or similar) is added.

---

# 12. Page Implementation

## TASK-019: Implement Home Page

**Priority:** P0  
**Status:** Done  
**Source Requirements:** HOME-001 to HOME-009, MVP-001  
**Implementation Area:** Pages, UI, Content

### Description

Implement the RoseJS Home page.

### Required Sections

- Hero section
- Primary CTA: Schedule a Consultation
- Secondary CTA: Explore Services
- Services overview
- Trust/credibility section
- AI-First methodology summary
- Featured insights
- Free lead magnet CTA
- Final CTA

### Acceptance Criteria

- Visitor understands RoseJS value within 5 seconds.
- Healthcare/healthcare insurance positioning is clear.
- CTAs navigate correctly.
- Page is responsive.
- Page uses black-and-white design.
- SEO metadata exists.

### Validation

- Component tests.
- E2E smoke test.
- Manual UX review.
- SEO review.
- **Implemented:** Hero (primary → `/schedule`, secondary → `/services`), services overview + methodology + trust + featured insights + lead magnet + final CTA; CMS loaders for overview/insights/magnet; **`SEO`** on home for title/description. Automated component/E2E tests still pending.

---

## TASK-020: Implement Services Page

**Priority:** P0  
**Status:** Done  
**Source Requirements:** SERV-001 to SERV-005, MVP-002  
**Implementation Area:** Pages, CMS, SEO

### Description

Implement the Services page using CMS-managed service content.

### Core Services

- Software Architecture Consulting
- Legacy Application Modernization
- AI-First Product Development
- Healthcare Insurance / RCM Platform Consulting
- Cloud and API Integration
- Technical Debt Assessment
- Secure Data and System Integration

### Acceptance Criteria

- All core services display.
- Each service explains problem solved, business value, and example outcomes.
- Consultation CTA is present.
- Related content links are supported where available.
- SEO metadata exists.

### Validation

- Component tests.
- E2E navigation test.
- SEO review.
- Manual content review.
- **Implemented:** All seven core services from fallback/CMS; cards link to **`/services/:slug`** detail (problem, outcomes, deliverables, related insights/case studies). Bottom **`CTASection`** consultation CTA. **`SEO`**.

---

## TASK-021: Implement About Page

**Priority:** P0  
**Status:** Done  
**Source Requirements:** ABOUT-001 to ABOUT-005, MVP-003  
**Implementation Area:** Pages, Content, SEO

### Description

Implement the About page to establish credibility and explain RoseJS philosophy.

### Acceptance Criteria

- Founder/company background is presented.
- Architecture and engineering philosophy is clear.
- Healthcare, enterprise, and AI-First experience are highlighted.
- Differentiators are clearly displayed.
- Contact CTA is present.
- SEO metadata exists.

### Validation

- Manual content review.
- E2E navigation test.
- SEO review.
- **Implemented:** About page with background, philosophy, differentiators, contact CTA; **`SEO`**.

---

## TASK-022: Implement Blog / Insights Listing Page

**Priority:** P0  
**Status:** Done  
**Source Requirements:** BLOG-001, BLOG-003, BLOG-006, BLOG-007, MVP-004  
**Implementation Area:** Pages, CMS, SEO

### Description

Implement the Insights listing page using CMS-managed blog posts.

### Acceptance Criteria

- Blog posts display from CMS or fallback content.
- Each card shows title, date, summary, tags/category where available.
- Featured posts are supported if configured.
- Empty state is handled.
- SEO metadata exists.

### Validation

- Component tests.
- E2E page render test.
- SEO review.
- **Implemented:** `getBlogPosts` via loader; **`BlogCard`** shows date·category line + tag chips; empty state; home featured posts carry **`meta`** line. **`SEO`**.

---

## TASK-023: Implement Blog Detail Page

**Priority:** P0  
**Status:** Done  
**Source Requirements:** BLOG-002 to BLOG-005, MVP-005  
**Implementation Area:** Pages, CMS, SEO

### Description

Implement the individual blog article template.

### Acceptance Criteria

- Page loads article by slug.
- Article displays title, summary, author, date, body, tags, and related services where available.
- Article supports SEO metadata from CMS.
- Invalid slug shows 404 or graceful error state.
- Internal links to services are supported.

### Validation

- Component tests with mocked CMS data.
- E2E test for article route.
- SEO review.
- **Implemented:** Slug loader; title, summary, author, dates, tags, body; **`SEO`** from `post.seo`; invalid slug graceful message; **related services** → `/services/:slug`.

---

## TASK-024: Implement Case Studies Listing Page

**Priority:** P0  
**Status:** Done  
**Source Requirements:** CASE-001, CASE-005, MVP-009  
**Implementation Area:** Pages, CMS, Content

### Description

Implement the case studies listing page.

### Acceptance Criteria

- At least one anonymized healthcare case study displays.
- Case study cards show title, summary, and CTA.
- Empty state is handled.
- SEO metadata exists.

### Validation

- Component tests.
- E2E page render test.
- Manual content review.
- **Implemented:** Anonymized fallback studies; cards + empty state; **`SEO`**.

---

## TASK-025: Implement Case Study Detail Page

**Priority:** P0  
**Status:** Done  
**Source Requirements:** CASE-001 to CASE-005  
**Implementation Area:** Pages, CMS, SEO

### Description

Implement the individual case study detail template.

### Acceptance Criteria

- Page loads case study by slug.
- Case study includes problem, context, approach, solution, outcome, and lessons learned.
- Confidential client information is not exposed.
- Related services are linked where available.
- SEO metadata exists.

### Validation

- Component tests.
- E2E route test.
- Manual confidentiality review.
- SEO review.
- **Implemented:** Full narrative sections; **confidentiality callout**; related **service** links; **`SEO`** from `study.seo`; invalid slug handled gracefully.

---

## TASK-026: Implement Contact Page

**Priority:** P0  
**Status:** Done  
**Source Requirements:** CONT-001 to CONT-009, MVP-006, MVP-015  
**Implementation Area:** Pages, Forms, Scheduling

### Description

Implement the Contact page with contact form, direct email placeholder, LinkedIn placeholder, and Calendly CTA.

### Acceptance Criteria

- Contact form is visible.
- Direct contact options are visible.
- Calendly CTA is visible.
- Form fields match PRD.
- Form validation works.
- Page is responsive.
- SEO metadata exists.

### Validation

- Component tests.
- E2E contact page test.
- Manual review.
- **Implemented:** **`ContactForm`** (name, email, company, service interest, message, honeypot, client validation); Formspree-ready **`VITE_FORM_ENDPOINT`** POST; demo success without endpoint; email + LinkedIn placeholders; schedule aside; **`SEO`**.

---

## TASK-027: Implement Schedule Page

**Priority:** P1  
**Status:** Done  
**Source Requirements:** CAL-001 to CAL-004, MVP-007  
**Implementation Area:** Scheduling, Pages

### Description

Implement a `/schedule` page for Calendly scheduling.

### Acceptance Criteria

- Page either embeds Calendly or clearly links to Calendly externally.
- Calendly CTA is clear.
- Page does not block the contact form option.
- Calendly click can be tracked where feasible.

### Validation

- E2E click test.
- Manual scheduling flow test.
- **Implemented:** Primary **Open Calendly** external link using **`VITE_CALENDLY_URL`** or neutral fallback; secondary link to **`/contact`**; **`SEO`**. Plausible “track click” deferred.

---

## TASK-028: Implement 404 Not Found Page

**Priority:** P1  
**Status:** Done  
**Source Requirements:** Routing Architecture  
**Implementation Area:** Routing, UX/UI

### Description

Create a branded 404 page for invalid routes.

### Acceptance Criteria

- 404 page renders for invalid route.
- Page includes link back to Home.
- Page follows black-and-white design system.

### Validation

- E2E invalid route test.
- **Implemented:** Branded **`NotFound`** with home/services/contact **`LinkButton`**s, **`SEO`**, design-system typography.

---

# 13. Contact Form and Scheduling

## TASK-029: Select Contact Form Provider

**Priority:** P0  
**Status:** Done  
**Source Requirements:** DEC-002, CONT-009, NFR-API-003  
**Implementation Area:** Forms, Architecture

### Description

Choose the contact form handling approach.

### Options

- Formspree
- Netlify Forms
- Resend
- Serverless function

### Recommendation

Use the simplest provider that fits the hosting choice. If hosting on Netlify, Netlify Forms is simplest. If more control is needed, use Resend with a serverless function.

### Acceptance Criteria

- Form handling approach is selected.
- Required environment variables are documented.
- Security and spam protection approach is documented.

### Validation

- Manual decision review.

---

## TASK-030: Implement Contact Form Component

**Priority:** P0  
**Status:** Done  
**Source Requirements:** CONT-001 to CONT-005, NFR-SEC-001, NFR-A11Y-003  
**Implementation Area:** Forms, Frontend

### Description

Build the reusable ContactForm component.

### Fields

```text
name
email
company
serviceInterest
message
```

### Acceptance Criteria

- Required fields are validated.
- Email format is validated.
- Accessible labels are present.
- Success state is displayed.
- Error state is displayed.
- Form is keyboard accessible.

### Validation

- Component tests.
- E2E form validation test.
- Accessibility review.

---

## TASK-031: Integrate Contact Form Provider

**Priority:** P0  
**Status:** Done  
**Source Requirements:** CONT-009, NFR-API-003, NFR-SEC-006  
**Implementation Area:** Forms, Security, DevOps

### Description

Connect the contact form to the selected third-party provider or serverless function.

### Acceptance Criteria

- Form submits successfully in test environment.
- Form handles provider errors gracefully.
- Secrets are not exposed in frontend code.
- No custom backend platform is created for MVP.

### Validation

- Manual submission test.
- E2E happy path test.
- Security review.

---

## TASK-032: Add Basic Spam Protection

**Priority:** P1  
**Status:** Done  
**Source Requirements:** NFR-SEC-004  
**Implementation Area:** Forms, Security

### Description

Add lightweight spam protection for the contact form.

### Acceptance Criteria

- Honeypot field or provider-level spam protection is implemented.
- CAPTCHA is avoided unless necessary.
- Spam protection does not hurt user experience.

### Validation

- Manual form test.

---

## TASK-033: Implement Calendly Integration

**Priority:** P0  
**Status:** Done  
**Source Requirements:** CAL-001 to CAL-004, MVP-007  
**Implementation Area:** Scheduling, Frontend, Analytics

### Description

Add Calendly scheduling CTA and optional embed.

### Acceptance Criteria

- Calendly URL is configured through environment variable or constant.
- CTA appears on Contact page.
- CTA appears in appropriate CTA sections.
- `/schedule` page supports selected integration mode.
- Click tracking is supported where feasible.

### Validation

- E2E click test.
- Manual Calendly flow test.

---

# 14. Lead Magnet Implementation

## TASK-034: Create Free Downloadable Lead Magnet Asset

**Priority:** P1  
**Status:** Done  
**Source Requirements:** LEAD-002, LEAD-003, MVP-008  
**Implementation Area:** Content, Public Assets

### Description

Create or add the free downloadable lead magnet PDF.

### Recommended Asset

```text
Legacy Application Modernization Checklist
```

### Acceptance Criteria

- PDF exists in `public/downloads/` or CMS asset store.
- Download does not require email submission.
- File name is readable and professional.

### Validation

- Manual download test.

---

## TASK-035: Implement Lead Magnet Section

**Priority:** P1  
**Status:** Done  
**Source Requirements:** LEAD-001 to LEAD-005, HOME-009  
**Implementation Area:** UI, Content, CMS

### Description

Implement the lead magnet CTA section.

### Acceptance Criteria

- Lead magnet CTA appears on Home page or relevant pages.
- CTA clearly explains the value of the download.
- Download link works.
- Lead magnet can be CMS-managed or CMS-referenced.

### Validation

- Component test.
- E2E download click test.
- Manual content review.

---

# 15. SEO Implementation

## TASK-036: Implement SEO Component

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-SEO-001, NFR-SEO-006, BLOG-004  
**Implementation Area:** SEO, Frontend

### Description

Create reusable SEO components/utilities for page metadata.

### Files

```text
src/components/seo/SEO.tsx
src/components/seo/StructuredData.tsx
src/lib/seo.ts
```

### Acceptance Criteria

- Each page can define title and meta description.
- CMS pages can use CMS-managed SEO fields.
- Open Graph metadata is supported.
- Default metadata fallback exists.

### Validation

- Manual page source/head review.
- SEO review.

---

## TASK-037: Add Page-Level SEO Metadata

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-SEO-001, MVP-011  
**Implementation Area:** SEO, Pages

### Description

Add SEO metadata to all core pages.

### Pages

```text
Home
Services
About
Insights
BlogArticle
CaseStudies
CaseStudyDetail
Contact
Schedule
```

### Acceptance Criteria

- Each page has unique title.
- Each page has unique meta description.
- Metadata reflects healthcare/healthcare insurance positioning.

### Validation

- SEO review.
- Manual metadata inspection.

---

## TASK-038: Add robots.txt

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-013, NFR-SEO-003  
**Implementation Area:** SEO, Public Assets

### Description

Add robots.txt to the public folder.

### Acceptance Criteria

- `robots.txt` exists.
- Production site is crawlable.
- Sitemap reference is included when domain is known.

### Validation

- Manual file check.

---

## TASK-039: Add sitemap.xml

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-012, NFR-SEO-002, DEC-006  
**Implementation Area:** SEO, DevOps

### Description

Add initial sitemap.xml.

### Acceptance Criteria

- Sitemap includes all core static routes.
- Sitemap includes CMS routes if available or documents future CMS generation.
- Domain placeholder is replaced before production launch.

### Validation

- Manual sitemap review.
- Search Console submission later.

---

## TASK-040: Add Structured Data Support

**Priority:** P1  
**Status:** Done  
**Source Requirements:** NFR-SEO-007  
**Implementation Area:** SEO, Frontend

### Description

Add structured data support where useful.

### Recommended Schema

- Organization
- ProfessionalService
- BlogPosting
- Article
- BreadcrumbList

### Acceptance Criteria

- Organization or ProfessionalService schema exists.
- Blog articles can render BlogPosting/Article schema.
- Structured data does not contain incorrect claims.

### Validation

- SEO structured data review.

---

# 16. Analytics Implementation

## TASK-041: Configure Plausible Analytics

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-014, DEP-006, Analytics Requirements  
**Implementation Area:** Analytics, Frontend

### Description

Add Plausible Analytics to the website.

### Acceptance Criteria

- Plausible script is configured.
- Domain is configured through environment variable or constant.
- Analytics does not block rendering.
- Analytics is verified after deployment.

### Validation

- Manual verification.
- Production verification after deployment.

---

## TASK-042: Create Analytics Utility Wrapper

**Priority:** P1  
**Status:** Done  
**Source Requirements:** CAL-004, LEAD-004, Analytics Architecture  
**Implementation Area:** Analytics, Frontend

### Description

Create an analytics wrapper so Plausible can be replaced later without changing all components.

### File

```text
src/lib/analytics.ts
```

### Acceptance Criteria

- `trackEvent(eventName, properties?)` function exists.
- Calendly clicks can be tracked.
- Lead magnet clicks can be tracked.
- CTA clicks can be tracked where feasible.

### Validation

- Unit test optional.
- Manual analytics event verification.

---

# 17. Accessibility Implementation

## TASK-043: Add Accessibility Baseline Checks

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-A11Y-001 to NFR-A11Y-005  
**Implementation Area:** Accessibility, UX/UI

### Description

Review and enforce baseline accessibility expectations.

### Acceptance Criteria

- Navigation is keyboard accessible.
- Forms have labels.
- Focus states are visible.
- Color contrast is readable.
- Images have alt text where appropriate.

### Validation

- Manual accessibility review.
- Playwright/axe checks later if configured.

---

## TASK-044: Add Accessible Mobile Navigation

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-A11Y-005, MVP-016  
**Implementation Area:** Navigation, Accessibility

### Description

Ensure mobile navigation is accessible and keyboard-friendly.

### Acceptance Criteria

- Menu button has accessible label.
- Menu opens and closes correctly.
- Focus behavior is usable.
- Links are reachable by keyboard.
- Navigation works on mobile sizes.

### Validation

- Component test.
- E2E test.
- Manual keyboard review.

---

# 18. Testing Setup and Test Suites

## TASK-045: Configure Vitest

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-017, Testing Architecture  
**Implementation Area:** Testing

### Description

Set up Vitest for unit and component testing.

### Acceptance Criteria

- Vitest is installed and configured.
- `npm run test` exists.
- Sample test passes.
- Tests run in CI.

### Validation

```text
npm run test
```

---

## TASK-046: Configure React Testing Library

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-017, Testing Coverage Matrix  
**Implementation Area:** Testing

### Description

Configure React Testing Library for component tests.

### Acceptance Criteria

- Testing utilities are available.
- Component rendering tests can be written.
- Setup file includes required test environment configuration.

### Validation

- Sample component test passes.

---

## TASK-047: Configure Playwright

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-017, Testing Architecture  
**Implementation Area:** Testing, E2E

### Description

Set up Playwright for end-to-end testing.

### Acceptance Criteria

- Playwright is installed and configured.
- `npm run test:e2e` exists.
- Browser test can run locally.
- E2E tests can run in CI or be documented as optional in early MVP.

### Validation

```text
npm run test:e2e
```

---

## TASK-048: Add Core Component Tests

**Priority:** P0  
**Status:** Done  
**Source Requirements:** Testing Coverage Matrix  
**Implementation Area:** Testing, Frontend

### Description

Add component tests for core reusable components.

### Components to Test

- Header
- Navigation
- Button
- ServiceCard
- BlogCard
- CaseStudyCard
- ContactForm
- LeadMagnetSection

### Acceptance Criteria

- Core components have meaningful render tests.
- ContactForm validation is tested.
- Tests avoid shallow or meaningless assertions.

### Validation

```text
npm run test
```

---

## TASK-049: Add E2E Navigation Tests

**Priority:** P0  
**Status:** Done  
**Source Requirements:** Critical Flows, MVP-017  
**Implementation Area:** Testing, E2E

### Description

Add E2E tests for primary navigation flows.

### Test Flows

- Home loads.
- User navigates to Services.
- User navigates to About.
- User navigates to Insights.
- User navigates to Contact.
- Invalid route shows 404.

### Acceptance Criteria

- E2E tests validate key routes.
- Tests run locally.
- Tests are included in CI if feasible.

### Validation

```text
npm run test:e2e
```

---

## TASK-050: Add E2E Contact Form Tests

**Priority:** P0  
**Status:** Done  
**Source Requirements:** CONT-003, CONT-004, CONT-005, MVP-015  
**Implementation Area:** Testing, Forms

### Description

Add E2E tests for contact form behavior.

### Test Flows

- Required fields show errors.
- Invalid email shows error.
- Valid submission shows success state using mock or test endpoint.

### Acceptance Criteria

- Contact form validation is covered.
- Provider calls are mocked or test-safe.
- No real production emails are sent during automated tests.

### Validation

```text
npm run test:e2e
```

---

## TASK-051: Add E2E Calendly and Lead Magnet Tests

**Priority:** P1  
**Status:** Done  
**Source Requirements:** CAL-001 to CAL-004, LEAD-001 to LEAD-004  
**Implementation Area:** Testing, Scheduling, Content

### Description

Add E2E tests for Calendly and lead magnet CTAs.

### Acceptance Criteria

- Calendly CTA is visible and clickable.
- Lead magnet CTA is visible and clickable.
- Download link exists.
- Tests do not depend on external Calendly page loading successfully.

### Validation

```text
npm run test:e2e
```

---

# 19. GitHub and CI/CD Setup

## TASK-052: Create Pull Request Template

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-SCM-007, CR-007  
**Implementation Area:** DevOps, Documentation

### Description

Create a GitHub pull request template.

### File

```text
.github/pull_request_template.md
```

### Required Sections

- Summary
- Related task IDs
- Screenshots
- Testing performed
- Accessibility notes
- SEO notes
- Deployment risk

### Acceptance Criteria

- PR template exists.
- Template supports AI-First review workflow.

### Validation

- Manual review.
- **Implemented in repo:** `.github/pull_request_template.md` (sections: Summary, Related task IDs, Screenshots, Testing performed, Accessibility notes, SEO notes, Deployment risk, optional AI-First hints).

---

**Priority:** P1  
**Status:** Done  
**Source Requirements:** NFR-SCM-007  
**Implementation Area:** DevOps, Documentation

### Description

Create issue templates for bugs, features, and tasks.

### Files

```text
.github/ISSUE_TEMPLATE/bug_report.md
.github/ISSUE_TEMPLATE/feature_request.md
.github/ISSUE_TEMPLATE/task.md
```

### Acceptance Criteria

- Issue templates exist.
- Templates include fields for requirement/task traceability.

### Validation

- Manual review.
- **Implemented in repo:** `.github/ISSUE_TEMPLATE/bug_report.md`, `feature_request.md`, `task.md`, and `config.yml` (traceability fields on each template).

---

## TASK-054: Configure GitHub Actions CI Workflow

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-SCM-004, NFR-SCM-005, DEP-009, DEP-010  
**Implementation Area:** CI/CD, DevOps, Testing

### Description

Create CI workflow for pull requests.

### File

```text
.github/workflows/ci.yml
```

### Required Checks

```text
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Optional:

```text
npm run test:e2e
```

### Acceptance Criteria

- CI runs on pull requests.
- CI runs on pushes to main.
- Lint, typecheck, tests, and build are included.
- CI failures block merge where branch protection is enabled.

### Validation

- Open a test pull request.
- Confirm CI runs.
- **Implemented in repo:** `.github/workflows/ci.yml` — job **`validate`**: `npm ci`, `npm run lint`, `npm run test`, `npm run typecheck`, `npm run build`, Playwright Chromium install, `npm run test:e2e` (supersedes optional E2E; aligns with Testing Strategy).

---

## TASK-055: Configure Branch Protection Rules

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-SCM-003, DEP-012  
**Implementation Area:** GitHub, DevOps

### Description

Configure branch protection for the production branch.

### Acceptance Criteria

- PRs are required before merging to main.
- Required status checks are configured.
- Direct pushes to main are restricted if appropriate.
- At least one review is required if desired.

### Validation

- Manual GitHub settings review.
- **Repo artifact:** `docs/Branch_Protection_Setup.md` — step-by-step checklist (rulesets, require PR, required check **`validate`**, reviews, block direct pushes). **Human step:** apply settings in the GitHub UI for `main`.

---

## TASK-056: Configure Deployment Workflow or Hosting Integration

**Priority:** P0
**Status:** Done
**Source Requirements:** DEP-001, DEP-011, DEP-012, DEC-003
**Implementation Area:** Deployment, DevOps

### Description

Configure deployment through Railway, Vercel, Netlify, or GitHub Actions.

### Acceptance Criteria

- Hosting provider is selected.
- Repository is connected to hosting provider or deploy workflow.
- Preview deployments are enabled if supported.
- Production deployment is tied to main branch.
- Environment variables are configured.

### Validation

- Preview deployment test.
- Production deployment test.
- **Implemented in repo:** `railway.json` pins **Railway** build to **`npm run build`** and start to **`npm start`**. `scripts/serve-prod.mjs` serves `dist/` with SPA fallback and raw **`/sitemap.xml`** / **`/robots.txt`** on **`0.0.0.0:$PORT`**. `.env.example` documents optional build/runtime variables. **README** documents first-time Railway wiring (GitHub connect, `main`, PR previews optional).
- **Production verified (May 2026):** **[https://www.roseng.org](https://www.roseng.org)** serves the RoseJS MVP on Railway; custom domain **roseng.org** DNS pointed to Railway; merge-to-`main` deploys active.

---

# 20. Deployment and Production Readiness

## TASK-057: Select Hosting Provider

**Priority:** P0  
**Status:** Done  
**Source Requirements:** DEC-003, DEP-001  
**Implementation Area:** Deployment, Architecture

### Description

Choose hosting provider for MVP.

### Options

- Railway
- Vercel
- Netlify
- Self-hosted static hosting

### Recommendation

Use Railway for MVP hosting. Use Netlify if Netlify Forms is selected and you prefer tighter native form-hosting coupling.

### Acceptance Criteria

- Hosting provider is selected.
- Decision is documented in Architecture.md or Deployment_Guide.md.

### Validation

- Manual decision review.
- **Implemented in repo:** **`docs/Architecture.md`** §26 (decision **3. Hosting provider: Railway**). **`docs/Deployment_Guide.md`** §7 (Railway build/start aligned with **`railway.json`** and **`npm start`**).
- **Production:** MVP is live at **https://www.roseng.org** on Railway (DEC-003).

---

## TASK-058: Configure Environment Variables

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-SEC-006, Security Architecture  
**Implementation Area:** Security, DevOps

### Description

Create `.env.example` and configure environment variables.

### Example Variables

```text
VITE_SITE_URL=
VITE_PLAUSIBLE_DOMAIN=
VITE_CALENDLY_EMBED=
VITE_CALENDLY_URL=
VITE_FORM_ENDPOINT=
VITE_SANITY_PROJECT_ID=
VITE_SANITY_DATASET=
```

### Acceptance Criteria

- `.env.example` exists.
- No secrets are committed.
- Production environment variables are configured in hosting platform.
- GitHub Actions secrets are configured if needed.

### Validation

- Manual security review.
- Build succeeds in CI and hosting environment.
- **Implemented in repo:** **`.env.example`** (browser-safe `VITE_*` with production examples). **`docs/Railway_Production_Variables.md`**, **`docs/Production_Launch_Checklist.md`**, **`docs/Deployment_Guide.md`** §8. **GitHub Actions:** current CI needs **no** repo secrets for lint/test/build/E2E.
- **Production (May 2026):** Build variables configured in **Railway** (operator confirmed); production redeploy completed with **`VITE_SITE_URL`** and integration variables per checklist.

---

## TASK-059: Connect Domain and SSL

**Priority:** P0  
**Status:** Done  
**Source Requirements:** DEP-003, DEP-004  
**Implementation Area:** Deployment, Security

### Description

Connect the final domain and enable HTTPS/SSL.

### Acceptance Criteria

- Domain is connected to hosting provider.
- HTTPS works.
- HTTP redirects to HTTPS where supported.
- Domain is documented.

### Validation

- Manual browser test.
- SSL check.
- **Production (May 2026):** **https://www.roseng.org** — RoseJS site on Railway with HTTPS; custom domain **roseng.org** DNS pointed to Railway. Apex **https://roseng.org** redirects to **`www`** (operator confirmed). **`public/sitemap.xml`**, **`public/robots.txt`**, and **`SITE_URL_PLACEHOLDER`** use **`https://www.roseng.org`**.

---

## TASK-060: Configure Google Search Console

**Priority:** P0  
**Status:** Done  
**Source Requirements:** DEP-007  
**Implementation Area:** SEO, Deployment

### Description

Configure Google Search Console for production domain.

### Acceptance Criteria

- Site property is created.
- Domain ownership is verified.
- Sitemap is submitted.
- Indexing status can be monitored.

### Validation

- Manual Search Console verification.
- **Implemented in repo:** **`docs/Google_Search_Console_Setup.md`** (property types, verification table, sitemap, monitoring); **`index.html`** commented **`google-site-verification`** placeholder for HTML-tag method; **`docs/Deployment_Guide.md`** §13.2.
- **Production (May 2026):** Search Console property verified for **https://www.roseng.org**; **https://www.roseng.org/sitemap.xml** submitted (operator confirmed).

---

## TASK-061: Create Deployment Guide

**Priority:** P0  
**Status:** Done  
**Source Requirements:** DEP-005, MVP-021, NFR-MAINT-005  
**Implementation Area:** Documentation, Deployment

### Description

Create `Deployment_Guide.md`.

### Required Content

- Hosting provider
- Environment variables
- CI/CD flow
- Preview deployment process
- Production deployment process
- Rollback process
- Post-deployment verification checklist

### Acceptance Criteria

- Deployment steps are documented clearly.
- Rollback process is included.
- Guide supports future AI-First project reuse.

### Validation

- Manual documentation review.
- **Implemented in repo:** **`docs/Deployment_Guide.md`** — §1.1 maps all TASK-061 required topics to sections; **§1.2** release quick path; cross-links **`Domain_SSL_Setup.md`**, **`Google_Search_Console_Setup.md`**, **`Branch_Protection_Setup.md`**; matches **`railway.json`** / **CI** behavior.

---

# 21. Content and SEO Strategy Tasks

## TASK-062: Create Initial Services Content

**Priority:** P0  
**Status:** Done  
**Source Requirements:** SERV-001, SERV-002, PROD-002  
**Implementation Area:** Content, CMS

### Description

Create CMS-ready content for all core services.

### Acceptance Criteria

- Each service has title, summary, problem solved, description, business outcome, deliverables, and SEO fields.
- Content is healthcare/healthcare insurance focused.
- Content is not generic.

### Validation

- Manual content review.
- SEO review.
- **Implemented in repo:** seven services in **`src/content/fallback/services.ts`** with full fields and healthcare-focused copy; wired via **`getServices`** / service detail pages.

---

## TASK-063: Create Initial Blog Posts

**Priority:** P0  
**Status:** Done  
**Source Requirements:** BLOG-001 to BLOG-008, MVP success metrics  
**Implementation Area:** Content, CMS, SEO

### Description

Create at least three initial blog posts for launch.

### Recommended Topics

- How to Modernize a Legacy Application
- AI-First Software Development Methodology
- Healthcare RCM Platform Modernization Guide

### Acceptance Criteria

- At least 3 blog posts are created.
- Each post has SEO title and meta description.
- Each post links to related services where appropriate.
- Posts are CMS-ready.

### Validation

- Manual content review.
- SEO review.
- **Implemented in repo:** four launch articles in **`src/content/fallback/blogPosts.ts`** (legacy modernization, AI-first methodology, integration debt, RCM guide); SEO fields and related service slugs.

---

## TASK-064: Create Initial Healthcare Case Study

**Priority:** P0  
**Status:** Done  
**Source Requirements:** CASE-001 to CASE-005, MVP-009  
**Implementation Area:** Content, CMS

### Description

Create one anonymized healthcare-focused case study.

### Acceptance Criteria

- Case study includes problem, context, approach, solution, outcome, and lessons learned.
- No confidential client information is included.
- Case study supports RoseJS credibility.
- Case study has SEO fields.

### Validation

- Manual content review.
- Confidentiality review.
- **Implemented in repo:** two anonymized case studies in **`src/content/fallback/caseStudies.ts`** with problem/context/approach/solution/outcome/lessons and SEO fields.

---

## TASK-065: Create SEO Strategy Document

**Priority:** P1  
**Status:** Done  
**Source Requirements:** PROD-004, SEO Requirements  
**Implementation Area:** Documentation, SEO

### Description

Create `SEO_Strategy.md`.

### Required Content

- Keyword clusters
- Page-level SEO strategy
- Blog topic plan
- Internal linking strategy
- Sitemap strategy
- Search Console setup notes

### Acceptance Criteria

- SEO strategy exists in `/docs`.
- Strategy aligns with healthcare/healthcare insurance positioning.
- Strategy supports traffic growth after launch.

### Validation

- Manual documentation review.

---

## TASK-066: Create Content Plan Document

**Priority:** P1  
**Status:** Done  
**Source Requirements:** PROD-004, Blog Requirements  
**Implementation Area:** Documentation, Content

### Description

Create `Content_Plan.md` for launch and post-launch content.

### Required Content

- Initial launch content
- 30/60/90-day content roadmap
- Blog categories
- Case study topics
- Lead magnet ideas
- LinkedIn repurposing plan

### Acceptance Criteria

- Content plan exists in `/docs`.
- Plan supports organic traffic growth.
- Plan includes healthcare-focused content.

### Validation

- Manual documentation review.

---

# 22. AI-First Template Documentation

## TASK-067: Create AI Workflow Guide

**Priority:** P0  
**Status:** Done  
**Source Requirements:** PROD-005, PROD-006, MVP-021  
**Implementation Area:** Documentation, AI Workflow

### Description

Create `AI_Workflow_Guide.md` to document how AI should be used in this project and future projects.

### Required Content

- AI-First pillars
- Prompting guidelines
- Human review rules
- Code generation workflow
- Test generation workflow
- Documentation generation workflow
- Security boundaries
- Do-not-overbuild guidance

### Acceptance Criteria

- Guide explains the AI-First workflow clearly.
- Guide supports reuse in future projects.
- Guide prevents blind acceptance of AI-generated code.

### Validation

- Manual documentation review.

---

## TASK-068: Create Code Review Checklist

**Priority:** P0  
**Status:** Done  
**Source Requirements:** CR-001 to CR-007, PROD-006  
**Implementation Area:** Documentation, Code Review

### Description

Create `Code_Review_Checklist.md`.

### Required Review Areas

- Architecture alignment
- Component reusability
- Type safety
- Accessibility
- SEO
- Performance
- Security
- CMS boundaries
- Environment variable handling
- Test coverage

### Acceptance Criteria

- Checklist exists in `/docs`.
- Checklist can be used in PR review.
- Checklist reflects AI-generated code review risks.

### Validation

- Manual documentation review.

---

## TASK-069: Create Testing Strategy Document

**Priority:** P0  
**Status:** Done  
**Source Requirements:** MVP-017, Testing Coverage Matrix  
**Implementation Area:** Documentation, Testing

### Description

Create `Testing_Strategy.md`.

### Required Content

- Unit testing strategy
- Component testing strategy
- E2E testing strategy
- Accessibility testing strategy
- SEO validation strategy
- CI testing expectations
- Test data and mocked CMS strategy

### Acceptance Criteria

- Testing strategy exists in `/docs`.
- Strategy aligns with Vitest, React Testing Library, and Playwright.
- Strategy defines MVP minimum test coverage.

### Validation

- Manual documentation review.
- **Implemented in repo:** **`docs/Testing_Strategy.md`** — unit, component, E2E, accessibility, SEO validation, CI expectations, and mocked CMS strategy aligned with Vitest, React Testing Library, and Playwright.

---

## TASK-070: Create Component Map Document

**Priority:** P1  
**Status:** Done  
**Source Requirements:** Component Architecture, NFR-MAINT-001  
**Implementation Area:** Documentation, Frontend

### Description

Create `Component_Map.md`.

### Required Content

- Component list
- Component responsibilities
- Props/data dependencies
- CMS data usage
- Page-to-component mapping

### Acceptance Criteria

- Component map exists in `/docs`.
- Component map supports implementation and review.

### Validation

- Manual documentation review.
- **Done (June 2026):** **`docs/Component_Map.md`** — layer overview, component inventory (layout, UI, SEO, cards, sections, forms), CMS/loaders, page-to-component table, analytics touchpoints, and extension checklist.

---

# 23. Production Readiness and Validation

## TASK-071: Run Full Local Validation

**Priority:** P0  
**Status:** Done  
**Source Requirements:** Definition of Done  
**Implementation Area:** QA, Testing

### Description

Run full local validation before production deployment.

### Commands

```text
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

### Acceptance Criteria

- All required checks pass locally.
- Known issues are documented.
- No blocker issues remain before production deployment.

### Validation

- Command output.
- Manual review.
- **Done (May 2026):** `npm run lint`, `npm run typecheck`, `npm run test` (22 tests), `npm run build`, and `npm run test:e2e` (15 tests, CI uses **`scripts/serve-prod.mjs`**) all pass.

---

## TASK-072: Run Production Deployment Verification

**Priority:** P0  
**Status:** Done  
**Source Requirements:** DEP-001 to DEP-012, Definition of Done  
**Implementation Area:** Deployment, QA

### Description

Validate the production deployment.

### Checklist

- Production site loads.
- HTTPS works.
- Core pages load.
- Navigation works.
- Contact form works.
- Calendly CTA works.
- Lead magnet download works.
- Plausible script loads.
- Sitemap and robots.txt are accessible.
- Search Console is configured.

### Acceptance Criteria

- Production site passes launch checklist.
- Issues are documented and resolved or accepted.

### Validation

- Manual production verification.
- **Done (May 2026):** **`npm run verify:production`** passes against **https://www.roseng.org** (HTTPS, core routes, sitemap, robots). E2E launch smoke covers navigation, contact validation, Calendly CTA, and lead-magnet PDF link. **Follow-up:** confirm Formspree receipt and Plausible pageviews in provider dashboards (§6 checklist).
- **Re-verified (June 2026):** After **`develop` → `main`** release (PR #7) and Railway 502 target-port fix, **`origin/develop`** and **`origin/main`** are aligned at **`96ca507`**; **`npm run verify:production`** — all 13 checks passed.

---

## TASK-073: Run Accessibility Review

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-A11Y-001 to NFR-A11Y-005  
**Implementation Area:** Accessibility, QA

### Description

Review accessibility across core pages.

### Acceptance Criteria

- Keyboard navigation works.
- Forms are accessible.
- Contrast is readable.
- Mobile navigation is usable.
- Images have alt text where appropriate.

### Validation

- Manual accessibility review.
- Automated checks if available.
- **Done (May 2026):** Component tests for navigation/forms; E2E mobile menu keyboard test (**`e2e/launch-smoke.spec.ts`**) — open, Tab focus trap, Escape closes; contact form label/error coverage in **`e2e/contact-form.spec.ts`**. Manual contrast/alt-text spot-check recommended before major content changes.

---

## TASK-074: Run SEO Launch Review

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-SEO-001 to NFR-SEO-008  
**Implementation Area:** SEO, QA

### Description

Review SEO readiness before launch.

### Acceptance Criteria

- Every page has unique title and meta description.
- Sitemap exists.
- Robots.txt exists.
- H1/H2 structure is logical.
- Blog and case study metadata exist.
- Open Graph metadata exists where implemented.
- Internal links work.

### Validation

- Manual SEO review.
- Search Console setup.
- **Done (May 2026):** **`e2e/seo-static.spec.ts`** validates sitemap/robots, per-page title + meta description, and single H1 on core routes. Search Console verified and sitemap submitted (TASK-060).
- **Done (June 2026):** Option A brand/domain (**`docs/Brand_and_Domain.md`**); build-time sitemap (`scripts/generate-sitemap.mjs`) with all published CMS slugs; canonical links; indexing runbook (**`docs/Search_Indexing_Runbook.md`**).

---

## TASK-075: Run Performance Review

**Priority:** P1  
**Status:** Done  
**Source Requirements:** NFR-PERF-001 to NFR-PERF-004  
**Implementation Area:** Performance, QA

### Description

Review performance before launch.

### Acceptance Criteria

- Core pages load quickly.
- Images are optimized.
- Bundle size is reasonable.
- Lighthouse performance target is reviewed.

### Validation

- Lighthouse check.
- Manual performance review.
- **Done (May 2026):** Production build reviewed — main JS bundle ~350 KB (~107 KB gzip), CSS ~19 KB (~4.5 KB gzip); static assets served from `dist/`. Run Lighthouse on **https://www.roseng.org** periodically; no blocker bundle-size issues for MVP.

---

# 24. Future Backend-Ready Documentation

## TASK-076: Document Future Backend Expansion Boundaries

**Priority:** P1  
**Status:** Done  
**Source Requirements:** NFR-API-002, Future Scope  
**Implementation Area:** Architecture, Documentation

### Description

Document how future backend/database functionality could be added without rewriting the MVP.

### Future Features to Address

- Client portal
- CRM integration
- Secure intake workflow
- AI assistant
- Payment workflow
- Private resource library
- Admin dashboard

### Acceptance Criteria

- Backend expansion guidance exists in Architecture.md or a separate future architecture note.
- Current MVP boundaries remain clear.
- No backend is implemented for MVP.

### Validation

- Manual architecture review.
- **Done:** **`docs/Architecture.md`** §3.3 (future stack diagram), §19.3 (backend-ready integration boundaries in `src/lib/*` and `src/cms/`), and future capability list (client portal, CRM, intake, AI assistant, payments, resource library, admin dashboard). No custom backend shipped in MVP.

---

## TASK-077: Document No Backend/Database MVP Decision

**Priority:** P0  
**Status:** Done  
**Source Requirements:** NFR-DB-001, NFR-API-001, ADR-003, ADR-004  
**Implementation Area:** Documentation, Architecture

### Description

Ensure the no custom backend/database decision is documented in project docs.

### Acceptance Criteria

- Decision appears in PRD.
- Decision appears in Architecture.md.
- Decision appears in README or AI workflow guidance.
- Future implementation tasks do not accidentally introduce backend/database work for MVP.

### Validation

- Manual documentation review.
- **Done:** **`docs/PRD.md`** (NFR-DB/API, stack table, Definition of Done), **`docs/Architecture.md`** §19.1–19.2 and **ADR-003**, **`docs/Tasks.md`** §1 and §28 (AI agent rules), **`docs/AI_Workflow_Guide.md`** (MVP scope via Architecture/Tasks references). **`README.md`** describes static Railway MVP hosting without a custom API layer.

---

# 25. Task Dependency Overview

## 24.1 Critical Path

```text
TASK-001 Create GitHub Repository
  ↓
TASK-002 Define Branching Strategy
  ↓
TASK-005 Scaffold React + Vite Project
  ↓
TASK-008 Configure Tailwind
  ↓
TASK-009 Configure Routing
  ↓
TASK-014 Select CMS Provider
  ↓
TASK-015 Create CMS Client Abstraction
  ↓
TASK-016 Define CMS Content Models
  ↓
TASK-019 to TASK-028 Implement Pages
  ↓
TASK-029 Select Contact Form Provider
  ↓
TASK-030 to TASK-033 Implement Contact/Scheduling
  ↓
TASK-036 to TASK-042 Implement SEO/Analytics
  ↓
TASK-045 to TASK-054 Configure Tests and CI
  ↓
TASK-057 Select Hosting Provider
  ↓
TASK-056 Configure Deployment
  ↓
TASK-071 to TASK-075 Validate Launch
```

## 24.2 Decision-Dependent Tasks

| Task ID  | Decision Status                                                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| TASK-014 | Resolved: CMS provider selected (Sanity)                                                                                                        |
| TASK-029 | Resolved: Form provider selected (Formspree)                                                                                                    |
| TASK-057 | Resolved: Hosting provider selected (Railway)                                                                                                   |
| TASK-058 | Resolved: Railway production build variables configured (May 2026)                                                                              |
| TASK-059 | Resolved: apex **roseng.org** → **www.roseng.org**; live on Railway (May 2026)                                                                  |
| TASK-060 | Resolved: Search Console verified; sitemap submitted (May 2026)                                                                                 |
| Release  | **June 2026:** `develop` and `main` synchronized at `96ca507` (PR #7 + Railway `/health` fix); production **`npm run verify:production`** green |
| Eval P1  | Depends on MVP complete; TASK-078 → TASK-097 → TASK-098–102 → TASK-101–102 → TASK-103 → TASK-079 → TASK-089 → TASK-090 → TASK-080 → TASK-081 |
| Eval P2  | Depends on Phase 1; TASK-091 before TASK-082; TASK-092 and TASK-083 parallel; TASK-093 after knowledge base; TASK-084 after CI |
| Eval P3  | Dev workflow: TASK-085 → TASK-086; user-facing (when features ship): TASK-094 → TASK-095 → TASK-096; TASK-087 after all phases defined |

---

# 26. MVP Definition of Done

The MVP is complete when:

1. GitHub repository is created.
2. Branching strategy is documented.
3. CI/CD pipeline runs lint, typecheck, tests, and build validation.
4. React + Vite project is implemented.
5. Tailwind black-and-white design system is implemented.
6. Core pages are implemented.
7. CMS content models and fetching are implemented.
8. Contact form works through provider or serverless function.
9. Calendly CTA or embed works.
10. Free lead magnet download works.
11. Plausible Analytics is installed.
12. SEO metadata is configured.
13. Sitemap and robots.txt exist.
14. Accessibility baseline is reviewed.
15. Tests pass.
16. Production deployment is live.
17. Search Console is configured.
18. Project documentation supports reuse as an AI-First template.
19. No custom backend or custom database is required for MVP.

---

# 27. Recommended Implementation Order

Use this order for execution:

1. Create GitHub repository and documentation structure.
2. Scaffold React + Vite + TypeScript.
3. Configure Tailwind, routing, linting, typechecking, and test framework.
4. Build layout and reusable UI components.
5. Implement CMS abstraction and content models.
6. Implement pages using fallback content first.
7. Connect CMS content.
8. Implement contact form and Calendly.
9. Implement SEO, analytics, sitemap, and robots.txt.
10. Add tests.
11. Configure GitHub Actions CI.
12. Configure hosting and deployment.
13. Run production readiness review.
14. Launch MVP.

---

# 28. Notes for Future AI Agents

Future AI implementation agents should follow these rules:

1. Do not introduce a custom backend for MVP.
2. Do not introduce a custom database for MVP.
3. Keep CMS logic isolated in `src/cms`.
4. Keep analytics logic isolated in `src/lib/analytics.ts`.
5. Keep form provider logic isolated in `src/lib/form.ts` or `src/components/forms`.
6. Use GitHub pull requests for all changes.
7. Make sure CI passes before merging.
8. Keep documentation updated when architecture decisions change.
9. Maintain healthcare and healthcare insurance positioning in copy.
10. Do not store PHI/PII through the website MVP.
11. When implementing post-MVP eval work, follow PRD **§26**, PRD **§27**, and Tasks **§29**; preserve traceability from `NFR-EVAL-*`, `EVAL-P*`, `EVAL-SOT-*`, `EVAL-REG-*`, and `EVAL-AIA-*` IDs to tasks and tests.
12. Do not skip Phase 1 source-of-truth evals before adding change-based CI gates (Phase 2).

---

# 29. AI Evaluation Roadmap (Post-MVP)

Implementation tasks for PRD **§11.8**, **§26**, and **§27** (`NFR-EVAL-*`, `EVAL-P1-*`, `EVAL-P2-*`, `EVAL-P3-*`, `EVAL-SOT-*`, `EVAL-REG-*`, `EVAL-AIA-*`). These tasks are **post-MVP**; MVP tasks (§5–§24) remain complete.

## 29.1 Phase Overview

| Phase | Tasks | PRD IDs | Status |
| ----- | ----- | ------- | ------ |
| 1 — Source-of-truth | TASK-078–081, **TASK-097–103** (`T-EVAL-P1-*`), TASK-088–090 | `EVAL-P1-*`, `EVAL-SOT-*`, `NFR-EVAL-001/002/006` | Not Started |
| 2 — Change-based and regression | TASK-082–084, TASK-091–093 | `EVAL-P2-*`, `EVAL-REG-*`, `NFR-EVAL-003/004/006` | Not Started |
| 3 — AI assistant | TASK-085–087, TASK-094–096 | `EVAL-P3-*`, `EVAL-AIA-*`, `NFR-EVAL-005/002/006` | Not Started |

**Notes:**

- `TASK-085`–`086` cover **development-workflow** assistants (Cursor, PR review, code generation).
- `TASK-094`–`096` cover **user-facing** assistants (chatbot, FAQ, RAG) when those features are added.
- `TASK-087` maps all eval IDs in `Traceability_Matrix.md` after Phases 1–3 tasks are defined.
- **Phase 1 detail tasks** use `T-EVAL-P1-*` IDs (`TASK-097`–`TASK-103`). `TASK-088`–`090` are umbrella implementation tasks that build on those files.

## 29.2 Phase 1 — Source-of-Truth Detail Tasks (`T-EVAL-P1-*`)

| T-EVAL ID | TASK ID | PRD requirement | Summary |
| --------- | ------- | --------------- | ------- |
| T-EVAL-P1-001 | TASK-097 | EVAL-P1-001 | Create `docs/rosejs-knowledge/` folder and file scaffold |
| T-EVAL-P1-002 | TASK-098 | EVAL-P1-001 | Write `company-profile.md` |
| T-EVAL-P1-003 | TASK-099 | EVAL-P1-001 | Write `services.md` |
| T-EVAL-P1-004 | TASK-100 | EVAL-P1-001 | Write `target-industries.md` |
| T-EVAL-P1-005 | TASK-101 | EVAL-P1-003 | Write `brand-voice.md` |
| T-EVAL-P1-006 | TASK-102 | EVAL-P1-003 | Write `forbidden-claims.md` |
| T-EVAL-P1-007 | TASK-103 | EVAL-P1-002 | Create `docs/evals/static-website-eval.md` checklist |

**Umbrella tasks (related, broader scope):**

| T-EVAL-P1-* | Related TASK-* | Relationship |
| ----------- | -------------- | ------------ |
| T-EVAL-P1-001–006 | TASK-088 | Epic-level knowledge base; decomposed into TASK-097–102 |
| T-EVAL-P1-007 | TASK-089 | Checklist doc (`TASK-103`) vs automated eval implementation |
| T-EVAL-P1-005, T-EVAL-P1-006 | TASK-090 | Source files vs brand-voice eval execution |

---

## TASK-078: Create AI Evaluation Roadmap Document

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-001, EVAL-SOT-001, NFR-EVAL-001, NFR-EVAL-002  
**Implementation Area:** Documentation, Testing

### Description

Establish the canonical eval implementation guides for RoseJS. **Primary guides (do not duplicate):**

- **`docs/Testing_Strategy.md`** §15 — AI Evaluation Testing Strategy (phases, validation methods, CI, file layout, definition of done)
- **`docs/AI_Workflow_Guide.md`** — AI evaluation workflow (prompting with knowledge base, change workflow, assistant eval rules)

Optionally add a short `docs/evals/README.md` index that links PRD §26–§27, Architecture §28, Traceability §13, Tasks §29, and the two guides above. Do not replace or fork content from the canonical guides.

### Acceptance Criteria

- Document describes Phases 1–3 with goals and exit criteria aligned to PRD §26 and §27.
- Document lists authoritative source-of-truth artifacts (PRD, Architecture, `docs/rosejs-knowledge/`, brand, Component Map, Traceability Matrix).
- Document links each phase to `NFR-EVAL-*`, `EVAL-P*`, `EVAL-SOT-*`, `EVAL-REG-*`, and `EVAL-AIA-*` IDs.
- **`Testing_Strategy.md` §15** and **`AI_Workflow_Guide.md`** (AI evaluation workflow section) are the canonical eval implementation guides; they cross-reference each other and PRD §26–§27.
- If `docs/evals/README.md` is added, it points to the two canonical guides and does not duplicate their content.

### Validation

- Manual documentation review.
- Cross-check IDs against PRD §11.8, §26, and §27.
- Confirm **`Testing_Strategy.md` §15** and **`AI_Workflow_Guide.md`** eval sections are linked from `TASK-078` completion notes or `docs/evals/README.md`.

---

## TASK-079: Build Source-of-Truth Eval Catalog

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-002, EVAL-SOT-001, EVAL-SOT-002, EVAL-SOT-004  
**Implementation Area:** Documentation, Testing

### Description

Define a version-controlled catalog of golden references and golden-answer eval cases derived from `docs/rosejs-knowledge/` and project contracts. Supports static website content evals (`TASK-089`).

### Acceptance Criteria

- Catalog includes at least one golden case per core route (`/`, `/services`, `/about`, `/blog`, `/contact`, `/schedule`).
- Each case maps to at least one PRD functional requirement or architecture component ID.
- Catalog format supports automated or semi-automated comparison (JSON, markdown tables, or similar).
- Catalog lives under `docs/` or `eval/` and is referenced in PR/commit templates when eval-related files change.

### Validation

- Manual catalog review.
- Spot-check traceability to PRD IDs (e.g., `HOME-*`, `CONTACT-*`, `NFR-SEO-*`).

---

## TASK-080: Document CMS Fallback vs Live Content Eval Boundaries

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-001, EVAL-SOT-003, NFR-EVAL-001  
**Implementation Area:** CMS, Documentation

### Description

Document expected behavior when Sanity CMS content is live vs when local fallback content is used, so evals do not false-fail during CMS outages or preview builds. Align with `docs/rosejs-knowledge/` boundaries where CMS and knowledge base overlap.

### Acceptance Criteria

- Boundaries documented for blog posts, case studies, and static page sections.
- Eval catalog notes which fields are CMS-driven vs hardcoded fallback.
- Document aligns with `Architecture.md` CMS abstraction and `src/cms/` fallback patterns.

### Validation

- Manual review against CMS client and fallback content in repo.

---

## TASK-081: Implement Source-of-Truth Eval Runner

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-002, EVAL-SOT-005, NFR-EVAL-006  
**Implementation Area:** Testing, CI/CD

### Description

Provide a local (and CI-invokable) script that runs Phase 1 golden cases from `TASK-079` and knowledge base (`TASK-088`) and reports pass/fail.

### Acceptance Criteria

- Runner executable via npm script (e.g., `npm run eval:sot` or documented equivalent).
- Runner validates at minimum: route list, page titles/meta defaults, brand constants, and core CTA targets.
- Runner exits non-zero on failure for CI integration in Phase 2.
- README or Testing Strategy documents how to run locally.

### Validation

- Run locally on clean checkout.
- Confirm pass on current `main`/`develop` baseline.

---

## TASK-082: Wire Change-Based Eval Triggers in CI

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P2-001, EVAL-REG-001, EVAL-REG-002, NFR-EVAL-003  
**Implementation Area:** CI/CD, Testing

### Description

Extend GitHub Actions so pull requests run change-based and full regression eval subsets automatically. Implements scenarios defined in `TASK-091`.

### Acceptance Criteria

- CI job runs on pull requests to protected branches.
- Diff-aware step selects eval subsets when only specific areas change (routes, SEO, forms, analytics, knowledge base).
- Full regression subset runs when shared layout, config, eval catalog, or `docs/rosejs-knowledge/` changes.
- Failed evals surface in PR checks with actionable logs.

### Validation

- Open test PR touching SEO metadata; confirm targeted evals run.
- Open test PR touching shared layout; confirm broader regression runs.

---

## TASK-083: Expand Regression Eval Suite for Critical Flows

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P2-002, EVAL-REG-003, EVAL-REG-005, NFR-EVAL-004  
**Implementation Area:** Testing

### Description

Extend Vitest, Playwright, and SEO checks to cover PRD §12.3 critical flows and integrate recurring Q&A regression evals from `TASK-092`.

### Acceptance Criteria

- Regression suite covers: navigation, contact form, Calendly CTA, lead magnet download, mobile nav.
- Integrates Q&A regression cases from `TASK-092` (run after content, prompt, or knowledge-base changes).
- Changed pages/metadata compared against Phase 1 golden references where applicable.
- New or updated tests reference related PRD requirement IDs in comments or test descriptions.
- Suite integrates with CI from TASK-082.

### Validation

- `npm run test`, `npm run test:e2e`, and eval CI job pass on baseline branch.
- Introduce intentional regression in test branch; confirm eval failure.

---

## TASK-084: Document Eval Merge Gates and Failure Handling

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P2-002, EVAL-REG-004, EVAL-REG-006, NFR-EVAL-002  
**Implementation Area:** Documentation, CI/CD

### Description

Document when failed evals block merge or deployment vs when documented exceptions are allowed, and what artifacts reviewers need. **Canonical policy:** **`docs/Deployment_Guide.md`** §22.

### Acceptance Criteria

- Policy documented in **`docs/Deployment_Guide.md`** §22 (AI Evaluation and Deployment Gates).
- Defines critical vs non-critical eval failures.
- Describes artifact retention (logs, Playwright traces, Lighthouse output) for failed PRs.
- Failed evals block deployment until reviewed or fixed (per PRD `EVAL-P2-002`).
- Aligns with branch protection and solo-maintainer workflow in `Branch_Protection_Setup.md`.

### Validation

- Manual policy review.
- Dry-run failure scenario documented with expected reviewer steps.

---

## TASK-085: Define Development-Workflow AI Assistant Eval Scenarios and Rubric

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-AIA-001, EVAL-AIA-004, EVAL-AIA-005, NFR-EVAL-002  
**Implementation Area:** Documentation, AI Workflow

### Description

Define scenarios and a human-reviewed rubric for evaluating **development-workflow** AI assistant outputs (Cursor, task planning, code generation, PR review). User-facing assistant evals are covered by `TASK-094`–`096`.

### Acceptance Criteria

- Scenarios cover: task planning, component implementation, marketing copy draft, documentation update, PR review assistance.
- Rubric includes pass/fail criteria for healthcare insurance positioning accuracy.
- Rubric includes examples of acceptable and unacceptable assistant outputs.
- Failure log template for recurring mistakes (e.g., backend introduction, off-brand copy).

### Validation

- Manual review against `AI_Workflow_Guide.md` and PRD positioning (§7).

---

## TASK-086: Implement Development-Workflow AI Assistant Guardrail Evals

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-AIA-002, EVAL-AIA-003, NFR-EVAL-005  
**Implementation Area:** Documentation, Testing

### Description

Create checklists or automated checks that verify **development-workflow** assistant outputs respect MVP boundaries and project workflow. Complements user-facing guardrails in `TASK-094`–`096`.

### Acceptance Criteria

- Guardrail evals cover: no custom backend/database for MVP scope, no PHI collection, no secrets in frontend, isolated CMS/analytics/form modules.
- Evals reference `Code_Review_Checklist.md` and `Tasks.md` §28 agent rules.
- At least one scripted or checklist-based guardrail eval can be run before merging large AI-generated changes.
- Document how guardrail evals complement (not replace) human code review.

### Validation

- Run guardrail checklist against sample AI-generated PR description and diff.
- Confirm violations are detected for documented anti-patterns.

---

## TASK-087: Update Traceability Matrix for Eval Requirements

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** NFR-EVAL-001–006, EVAL-P1-001–003, EVAL-P2-001–003, EVAL-P3-001–003, EVAL-SOT-001–005, EVAL-REG-001–006, EVAL-AIA-001–006  
**Implementation Area:** Documentation

### Description

Extend `Traceability_Matrix.md` to map all eval requirement IDs to tasks, tests, and CI validation.

### Acceptance Criteria

- Matrix rows exist for `NFR-EVAL-*`, each `EVAL-P*`, `EVAL-SOT-*`, `EVAL-REG-*`, and `EVAL-AIA-*` requirement ID.
- Each row links to implementing task ID(s) and validation method (manual, Vitest, Playwright, CI script).
- Matrix cross-references PRD §26, PRD §27, and Tasks.md §29.

### Validation

- Manual traceability audit: every eval ID in PRD has at least one matrix row and task.

---

## TASK-097 (T-EVAL-P1-001): Create RoseJS Knowledge Base Folder

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-001, NFR-EVAL-001  
**Implementation Area:** Documentation, Content

### Description

Create the approved source-of-truth folder and empty scaffold files for RoseJS business knowledge.

### Acceptance Criteria

- Folder exists: `docs/rosejs-knowledge/`
- Files exist:
  - `company-profile.md`
  - `services.md`
  - `target-industries.md`
  - `brand-voice.md`
  - `forbidden-claims.md`
- Each file has initial RoseJS-approved content (may be expanded in `TASK-098`–`TASK-102`).

### Validation

- Manual check: folder and all five files present in repo.

---

## TASK-098 (T-EVAL-P1-002): Write Company Profile Source File

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-001, NFR-EVAL-001  
**Depends On:** TASK-097  
**Implementation Area:** Documentation, Content

### Description

Create `docs/rosejs-knowledge/company-profile.md` with approved RoseJS company facts.

### Acceptance Criteria

- Includes: what RoseJS is, founder background summary, AI-first methodology positioning, target client profile, business value proposition.
- Company profile is clear and current.
- Content can be used as a source of truth for website and AI responses.

### Validation

- Manual review against PRD §7 positioning and live About/homepage content.

---

## TASK-099 (T-EVAL-P1-003): Write Services Source File

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-001, NFR-EVAL-001  
**Depends On:** TASK-097  
**Implementation Area:** Documentation, Content

### Description

Create `docs/rosejs-knowledge/services.md` with current RoseJS service offerings.

### Acceptance Criteria

- Includes current services such as: AI-first legacy modernization, architecture review, technical debt assessment, healthcare system integration, e-commerce modernization, AI workflow implementation.
- Services are clearly listed.
- Removed or outdated services are not included.
- Services match website positioning.

### Validation

- Manual review against Services page and CMS service content.

---

## TASK-100 (T-EVAL-P1-004): Write Target Industries Source File

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-001, NFR-EVAL-001  
**Depends On:** TASK-097  
**Implementation Area:** Documentation, Content

### Description

Create `docs/rosejs-knowledge/target-industries.md` with approved industry focus.

### Acceptance Criteria

- Includes: Healthcare, E-commerce, and future industries if applicable.
- File confirms RoseJS does **not** serve healthcare only.
- Website content can be checked against this file.

### Validation

- Manual review; confirm no “healthcare only” positioning.

---

## TASK-101 (T-EVAL-P1-005): Write Brand Voice Source File

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-003, NFR-EVAL-001, NFR-EVAL-002  
**Depends On:** TASK-097  
**Implementation Area:** Documentation, Content

### Description

Create `docs/rosejs-knowledge/brand-voice.md` with tone rules for RoseJS content.

### Acceptance Criteria

- Tone rules documented: professional, clear, human, practical, AI-first but not hype-driven, confident but not exaggerated, helpful to healthcare and e-commerce leaders.
- Brand voice rules can be used by future eval scripts or human reviewers (`TASK-090`).

### Validation

- Manual review against PRD `EVAL-P1-003` and live site copy samples.

---

## TASK-102 (T-EVAL-P1-006): Write Forbidden Claims Source File

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-003, EVAL-P2-003, NFR-EVAL-002  
**Depends On:** TASK-097  
**Implementation Area:** Documentation, Content

### Description

Create `docs/rosejs-knowledge/forbidden-claims.md` with claims RoseJS must avoid.

### Acceptance Criteria

- Includes: guaranteed ROI, guaranteed project success, instant transformation, healthcare only, unapproved client claims, unverified certifications or partnerships.
- Forbidden claims are documented.
- File can be used for stale-answer detection (`TASK-093`).

### Validation

- Manual review; cross-check examples from PRD `EVAL-P2-003`.

---

## TASK-103 (T-EVAL-P1-007): Create Static Website Eval Checklist

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-002, NFR-EVAL-002  
**Depends On:** TASK-098–102  
**Implementation Area:** Documentation, Testing

### Description

Create `docs/evals/static-website-eval.md` — a human-review checklist for key marketing pages against the knowledge base.

### Acceptance Criteria

- Checklist covers: Homepage, Services page, About page, Contact page, Lead magnet section.
- Checklist validates clarity, accuracy, CTA, SEO, tone, and safety.
- Checklist references the RoseJS knowledge base (`docs/rosejs-knowledge/`).
- Supports automated/static eval implementation in `TASK-089` and `TASK-081`.

### Validation

- Manual walkthrough of checklist against live site.
- Confirm each checklist item maps to a knowledge-base file.

---

## TASK-088: Create RoseJS Knowledge Base Files

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-001, NFR-EVAL-001, NFR-EVAL-002  
**Depends On:** TASK-097–102  
**Implementation Area:** Documentation, Content

### Description

Umbrella task: complete and maintain approved source-of-truth knowledge files under `docs/rosejs-knowledge/`. **Decomposed into `TASK-097`–`TASK-102` (`T-EVAL-P1-001`–`T-EVAL-P1-006`).**

### Acceptance Criteria

- All `T-EVAL-P1-001`–`T-EVAL-P1-006` definition-of-done criteria met.
- Website content and AI-generated content can be evaluated against these files.
- Knowledge files are referenced from eval catalog (`TASK-079`) and static content evals (`TASK-089`).

### Validation

- Verify `TASK-097`–`TASK-102` complete.
- Manual review against PRD §7 positioning and live site content.

---

## TASK-089: Implement Static Website Content Evals

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-002, EVAL-SOT-002, EVAL-SOT-004, NFR-EVAL-002  
**Depends On:** TASK-103, TASK-088  
**Implementation Area:** Testing, Content

### Description

Implement static website content evals (automated or semi-automated) using the checklist in `docs/evals/static-website-eval.md` (`TASK-103` / `T-EVAL-P1-007`) and the knowledge base.

### Acceptance Criteria

- Evals cover: Homepage, Services page, About page, Contact page, Lead magnet section.
- Page content matches approved RoseJS positioning.
- Page content does not include outdated services, outdated industries, or exaggerated claims.
- Page content reflects RoseJS brand voice.
- Evaluation results are documented (pass/fail report or CI artifact).

### Validation

- Run evals against current `main`/`develop` baseline.
- Introduce intentional positioning drift in test branch; confirm eval failure.

---

## TASK-090: Implement Brand Voice Evals

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P1-003, NFR-EVAL-001, NFR-EVAL-002  
**Depends On:** TASK-101, TASK-102  
**Implementation Area:** Testing, Content

### Description

Execute brand-voice evals using `docs/rosejs-knowledge/brand-voice.md` (`TASK-101` / `T-EVAL-P1-005`) and forbidden-claims context from `TASK-102`.

### Acceptance Criteria

- Eval rubric derived from `docs/rosejs-knowledge/brand-voice.md`.
- Content avoids exaggerated AI claims.
- Content sounds human and credible.
- Content is aligned with RoseJS consulting identity.
- Content is appropriate for healthcare and e-commerce modernization audiences.
- Eval can run on website copy and AI-generated draft content.

### Validation

- Manual rubric review on sample pages and AI-generated copy.
- Document pass/fail examples in eval catalog or Testing Strategy.

---

## TASK-091: Define Change-Based Business Eval Scenarios

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P2-001, EVAL-REG-002, NFR-EVAL-003  
**Implementation Area:** Documentation, Testing

### Description

Define eval scenarios that verify RoseJS AI-generated and website content adapts when business data changes.

### Acceptance Criteria

- Scenarios documented for: target industries change, service offerings change, lead magnet change, CTA change, pricing or consultation policy change, Calendly or contact link change.
- Each major business change type has a matching eval scenario.
- Scenarios specify expected pass criteria (latest approved info present; stale/removed info absent).
- Scenarios are implemented in CI via `TASK-082`.

### Validation

- Manual scenario review against `docs/rosejs-knowledge/`.
- Dry-run one scenario (e.g., outdated Calendly link) and confirm eval detects failure.

---

## TASK-092: Build Recurring RoseJS Q&A Regression Eval Suite

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P2-002, NFR-EVAL-004, NFR-EVAL-006  
**Implementation Area:** Testing, Documentation

### Description

Maintain a regression eval suite for recurring RoseJS business questions, runnable after content, prompt, or knowledge-base changes.

### Acceptance Criteria

- Suite includes eval cases for:
  - What does RoseJS do?
  - Who does RoseJS help?
  - What is AI-first development?
  - Does RoseJS work with e-commerce companies?
  - Can RoseJS guarantee project success?
  - How can someone contact RoseJS?
  - What makes RoseJS different?
- Eval results identify pass/fail outcomes.
- Suite integrates with `TASK-083` and CI from `TASK-082`.

### Validation

- Run suite after knowledge-base update; confirm pass on baseline.
- Change approved answer in knowledge base; confirm eval detects mismatch.

---

## TASK-093: Implement Stale Answer and Forbidden Claim Detection

**Priority:** P2  
**Status:** Not Started  
**Source Requirements:** EVAL-P2-003, EVAL-P1-001, NFR-EVAL-002, NFR-EVAL-003  
**Implementation Area:** Testing, Documentation

### Description

Detect outdated or forbidden RoseJS claims in website content and AI-generated responses.

### Acceptance Criteria

- Stale terms and forbidden claims listed in `docs/rosejs-knowledge/forbidden-claims.md` (and eval config).
- Eval checks fail if stale or forbidden claims appear (e.g., healthcare-only positioning, ROI guarantees, removed services, old Calendly link, outdated lead magnet).
- Failures are reported clearly with matched term and source location.
- Detection runs as part of Phase 2 CI (`TASK-082`).

### Validation

- Inject forbidden claim in test content; confirm eval failure and clear report.
- Verify examples from PRD `EVAL-P2-003` are covered.

---

## TASK-094: Define User-Facing AI Assistant Behavior Evals

**Priority:** P2  
**Status:** Not Started  
**Blocked By:** Future RoseJS chatbot, FAQ assistant, lead qualification assistant, or AI proposal assistant feature  
**Source Requirements:** EVAL-P3-001, EVAL-AIA-001, NFR-EVAL-005  
**Implementation Area:** Documentation, AI Workflow

### Description

When RoseJS adds a user-facing assistant, define eval scenarios for assistant behavior against the knowledge base and brand voice.

### Acceptance Criteria

- Scenarios cover: grounding in source-of-truth files, unsupported claims, routing to contact/scheduling, out-of-scope refusal, brand voice.
- Rubric includes pass/fail examples for acceptable and unacceptable assistant responses.
- Scenarios distinguish user-facing assistant behavior from development-workflow evals (`TASK-085`).

### Validation

- Manual rubric review before assistant launch.
- Run scenario set against prototype assistant; document results.

---

## TASK-095: Implement Retrieval-Grounded Evals

**Priority:** P2  
**Status:** Not Started  
**Blocked By:** RoseJS adoption of retrieval-augmented generation (RAG) for assistant or content features  
**Source Requirements:** EVAL-P3-002, EVAL-P1-001, EVAL-P2-003, NFR-EVAL-005  
**Implementation Area:** Testing, AI Workflow

### Description

When RoseJS uses RAG, evaluate both retrieved context quality and final answer quality.

### Acceptance Criteria

- Evals verify retrieved context is relevant to the user question.
- Final answer is supported by retrieved RoseJS documents.
- Final answer does not contradict approved source files.
- Final answer uses current information (not stale knowledge).
- Failed retrieval or grounding evals are reported clearly.

### Validation

- Test with questions that should retrieve specific knowledge files.
- Test with adversarial questions; confirm unsupported answers fail eval.

---

## TASK-096: Implement Business Alignment Evals for AI Assistants

**Priority:** P2  
**Status:** Not Started  
**Blocked By:** User-facing AI assistant feature (`TASK-094`)  
**Source Requirements:** EVAL-P3-003, EVAL-P3-001, NFR-EVAL-005  
**Implementation Area:** Testing, AI Workflow

### Description

Evaluate whether user-facing AI assistant responses support RoseJS business goals.

### Acceptance Criteria

- Eval rubric covers: build trust, explain services clearly, qualify potential clients, encourage appropriate next steps, avoid misleading claims.
- Responses are scored for business alignment (helpful, credible, on-scope).
- Responses include an appropriate CTA when relevant (contact, schedule, lead magnet).
- Responses avoid overpromising (aligned with `forbidden-claims.md`).

### Validation

- Run rubric on sample assistant conversations.
- Confirm overpromising and missing-CTA cases fail eval.
