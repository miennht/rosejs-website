# Source-of-truth eval catalog (TASK-079)

Machine-readable golden references for Phase 1 source-of-truth evals (`EVAL-SOT-001`, `EVAL-SOT-002`, `EVAL-SOT-004`).

| Artifact       | Path              | Role                                      |
| -------------- | ----------------- | ----------------------------------------- |
| Catalog        | `catalog.json`    | Golden cases for routes, brand, CTAs      |
| Knowledge base | `docs/rosejs-knowledge/` | Approved business/brand claims     |
| Runner         | `TASK-081`        | `npm run eval:sot` (not yet implemented)  |
| CMS boundaries | [`docs/evals/cms-fallback-vs-live.md`](../docs/evals/cms-fallback-vs-live.md) | Fallback vs live field ownership (`TASK-080`) |

## Core routes

Every PRD core page has at least one golden case:

| PRD route | Catalog route   | Case id            |
| --------- | --------------- | ------------------ |
| `/`       | `/`             | `route-home`       |
| `/services` | `/services`   | `route-services`   |
| `/about`  | `/about`        | `route-about`      |
| `/blog`   | `/insights`     | `route-insights`   |
| `/contact` | `/contact`     | `route-contact`    |
| `/schedule` | `/schedule`   | `route-schedule`   |

`/blog` is the PRD label; the live app route is **`/insights`** (`BLOG-*`).

## Case schema (summary)

Each entry in `cases[]` includes:

- `id`, `route`, `page`
- `prdIds[]` — at least one PRD functional or NFR id
- `architectureRefs[]`, `knowledgeRefs[]`, `sourceFiles[]`
- `expect` — titles, description substrings, CTA paths, brand URLs, optional `forbiddenRuleIds` aligned with `src/evals/patterns.ts`

Site-wide contracts use `route: "*"`.

Each case also declares `contentSource` (`hardcoded` | `fallback` | `mixed` | `cms-live`) plus `cmsFields` / `hardcodedFields` — see [`cms-fallback-vs-live.md`](../docs/evals/cms-fallback-vs-live.md).

## When to update

Update `catalog.json` when any of these change:

- Core routes or SEO titles/descriptions
- Brand name, domain, contact email, or Calendly URL
- Published service slugs or industry positioning
- Primary/footer nav targets

Also update matching knowledge files under `docs/rosejs-knowledge/` and note the catalog change in the PR checklist.

## Related

- Index: [`docs/evals/README.md`](../docs/evals/README.md)
- Static content eval: `npm run eval:content` (`TASK-089`)
- Brand voice eval: `npm run eval:voice` (`TASK-090`)
- CMS boundaries: `TASK-080`
- Local runner: `TASK-081`
