# Source-of-Truth Eval Runner (TASK-081)

**Status:** Implemented (`EVAL-SOT-005`, `TASK-081`).

**Last reviewed:** 2026-07-15

**Catalog:** [`eval/catalog.json`](../../eval/catalog.json)  
**CMS boundaries:** [`cms-fallback-vs-live.md`](cms-fallback-vs-live.md)

## How to run

```text
npm run eval:sot
npm run eval:phase1   # content + voice + sot
npm run test -- src/evals/evals.test.ts
```

Exit code `0` = pass; non-zero = fail.

## What is checked

| Layer            | Checks                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| Core routes      | `/`, `/services`, `/about`, `/insights`, `/contact`, `/schedule` in `routes.tsx` |
| Brand constants  | RoseJS, roseng.org, site origin, contact email, Calendly URL           |
| Per-route cases  | SEO `titleExact`, description tokens, CTA paths, body tokens           |
| Services         | Seven published fallback slugs                                         |
| Nav / CTAs       | Primary and footer nav paths                                           |
| Positioning      | eCommerce framing on About + Services; forbidden-claim scans           |
| Lead magnet      | Fallback slug + PDF path                                               |

Respects `contentSource` notes in the catalog: Phase 1 pins **fallback + hardcoded chrome**, not live Sanity bodies (`TASK-080`).

## Related

- Catalog: `eval/README.md`
- Static content: `npm run eval:content`
- Brand voice: `npm run eval:voice`
- Testing Strategy §15
