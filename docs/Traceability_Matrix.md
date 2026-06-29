# Traceability_Matrix.md

# RoseJS Website Traceability Matrix

## 1. Purpose

This Traceability Matrix connects the RoseJS PRD requirements to architecture components, implementation areas, test coverage, and deployment validation.

It ensures that future implementation tasks are generated from business requirements and architecture decisions, not from assumptions or isolated technical preferences.

This document should be used as the primary input for generating `Tasks.md` together with:

- `PRD.md`
- `Architecture.md`
- `Testing_Strategy.md`
- `Deployment_Guide.md`

---

## 2. Traceability Legend

### 2.1 Priority

| Priority    | Meaning                                    |
| ----------- | ------------------------------------------ |
| Must Have   | Required for MVP launch                    |
| Should Have | Important but can be deferred if necessary |
| Could Have  | Optional enhancement                       |

### 2.2 Implementation Area

| Area          | Meaning                                               |
| ------------- | ----------------------------------------------------- |
| UX/UI         | Page layout, visual design, responsive behavior       |
| Frontend      | React components, routing, state, page composition    |
| CMS           | CMS schema, content queries, content mapping          |
| SEO           | Metadata, sitemap, robots.txt, structured data        |
| Forms         | Contact form, validation, provider integration        |
| Analytics     | Plausible events and page tracking                    |
| Scheduling    | Calendly CTA, link, or embed                          |
| Testing       | Unit, component, E2E, accessibility, build validation |
| DevOps        | GitHub, CI/CD, deployment, environment variables      |
| Documentation | README, architecture docs, workflow docs              |
| Security      | Secrets, validation, HTTPS, safe data handling        |
| Eval          | AI evaluation, knowledge base, golden cases, CI gates  |

### 2.3 Test Type

| Test Type | Meaning                                          |
| --------- | ------------------------------------------------ |
| Unit      | Utility or isolated function test                |
| Component | React component behavior test                    |
| E2E       | End-to-end browser flow test                     |
| A11y      | Accessibility check                              |
| SEO       | Metadata, sitemap, structured content validation |
| Build     | Production build validation                      |
| Manual    | Human review or manual verification              |
| CI        | Automated pipeline validation                    |
| Eval      | AI/source-of-truth, regression, or assistant eval |

---

## 3. Product and Business Requirements Traceability

| Req ID   | Requirement                                                                                | Priority  | Architecture Area                             | Implementation Area            | Test / Validation      | Suggested Task Category        |
| -------- | ------------------------------------------------------------------------------------------ | --------- | --------------------------------------------- | ------------------------------ | ---------------------- | ------------------------------ |
| PROD-001 | Website must establish a professional online presence for RoseJS                           | Must Have | Frontend Architecture, Design Architecture    | UX/UI, Frontend, Content       | Manual, E2E            | Foundation, UI, Content        |
| PROD-002 | Website must position RoseJS as healthcare and healthcare insurance focused                | Must Have | Content Architecture, SEO Architecture        | Content, CMS, SEO              | Manual, SEO            | Content, CMS, SEO              |
| PROD-003 | Website must operate as a trust-building and lead-generation platform                      | Must Have | Frontend Architecture, Analytics Architecture | UX/UI, Frontend, Analytics     | E2E, Manual, Analytics | UI, Analytics, Conversion      |
| PROD-004 | Website must support long-term SEO-driven traffic growth                                   | Must Have | SEO Architecture, CMS Architecture            | SEO, CMS, Content              | SEO, Manual            | SEO, CMS, Content              |
| PROD-005 | Project must be reusable as an AI-First template for future projects                       | Must Have | Repository Architecture, AI-First Workflow    | Documentation, DevOps          | Manual, CI             | Documentation, DevOps          |
| PROD-006 | Project must follow AI-First delivery pillars: Skill, Code Review, Test Suites, Deployment | Must Have | AI-First Engineering Workflow                 | Documentation, Testing, DevOps | Manual, CI             | Documentation, Testing, DevOps |

---

## 4. MVP Scope Traceability

| Req ID  | Requirement                                     | Priority    | Architecture Area                           | Implementation Area             | Test / Validation        | Suggested Task Category |
| ------- | ----------------------------------------------- | ----------- | ------------------------------------------- | ------------------------------- | ------------------------ | ----------------------- |
| MVP-001 | Implement Home page                             | Must Have   | Page Architecture                           | Frontend, UX/UI, CMS            | Component, E2E, Manual   | Pages, UI               |
| MVP-002 | Implement Services page                         | Must Have   | Page Architecture, CMS Architecture         | Frontend, CMS, SEO              | Component, E2E, SEO      | Pages, CMS, SEO         |
| MVP-003 | Implement About page                            | Must Have   | Page Architecture                           | Frontend, CMS, SEO              | Component, E2E, SEO      | Pages, Content          |
| MVP-004 | Implement Blog/Insights listing page            | Must Have   | Page Architecture, CMS Architecture         | Frontend, CMS, SEO              | Component, E2E, SEO      | Pages, CMS, SEO         |
| MVP-005 | Implement Blog detail page template             | Must Have   | Routing Architecture, CMS Architecture      | Frontend, CMS, SEO              | Component, E2E, SEO      | Pages, CMS, SEO         |
| MVP-006 | Implement Contact page                          | Must Have   | Page Architecture, Form Architecture        | Frontend, Forms, UX/UI          | Component, E2E, Manual   | Pages, Forms            |
| MVP-007 | Implement Calendly scheduling CTA or embed      | Must Have   | Calendly Architecture                       | Scheduling, Frontend, Analytics | E2E, Manual              | Scheduling, Analytics   |
| MVP-008 | Implement free downloadable lead magnet section | Should Have | Content Architecture, Frontend Architecture | Frontend, CMS, UX/UI            | E2E, Manual              | Content, UI             |
| MVP-009 | Implement anonymized healthcare case study      | Must Have   | CMS Architecture, Page Architecture         | CMS, Frontend, Content          | E2E, Manual, SEO         | CMS, Pages, Content     |
| MVP-010 | Implement CMS-managed content model             | Must Have   | CMS Architecture                            | CMS, Frontend                   | Unit, Component, Manual  | CMS                     |
| MVP-011 | Implement SEO metadata                          | Must Have   | SEO Architecture                            | SEO, CMS, Frontend              | SEO, Manual              | SEO                     |
| MVP-012 | Implement sitemap.xml                           | Must Have   | SEO Architecture                            | SEO, DevOps                     | SEO, Manual              | SEO, DevOps             |
| MVP-013 | Implement robots.txt                            | Must Have   | SEO Architecture                            | SEO, DevOps                     | SEO, Manual              | SEO, DevOps             |
| MVP-014 | Implement analytics integration                 | Must Have   | Analytics Architecture                      | Analytics, Frontend             | E2E, Manual              | Analytics               |
| MVP-015 | Implement contact form                          | Must Have   | Form Architecture                           | Forms, Frontend, Security       | Component, E2E, Manual   | Forms                   |
| MVP-016 | Implement responsive black-and-white layout     | Must Have   | Design Architecture                         | UX/UI, Frontend                 | Component, A11y, Manual  | UI, Accessibility       |
| MVP-017 | Implement basic automated tests                 | Must Have   | Testing Architecture                        | Testing                         | Unit, Component, E2E, CI | Testing                 |
| MVP-018 | Create GitHub source control repository         | Must Have   | GitHub and CI/CD Architecture               | DevOps                          | Manual                   | DevOps                  |
| MVP-019 | Implement CI/CD pipeline                        | Must Have   | GitHub and CI/CD Architecture               | DevOps, Testing                 | CI, Build                | DevOps, Testing         |
| MVP-020 | Implement deployment pipeline                   | Must Have   | Deployment Architecture                     | DevOps                          | CI, Manual               | Deployment              |
| MVP-021 | Create project documentation for AI-First reuse | Must Have   | Repository Architecture, AI Workflow        | Documentation                   | Manual                   | Documentation           |

---

## 5. Functional Requirements Traceability

## 5.1 Home Page

| Req ID   | Requirement                                           | Priority    | Architecture Area                            | Implementation Area             | Test / Validation      | Suggested Task Category |
| -------- | ----------------------------------------------------- | ----------- | -------------------------------------------- | ------------------------------- | ---------------------- | ----------------------- |
| HOME-001 | Display hero section with clear value proposition     | Must Have   | Page Architecture, Component Architecture    | Frontend, UX/UI, Content        | Component, E2E, Manual | UI, Content             |
| HOME-002 | Display primary CTA such as “Schedule a Consultation” | Must Have   | Page Architecture, Calendly Architecture     | Frontend, Scheduling, Analytics | Component, E2E         | UI, Scheduling          |
| HOME-003 | Display secondary CTA such as “Explore Services”      | Should Have | Page Architecture, Routing Architecture      | Frontend, UX/UI                 | Component, E2E         | UI, Routing             |
| HOME-004 | Display service overview cards                        | Must Have   | Component Architecture, CMS Architecture     | Frontend, CMS                   | Component, E2E         | UI, CMS                 |
| HOME-005 | Display trust/credibility section                     | Must Have   | Page Architecture                            | Frontend, Content               | Component, Manual      | UI, Content             |
| HOME-006 | Display AI-First methodology summary                  | Must Have   | AI Workflow, Page Architecture               | Frontend, Content               | Component, Manual      | UI, Content             |
| HOME-007 | Display featured blog posts or insights               | Should Have | CMS Architecture, Component Architecture     | Frontend, CMS                   | Component, E2E         | UI, CMS                 |
| HOME-008 | Display final contact CTA                             | Must Have   | Page Architecture, Routing Architecture      | Frontend, UX/UI                 | Component, E2E         | UI, Routing             |
| HOME-009 | Display free lead magnet CTA where appropriate        | Should Have | Content Architecture, Component Architecture | Frontend, CMS, Analytics        | Component, E2E         | UI, Content             |

## 5.2 Services Page

| Req ID   | Requirement                                                       | Priority    | Architecture Area                        | Implementation Area  | Test / Validation | Suggested Task Category |
| -------- | ----------------------------------------------------------------- | ----------- | ---------------------------------------- | -------------------- | ----------------- | ----------------------- |
| SERV-001 | Display all core services                                         | Must Have   | CMS Architecture, Page Architecture      | CMS, Frontend        | Component, E2E    | CMS, Pages              |
| SERV-002 | Provide description, value, and example outcomes for each service | Must Have   | CMS Architecture, Content Architecture   | CMS, Content         | Manual, SEO       | CMS, Content            |
| SERV-003 | Include CTA for consultation                                      | Must Have   | Page Architecture, Calendly Architecture | Frontend, Scheduling | Component, E2E    | UI, Scheduling          |
| SERV-004 | Include internal links to related blog posts or case studies      | Should Have | CMS Architecture, SEO Architecture       | CMS, SEO, Frontend   | Component, SEO    | CMS, SEO                |
| SERV-005 | Support future service-specific landing pages                     | Should Have | Routing Architecture, CMS Architecture   | Frontend, CMS        | Manual            | Routing, CMS            |

## 5.3 About Page

| Req ID    | Requirement                                               | Priority  | Architecture Area                   | Implementation Area | Test / Validation | Suggested Task Category |
| --------- | --------------------------------------------------------- | --------- | ----------------------------------- | ------------------- | ----------------- | ----------------------- |
| ABOUT-001 | Display founder/company background                        | Must Have | Page Architecture                   | Frontend, Content   | Manual, Component | Pages, Content          |
| ABOUT-002 | Explain architecture and engineering philosophy           | Must Have | Page Architecture                   | Frontend, Content   | Manual            | Content                 |
| ABOUT-003 | Highlight healthcare, enterprise, and AI-first experience | Must Have | Page Architecture, SEO Architecture | Content, SEO        | Manual, SEO       | Content, SEO            |
| ABOUT-004 | Include credibility points and differentiators            | Must Have | Page Architecture                   | Frontend, Content   | Manual, Component | UI, Content             |
| ABOUT-005 | Include CTA to contact                                    | Must Have | Routing Architecture                | Frontend            | Component, E2E    | UI, Routing             |

## 5.4 Blog / Insights

| Req ID   | Requirement                                    | Priority    | Architecture Area                        | Implementation Area | Test / Validation | Suggested Task Category |
| -------- | ---------------------------------------------- | ----------- | ---------------------------------------- | ------------------- | ----------------- | ----------------------- |
| BLOG-001 | Display blog listing page                      | Must Have   | Page Architecture, CMS Architecture      | Frontend, CMS       | Component, E2E    | Pages, CMS              |
| BLOG-002 | Display individual blog article pages          | Must Have   | Routing Architecture, CMS Architecture   | Frontend, CMS       | Component, E2E    | Pages, CMS              |
| BLOG-003 | Support title, date, summary, tags, and author | Must Have   | CMS Architecture                         | CMS, Frontend       | Unit, Component   | CMS                     |
| BLOG-004 | Support SEO metadata per article               | Must Have   | SEO Architecture, CMS Architecture       | CMS, SEO            | SEO, Manual       | SEO, CMS                |
| BLOG-005 | Support internal links to services             | Should Have | CMS Architecture, SEO Architecture       | CMS, Frontend, SEO  | Component, SEO    | SEO, CMS                |
| BLOG-006 | Support featured posts                         | Should Have | CMS Architecture, Component Architecture | CMS, Frontend       | Component         | CMS, UI                 |
| BLOG-007 | Support categories or tags                     | Should Have | CMS Architecture                         | CMS, Frontend       | Component         | CMS                     |
| BLOG-008 | Blog content must be CMS-managed               | Must Have   | CMS Architecture                         | CMS                 | Manual            | CMS                     |

## 5.5 Case Studies

| Req ID   | Requirement                                      | Priority    | Architecture Area                     | Implementation Area    | Test / Validation | Suggested Task Category |
| -------- | ------------------------------------------------ | ----------- | ------------------------------------- | ---------------------- | ----------------- | ----------------------- |
| CASE-001 | Display at least one anonymized case study       | Must Have   | Page Architecture, CMS Architecture   | Frontend, CMS, Content | E2E, Manual       | Pages, CMS, Content     |
| CASE-002 | Include problem, approach, solution, and outcome | Must Have   | CMS Architecture                      | CMS, Content           | Manual            | CMS, Content            |
| CASE-003 | Avoid confidential client information            | Must Have   | Security Architecture, Content Review | Content, Security      | Manual            | Content, Security       |
| CASE-004 | Link case study to related services              | Should Have | CMS Architecture, SEO Architecture    | CMS, SEO, Frontend     | Component, SEO    | CMS, SEO                |
| CASE-005 | Case study content must be CMS-managed           | Must Have   | CMS Architecture                      | CMS                    | Manual            | CMS                     |

## 5.6 Contact Page

| Req ID   | Requirement                                                               | Priority    | Architecture Area                    | Implementation Area  | Test / Validation | Suggested Task Category |
| -------- | ------------------------------------------------------------------------- | ----------- | ------------------------------------ | -------------------- | ----------------- | ----------------------- |
| CONT-001 | Display contact form                                                      | Must Have   | Form Architecture, Page Architecture | Frontend, Forms      | Component, E2E    | Forms, Pages            |
| CONT-002 | Include name, email, company, service interest, and message fields        | Must Have   | Form Architecture                    | Forms, Frontend      | Component, E2E    | Forms                   |
| CONT-003 | Validate required fields                                                  | Must Have   | Form Architecture                    | Forms, Frontend      | Component, E2E    | Forms, Testing          |
| CONT-004 | Validate email format                                                     | Must Have   | Form Architecture                    | Forms, Frontend      | Component, E2E    | Forms, Testing          |
| CONT-005 | Display success and error states                                          | Must Have   | Form Architecture                    | Forms, Frontend      | Component, E2E    | Forms, UI               |
| CONT-006 | Include direct email placeholder                                          | Must Have   | Page Architecture                    | Frontend, Content    | Manual            | Content, UI             |
| CONT-007 | Include LinkedIn placeholder                                              | Should Have | Page Architecture                    | Frontend, Content    | Manual            | Content, UI             |
| CONT-008 | Include Calendly or scheduling placeholder                                | Must Have   | Calendly Architecture                | Scheduling, Frontend | Component, E2E    | Scheduling              |
| CONT-009 | Contact form must use third-party provider or serverless function for MVP | Must Have   | Form Architecture, Backend Decision  | Forms, Security      | Manual, E2E       | Forms, Security         |

## 5.7 Lead Magnet

| Req ID   | Requirement                                                 | Priority    | Architecture Area                           | Implementation Area | Test / Validation | Suggested Task Category |
| -------- | ----------------------------------------------------------- | ----------- | ------------------------------------------- | ------------------- | ----------------- | ----------------------- |
| LEAD-001 | Display lead magnet CTA                                     | Should Have | Component Architecture                      | Frontend, UX/UI     | Component, E2E    | UI, Content             |
| LEAD-002 | Allow visitor to download resource without submitting email | Must Have   | Content Architecture, Frontend Architecture | Frontend, Content   | E2E, Manual       | Content, UI             |
| LEAD-003 | Provide PDF or downloadable checklist                       | Should Have | Public Assets, CMS Architecture             | Content, CMS        | Manual, E2E       | Content, CMS            |
| LEAD-004 | Track lead magnet conversion                                | Could Have  | Analytics Architecture                      | Analytics, Frontend | Manual, E2E       | Analytics               |
| LEAD-005 | Lead magnet content should be CMS-managed or CMS-referenced | Should Have | CMS Architecture                            | CMS, Content        | Manual            | CMS, Content            |

## 5.8 Scheduling / Calendly

| Req ID  | Requirement                                                  | Priority    | Architecture Area                             | Implementation Area   | Test / Validation | Suggested Task Category |
| ------- | ------------------------------------------------------------ | ----------- | --------------------------------------------- | --------------------- | ----------------- | ----------------------- |
| CAL-001 | Display Calendly CTA on Contact page                         | Must Have   | Calendly Architecture                         | Scheduling, Frontend  | Component, E2E    | Scheduling, UI          |
| CAL-002 | Display Calendly CTA in final CTA sections where appropriate | Should Have | Calendly Architecture, Component Architecture | Scheduling, Frontend  | Component, E2E    | Scheduling, UI          |
| CAL-003 | Support Calendly embed or external scheduling link           | Must Have   | Calendly Architecture                         | Scheduling            | E2E, Manual       | Scheduling              |
| CAL-004 | Track Calendly CTA clicks through analytics where feasible   | Should Have | Analytics Architecture, Calendly Architecture | Analytics, Scheduling | Manual, E2E       | Analytics, Scheduling   |

---

## 6. Non-Functional Requirements Traceability

## 6.1 Performance

| Req ID       | Requirement                                       | Priority    | Architecture Area        | Implementation Area | Test / Validation  | Suggested Task Category |
| ------------ | ------------------------------------------------- | ----------- | ------------------------ | ------------------- | ------------------ | ----------------------- |
| NFR-PERF-001 | Website should load quickly on desktop and mobile | Must Have   | Performance Architecture | Frontend, DevOps    | Lighthouse, Manual | Performance             |
| NFR-PERF-002 | Images should be optimized                        | Must Have   | Performance Architecture | Frontend, CMS       | Manual, Lighthouse | Performance, CMS        |
| NFR-PERF-003 | JavaScript bundle should be minimized             | Should Have | Performance Architecture | Frontend            | Build, Lighthouse  | Performance             |
| NFR-PERF-004 | Lighthouse performance score should target 90+    | Should Have | Performance Architecture | Frontend, DevOps    | Lighthouse         | Performance, Deployment |

## 6.2 SEO

| Req ID      | Requirement                                           | Priority    | Architecture Area                            | Implementation Area | Test / Validation | Suggested Task Category |
| ----------- | ----------------------------------------------------- | ----------- | -------------------------------------------- | ------------------- | ----------------- | ----------------------- |
| NFR-SEO-001 | Each page must have unique title and meta description | Must Have   | SEO Architecture                             | SEO, CMS, Frontend  | SEO, Manual       | SEO                     |
| NFR-SEO-002 | Website must include sitemap.xml                      | Must Have   | SEO Architecture                             | SEO, DevOps         | SEO, Manual       | SEO                     |
| NFR-SEO-003 | Website must include robots.txt                       | Must Have   | SEO Architecture                             | SEO, DevOps         | SEO, Manual       | SEO                     |
| NFR-SEO-004 | Pages must use proper heading hierarchy               | Must Have   | SEO Architecture, Accessibility Architecture | Frontend, Content   | SEO, A11y, Manual | SEO, Accessibility      |
| NFR-SEO-005 | Blog posts must support metadata                      | Must Have   | CMS Architecture, SEO Architecture           | CMS, SEO            | SEO, Manual       | CMS, SEO                |
| NFR-SEO-006 | Open Graph metadata should be included                | Should Have | SEO Architecture                             | SEO, Frontend       | SEO, Manual       | SEO                     |
| NFR-SEO-007 | Structured data/schema should be added where useful   | Should Have | SEO Architecture                             | SEO, Frontend       | SEO, Manual       | SEO                     |
| NFR-SEO-008 | CMS content model must support SEO fields             | Must Have   | CMS Architecture, SEO Architecture           | CMS                 | Manual            | CMS, SEO                |

## 6.3 Accessibility

| Req ID       | Requirement                                    | Priority  | Architecture Area                                | Implementation Area | Test / Validation | Suggested Task Category   |
| ------------ | ---------------------------------------------- | --------- | ------------------------------------------------ | ------------------- | ----------------- | ------------------------- |
| NFR-A11Y-001 | Site must be keyboard navigable                | Must Have | Accessibility Architecture                       | Frontend, UX/UI     | A11y, E2E, Manual | Accessibility             |
| NFR-A11Y-002 | Images must include alt text where appropriate | Must Have | Accessibility Architecture, CMS Architecture     | CMS, Frontend       | A11y, Manual      | Accessibility, CMS        |
| NFR-A11Y-003 | Forms must include accessible labels           | Must Have | Accessibility Architecture, Form Architecture    | Forms, Frontend     | A11y, Component   | Accessibility, Forms      |
| NFR-A11Y-004 | Color contrast must be readable                | Must Have | Design Architecture, Accessibility Architecture  | UX/UI               | A11y, Manual      | Accessibility, UI         |
| NFR-A11Y-005 | Navigation must work on mobile and keyboard    | Must Have | Accessibility Architecture, Routing Architecture | Frontend, UX/UI     | A11y, E2E         | Accessibility, Navigation |

## 6.4 Security

| Req ID      | Requirement                                                           | Priority    | Architecture Area                              | Implementation Area      | Test / Validation      | Suggested Task Category |
| ----------- | --------------------------------------------------------------------- | ----------- | ---------------------------------------------- | ------------------------ | ---------------------- | ----------------------- |
| NFR-SEC-001 | Contact form must validate and sanitize input                         | Must Have   | Security Architecture, Form Architecture       | Forms, Security          | Component, E2E, Manual | Forms, Security         |
| NFR-SEC-002 | API keys and secrets must not be exposed in frontend code             | Must Have   | Security Architecture                          | DevOps, Security         | Manual, CI             | Security, DevOps        |
| NFR-SEC-003 | HTTPS must be enabled                                                 | Must Have   | Deployment Architecture, Security Architecture | DevOps                   | Manual                 | Deployment, Security    |
| NFR-SEC-004 | Spam protection should be considered for forms                        | Should Have | Form Architecture, Security Architecture       | Forms, Security          | Manual                 | Forms, Security         |
| NFR-SEC-005 | MVP must not collect/store PHI/PII beyond basic business contact info | Must Have   | Security Architecture                          | Forms, Content, Security | Manual                 | Security, Forms         |
| NFR-SEC-006 | Secrets must be stored as environment variables or platform secrets   | Must Have   | Security Architecture, CI/CD Architecture      | DevOps, Security         | Manual, CI             | DevOps, Security        |

## 6.5 Maintainability

| Req ID        | Requirement                                       | Priority  | Architecture Area                    | Implementation Area     | Test / Validation      | Suggested Task Category |
| ------------- | ------------------------------------------------- | --------- | ------------------------------------ | ----------------------- | ---------------------- | ----------------------- |
| NFR-MAINT-001 | Components should be reusable                     | Must Have | Component Architecture               | Frontend                | Code Review, Component | Frontend, UI            |
| NFR-MAINT-002 | Content should be easy to update                  | Must Have | CMS Architecture                     | CMS, Content            | Manual                 | CMS                     |
| NFR-MAINT-003 | Folder structure should support growth            | Must Have | Repository Architecture              | Frontend, Documentation | Manual                 | Foundation              |
| NFR-MAINT-004 | Code should pass linting and formatting checks    | Must Have | CI/CD Architecture                   | Frontend, DevOps        | CI                     | DevOps, Quality         |
| NFR-MAINT-005 | Documentation should support future project reuse | Must Have | Repository Architecture, AI Workflow | Documentation           | Manual                 | Documentation           |

## 6.6 Source Control and CI/CD

| Req ID      | Requirement                                                         | Priority    | Architecture Area                    | Implementation Area   | Test / Validation | Suggested Task Category |
| ----------- | ------------------------------------------------------------------- | ----------- | ------------------------------------ | --------------------- | ----------------- | ----------------------- |
| NFR-SCM-001 | Project source code must be managed in GitHub                       | Must Have   | GitHub Architecture                  | DevOps                | Manual            | DevOps                  |
| NFR-SCM-002 | Repository must use a clear branching strategy                      | Must Have   | GitHub Architecture                  | DevOps, Documentation | Manual            | DevOps, Documentation   |
| NFR-SCM-003 | Pull requests required before merging to main production branch     | Must Have   | GitHub Architecture                  | DevOps                | Manual            | DevOps                  |
| NFR-SCM-004 | CI checks must run automatically on pull requests                   | Must Have   | CI/CD Architecture                   | DevOps, Testing       | CI                | DevOps, Testing         |
| NFR-SCM-005 | CI pipeline must run lint, test, and build validation               | Must Have   | CI/CD Architecture                   | DevOps, Testing       | CI, Build         | DevOps, Testing         |
| NFR-SCM-006 | Deployment should trigger from approved merges to production branch | Must Have   | Deployment Architecture              | DevOps                | CI, Manual        | Deployment              |
| NFR-SCM-007 | Repository should include PR and issue templates                    | Should Have | Repository Architecture              | Documentation, DevOps | Manual            | Documentation, DevOps   |
| NFR-SCM-008 | Documentation should support AI-First template reuse                | Should Have | AI Workflow, Repository Architecture | Documentation         | Manual            | Documentation           |

## 6.7 Backend and Database Decision

| Req ID      | Requirement                                                                             | Priority    | Architecture Area                   | Implementation Area         | Test / Validation | Suggested Task Category     |
| ----------- | --------------------------------------------------------------------------------------- | ----------- | ----------------------------------- | --------------------------- | ----------------- | --------------------------- |
| NFR-DB-001  | MVP must not require custom database unless future persistent business data requires it | Must Have   | Data Architecture                   | Architecture, Documentation | Manual            | Architecture, Documentation |
| NFR-DB-002  | CMS will serve as content data source                                                   | Must Have   | CMS Architecture, Data Architecture | CMS                         | Manual            | CMS                         |
| NFR-API-001 | MVP must not require custom backend unless needed for secure business logic             | Must Have   | Backend Decision, Form Architecture | Architecture, Forms         | Manual            | Architecture, Forms         |
| NFR-API-002 | Architecture should support future backend integration                                  | Should Have | Backend-Ready Architecture          | Frontend, Architecture      | Manual            | Architecture, Frontend      |
| NFR-API-003 | Contact form may use third-party form provider or serverless function                   | Must Have   | Form Architecture                   | Forms                       | E2E, Manual       | Forms                       |

## 6.8 AI Evaluation (Post-MVP)

| Req ID       | Requirement                                                                                                              | Priority    | Architecture Area           | Implementation Area     | Test / Validation | Task IDs        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | ----------- | --------------------------- | ----------------------- | ----------------- | --------------- |
| NFR-EVAL-001 | AI-assisted work must trace back to documented source-of-truth artifacts                                                  | Should Have | AI Evaluation Architecture  | Eval, Documentation     | Eval, Manual      | TASK-078, 088, 090, 095 |
| NFR-EVAL-002 | Eval criteria, datasets, and pass thresholds must be documented and version-controlled                                   | Should Have | AI Evaluation Architecture  | Eval, Documentation     | Eval, Manual      | TASK-078, 084, 085, 088–090, 093 |
| NFR-EVAL-003 | Change-based evals must run on pull requests before merge                                                                | Should Have | CI/CD, AI Evaluation        | Eval, DevOps            | CI, Eval          | TASK-082, 091, 093 |
| NFR-EVAL-004 | Regression evals must cover critical visitor journeys                                                                    | Should Have | Testing, AI Evaluation      | Testing, Eval           | E2E, Eval, CI     | TASK-083, 092   |
| NFR-EVAL-005 | AI assistant evals must verify guardrails and on-brand responses                                                         | Could Have  | AI Evaluation Architecture  | Eval, Documentation     | Eval, Manual      | TASK-086, 094–096 |
| NFR-EVAL-006 | Eval results must be reproducible locally and in CI                                                                      | Should Have | CI/CD, AI Evaluation        | Eval, DevOps, Testing   | Eval, CI          | TASK-081, 092   |

---

## 7. Architecture Decision Traceability

| ADR ID  | Architecture Decision      | Related PRD Requirements                       | Implementation Area | Validation             |
| ------- | -------------------------- | ---------------------------------------------- | ------------------- | ---------------------- |
| ADR-001 | Use React + Vite           | MVP-001 to MVP-021, NFR-MAINT-003              | Frontend, DevOps    | Build, E2E, Manual     |
| ADR-002 | Use CMS for content        | BLOG-008, CASE-005, NFR-DB-002, NFR-SEO-008    | CMS, SEO            | Manual, Component, SEO |
| ADR-003 | No custom backend for MVP  | NFR-API-001, CONT-009                          | Architecture, Forms | Manual, E2E            |
| ADR-004 | No custom database for MVP | NFR-DB-001, NFR-DB-002                         | Architecture, CMS   | Manual                 |
| ADR-005 | Use GitHub and CI/CD       | NFR-SCM-001 to NFR-SCM-008, DEP-008 to DEP-012 | DevOps, Testing     | CI, Manual             |
| ADR-006 | Phased AI evaluation (post-MVP) | NFR-EVAL-001–006, EVAL-P1/P2/P3-*, EVAL-SOT/REG/AIA-* | Eval, DevOps, Documentation | Eval, CI, Manual |

---

## 8. Deployment Requirements Traceability

| Req ID  | Requirement                                                       | Priority    | Architecture Area                              | Implementation Area | Test / Validation | Suggested Task Category   |
| ------- | ----------------------------------------------------------------- | ----------- | ---------------------------------------------- | ------------------- | ----------------- | ------------------------- |
| DEP-001 | Website must be deployed to production hosting                    | Must Have   | Deployment Architecture                        | DevOps              | Manual            | Deployment                |
| DEP-002 | Preview deployments should be available for review                | Should Have | Deployment Architecture                        | DevOps              | Manual            | Deployment                |
| DEP-003 | Domain must be connected                                          | Must Have   | Deployment Architecture                        | DevOps              | Manual            | Deployment                |
| DEP-004 | HTTPS/SSL must be enabled                                         | Must Have   | Security Architecture, Deployment Architecture | DevOps, Security    | Manual            | Deployment, Security      |
| DEP-005 | Rollback process must be documented                               | Should Have | Deployment Architecture                        | Documentation       | Manual            | Documentation, Deployment |
| DEP-006 | Analytics must be installed                                       | Must Have   | Analytics Architecture                         | Analytics, Frontend | Manual            | Analytics                 |
| DEP-007 | Google Search Console must be configured                          | Must Have   | SEO Architecture                               | SEO, DevOps         | Manual            | SEO, Deployment           |
| DEP-008 | GitHub must be used as source control repository                  | Must Have   | GitHub Architecture                            | DevOps              | Manual            | DevOps                    |
| DEP-009 | CI/CD pipeline must run on pull requests                          | Must Have   | CI/CD Architecture                             | DevOps, Testing     | CI                | DevOps                    |
| DEP-010 | CI/CD pipeline must run lint, tests, and build validation         | Must Have   | CI/CD Architecture                             | DevOps, Testing     | CI, Build         | DevOps, Testing           |
| DEP-011 | CI/CD pipeline should generate preview deployments when supported | Should Have | Deployment Architecture                        | DevOps              | Manual            | Deployment                |
| DEP-012 | Production deployment must be tied to approved merge workflow     | Must Have   | Deployment Architecture, GitHub Architecture   | DevOps              | Manual, CI        | Deployment, DevOps        |

---

## 9. Testing Coverage Matrix

| Feature / Requirement Area | Unit                     | Component | E2E         | A11y     | SEO      | Build    | Manual   | CI       |
| -------------------------- | ------------------------ | --------- | ----------- | -------- | -------- | -------- | -------- | -------- |
| Home page                  | Optional                 | Required  | Required    | Required | Required | Required | Required | Required |
| Services page              | Optional                 | Required  | Required    | Required | Required | Required | Required | Required |
| About page                 | Optional                 | Required  | Required    | Required | Required | Required | Required | Required |
| Blog listing               | Required for CMS mappers | Required  | Required    | Optional | Required | Required | Required | Required |
| Blog detail                | Required for CMS mappers | Required  | Required    | Optional | Required | Required | Required | Required |
| Case studies               | Required for CMS mappers | Required  | Required    | Optional | Required | Required | Required | Required |
| Contact form               | Required                 | Required  | Required    | Required | Optional | Required | Required | Required |
| Calendly CTA               | Optional                 | Required  | Required    | Optional | Optional | Required | Required | Required |
| Lead magnet download       | Optional                 | Required  | Required    | Optional | Optional | Required | Required | Required |
| SEO metadata               | Optional                 | Optional  | Optional    | Optional | Required | Required | Required | Optional |
| Sitemap / robots.txt       | Optional                 | Optional  | Optional    | Optional | Required | Required | Required | Optional |
| Analytics events           | Unit optional            | Optional  | Recommended | Optional | Optional | Required | Required | Optional |
| GitHub CI/CD               | Optional                 | Optional  | Optional    | Optional | Optional | Required | Required | Required |
| Deployment                 | Optional                 | Optional  | Optional    | Optional | Optional | Required | Required | Required |
| AI eval — knowledge base   | Optional                 | Optional  | Optional    | Optional | Optional | Optional | Required | Optional |
| AI eval — static content   | Optional                 | Optional  | Recommended | Optional | Required | Required | Required | Eval, CI |
| AI eval — Q&A regression   | Optional                 | Optional  | Optional    | Optional | Optional | Optional | Eval     | Eval, CI |
| AI eval — stale claims     | Optional                 | Optional  | Optional    | Optional | Optional | Optional | Eval     | Eval, CI |
| AI eval — dev assistant    | Optional                 | Optional  | Optional    | Optional | Optional | Optional | Eval     | Manual   |
| AI eval — user assistant   | Optional                 | Optional  | Optional    | Optional | Optional | Optional | Eval     | Eval     |

---

## 10. Suggested Task Generation Groups

Tasks.md should be generated using these groups:

1. Foundation and Repository Setup
2. Documentation Setup
3. React + Vite Project Setup
4. Tailwind and Design System Setup
5. Routing and Page Shell Setup
6. CMS Integration
7. CMS Content Models
8. Layout Components
9. Page Components
10. Home Page Implementation
11. Services Page Implementation
12. About Page Implementation
13. Blog / Insights Implementation
14. Case Studies Implementation
15. Contact Form Implementation
16. Calendly Integration
17. Lead Magnet Implementation
18. SEO Implementation
19. Analytics Implementation
20. Accessibility Implementation
21. Testing Setup
22. Test Suite Implementation
23. GitHub and CI/CD Setup
24. Deployment Setup
25. Production Readiness
26. Post-Launch Validation
27. Future Backend-Ready Documentation
28. AI Evaluation Roadmap (Post-MVP)

---

## 11. Readiness for Tasks.md

MVP implementation tasks (`TASK-001`–`TASK-077`) are complete. Post-MVP AI evaluation tasks (`TASK-078`–`TASK-096`) are defined in `Tasks.md` §29 and traceable via **§13** below.

This Traceability Matrix is maintained alongside:

- Final PRD (including §26–§27 AI evaluation requirements)
- Architecture.md (including §28 AI Evaluation Architecture)
- `Tasks.md` §29

The implementation decisions required for MVP are resolved:

1. CMS provider: Sanity
2. Form provider: Formspree
3. Hosting provider: Railway
4. Calendly integration mode: external link
5. Branching strategy: GitHub Flow
6. Sitemap generation approach: static/manual for MVP, CMS-generated during build later

Post-MVP eval work begins with Phase 1 knowledge base (`TASK-088`) before Phase 2 CI gates.

---

## 12. Traceability Definition of Done

This Traceability Matrix is complete when:

1. PRD product goals are mapped to architecture and implementation areas.
2. MVP scope items are mapped to architecture and tests.
3. Functional requirements are mapped to implementation areas and validation.
4. Non-functional requirements are mapped to validation methods.
5. Architecture decisions are tied back to PRD requirements.
6. Deployment and CI/CD requirements are traceable.
7. Test coverage expectations are defined.
8. Task generation groups are identified.
9. Post-MVP AI evaluation requirements (`EVAL-P*`, `EVAL-SOT/REG/AIA-*`) are mapped to tasks and validation methods (§13).

`Tasks.md` §29 and `TASK-087` should be updated whenever eval requirement IDs change in PRD §27.

---

## 13. AI Evaluation Requirements Traceability (Post-MVP)

Maps PRD **§27** (`EVAL-P1-*`, `EVAL-P2-*`, `EVAL-P3-*`), PRD **§26** (`EVAL-SOT-*`, `EVAL-REG-*`, `EVAL-AIA-*`), and `NFR-EVAL-*` to architecture areas, validation, and `Tasks.md` §29.

Architecture reference: `Architecture.md` §28. Implementation: `TASK-078`–`TASK-096`. Consolidation task: `TASK-087`.

### 13.1 Phase 1 — Source-of-Truth Evals

| Req ID       | Requirement summary                                      | Priority    | Architecture Area          | Implementation Area | Test / Validation | Task IDs        |
| ------------ | -------------------------------------------------------- | ----------- | -------------------------- | ------------------- | ----------------- | --------------- |
| EVAL-P1-001  | Maintain approved RoseJS knowledge base files            | Must Have   | AI Evaluation Architecture | Eval, Documentation | Eval, Manual    | TASK-088        |
| EVAL-P1-002  | Evaluate key website pages against source of truth       | Must Have   | AI Evaluation, Page Arch.  | Eval, Frontend, Content | Eval, Manual, E2E | TASK-089, 079, 081 |
| EVAL-P1-003  | Brand voice evals (credible, not hype-driven)            | Must Have   | AI Evaluation Architecture | Eval, Content       | Eval, Manual      | TASK-090        |
| EVAL-SOT-001 | Version-controlled eval catalog with golden references   | Must Have   | AI Evaluation Architecture | Eval, Documentation | Eval, Manual      | TASK-078, 079   |
| EVAL-SOT-002 | Golden cases for routes, titles, brand, CTAs, positioning  | Must Have   | AI Evaluation Architecture | Eval, SEO, Frontend | Eval, SEO         | TASK-079, 089   |
| EVAL-SOT-003 | CMS live vs fallback content eval boundaries             | Must Have   | CMS, AI Evaluation         | CMS, Documentation  | Manual            | TASK-080        |
| EVAL-SOT-004 | Map golden cases to PRD or architecture component IDs    | Must Have   | AI Evaluation Architecture | Eval, Documentation | Manual            | TASK-079, 089   |
| EVAL-SOT-005 | Local eval runner with pass/fail reporting               | Should Have | CI/CD, AI Evaluation       | Eval, Testing, DevOps | Eval, CI        | TASK-081        |

### 13.2 Phase 2 — Change-Based and Regression Evals

| Req ID       | Requirement summary                                      | Priority    | Architecture Area          | Implementation Area | Test / Validation | Task IDs        |
| ------------ | -------------------------------------------------------- | ----------- | -------------------------- | ------------------- | ----------------- | --------------- |
| EVAL-P2-001  | Eval scenarios when business data changes                | Must Have   | AI Evaluation, CI/CD       | Eval, Documentation | Eval, CI          | TASK-091, 082   |
| EVAL-P2-002  | Regression suite for recurring RoseJS questions          | Must Have   | AI Evaluation Architecture | Eval, Testing       | Eval, CI          | TASK-092, 083, 084 |
| EVAL-P2-003  | Detect stale or forbidden claims                         | Must Have   | AI Evaluation Architecture | Eval, Documentation | Eval, CI          | TASK-093        |
| EVAL-REG-001 | Automated regression evals on every PR via CI            | Must Have   | CI/CD Architecture         | DevOps, Eval        | CI, Eval          | TASK-082        |
| EVAL-REG-002 | Diff-aware eval subsets by change area                   | Should Have | CI/CD, AI Evaluation       | DevOps, Eval        | CI, Eval          | TASK-082, 091   |
| EVAL-REG-003 | Compare changes against Phase 1 golden references        | Must Have   | AI Evaluation Architecture | Eval, Testing       | Eval, E2E, CI      | TASK-083, 093   |
| EVAL-REG-004 | Document merge gate policy for failed evals              | Must Have   | CI/CD, Deployment          | DevOps, Documentation | Manual, CI      | TASK-084        |
| EVAL-REG-005 | Extend Vitest/Playwright/SEO for PRD §12.3 flows         | Should Have | Testing Architecture       | Testing             | Unit, E2E, SEO, CI | TASK-083       |
| EVAL-REG-006 | Retain eval artifacts on failed PR checks                | Should Have | CI/CD Architecture         | DevOps              | CI, Manual        | TASK-084        |

### 13.3 Phase 3 — AI Assistant Evals

| Req ID       | Requirement summary                                      | Priority    | Architecture Area          | Implementation Area | Test / Validation | Task IDs        |
| ------------ | -------------------------------------------------------- | ----------- | -------------------------- | ------------------- | ----------------- | --------------- |
| EVAL-P3-001  | User-facing assistant behavior evals (when feature ships) | Must Have   | AI Evaluation, Future AI   | Eval, Documentation | Eval, Manual    | TASK-094        |
| EVAL-P3-002  | RAG retrieval and answer grounding evals                   | Must Have   | AI Evaluation, Future AI   | Eval, Testing       | Eval, Manual      | TASK-095        |
| EVAL-P3-003  | Business alignment evals (trust, CTA, no overpromising)  | Must Have   | AI Evaluation Architecture | Eval, Documentation | Eval, Manual      | TASK-096        |
| EVAL-AIA-001 | Dev-workflow assistant eval scenarios                    | Must Have   | AI Workflow                | Documentation, Eval | Manual, Eval      | TASK-085, 094   |
| EVAL-AIA-002 | Adherence to AI Workflow Guide and Code Review Checklist   | Must Have   | AI Workflow                | Documentation, Eval | Manual            | TASK-086, 095   |
| EVAL-AIA-003 | MVP boundary guardrails (no backend, no PHI, no secrets)   | Must Have   | Security, AI Workflow      | Eval, Security      | Eval, Manual      | TASK-086        |
| EVAL-AIA-004 | Healthcare insurance positioning accuracy scoring          | Should Have | AI Evaluation, Content     | Eval, Content       | Manual, Eval      | TASK-085, 096   |
| EVAL-AIA-005 | Human-reviewed rubric and failure log                      | Should Have | AI Workflow                | Documentation       | Manual            | TASK-085        |
| EVAL-AIA-006 | Periodic assistant evals after doc/toolchain changes       | Could Have  | AI Evaluation Architecture | Eval, Documentation | Manual            | TASK-078, 085   |

### 13.4 Consolidated Task Index

| Task ID   | Primary requirements | Phase |
| --------- | -------------------- | ----- |
| TASK-078  | EVAL-SOT-001, NFR-EVAL-001/002, EVAL-AIA-006 | 1 / 3 |
| TASK-079  | EVAL-P1-002, EVAL-SOT-001/002/004 | 1 |
| TASK-080  | EVAL-P1-001, EVAL-SOT-003, NFR-EVAL-001 | 1 |
| TASK-081  | EVAL-P1-002, EVAL-SOT-005, NFR-EVAL-006 | 1 |
| TASK-088  | EVAL-P1-001, NFR-EVAL-001/002 | 1 |
| TASK-089  | EVAL-P1-002, EVAL-SOT-002/004, NFR-EVAL-002 | 1 |
| TASK-090  | EVAL-P1-003, NFR-EVAL-001/002 | 1 |
| TASK-082  | EVAL-P2-001, EVAL-REG-001/002, NFR-EVAL-003 | 2 |
| TASK-091  | EVAL-P2-001, EVAL-REG-002, NFR-EVAL-003 | 2 |
| TASK-092  | EVAL-P2-002, NFR-EVAL-004/006 | 2 |
| TASK-083  | EVAL-P2-002, EVAL-REG-003/005, NFR-EVAL-004 | 2 |
| TASK-093  | EVAL-P2-003, EVAL-REG-003, NFR-EVAL-002/003 | 2 |
| TASK-084  | EVAL-P2-002, EVAL-REG-004/006, NFR-EVAL-002 | 2 |
| TASK-085  | EVAL-AIA-001/004/005, NFR-EVAL-002, EVAL-AIA-006 | 3 (dev) |
| TASK-086  | EVAL-AIA-002/003, NFR-EVAL-005 | 3 (dev) |
| TASK-094  | EVAL-P3-001, EVAL-AIA-001, NFR-EVAL-005 | 3 (user-facing) |
| TASK-095  | EVAL-P3-002, EVAL-P1-001, EVAL-P2-003, NFR-EVAL-005 | 3 (user-facing) |
| TASK-096  | EVAL-P3-003, EVAL-P3-001, NFR-EVAL-005 | 3 (user-facing) |
| TASK-087  | All NFR-EVAL-* and EVAL-* IDs | All |

This document is ready to support implementation and maintenance of `Tasks.md` §29.
