# Product Requirements Document (PRD)

# RoseJS Website — AI-First Healthcare Software Architecture Consulting Website

## 1. Product Overview

### 1.1 Product Name

RoseJS Website for Healthcare Software Architecture and AI-First Engineering Consulting

### 1.2 Purpose

The purpose of this website is to establish a professional online presence for RoseJS, a healthcare-focused software engineering and architecture consulting business. The website will communicate RoseJS services, demonstrate technical authority, generate inbound leads, and support long-term organic traffic growth through SEO-focused content.

The website should not function only as a static portfolio. It should operate as a trust-building and lead-generation platform for healthcare insurance and healthcare technology organizations seeking help with software architecture, legacy modernization, AI-first product development, healthcare/RCM platform consulting, cloud/API integration, and secure enterprise systems.

### 1.3 Business Goal

The primary business goal is to convert visitors into qualified leads by clearly presenting the company’s expertise, services, case studies, technical insights, and consultation options.

### 1.4 Product Vision

Build a professional, high-trust, SEO-ready RoseJS website that positions the business as a credible software architecture and AI-first engineering partner for healthcare and healthcare insurance clients.

This project will also serve as a reusable AI-First project template for future software projects. The repository structure, documentation, code review workflow, testing strategy, source control process, CI/CD pipeline, and deployment model should be designed so they can be adapted for future websites, applications, and consulting delivery projects.

---

## 2. Background and Context

RoseJS is led by a software engineer and architect with experience in enterprise architecture, healthcare systems, healthcare insurance platforms, RCM platforms, legacy modernization, API integration, secure data access, cloud technologies, and hybrid onshore-offshore delivery models.

The website should support the company’s positioning around:

- Software architecture consulting
- Legacy application modernization
- AI-first software development methodology
- Healthcare insurance and RCM platform modernization
- Secure system integration
- Cloud and API architecture
- Technical debt assessment
- Production-ready engineering practices

The website will be built using an AI-First methodology based on four delivery pillars:

1. Skill
2. Code Review
3. Test Suites
4. Deployment

These pillars will guide planning, implementation, quality control, and release readiness.

GitHub will be used as the source control platform. CI/CD will be used to automate linting, testing, build validation, preview deployment checks where supported, and production deployment readiness.

For the MVP, RoseJS will not include a custom database or custom backend service. Content will be managed through a CMS, scheduling through Calendly, contact submissions through a form provider or serverless function, and analytics through Plausible Analytics. The architecture should remain backend-ready for future expansion.

---

## 3. Target Users

### 3.1 Primary Users

#### Healthcare Business Decision Makers

Examples:

- Healthcare technology executives
- Healthcare insurance platform owners
- RCM operations leaders
- CTOs
- Product leaders
- Operations leaders
- Consulting buyers

Needs:

- Understand whether the company can solve their business and technical problems
- See proof of expertise
- Find services quickly
- Contact the company easily

#### Technical Decision Makers

Examples:

- Engineering managers
- Enterprise architects
- Solution architects
- Technical leads

Needs:

- Evaluate technical credibility
- Understand architecture approach
- Review methodology
- Read technical content and case studies
- Assess whether the company can handle complex systems

#### Healthcare Insurance / RCM Stakeholders

Examples:

- Healthcare insurance operations leaders
- Revenue cycle leaders
- Claims, enrollment, billing, and provider platform owners
- Integration managers

Needs:

- Understand healthcare domain expertise
- Evaluate experience with EHR/EMR, billing platforms, clearinghouses, EDI, HL7, FHIR, and secure data access
- Assess risk, compliance, scalability, and delivery model

---

## 4. Problem Statement

Many healthcare insurance teams, healthcare technology groups, and healthcare operations organizations need help modernizing software systems, reducing technical debt, integrating platforms, and adopting AI-first development practices. However, they often struggle to identify consulting partners who combine hands-on engineering depth, healthcare domain understanding, architecture experience, business understanding, and secure delivery practices.

The company website must solve this by clearly explaining:

- Who the company helps
- What problems the company solves
- Why the company is credible
- How the company works
- What services are available
- How a visitor can take the next step

---

## 5. Goals and Success Metrics

### 5.1 Product Goals

1. Present a professional and trustworthy company identity.
2. Clearly communicate services and expertise.
3. Generate qualified inbound leads.
4. Establish technical authority through blog content and case studies.
5. Support SEO growth through structured content and metadata.
6. Provide a scalable foundation for future pages, articles, and lead magnets.
7. Implement the site using AI-first development practices with strong review, testing, and deployment controls.
8. Establish a reusable GitHub-based AI-First project template for future projects.

### 5.2 Success Metrics

| Metric                       | Target                                                        |
| ---------------------------- | ------------------------------------------------------------- |
| Website launch readiness     | MVP launched with all core pages                              |
| Lighthouse performance score | 90+ preferred                                                 |
| Mobile usability             | No major mobile layout issues                                 |
| SEO readiness                | Sitemap, metadata, headings, schema, and robots.txt completed |
| Contact conversion           | Visitors can submit contact form successfully                 |
| Lead magnet conversion       | Visitors can download checklist successfully                  |
| Blog publishing              | At least 3 initial posts at launch                            |
| Organic traffic growth       | Measured monthly after launch                                 |
| Contact form submissions     | Tracked as primary conversion                                 |
| Calendly CTA clicks          | Tracked where feasible                                        |
| Search Console indexing      | Core pages indexed after launch                               |
| CI/CD readiness              | Pull request checks run lint, tests, and build validation     |
| Template readiness           | Documentation supports reuse for future AI-First projects     |

---

## 6. Scope

### 6.1 MVP Scope

The first release should include:

- Home page
- Services page
- About page
- Blog listing page
- Blog detail page template
- Contact page
- Calendly scheduling CTA or embed
- One free downloadable lead magnet section or download CTA
- One anonymized healthcare case study
- CMS-managed content model
- SEO metadata
- Sitemap
- Robots.txt
- Analytics integration
- Contact form
- Mobile-responsive black-and-white layout
- Basic automated tests
- GitHub source control repository
- CI/CD pipeline
- Deployment pipeline
- Project documentation for AI-First reuse

### 6.2 Future Scope

Future releases may include:

- Multiple service-specific landing pages
- Newsletter signup
- Email automation
- Downloadable whitepapers
- More case studies
- Client testimonials
- Search functionality
- Resource library
- Multi-language content
- Admin dashboard for content management if CMS capabilities are not enough
- CRM integration
- Secure intake workflow
- Client portal
- AI assistant or chatbot — **owned by sibling product [Rose Services Assistance](../../Rose-Services-Assistance/docs/PRD.md)** (suite repo beside this website; not implemented in the website MVP)
- Payment workflow
- Private resource library
- Custom backend service
- Custom database
- AI evaluation roadmap (Phases 1–3; see **§26** and **§27**)

#### 6.2.1 Rose Services Assistance (suite child product)

Visitor-facing services Q&A / assist is tracked as a **separate project** so AI runtime, prompts, and evals can evolve independently of this marketing site:

| | |
|--|--|
| **Product** | Rose Services Assistance |
| **Repo (local)** | `../Rose-Services-Assistance/` |
| **Child PRD** | [`Rose-Services-Assistance/docs/PRD.md`](../../Rose-Services-Assistance/docs/PRD.md) |
| **Website role** | Thin embed / deep-link only (future); Formspree + Calendly remain here |
| **Knowledge** | Continues to use `docs/rosejs-knowledge/` as source of truth |
| **Eval tasks** | User-facing `TASK-094`–`096` stay **Blocked** until Assistance v1 ships |

This website MVP still excludes the chatbot (**§6.3**). Suite linkage does not move AI assistant delivery into this repository’s MVP scope.

### 6.3 Out of Scope for MVP

The MVP will not include:

- Custom database
- Custom backend service platform
- Full CRM integration
- Payment processing
- User authentication
- Client portal
- Complex admin dashboard
- AI chatbot
- Multi-tenant features
- Advanced marketing automation
- Storage of PHI/PII through the website

---

## 7. Positioning and Messaging

### 7.1 Recommended Positioning Statement

RoseJS helps healthcare insurance and healthcare technology teams modernize legacy platforms, design scalable software architecture, and deliver secure AI-first software solutions from strategy to deployment.

### 7.2 Alternative Positioning Statement

RoseJS helps healthcare organizations modernize legacy systems, design scalable software architecture, and build AI-first digital products with secure, maintainable, production-ready engineering practices.

### 7.3 Brand Tone

The brand should feel:

- Professional
- Clear
- Trustworthy
- Technical but approachable
- Strategic
- Practical
- Senior-level
- Outcome-focused

### 7.4 Messaging Principles

The website copy should:

- Avoid vague buzzwords
- Explain business value clearly
- Connect technical work to outcomes
- Show credibility through examples
- Use plain language for executives
- Include enough technical depth for architects and engineering leaders
- Emphasize healthcare insurance, architecture quality, delivery discipline, and AI-First methodology

---

## 8. User Personas

### 8.1 Persona 1: Healthcare CTO / Technical Leader

Needs:

- Wants a trusted architecture partner
- Needs to modernize or scale a product
- Wants clean technical direction
- May have limited internal architecture capacity

Key Questions:

- Can this company understand my system?
- Can they help me scale?
- Can they reduce technical debt?
- Can they deliver without overengineering?

### 8.2 Persona 2: Healthcare Insurance Platform Leader

Needs:

- Needs integration, modernization, or automation support
- Cares about compliance, PHI/PII, secure access, and reliability
- Wants someone who understands healthcare workflows

Key Questions:

- Do they understand healthcare systems?
- Do they understand healthcare insurance, RCM, EDI, HL7, FHIR, claims, enrollment, billing, provider data, and platform integration?
- Can they reduce operational risk?

### 8.3 Persona 3: Healthcare Engineering Manager

Needs:

- Needs architecture review, delivery acceleration, or modernization roadmap
- Wants structured execution
- Needs high-quality engineering practices

Key Questions:

- Is their methodology reliable?
- Do they write maintainable code?
- Do they test properly?
- Can they work with distributed teams?

---

## 9. User Journey

### 9.1 Main Visitor Journey

1. Visitor lands on Home page.
2. Visitor quickly understands what the company does.
3. Visitor reviews services.
4. Visitor reads a case study or blog post.
5. Visitor builds trust in the company’s expertise.
6. Visitor clicks a call-to-action.
7. Visitor submits the contact form or schedules a consultation.

### 9.2 SEO Visitor Journey

1. Visitor searches for a technical topic.
2. Visitor lands on a blog article.
3. Visitor reads useful guidance.
4. Visitor sees related services or checklist CTA.
5. Visitor explores the company website.
6. Visitor contacts the company, schedules a consultation, or downloads a lead magnet.

### 9.3 Referral Visitor Journey

1. Visitor receives a direct link from LinkedIn, email, or referral.
2. Visitor lands on Home or About page.
3. Visitor verifies credibility.
4. Visitor checks services and contact information.
5. Visitor reaches out or schedules a consultation.

---

## 10. Functional Requirements

## 10.1 Home Page

### Description

The Home page is the primary entry point. It must immediately communicate what the company does, who it helps, and why visitors should trust it.

### Requirements

| ID       | Requirement                                           | Priority    |
| -------- | ----------------------------------------------------- | ----------- |
| HOME-001 | Display hero section with clear value proposition     | Must Have   |
| HOME-002 | Display primary CTA such as “Schedule a Consultation” | Must Have   |
| HOME-003 | Display secondary CTA such as “Explore Services”      | Should Have |
| HOME-004 | Display service overview cards                        | Must Have   |
| HOME-005 | Display trust/credibility section                     | Must Have   |
| HOME-006 | Display AI-First methodology summary                  | Must Have   |
| HOME-007 | Display featured blog posts or insights               | Should Have |
| HOME-008 | Display final contact CTA                             | Must Have   |
| HOME-009 | Display free lead magnet CTA where appropriate        | Should Have |

### Acceptance Criteria

- Visitor can understand the company’s value within 5 seconds.
- Primary CTA is visible above the fold.
- Services are summarized clearly.
- Page is responsive on desktop, tablet, and mobile.
- Page includes proper SEO title and meta description.

---

## 10.2 Services Page

### Description

The Services page explains the company’s consulting and engineering offerings.

### Initial Services

1. Software Architecture Consulting
2. Legacy Application Modernization
3. AI-First Product Development
4. Healthcare Insurance / RCM Platform Consulting
5. Cloud and API Integration
6. Technical Debt Assessment
7. Secure Data and System Integration

### Requirements

| ID       | Requirement                                                       | Priority    |
| -------- | ----------------------------------------------------------------- | ----------- |
| SERV-001 | Display all core services                                         | Must Have   |
| SERV-002 | Provide description, value, and example outcomes for each service | Must Have   |
| SERV-003 | Include CTA for consultation                                      | Must Have   |
| SERV-004 | Include internal links to related blog posts or case studies      | Should Have |
| SERV-005 | Support future service-specific landing pages                     | Should Have |

### Acceptance Criteria

- Each service explains the problem solved and business value.
- Services are easy to scan.
- CTA is available on the page.
- Page structure supports SEO.

---

## 10.3 About Page

### Description

The About page builds trust by explaining the company background, philosophy, experience, and approach.

### Requirements

| ID        | Requirement                                               | Priority  |
| --------- | --------------------------------------------------------- | --------- |
| ABOUT-001 | Display founder/company background                        | Must Have |
| ABOUT-002 | Explain architecture and engineering philosophy           | Must Have |
| ABOUT-003 | Highlight healthcare, enterprise, and AI-first experience | Must Have |
| ABOUT-004 | Include credibility points and differentiators            | Must Have |
| ABOUT-005 | Include CTA to contact                                    | Must Have |

### Acceptance Criteria

- Page communicates senior-level expertise.
- Page avoids sounding like a generic resume.
- Page explains why the company is different.
- CTA is visible.

---

## 10.4 Blog / Insights

### Description

The Blog section is the primary long-term traffic engine. It should publish technical and business-focused content that attracts organic search traffic.

### Requirements

| ID       | Requirement                                    | Priority    |
| -------- | ---------------------------------------------- | ----------- |
| BLOG-001 | Display blog listing page                      | Must Have   |
| BLOG-002 | Display individual blog article pages          | Must Have   |
| BLOG-003 | Support title, date, summary, tags, and author | Must Have   |
| BLOG-004 | Support SEO metadata per article               | Must Have   |
| BLOG-005 | Support internal links to services             | Should Have |
| BLOG-006 | Support featured posts                         | Should Have |
| BLOG-007 | Support categories or tags                     | Should Have |
| BLOG-008 | Blog content must be CMS-managed               | Must Have   |

### Initial Blog Topics

- How to Modernize a Legacy Application
- AI-First Software Development Methodology
- Architecture Review Checklist for Enterprise Applications
- Healthcare RCM Platform Modernization Guide
- API Integration Strategy for Healthcare Systems
- How to Reduce Technical Debt Without Rebuilding Everything
- Secure Data Access Patterns for PHI and PII
- Onshore-Offshore Delivery Model for Software Projects

### Acceptance Criteria

- Blog listing displays available posts.
- Blog detail pages are readable and SEO-friendly.
- Articles include related CTAs.
- Blog content can be extended without major code changes.
- Blog content can be managed through the selected CMS.

---

## 10.5 Case Study Page / Section

### Description

The case study section demonstrates real-world credibility using anonymized examples.

### Requirements

| ID       | Requirement                                      | Priority    |
| -------- | ------------------------------------------------ | ----------- |
| CASE-001 | Display at least one anonymized case study       | Must Have   |
| CASE-002 | Include problem, approach, solution, and outcome | Must Have   |
| CASE-003 | Avoid confidential client information            | Must Have   |
| CASE-004 | Link case study to related services              | Should Have |
| CASE-005 | Case study content must be CMS-managed           | Must Have   |

### Example Case Study Topics

- Healthcare Data Platform Modernization
- Legacy Application Architecture Review
- Secure API Integration for Enterprise Systems
- AI-First Rebuild of an Existing Application

### Acceptance Criteria

- Case study demonstrates business and technical value.
- No confidential client information is exposed.
- Case study supports trust and conversion.
- Case study can be managed through the selected CMS.

---

## 10.6 Contact Page

### Description

The Contact page allows prospective clients to reach out easily.

### Requirements

| ID       | Requirement                                                                      | Priority    |
| -------- | -------------------------------------------------------------------------------- | ----------- |
| CONT-001 | Display contact form                                                             | Must Have   |
| CONT-002 | Include name, email, company, service interest, and message fields               | Must Have   |
| CONT-003 | Validate required fields                                                         | Must Have   |
| CONT-004 | Validate email format                                                            | Must Have   |
| CONT-005 | Display success and error states                                                 | Must Have   |
| CONT-006 | Include direct email placeholder                                                 | Must Have   |
| CONT-007 | Include LinkedIn placeholder                                                     | Should Have |
| CONT-008 | Include Calendly or scheduling placeholder                                       | Must Have   |
| CONT-009 | Contact form must use a third-party form provider or serverless function for MVP | Must Have   |

### Acceptance Criteria

- Visitor can submit the form successfully.
- Invalid form input is handled clearly.
- Form works on mobile.
- Submission is routed to the company email or chosen form provider.
- Form implementation does not require a custom backend service for MVP.

---

## 10.7 Lead Magnet

### Description

The website should include a free downloadable resource to build authority and provide immediate value. The first lead magnet will be freely downloadable without requiring an email gate.

### Recommended Lead Magnet

Legacy Application Modernization Checklist

### Requirements

| ID       | Requirement                                                        | Priority    |
| -------- | ------------------------------------------------------------------ | ----------- |
| LEAD-001 | Display lead magnet CTA                                            | Should Have |
| LEAD-002 | Allow visitor to download the resource without submitting an email | Must Have   |
| LEAD-003 | Provide PDF or downloadable checklist                              | Should Have |
| LEAD-004 | Track lead magnet conversion                                       | Could Have  |
| LEAD-005 | Lead magnet content should be CMS-managed or CMS-referenced        | Should Have |

### Acceptance Criteria

- Visitor understands the value of the download.
- Download works without requiring email capture.
- Download link or delivery flow works.

---

## 10.8 Scheduling / Calendly

### Description

The website should provide a clear path for qualified visitors to schedule a consultation using Calendly.

### Requirements

| ID      | Requirement                                                  | Priority    |
| ------- | ------------------------------------------------------------ | ----------- |
| CAL-001 | Display Calendly CTA on Contact page                         | Must Have   |
| CAL-002 | Display Calendly CTA in final CTA sections where appropriate | Should Have |
| CAL-003 | Support Calendly embed or external scheduling link           | Must Have   |
| CAL-004 | Track Calendly CTA clicks through analytics where feasible   | Should Have |

### Acceptance Criteria

- Visitor can access the Calendly scheduling flow from the Contact page.
- Calendly CTA is clear and professional.
- Scheduling flow does not block the contact form option.

---

## 11. Non-Functional Requirements

## 11.1 Performance

| ID           | Requirement                                       | Priority    |
| ------------ | ------------------------------------------------- | ----------- |
| NFR-PERF-001 | Website should load quickly on desktop and mobile | Must Have   |
| NFR-PERF-002 | Images should be optimized                        | Must Have   |
| NFR-PERF-003 | JavaScript bundle should be minimized             | Should Have |
| NFR-PERF-004 | Lighthouse performance score should target 90+    | Should Have |

## 11.2 SEO

| ID          | Requirement                                           | Priority    |
| ----------- | ----------------------------------------------------- | ----------- |
| NFR-SEO-001 | Each page must have unique title and meta description | Must Have   |
| NFR-SEO-002 | Website must include sitemap.xml                      | Must Have   |
| NFR-SEO-003 | Website must include robots.txt                       | Must Have   |
| NFR-SEO-004 | Pages must use proper heading hierarchy               | Must Have   |
| NFR-SEO-005 | Blog posts must support metadata                      | Must Have   |
| NFR-SEO-006 | Open Graph metadata should be included                | Should Have |
| NFR-SEO-007 | Structured data/schema should be added where useful   | Should Have |
| NFR-SEO-008 | CMS content model must support SEO fields             | Must Have   |

## 11.3 Accessibility

| ID           | Requirement                                    | Priority  |
| ------------ | ---------------------------------------------- | --------- |
| NFR-A11Y-001 | Site must be keyboard navigable                | Must Have |
| NFR-A11Y-002 | Images must include alt text where appropriate | Must Have |
| NFR-A11Y-003 | Forms must include accessible labels           | Must Have |
| NFR-A11Y-004 | Color contrast must be readable                | Must Have |
| NFR-A11Y-005 | Navigation must work on mobile and keyboard    | Must Have |

## 11.4 Security

| ID          | Requirement                                                                                                          | Priority    |
| ----------- | -------------------------------------------------------------------------------------------------------------------- | ----------- |
| NFR-SEC-001 | Contact form must validate and sanitize input                                                                        | Must Have   |
| NFR-SEC-002 | API keys and secrets must not be exposed in frontend code                                                            | Must Have   |
| NFR-SEC-003 | HTTPS must be enabled                                                                                                | Must Have   |
| NFR-SEC-004 | Spam protection should be considered for forms                                                                       | Should Have |
| NFR-SEC-005 | The MVP must not collect or store PHI/PII beyond basic business contact information                                  | Must Have   |
| NFR-SEC-006 | Secrets for CMS, analytics, form provider, or deployment must be stored as environment variables or platform secrets | Must Have   |

## 11.5 Maintainability

| ID            | Requirement                                       | Priority  |
| ------------- | ------------------------------------------------- | --------- |
| NFR-MAINT-001 | Components should be reusable                     | Must Have |
| NFR-MAINT-002 | Content should be easy to update                  | Must Have |
| NFR-MAINT-003 | Folder structure should support growth            | Must Have |
| NFR-MAINT-004 | Code should pass linting and formatting checks    | Must Have |
| NFR-MAINT-005 | Documentation should support future project reuse | Must Have |

## 11.6 Source Control and CI/CD

| ID          | Requirement                                                                   | Priority    |
| ----------- | ----------------------------------------------------------------------------- | ----------- |
| NFR-SCM-001 | Project source code must be managed in GitHub                                 | Must Have   |
| NFR-SCM-002 | Repository must use a clear branching strategy                                | Must Have   |
| NFR-SCM-003 | Pull requests must be required before merging to the main production branch   | Must Have   |
| NFR-SCM-004 | CI checks must run automatically on pull requests                             | Must Have   |
| NFR-SCM-005 | CI pipeline must run lint, test, and build validation                         | Must Have   |
| NFR-SCM-006 | Deployment should be triggered from approved merges to the production branch  | Must Have   |
| NFR-SCM-007 | Repository should include pull request and issue templates                    | Should Have |
| NFR-SCM-008 | Repository documentation should support reuse as an AI-First project template | Should Have |

## 11.7 Backend and Database Decision

For the MVP, RoseJS will not include a custom database or custom backend service. Content will be managed through a CMS, scheduling through Calendly, contact submissions through a form provider or serverless function, and analytics through Plausible Analytics.

The architecture should remain backend-ready so future features such as a client portal, CRM integration, secure intake workflow, AI assistant, admin dashboard, payment workflow, or private resource library can be added later without requiring a full rewrite.

| ID          | Requirement                                                                                      | Priority    |
| ----------- | ------------------------------------------------------------------------------------------------ | ----------- |
| NFR-DB-001  | MVP must not require a custom database unless a future feature requires persistent business data | Must Have   |
| NFR-DB-002  | CMS will serve as the content data source for pages, blog posts, case studies, and lead magnets  | Must Have   |
| NFR-API-001 | MVP must not require a custom backend service unless needed for secure business logic            | Must Have   |
| NFR-API-002 | Architecture should support future backend integration                                           | Should Have |
| NFR-API-003 | Contact form may use a third-party form provider or serverless function                          | Must Have   |

## 11.8 AI Evaluation

RoseJS uses a phased AI evaluation roadmap (see **§26** and **§27**) to measure whether AI-assisted planning, implementation, and review stay aligned with documented requirements. These non-functional requirements apply after MVP launch as each phase is adopted.

| ID           | Requirement                                                                                                            | Priority    | Phase |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ----------- | ----- |
| NFR-EVAL-001 | AI-assisted work must trace back to documented source-of-truth artifacts (PRD, Architecture, brand, content contracts) | Should Have | 1     |
| NFR-EVAL-002 | Eval criteria, datasets, and pass thresholds must be documented and version-controlled                                 | Should Have | 1–3   |
| NFR-EVAL-003 | Change-based evals must run on pull requests before merge                                                              | Should Have | 2     |
| NFR-EVAL-004 | Regression evals must cover critical visitor journeys defined in §12.3                                                 | Should Have | 2     |
| NFR-EVAL-005 | AI assistant evals must verify guardrails (no PHI storage, no unauthorized backend, on-brand responses)                | Could Have  | 3     |
| NFR-EVAL-006 | Eval results must be reproducible locally and in CI                                                                    | Should Have | 1–3   |

---

## 12. AI-First Delivery Methodology

The project will be delivered using four AI-First pillars:

1. Skill
2. Code Review
3. Test Suites
4. Deployment

---

## 12.1 Pillar 1: Skill

### Goal

Use AI to accelerate research, planning, content generation, UX design, architecture, and code implementation while keeping the human architect responsible for final decisions.

### Activities

- Generate business positioning ideas
- Draft website copy
- Create SEO keyword clusters
- Generate sitemap and page structure
- Draft technical architecture
- Create reusable component strategy
- Generate initial blog outlines
- Produce PRD, Architecture.md, SEO_Strategy.md, Content_Plan.md, Traceability_Matrix.md, Tasks.md, Testing_Strategy.md, Deployment_Guide.md, and AI_Workflow_Guide.md

### Deliverables

- PRD.md
- Architecture.md
- SEO_Strategy.md
- Content_Plan.md
- Component_Map.md
- Traceability_Matrix.md
- Tasks.md
- Testing_Strategy.md
- Deployment_Guide.md
- AI_Workflow_Guide.md
- Code_Review_Checklist.md

### Acceptance Criteria

- All major business and technical decisions are documented.
- AI output is reviewed and approved by the human architect.
- Requirements are traceable to implementation tasks.
- Documentation supports reuse as a future AI-First template.

---

## 12.2 Pillar 2: Code Review

### Goal

Use AI-generated code safely by enforcing review standards before merging or deploying.

### Review Areas

- Architecture alignment
- Component reusability
- Type safety
- Accessibility
- SEO
- Performance
- Security
- Maintainability
- Responsive design
- Content accuracy
- CMS integration boundaries
- Environment variable and secrets handling

### Required Code Review Checks

| ID     | Requirement                                           | Priority    |
| ------ | ----------------------------------------------------- | ----------- |
| CR-001 | All AI-generated code must be reviewed before merge   | Must Have   |
| CR-002 | Components must follow approved folder structure      | Must Have   |
| CR-003 | Pages must include SEO metadata                       | Must Have   |
| CR-004 | Forms must be reviewed for validation and security    | Must Have   |
| CR-005 | UI must be checked on desktop and mobile              | Must Have   |
| CR-006 | Duplicated code should be refactored                  | Should Have |
| CR-007 | Pull requests must show evidence of passing CI checks | Must Have   |

### Acceptance Criteria

- No AI-generated code is accepted without review.
- Pull requests include test results or validation notes.
- Review comments are resolved before deployment.
- CI checks pass before merge.

---

## 12.3 Pillar 3: Test Suites

### Goal

Build confidence in quality and reduce regressions using automated tests.

### Required Test Coverage

| Test Type           | Tool Recommendation         | Scope                                  |
| ------------------- | --------------------------- | -------------------------------------- |
| Unit Tests          | Vitest                      | Utility functions and small components |
| Component Tests     | React Testing Library       | UI behavior and rendering              |
| End-to-End Tests    | Playwright                  | Visitor journeys                       |
| Accessibility Tests | axe-core / Playwright       | Accessibility validation               |
| SEO Checks          | Lighthouse / custom scripts | Metadata and performance               |
| Link Checks         | Broken link checker         | Internal and external links            |
| CI Checks           | GitHub Actions              | Lint, tests, build validation          |

### Critical Flows to Test

- Home page renders
- Visitor navigates to Services
- Visitor navigates to About
- Visitor opens Blog listing
- Visitor opens Blog article
- Visitor submits Contact form
- Invalid Contact form input displays errors
- Visitor clicks Calendly CTA
- Visitor downloads lead magnet
- Mobile navigation opens and closes
- CTA buttons navigate correctly

### Acceptance Criteria

- Core tests pass before production deployment.
- Contact form flow is tested.
- Navigation is tested.
- Basic accessibility checks pass.
- Build command completes successfully.
- CI pipeline runs on pull requests.

Post-MVP, automated and AI-specific evals extend this pillar through the three-phase roadmap in **§26** and **§27** (`EVAL-P1-*`, `EVAL-P2-*`, `EVAL-P3-*`, `EVAL-SOT-*`, `EVAL-REG-*`, `EVAL-AIA-*`).

---

## 12.4 Pillar 4: Deployment

### Goal

Deploy the website through a reliable GitHub-based CI/CD pipeline with pull request checks, preview environments where supported, production release controls, monitoring, and rollback capability.

### Recommended Deployment Flow

1. AI/human creates code changes.
2. Changes are committed to GitHub.
3. Pull request is opened.
4. Automated CI checks run linting, tests, and build validation.
5. Preview deployment is generated where supported.
6. Human review approves the release.
7. Approved changes are merged to the production branch.
8. Production deployment is completed through the CI/CD pipeline.
9. Analytics and monitoring are reviewed.

### Requirements

| ID      | Requirement                                                       | Priority    |
| ------- | ----------------------------------------------------------------- | ----------- |
| DEP-001 | Website must be deployed to production hosting                    | Must Have   |
| DEP-002 | Preview deployments should be available for review                | Should Have |
| DEP-003 | Domain must be connected                                          | Must Have   |
| DEP-004 | HTTPS/SSL must be enabled                                         | Must Have   |
| DEP-005 | Rollback process must be documented                               | Should Have |
| DEP-006 | Analytics must be installed                                       | Must Have   |
| DEP-007 | Google Search Console must be configured                          | Must Have   |
| DEP-008 | GitHub must be used as the source control repository              | Must Have   |
| DEP-009 | CI/CD pipeline must run on pull requests                          | Must Have   |
| DEP-010 | CI/CD pipeline must run lint, tests, and build validation         | Must Have   |
| DEP-011 | CI/CD pipeline should generate preview deployments when supported | Should Have |
| DEP-012 | Production deployment must be tied to an approved merge workflow  | Must Have   |

### Acceptance Criteria

- Production site is accessible through the company domain.
- HTTPS works.
- Contact form works in production.
- Analytics captures traffic.
- Search engines can crawl the site.
- Pull request checks pass before merge.
- Deployment workflow is documented.

---

## 13. Recommended Technology Stack

### 13.1 Selected Stack

| Layer              | Recommendation                                                                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework          | React + Vite                                                                                                                                             |
| Language           | TypeScript                                                                                                                                               |
| Styling            | Tailwind CSS                                                                                                                                             |
| Hosting            | Railway, Netlify, Vercel, or self-hosted                                                                                                                 |
| Source Control     | GitHub                                                                                                                                                   |
| CI/CD              | GitHub Actions or hosting-provider CI/CD integrated with GitHub                                                                                          |
| Content Management | CMS                                                                                                                                                      |
| Backend            | No custom backend required for MVP; backend-ready architecture for future expansion                                                                      |
| Database           | No custom database required for MVP; CMS acts as the content data source                                                                                 |
| Forms              | To be selected; recommended options include Formspree, Resend, Netlify Forms, or a serverless function                                                   |
| Scheduling         | Calendly                                                                                                                                                 |
| Testing            | Vitest, React Testing Library, Playwright                                                                                                                |
| Analytics          | Plausible Analytics recommended for simple, privacy-friendly analytics; Google Analytics can be added later if deeper ad/marketing attribution is needed |
| SEO                | Sitemap, robots.txt, metadata, schema, CMS-managed page metadata                                                                                         |

### 13.2 CMS Recommendation

The website will use a CMS for content management instead of Markdown/MDX. The CMS should support service pages, blog posts, case studies, SEO metadata, author information, categories, tags, and downloadable resources.

Recommended CMS options:

| CMS        | Best For                                                     |
| ---------- | ------------------------------------------------------------ |
| Sanity     | Flexible structured content and developer-friendly workflows |
| Strapi     | Self-hosted CMS with API-first content management            |
| Contentful | Managed enterprise-friendly CMS                              |

For RoseJS, Sanity or Strapi are recommended. Sanity is a strong choice if speed, flexibility, and a polished editing experience are priorities. Strapi is a strong choice if full self-hosting control is preferred.

### 13.3 Analytics Recommendation

Plausible Analytics is recommended for the first version because it is lightweight, privacy-friendly, easy to understand, and sufficient for tracking traffic, referral sources, top pages, and conversion events. Google Analytics can be added later if RoseJS needs deeper campaign tracking, paid advertising attribution, or advanced audience reporting.

### 13.4 Form Provider Recommendation

The form provider is still open. Recommended options are:

| Option              | Best For                                                          |
| ------------------- | ----------------------------------------------------------------- |
| Formspree           | Fast setup for simple contact forms                               |
| Netlify Forms       | Simple form handling if hosting on Netlify                        |
| Resend              | Email-based workflows and developer-controlled form notifications |
| Serverless function | More control without creating a full backend platform             |

For MVP, use a third-party form provider or serverless function instead of a custom backend service.

---

## 14. Information Architecture

### 14.1 Primary Navigation

- Home
- Services
- About
- Insights
- Case Studies
- Contact
- Schedule Consultation

### 14.2 Suggested URL Structure

```text
/
/services
/about
/insights
/insights/[slug]
/case-studies
/case-studies/[slug]
/contact
/schedule
```

### 14.3 Future URL Structure

```text
/services/software-architecture
/services/legacy-modernization
/services/ai-first-development
/services/healthcare-rcm-consulting
/services/cloud-api-integration
/resources/legacy-modernization-checklist
```

---

## 15. Content Requirements

### 15.1 Home Page Content

Required sections:

- Hero headline
- Hero subheadline
- Primary CTA
- Secondary Calendly CTA where appropriate
- Service overview
- Why choose us
- AI-First methodology
- Featured insights
- Free downloadable lead magnet CTA
- Final CTA

### 15.2 Services Content

Each service should include:

- Service title
- Problem it solves
- What the company does
- Business outcome
- Example deliverables
- CTA

### 15.3 Blog Content

Each blog post should include:

- Title
- Summary
- Main content
- Internal links
- CTA
- SEO title
- Meta description
- Tags

### 15.4 Case Study Content

Each case study should include:

- Problem
- Context
- Approach
- Architecture solution
- Outcome
- Lessons learned
- Related services

### 15.5 AI-First Template Documentation Content

The repository should include reusable documentation patterns for future AI-First projects:

- README.md
- PRD.md
- Architecture.md
- Traceability_Matrix.md
- Tasks.md
- Testing_Strategy.md
- Deployment_Guide.md
- AI_Workflow_Guide.md
- Code_Review_Checklist.md
- .github/pull_request_template.md
- .github/ISSUE_TEMPLATE/

---

## 16. SEO Requirements

### 16.1 SEO Strategy

The website should target high-intent technical and business search terms related to software modernization, architecture consulting, healthcare systems, healthcare insurance systems, and AI-first development.

### 16.2 Keyword Clusters

#### Legacy Modernization

- legacy application modernization
- modernize legacy systems
- legacy software architecture
- technical debt assessment
- application rebuild strategy

#### Software Architecture

- software architecture consulting
- enterprise architecture review
- solution architecture services
- scalable software architecture
- architecture review checklist

#### Healthcare Insurance / RCM

- healthcare insurance software integration
- RCM platform modernization
- healthcare data integration
- HL7 FHIR API integration
- secure healthcare architecture
- claims platform modernization
- enrollment system integration
- provider data integration
- billing platform modernization

#### AI-First Development

- AI-first software development
- AI-assisted software engineering
- AI code review process
- AI software development methodology

### 16.3 SEO Acceptance Criteria

- Each page has a unique title.
- Each page has a unique meta description.
- H1/H2 hierarchy is logical.
- Sitemap exists.
- Robots.txt exists.
- Blog posts support SEO metadata.
- Internal links connect services, blog posts, and case studies.
- CMS content model supports page-level and article-level SEO fields.

---

## 17. Analytics Requirements

### 17.1 Events to Track

| Event               | Description                              |
| ------------------- | ---------------------------------------- |
| Page View           | Visitor views a page                     |
| CTA Click           | Visitor clicks primary CTA               |
| Contact Submit      | Visitor submits contact form             |
| Calendly Click      | Visitor clicks scheduling CTA            |
| Lead Magnet Click   | Visitor clicks download CTA              |
| External Link Click | Visitor clicks LinkedIn or external link |
| Blog View           | Visitor views blog article               |

### 17.2 Analytics Acceptance Criteria

- Plausible Analytics script is installed.
- Page views are tracked.
- Contact form submissions are tracked where feasible.
- CTA clicks are tracked where feasible.
- Calendly clicks are tracked where feasible.
- Lead magnet clicks are tracked where feasible.
- Analytics are verified after deployment.

---

## 18. Design Requirements

### 18.1 Visual Style

The website will use a black-and-white brand color palette. The design should feel:

- Clean
- Modern
- Technical
- Professional
- Trustworthy
- Minimal but not empty
- Easy to scan
- High contrast
- Senior-level and polished

### 18.2 UI Requirements

- Responsive navigation
- Clear CTA buttons
- Service cards
- Blog cards
- Case study cards
- Contact form
- Calendly CTA or embed
- Free lead magnet CTA
- Footer with contact and social links
- Consistent typography
- Consistent spacing

### 18.3 Accessibility Design Requirements

- Sufficient color contrast
- Visible focus states
- Clear form labels
- Descriptive link text
- Semantic HTML structure
- Mobile-friendly tap targets

---

## 19. Architecture Requirements

### 19.1 Recommended Folder Structure

```text
rosejs-website/
  .github/
    workflows/
      ci.yml
      deploy.yml
    pull_request_template.md
    ISSUE_TEMPLATE/

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

  src/
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

    components/
      layout/
        Header.tsx
        Footer.tsx
        Navigation.tsx
      sections/
        Hero.tsx
        ServicesOverview.tsx
        MethodologySection.tsx
        CTASection.tsx
        LeadMagnetSection.tsx
      cards/
        ServiceCard.tsx
        BlogCard.tsx
        CaseStudyCard.tsx
      forms/
        ContactForm.tsx

    cms/
      client.ts
      queries.ts
      schemas/
        services.ts
        blogPosts.ts
        caseStudies.ts
        leadMagnets.ts

    lib/
      seo.ts
      analytics.ts
      utils.ts

    tests/
      unit/
      e2e/
```

### 19.2 Architecture Principles

- Reusable components
- Content separated from presentation
- SEO metadata centralized where possible
- Strong typing with TypeScript
- Simple routing
- Scalable blog and case study structure
- Minimal unnecessary dependencies
- GitHub-based source control
- CI/CD-first delivery workflow
- No custom backend or database for MVP
- Backend-ready architecture for future expansion
- Clear documentation for reuse as an AI-First template

### 19.3 MVP Architecture Decision

The MVP architecture should follow this model:

```text
React + Vite Frontend
        ↓
CMS for content
        ↓
Calendly for scheduling
        ↓
Form Provider or Serverless Function for contact form
        ↓
Plausible Analytics for tracking
        ↓
Static Hosting / Railway / Vercel / Netlify / Self-hosted
        ↓
GitHub + CI/CD
```

The MVP architecture should not require this model:

```text
React Frontend
        ↓
Custom Backend Service
        ↓
Custom Database
```

---

## 20. Risks and Mitigations

| Risk                               | Impact                   | Mitigation                                                        |
| ---------------------------------- | ------------------------ | ----------------------------------------------------------------- |
| Website sounds too generic         | Weak conversion          | Use specific positioning and case studies                         |
| AI-generated content feels shallow | Low trust                | Human review and subject-matter editing                           |
| SEO takes time                     | Slow traffic growth      | Publish consistently and use targeted keywords                    |
| Contact form spam                  | Operational noise        | Add validation and spam protection                                |
| Overbuilding MVP                   | Delayed launch           | Limit scope to core pages first; avoid custom backend/database    |
| Poor mobile UX                     | Lost leads               | Test on mobile before launch                                      |
| AI-generated code quality issues   | Maintenance problems     | Enforce code review, tests, and CI/CD checks                      |
| CMS choice delays implementation   | Delayed content workflow | Select Sanity, Strapi, or Contentful before implementation begins |
| CI/CD setup is skipped             | Harder maintenance       | Make GitHub and CI/CD must-have requirements                      |

---

## 21. MVP Launch Checklist

### Content

- Home page copy completed
- Services copy completed
- About page copy completed
- Contact page copy completed
- CMS content model configured
- 3 blog posts completed in CMS
- 1 healthcare-focused case study completed in CMS
- Free downloadable lead magnet completed or placeholder ready

### Engineering

- GitHub repository created
- Branching strategy defined
- Pull request template created
- Issue templates created where appropriate
- CI/CD workflow configured
- React + Vite project scaffolded
- Routing implemented
- Components created
- CMS integration implemented
- Contact form implemented through provider or serverless function
- Calendly CTA or embed implemented
- Plausible Analytics implemented
- SEO metadata added
- Sitemap added
- Robots.txt added
- Responsive black-and-white design completed
- Tests added
- Build passes
- Pull request checks pass
- Deployment workflow is documented

### Deployment

- GitHub repository connected to hosting provider
- Hosting configured
- Domain connected
- SSL enabled
- Preview deployment configured where supported
- Production deployment completed through approved merge and CI/CD workflow
- Plausible Analytics installed
- Search Console configured
- Contact form tested in production
- Rollback process documented

---

## 22. Post-Launch Roadmap

### First 30 Days

- Publish 4 blog posts
- Submit sitemap to Google Search Console
- Share content on LinkedIn
- Verify analytics
- Fix indexing or crawl issues
- Improve homepage CTA if needed
- Review CI/CD deployment workflow after first production updates

### Days 31–60

- Publish 4 more blog posts
- Add another case study
- Add FAQ sections to service pages
- Create or improve lead magnet
- Review contact form conversion
- Decide whether newsletter capture is needed

### Days 61–90

- Review analytics
- Identify top-performing pages
- Improve conversion paths
- Build service-specific landing pages
- Repurpose blog posts into LinkedIn posts
- Add testimonials or more proof points
- Evaluate whether future backend, CRM, or database features are justified

### AI Evaluation Roadmap (Post-MVP)

| Timeframe   | Phase | Focus                                                                   |
| ----------- | ----- | ----------------------------------------------------------------------- |
| Days 31–60  | 1     | Source-of-truth evals — golden references from PRD, Architecture, brand |
| Days 61–90  | 2     | Change-based and regression evals — PR gates and journey coverage       |
| Days 91–120 | 3     | AI assistant evals — guardrails, rubrics, and workflow adherence        |

See **§26** and **§27** for requirement IDs, exit criteria, and traceability to `Tasks.md`.

---

## 23. Definition of Done

The MVP is considered complete when:

1. All core pages are implemented.
2. Website is responsive across desktop, tablet, and mobile.
3. Contact form works.
4. Calendly scheduling CTA or embed works.
5. Free lead magnet download works.
6. SEO metadata is configured.
7. Sitemap and robots.txt are available.
8. Blog section supports CMS-managed article publishing.
9. At least three blog posts are ready.
10. At least one case study is available.
11. Basic tests pass.
12. CI/CD checks run successfully on pull requests.
13. GitHub repository structure supports project reuse.
14. Production deployment is live.
15. Plausible Analytics is installed.
16. Search Console is configured.
17. The site clearly communicates the company’s value proposition.
18. No custom backend or custom database is required for MVP.

---

## 24. Confirmed Project Decisions and Remaining Open Questions

### 24.1 Confirmed Decisions

| Question                 | Decision                                                                     |
| ------------------------ | ---------------------------------------------------------------------------- |
| Final company name       | RoseJS                                                                       |
| Primary industry focus   | Healthcare, with emphasis on healthcare insurance                            |
| Website framework        | React + Vite                                                                 |
| Content management       | CMS                                                                          |
| Scheduler                | Calendly                                                                     |
| Analytics tool           | Plausible Analytics recommended                                              |
| Brand color palette      | Black and white                                                              |
| First lead magnet access | Free downloadable, not email-gated                                           |
| Priority industry        | Healthcare                                                                   |
| Source control           | GitHub                                                                       |
| CI/CD                    | Required for pull request checks and deployment readiness                    |
| Backend/database for MVP | No custom backend or database; CMS and third-party services handle MVP needs |
| Future architecture      | Backend-ready for future expansion                                           |

### 24.2 Resolved Implementation Decisions

1. Domain: use a production custom domain to be finalized during deployment setup; all pre-launch configs should use the hosting preview domain until the final DNS cutover.
2. Form provider: use Formspree for MVP contact form handling.
3. CMS selection: use Sanity as the CMS for MVP content models and editorial workflows.
4. Calendly integration mode: use an external scheduling link from CTA buttons and the `/schedule` page.
5. Hosting provider: use Railway for MVP hosting and preview deployments.
6. Branching strategy: use GitHub Flow (`main`, `feature/*`, `fix/*`, `docs/*`).

---

## 25. Recommended Next Step

After this PRD is approved, the next documents should be created in this order:

1. Architecture.md
2. SEO_Strategy.md
3. Content_Plan.md
4. Component_Map.md
5. Traceability_Matrix.md
6. Tasks.md
7. Testing_Strategy.md
8. Deployment_Guide.md
9. AI_Workflow_Guide.md
10. Code_Review_Checklist.md

The Tasks.md file should be generated from this PRD, Architecture.md, and the Traceability Matrix, not only from the architecture plan. This ensures implementation tasks stay aligned with business requirements, user journeys, SEO needs, testing, source control, CI/CD, and deployment readiness.

The Architecture.md should use this PRD as the source of truth for the MVP architecture decisions, especially:

- React + Vite
- CMS-managed content
- No custom backend/database for MVP
- GitHub source control
- CI/CD-first delivery
- Calendly scheduling
- Plausible Analytics
- Backend-ready future expansion

---

## 26. AI Evaluation Roadmap

### 26.1 Purpose

RoseJS is delivered using AI-First workflows (§12). This roadmap defines how the project evaluates whether AI-assisted outputs and automated checks remain aligned with business requirements, architecture boundaries, and quality standards. Requirements use traceable IDs mapped to implementation tasks in `Tasks.md` (§29).

### 26.2 Roadmap Overview

| Phase | Name                              | Goal                                                                                 | Primary IDs               |
| ----- | --------------------------------- | ------------------------------------------------------------------------------------ | ------------------------- |
| 1     | Source-of-truth evals             | Establish golden references from authoritative docs and contracts                    | `EVAL-P1-*`, `EVAL-SOT-*` |
| 2     | Change-based and regression evals | Detect regressions on every change; gate merges on critical flows                    | `EVAL-P2-*`, `EVAL-REG-*` |
| 3     | AI assistant evals                | Measure assistant adherence to workflow, guardrails, positioning, and business goals | `EVAL-P3-*`, `EVAL-AIA-*` |

Phases are sequential: Phase 2 depends on golden references from Phase 1; Phase 3 depends on CI eval infrastructure from Phase 2.

### 26.3 Phase 1: Source-of-truth evals

**Goal:** Define what “correct” means before measuring change. Source-of-truth evals compare AI or automated outputs against canonical project artifacts—not against model memory or ad hoc prompts.

**Authoritative sources:**

- `docs/rosejs-knowledge/` approved knowledge files (see **§27**, `EVAL-P1-001`)
- `PRD.md` (functional and non-functional requirements)
- `Architecture.md` and ADRs
- `docs/Brand_and_Domain.md`
- `Component_Map.md`
- `Traceability_Matrix.md`
- Route map, SEO defaults, and CMS content contracts

| ID           | Requirement                                                                                                  | Priority    |
| ------------ | ------------------------------------------------------------------------------------------------------------ | ----------- |
| EVAL-SOT-001 | Maintain a version-controlled eval catalog listing golden references and linked requirement IDs              | Must Have   |
| EVAL-SOT-002 | Define golden-answer cases for routes, page titles, brand tokens, core CTAs, and healthcare positioning copy | Must Have   |
| EVAL-SOT-003 | Document expected behavior for CMS live content vs local fallback content boundaries                         | Must Have   |
| EVAL-SOT-004 | Map each golden case to at least one PRD requirement ID or architecture component                            | Must Have   |
| EVAL-SOT-005 | Provide a local eval runner that reports pass/fail against golden references                                 | Should Have |

**Phase 1 exit criteria:**

- Eval catalog exists and is linked from `Testing_Strategy.md` or a dedicated eval doc.
- At least one golden case exists per core page route (`/`, `/services`, `/about`, `/blog`, `/contact`, `/schedule`).
- `TASK-078` through `TASK-081` (see `Tasks.md`) are complete or explicitly deferred with rationale.

### 26.4 Phase 2: Change-based and regression evals

**Goal:** On every meaningful change, run targeted evals against Phase 1 golden references and existing automated tests to catch regressions before merge. Detailed requirements: **§27** (`EVAL-P2-001`–`EVAL-P2-003`).

| ID           | Requirement                                                                                                            | Priority    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ----------- |
| EVAL-REG-001 | Run automated regression evals on every pull request via CI                                                            | Must Have   |
| EVAL-REG-002 | Trigger change-based eval subsets based on diff areas (routing, SEO metadata, forms, analytics, layout)                | Should Have |
| EVAL-REG-003 | Compare changed pages and metadata against Phase 1 golden references                                                   | Must Have   |
| EVAL-REG-004 | Document merge gate policy when critical evals fail (block vs exception process)                                       | Must Have   |
| EVAL-REG-005 | Extend Vitest, Playwright, and SEO checks to cover flows listed in §12.3 with traceability to `Traceability_Matrix.md` | Should Have |
| EVAL-REG-006 | Record eval artifacts (logs, screenshots, Lighthouse summaries) on failed PR checks for human review                   | Should Have |

**Phase 2 exit criteria:**

- CI runs regression evals on pull requests without manual invocation.
- Critical visitor journeys (contact, navigation, Calendly CTA, lead magnet) are covered.
- `TASK-082` through `TASK-084` are complete or explicitly deferred with rationale.

### 26.5 Phase 3: AI assistant evals

**Goal:** Evaluate AI assistant behavior—both development-workflow assistants (planning, code generation, review) and future user-facing assistants (chatbot, FAQ, lead qualification). User-facing assistant requirements: **§27** (`EVAL-P3-001`–`EVAL-P3-003`). Development-workflow requirements below (`EVAL-AIA-*`).

| ID           | Requirement                                                                                                         | Priority    |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| EVAL-AIA-001 | Define assistant eval scenarios (task planning, component implementation, copy draft, doc update, PR review)        | Must Have   |
| EVAL-AIA-002 | Evaluate adherence to `AI_Workflow_Guide.md` and `Code_Review_Checklist.md`                                         | Must Have   |
| EVAL-AIA-003 | Verify assistant outputs respect MVP boundaries (no custom backend/database, no PHI collection, isolated `src/lib`) | Must Have   |
| EVAL-AIA-004 | Score assistant responses for healthcare and healthcare insurance positioning accuracy                              | Should Have |
| EVAL-AIA-005 | Maintain a human-reviewed rubric and failure log for recurring assistant mistakes                                   | Should Have |
| EVAL-AIA-006 | Run assistant evals periodically (e.g., after major doc or toolchain updates), not only on production incidents     | Could Have  |

**Phase 3 exit criteria:**

- Scenario set and rubric are documented with pass/fail examples.
- Guardrail evals cover at least: backend introduction attempts, PHI handling, secret exposure, and off-brand positioning.
- `TASK-085` through `TASK-087` are complete or explicitly deferred with rationale.

### 26.6 Traceability

| Document                 | Role in eval roadmap                                                           |
| ------------------------ | ------------------------------------------------------------------------------ |
| `Tasks.md` §29           | Implementation tasks for Phases 1–3                                            |
| `Traceability_Matrix.md` | Maps `NFR-EVAL-*` and `EVAL-*` IDs to tests and CI                             |
| `Testing_Strategy.md`    | Describes how evals complement unit, component, and E2E tests                  |
| `AI_Workflow_Guide.md`   | Source-of-truth for Phase 3 assistant behavior expectations                    |
| `docs/rosejs-knowledge/` | Approved business, brand, and forbidden-claims source of truth (`EVAL-P1-001`) |

---

## 27. AI Evaluation Requirements

RoseJS follows an AI-first development methodology. Evals are used as quality gates to ensure AI-generated content, future AI features, and business-facing responses remain accurate, grounded, current, safe, and aligned with RoseJS brand voice.

The evaluation roadmap is implemented in three phases. All phase requirements are defined below. **§26** provides implementation roadmap context, exit criteria, and development-workflow assistant requirements (`EVAL-AIA-*`).

---

### Phase 1: Source-of-Truth Evals

#### EVAL-P1-001: RoseJS Knowledge Base

The system shall maintain approved source-of-truth files for RoseJS business information.

Source files shall include:

- `docs/rosejs-knowledge/company-profile.md`
- `docs/rosejs-knowledge/services.md`
- `docs/rosejs-knowledge/target-industries.md`
- `docs/rosejs-knowledge/brand-voice.md`
- `docs/rosejs-knowledge/forbidden-claims.md`

**Acceptance Criteria:**

- Approved knowledge files exist.
- Files contain current RoseJS positioning, services, target industries, tone, and forbidden claims.
- Website content and AI-generated content can be evaluated against these files.

_Traceability:_ implements `NFR-EVAL-001`; complements `EVAL-SOT-001`, `EVAL-SOT-002` (§26.3).

#### EVAL-P1-002: Static Website Content Evals

The system shall evaluate key website pages against the approved RoseJS source of truth.

Pages to evaluate:

- Homepage
- Services page
- About page
- Contact page
- Lead magnet section

**Acceptance Criteria:**

- Page content matches approved RoseJS positioning.
- Page content does not include outdated services, outdated industries, or exaggerated claims.
- Page content reflects RoseJS brand voice.
- Evaluation results are documented.

_Traceability:_ implements `NFR-EVAL-002`; complements `EVAL-SOT-002`, `EVAL-SOT-004` (§26.3).

#### EVAL-P1-003: Brand Voice Evals

The system shall evaluate whether RoseJS content sounds professional, clear, practical, authentic, and not hype-driven.

**Acceptance Criteria:**

- Content avoids exaggerated AI claims.
- Content sounds human and credible.
- Content is aligned with RoseJS consulting identity.
- Content is appropriate for healthcare and e-commerce modernization audiences.

_Traceability:_ implements `NFR-EVAL-001`, `NFR-EVAL-002`; complements `EVAL-SOT-002` (§26.3).

---

### Phase 2: Change-Based and Regression Evals

#### EVAL-P2-001: Change-Based Eval Scenarios

The system shall include eval scenarios that verify whether RoseJS AI-generated content adapts when business data changes.

Example change scenarios:

- Target industries change.
- Service offerings change.
- Lead magnet changes.
- CTA changes.
- Pricing or consultation policy changes.
- Calendly or contact link changes.

**Acceptance Criteria:**

- Each major business change has a matching eval scenario.
- AI-generated content reflects the latest approved information.
- AI-generated content does not use stale or removed information.

_Traceability:_ implements `NFR-EVAL-003`; complements `EVAL-REG-001`, `EVAL-REG-002` (§26.4).

#### EVAL-P2-002: Regression Eval Suite

The system shall maintain a regression eval suite for recurring RoseJS questions.

Example questions:

- What does RoseJS do?
- Who does RoseJS help?
- What is AI-first development?
- Does RoseJS work with e-commerce companies?
- Can RoseJS guarantee project success?
- How can someone contact RoseJS?
- What makes RoseJS different?

**Acceptance Criteria:**

- Regression evals can be run after content, prompt, or knowledge-base changes.
- Eval results identify pass/fail outcomes.
- Failed evals block deployment until reviewed or fixed.

_Traceability:_ implements `NFR-EVAL-004`, `NFR-EVAL-006`; complements `EVAL-REG-001`, `EVAL-REG-003`, `EVAL-REG-004` (§26.4).

#### EVAL-P2-003: Stale Answer Detection

The system shall detect outdated or forbidden RoseJS claims.

Examples of stale or forbidden claims:

- RoseJS serves healthcare only.
- RoseJS guarantees ROI.
- RoseJS guarantees project success.
- RoseJS offers a removed service.
- RoseJS uses an old Calendly link.
- RoseJS promotes an outdated lead magnet.

**Acceptance Criteria:**

- Stale terms and forbidden claims are listed.
- Eval checks fail if stale or forbidden claims appear.
- Failures are reported clearly.

_Traceability:_ implements `NFR-EVAL-002`, `NFR-EVAL-003`; complements `EVAL-REG-003`, `EVAL-REG-006` (§26.4); references `docs/rosejs-knowledge/forbidden-claims.md` (`EVAL-P1-001`).

---

### Phase 3: AI Assistant Evals

Phase 3 covers user-facing RoseJS assistants (chatbot, FAQ, lead qualification, proposal assistant) when those features are added. Development-workflow assistant evals (Cursor, code review, task planning) remain in **§26.5** (`EVAL-AIA-*`).

#### EVAL-P3-001: AI Assistant Behavior Evals

If RoseJS adds a chatbot, FAQ assistant, lead qualification assistant, or AI proposal assistant, the system shall evaluate the assistant’s behavior.

**Acceptance Criteria:**

- Assistant answers are grounded in RoseJS source-of-truth files.
- Assistant avoids unsupported claims.
- Assistant routes qualified visitors toward contact or scheduling.
- Assistant refuses or redirects questions outside RoseJS scope.
- Assistant maintains RoseJS brand voice.

_Traceability:_ implements `NFR-EVAL-005`; complements `EVAL-AIA-001`, `EVAL-AIA-003` (§26.5); references `docs/rosejs-knowledge/` (`EVAL-P1-001`).

#### EVAL-P3-002: Retrieval-Grounded Evals

If RoseJS uses retrieval-augmented generation, the system shall evaluate both retrieved context and final answer quality.

**Acceptance Criteria:**

- Retrieved context is relevant to the user question.
- Final answer is supported by retrieved RoseJS documents.
- Final answer does not contradict approved source files.
- Final answer uses current information.

_Traceability:_ implements `NFR-EVAL-001`, `NFR-EVAL-005`; complements `EVAL-AIA-002` (§26.5); references `EVAL-P1-001`, `EVAL-P2-003`.

#### EVAL-P3-003: Business Alignment Evals

The system shall evaluate whether AI assistant responses support RoseJS business goals.

Business goals include:

- Build trust.
- Explain RoseJS services clearly.
- Qualify potential clients.
- Encourage appropriate next steps.
- Avoid misleading claims.

**Acceptance Criteria:**

- Responses are helpful and business-aligned.
- Responses include an appropriate CTA when relevant.
- Responses avoid overpromising.

_Traceability:_ implements `NFR-EVAL-005`; complements `EVAL-AIA-004`, `EVAL-AIA-005` (§26.5); references `EVAL-P1-003`, `EVAL-P2-002`.
