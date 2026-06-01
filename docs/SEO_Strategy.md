# SEO Strategy — RoseJS (TASK-065)

**Brand:** **RoseJS** · **Domain:** **roseng.org** · **Canonical URL:** **https://www.roseng.org**

See **`docs/Brand_and_Domain.md`** (Option A). SPA metadata is client-side (`src/components/seo/SEO.tsx`); **`public/sitemap.xml`** is generated at build; **`public/robots.txt`** references the sitemap.

## Keyword clusters (healthcare / payer)

| Cluster                          | Intent                      | Primary pages                       |
| -------------------------------- | --------------------------- | ----------------------------------- |
| Healthcare software architecture | Consulting / advisory       | Home, Services, About               |
| Legacy modernization             | Refactor / strangler / risk | Service detail, Insights            |
| AI-first delivery                | Methodology + guardrails    | Home methodology, Insights          |
| RCM / payer integration          | Revenue cycle, APIs         | RCM service, RCM blog, case studies |
| Technical debt / assessment      | Prioritization              | Service detail, lead magnet         |

Branded queries to monitor: **RoseJS**, **roseng.org**, **RoseJS healthcare** (not bare `roseng` alone).

## Page-level SEO

- **Unique** `title` and `meta description` per route via **`SEO`** component; **`rel=canonical`** when `path` is set.
- **`VITE_SITE_URL`** in production builds for canonical, `og:url`, and JSON-LD (`src/lib/seo.ts`).
- Static **`index.html`** uses `RoseJS (roseng.org)` in the default description for first crawl.
- CMS routes use **`seo.seoTitle`** / **`seo.seoDescription`** from fallback or Sanity.
- JSON-LD **`Organization`** uses `name: RoseJS`, `alternateName: roseng.org`.

## Blog topic plan (launch)

1. Legacy healthcare modernization
2. AI-first methodology
3. Integration debt
4. RCM platform modernization guide

Publish via CMS when connected; fallback content lives under **`src/content/fallback/`**.

## Internal linking

- Service detail → related insights and case studies (loaders).
- Insights articles → related services.
- Home → services overview, schedule/contact CTAs.
- Footer/header primary nav covers all core routes; footer links **roseng.org**.

## Sitemap and indexing

- **Build:** `npm run generate:sitemap` → **`public/sitemap.xml`** (core routes + published service, insight, and case study slugs).
- **`public/robots.txt`** → `Sitemap: https://www.roseng.org/sitemap.xml`
- **Operator:** **`docs/Search_Indexing_Runbook.md`** (GSC submit, URL inspection, `site:roseng.org` checks).
- Optional: `npm run ping:sitemap` after deploy (supplement to GSC).

## Search Console

- Property: **URL-prefix** `https://www.roseng.org/`
- Verify via DNS or meta tag (**`index.html`**)
- Re-submit sitemap after releases that add CMS slugs

## Post-launch

- Run indexing runbook after each production release
- Consider prerender/SSR only if organic performance plateaus (Architecture §8.3)
