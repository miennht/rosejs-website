# Brand and domain (Option A)

**Effective:** June 2026 — until further notice.

## Naming

| Role              | Value                      | Usage                                                                          |
| ----------------- | -------------------------- | ------------------------------------------------------------------------------ |
| **Brand**         | **RoseJS**                 | Logo, titles, legal line, JSON-LD `Organization.name`, prose (“RoseJS helps…”) |
| **Domain**        | **roseng.org**             | Display in footer, taglines, and copy linking brand ↔ site                     |
| **Canonical URL** | **https://www.roseng.org** | `VITE_SITE_URL`, sitemap, `robots.txt`, Open Graph, canonical links            |

Use **RoseJS** as the company/consulting name. Use **roseng.org** when referring to the website or email host (`hello@roseng.org`). Do not rename the brand to “RoseNG” or “Roseng” unless this document is revised.

## Copy patterns

- **Tagline:** `RoseJS · roseng.org`
- **First mention on a page:** `RoseJS (roseng.org)` where it helps SEO and clarity
- **Title pattern:** `Page topic | RoseJS` or `RoseJS | Page topic` — homepage may include domain in static `index.html`
- **Footer:** Brand name + short line + link to `https://www.roseng.org` labeled `roseng.org`

## Code references

- Constants: **`src/lib/brand.ts`**
- SEO defaults: **`src/lib/seo.ts`**, **`src/components/seo/SEO.tsx`**
- Structured data: **`src/components/seo/siteSchemas.ts`** (`alternateName`: `roseng.org`)

## Documentation

All project docs should treat **RoseJS** as the brand and **https://www.roseng.org** as the production URL. Staging uses Railway `*.up.railway.app` with staging `VITE_SITE_URL` — not indexed as canonical.

See also **`docs/SEO_Strategy.md`**, **`docs/Google_Search_Console_Setup.md`**.
