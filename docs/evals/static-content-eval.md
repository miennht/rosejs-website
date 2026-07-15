# Static Website Content Eval — Implementation (TASK-089)

**Status:** Implemented (`EVAL-P1-002`, `TASK-089`).

**Last reviewed:** 2026-07-15

**Checklist:** [`static-website-eval.md`](static-website-eval.md)  
**Knowledge base:** [`../rosejs-knowledge/README.md`](../rosejs-knowledge/README.md)

## How to run

```text
npm run eval:content
npm run test -- src/evals/evals.test.ts
```

Exit code `0` = pass; non-zero = fail. Console report lists each check.

## Coverage map

| Checklist page | Sources scanned                                                           |
| -------------- | ------------------------------------------------------------------------- |
| Homepage       | `Home.tsx`, hero/services/methodology/trust/CTA sections, `cmsLoaders.ts` |
| Services       | `Services.tsx`, `src/content/fallback/services.ts`                        |
| About          | `About.tsx`                                                               |
| Contact        | `Contact.tsx`, `site.ts`, `calendly.ts`                                   |
| Lead magnet    | `leadMagnets.ts`, `LeadMagnetSection.tsx`                                 |

## Automated checks

- Forbidden / stale claim patterns (`forbidden-claims.md`)
- All seven published service slugs present in fallback CMS data
- eCommerce framing on About **and** Services (not healthcare-only)
- Approved Calendly URL, contact email, site origin, brand name
- Approved lead magnet title, slug, and PDF path
- Homepage CTAs include `/schedule` and `/contact`

Clarity / tone “sounds human” items remain human-assisted via the checklist and `npm run eval:voice`.

## Drift validation

Vitest includes a fixture that asserts “RoseJS serves healthcare only.” is detected as a failure (intentional positioning drift).

## Related

- Brand voice eval: [`brand-voice-eval.md`](brand-voice-eval.md) (`TASK-090`)
- Testing Strategy §15
