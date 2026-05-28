# Content Plan — RoseJS (TASK-066)

Supports organic traffic and credibility for **healthcare** and **healthcare insurance** buyers.

## Initial launch content (shipped in repo)

| Asset               | Location                                                          | Status                |
| ------------------- | ----------------------------------------------------------------- | --------------------- |
| 7 core services     | `src/content/fallback/services.ts`                                | Fallback until Sanity |
| 4 insights articles | `src/content/fallback/blogPosts.ts`                               | Fallback until Sanity |
| 2 case studies      | `src/content/fallback/caseStudies.ts`                             | Anonymized            |
| Lead magnet PDF     | `public/downloads/legacy-application-modernization-checklist.pdf` | Static                |

## Blog categories

- Engineering (modernization, integration)
- Methodology (AI-first delivery)

## 30 / 60 / 90 day roadmap (editorial)

| Window  | Focus           | Example topics                                                             |
| ------- | --------------- | -------------------------------------------------------------------------- |
| 30 days | Trust + clarity | One deeper case study narrative; service page refinements from sales calls |
| 60 days | SEO depth       | Comparison posts (build vs buy integration layer); audit readiness         |
| 90 days | Payer/RCM       | Partner onboarding playbooks; observability for batch SLAs                 |

## Case study topics (pipeline)

- Payer claims batch stabilization (published fallback)
- Post-acquisition identity/audit consolidation (published fallback)
- Clinical workflow API consolidation (future)

## Lead magnets

- Legacy modernization checklist (live)
- Future: integration contract review worksheet; AI governance one-pager

## LinkedIn repurposing

- Turn each insight into: hook + 3 bullets + link to **https://www.roseng.org/insights/{slug}**
- Case studies → “lessons learned” carousel; no client-identifying details

Set **`VITE_LINKEDIN_URL`** when the company or founder profile is ready.
