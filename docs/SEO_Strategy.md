# SEO Strategy — RoseJS (TASK-065)

Canonical site: **https://www.roseng.org**. SPA metadata is client-side (`src/components/seo/SEO.tsx`); static **`public/sitemap.xml`** and **`public/robots.txt`** support crawlers.

## Keyword clusters (healthcare / payer)

| Cluster                          | Intent                      | Primary pages                       |
| -------------------------------- | --------------------------- | ----------------------------------- |
| Healthcare software architecture | Consulting / advisory       | Home, Services, About               |
| Legacy modernization             | Refactor / strangler / risk | Service detail, Insights            |
| AI-first delivery                | Methodology + guardrails    | Home methodology, Insights          |
| RCM / payer integration          | Revenue cycle, APIs         | RCM service, RCM blog, case studies |
| Technical debt / assessment      | Prioritization              | Service detail, lead magnet         |

## Page-level SEO

- **Unique** `title` and `meta description` per route via **`SEO`** component.
- **`VITE_SITE_URL`** in production builds for `og:url` and JSON-LD (`src/lib/seo.ts`).
- CMS routes use **`seo.seoTitle`** / **`seo.seoDescription`** from fallback or Sanity.

## Blog topic plan (launch)

1. Legacy healthcare modernization
2. AI-first methodology
3. Integration debt
4. RCM platform modernization guide

Publish via CMS when connected; fallback content lives under **`src/content/fallback/`**.

## Internal linking

- Service detail → related insights and case studies (loaders).
- Insights articles → related services.
- Home → services overview, featured insights, lead magnet, schedule/contact CTAs.
- Footer/header primary nav covers all core routes.

## Sitemap and indexing

- Static sitemap: **`public/sitemap.xml`** (core routes; expand when CMS slugs are stable).
- **`public/robots.txt`** references sitemap URL.
- Submit sitemap in **Google Search Console**: **`docs/Google_Search_Console_Setup.md`**.

## Search Console

- Property: **URL-prefix** `https://www.roseng.org/`
- Verify via meta tag (**`index.html`**) or DNS
- Monitor **Page indexing** and sitemap status after deploy

## Post-launch

- Refresh sitemap when new CMS slugs ship
- Consider prerender/SSR only if organic performance plateaus (Architecture §8.3)
