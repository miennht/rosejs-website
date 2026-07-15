# CMS Fallback vs Live Content — Eval Boundaries (TASK-080)

**Status:** Documented (`EVAL-SOT-003`, `EVAL-P1-001`, `NFR-EVAL-001`).

**Last reviewed:** 2026-07-15

**Architecture:** [`Architecture.md` §7](../Architecture.md) (CMS abstraction + fallback)  
**Catalog:** [`eval/catalog.json`](../../eval/catalog.json)  
**Knowledge overlap:** [`docs/rosejs-knowledge/`](../rosejs-knowledge/README.md)

## Purpose

Define what Phase 1 evals may assert so they do **not** false-fail when:

- Preview/local builds use TypeScript fallback modules
- Sanity is unset or not yet wired
- A future live CMS outage returns empty lists instead of fallback copy

## Runtime today (authoritative)

```text
Page → src/app/cmsLoaders.ts → src/cms/queries.ts → createContentSource()
                                                         ↓
                                              FallbackCmsContentSource
                                                         ↓
                                              src/content/fallback/*.ts
```

`createContentSource()` in `src/cms/client.ts` **always** returns `FallbackCmsContentSource`. Comments mention swapping in Sanity when `VITE_SANITY_PROJECT_ID` is set — **that branch is not implemented**. There is no Sanity SDK in the app.

| Mode                         | When                                              | Content source                                      |
| ---------------------------- | ------------------------------------------------- | --------------------------------------------------- |
| **Fallback-only (current)**  | All environments until live client lands          | `src/content/fallback/{services,blogPosts,caseStudies,leadMagnets}.ts` |
| **Live Sanity (future)**     | After `createContentSource` branches on env       | Sanity dataset; loaders/pages unchanged             |
| **Query failure**            | Thrown error in `safeList` / by-slug helpers      | Lists → `[]`; by-slug → `null` (empty / soft not-found UI) — **no automatic re-read of fallback** once a live source exists |

Unset `VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET` has **no runtime effect** today.

## Source-of-truth matrix

| Surface                         | Runtime fields                                                                 | Page chrome (hardcoded)                                      | Phase 1 eval source                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Services list / detail          | All `Service` fields from CMS layer (fallback modules today)                   | Listing H1, intro, SEO title/description, bottom CTAs        | Fallback `services.ts` + `Services.tsx` / detail chrome                             |
| Home featured services          | Title/summary from CMS layer; **featured slug order** hardcoded in loader      | Hero, methodology, trust, CTA copy, SEO                      | `Home.tsx` + loaders/fallback for service teasers                                   |
| Insights (`/insights`, articles)| All `BlogPost` fields from CMS layer                                           | Listing H1, intro, SEO, empty-state copy                     | Listing chrome in `Insights.tsx`; article body **not** pinned by static-content eval |
| Case studies                    | All `CaseStudy` fields from CMS layer                                          | Listing chrome; confidentiality banner on detail             | Not in TASK-089 scan set; catalog notes CMS-shaped                                  |
| Lead magnet                     | `LeadMagnet` in fallback + `getLeadMagnets`; **UI not wired via loader**       | `LeadMagnetSection` copy if mounted                          | `leadMagnets.ts` + section component (TASK-089)                                     |
| About / Contact / Schedule      | N/A (no CMS)                                                                   | Entire page; Contact/Schedule use `VITE_*` defaults          | Page TSX + `site.ts` / `calendly.ts`                                                |
| Brand / domain / Calendly       | Constants + env overrides                                                      | —                                                            | Hardcoded defaults in `brand.ts`, `site.ts`, `calendly.ts`                          |
| Sitemap                         | Build script imports fallback modules directly                                 | —                                                            | Fallback slugs until sitemap uses live CMS                                          |

## Field ownership

### Blog posts / Insights (`BlogPost`)

**CMS / fallback:** `id`, `title`, `slug`, `summary`, `body`, `author`, dates, `tags`, `category`, `relatedServiceSlugs`, `seo`, `status` (published filter in `FallbackCmsContentSource`).

**Hardcoded:** Insights listing SEO and intro; article “not found” UI; related-services presentation chrome.

**Eval rule:** Do not fail Phase 1 golden cases because live Sanity changed an article title/body. Assert listing chrome and route registration. Optional future cases marked `cmsLive: true` may pin live content.

### Case studies (`CaseStudy`)

**CMS / fallback:** `id`, `title`, `slug`, `summary`, `problem`, `context`, `approach`, `solution`, `outcome`, `lessonsLearned`, `relatedServiceSlugs`, `seo`, `status`.

**Hardcoded:** Listing SEO/intro/empty state; detail confidentiality notice.

**Eval rule:** Same as blog — CMS-shaped body is not a Phase 1 hard fail against live drift.

### Services (`Service`)

**CMS / fallback:** Full service record including `deliverables`, SEO, related slugs, `status`.

**Hardcoded:** Services page listing chrome and CTAs; Home featured **slug list**.

**Eval / knowledge overlap:** `docs/rosejs-knowledge/services.md` and published slugs in `eval/catalog.json` / `src/evals/patterns.ts` track **fallback** until live CMS is the production source. Updating offerings requires dual update: knowledge base + fallback (and catalog when slugs change).

### Static page sections

| Page       | CMS? | Eval pin                                      |
| ---------- | ---- | --------------------------------------------- |
| About      | No   | Full copy in `About.tsx`                      |
| Contact    | No   | Copy + default email from `site.ts`           |
| Schedule   | No   | Copy + default Calendly from `calendly.ts`    |
| Home chrome| No   | Hero/methodology/trust/CTA/SEO in `Home.tsx`  |
| Nav / footer | No | `navConfig.ts`                              |

## Knowledge base vs CMS

| Artifact                         | Owns                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| `docs/rosejs-knowledge/*`        | Approved positioning, voice, forbidden claims (eval truth)   |
| `src/content/fallback/*`         | Runtime CMS-shaped records **today**                         |
| Sanity (future)                  | Runtime CMS-shaped records when live client ships            |
| Hardcoded page TSX               | Marketing chrome that is not a CMS document                  |

Evals must prefer knowledge-base + hardcoded chrome + **fallback modules** for Phase 1. Live CMS copy may diverge; that is not a Phase 1 failure unless a case is explicitly `cmsLive`.

## Lead magnet special case

- Fallback: `src/content/fallback/leadMagnets.ts` + PDF under `public/downloads/`.
- `getLeadMagnets()` exists; **no route loader mounts it** yet.
- TASK-089 still scans fallback metadata (title, slug, file path) so the asset contract stays green.

## Sitemap caveat

`scripts/generate-sitemap.mjs` reads fallback modules directly, not `createContentSource()`. After live Sanity, sitemap generation must be updated or evals will disagree with the live site map.

## Eval catalog annotations

Each case in `eval/catalog.json` includes `contentSource`:

| Value        | Meaning                                                                 |
| ------------ | ----------------------------------------------------------------------- |
| `hardcoded`  | Assert page/lib TSX only                                                |
| `fallback`   | Assert `src/content/fallback/*` and/or listing chrome; safe in CI today |
| `mixed`      | Hardcoded chrome + CMS-shaped records from fallback                     |
| `cms-live`   | Reserved — do not use until live Sanity client + dedicated eval mode    |

See catalog `notes.cmsFields` and per-case `contentSource` / `cmsFields`.

## Related

- Static content eval: `npm run eval:content` (`TASK-089`)
- Brand voice: `npm run eval:voice` (`TASK-090`)
- Local SoT runner: `TASK-081`
- Architecture §7.5 (points here)
