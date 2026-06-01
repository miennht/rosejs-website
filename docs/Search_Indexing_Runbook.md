# Search indexing runbook

Complete after deploy when **`public/sitemap.xml`** is generated at build time (`npm run generate:sitemap`).

**Brand/domain:** RoseJS on **https://www.roseng.org** — see **`docs/Brand_and_Domain.md`**.

## 1. Confirm technical readiness (automated)

```bash
npm run build
npm run verify:production
```

Expect:

- `sitemap.xml` → 200, XML, many `<loc>` entries (core + CMS slugs)
- `robots.txt` → allows `/`, points to sitemap
- Core routes return HTML (not 502)

## 2. Google Search Console

1. Open [Search Console](https://search.google.com/search-console) → property **`https://www.roseng.org/`**.
2. **Sitemaps** → submit **`https://www.roseng.org/sitemap.xml`** (re-submit after each release that changes slugs).
3. **URL inspection** → request indexing for:
   - `https://www.roseng.org/`
   - `https://www.roseng.org/services`
   - `https://www.roseng.org/about`
   - `https://www.roseng.org/insights`
   - `https://www.roseng.org/insights/legacy-modernization`
4. **Pages** → monitor “Indexed” count over 1–4 weeks.

After deploy, run (prints GSC reminder):

```bash
npm run ping:sitemap
```

Google’s legacy HTTP sitemap ping is deprecated; **Search Console re-submit is required**.

## 3. Validate indexing

Weekly, search:

```text
site:roseng.org
```

When URLs appear, test branded queries: `RoseJS`, `RoseJS healthcare`, `roseng.org`.

Bare **`roseng`** may lag; brand + domain queries are the success metric for Option A.

## 4. After content releases

1. Merge to `main` → production deploy.
2. Confirm new slugs appear in built **`dist/sitemap.xml`**.
3. Re-submit sitemap in GSC.
4. Request indexing for new detail URLs if high priority.
