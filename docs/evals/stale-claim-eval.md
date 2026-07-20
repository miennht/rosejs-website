# Stale Answer and Forbidden Claim Detection (TASK-093)

**Status:** Implemented (`EVAL-P2-003`, `EVAL-P1-001`, `NFR-EVAL-002/003`).

**Last reviewed:** 2026-07-17

**Source list:** [`docs/rosejs-knowledge/forbidden-claims.md`](../rosejs-knowledge/forbidden-claims.md)  
**Config:** `src/evals/patterns.ts` (`STALE_CLAIM_PATTERN_RULES`, calendly/email/lead-magnet stale lists)

## How to run

```text
npm run eval:stale
npm run eval:stale -- --text "AI-generated draft copy…"
npm run eval:stale -- --file path/to/draft.md
npm run test -- src/evals/evals.test.ts
```

Exit code `0` = pass; non-zero = fail. Each finding includes rule id, source file, excerpt, and suggested fix.

## What is checked

| Layer               | Detection                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------- |
| Forbidden claims    | Healthcare-only, ROI/success guarantees, zero-risk, AI-replaces, wrong brand `RoseNG`, etc.  |
| Removed services    | Configurable denylist (e.g. “offers blockchain consulting”) — extend when retiring a service |
| Stale Calendly      | Any `calendly.com` URL other than the approved booking link                                  |
| Stale contact email | Known non-approved primary emails                                                            |
| Stale lead magnet   | Known outdated PDF paths / titles                                                            |

Marketing scan set: Home/Services/About/Contact/Schedule sections, lead magnet fallback, brand/nav/calendly/site libs (does **not** scan `forbidden-claims.md` itself, which documents fail examples).

## PRD `EVAL-P2-003` examples (covered in Vitest)

- RoseJS serves healthcare only.
- RoseJS guarantees ROI.
- RoseJS guarantees project success.
- RoseJS offers a removed service (blockchain consulting fixture).
- Old Calendly link.
- Outdated lead magnet path.

## Operator notes

When retiring a service or replacing Calendly/lead magnet:

1. Update `docs/rosejs-knowledge/` and live/fallback sources.
2. Add the old string to `REMOVED_SERVICE_PATTERNS` or `STALE_*` lists in `patterns.ts`.
3. Update `eval/catalog.json` / `eval/scenarios/change-scenarios.json` approved defaults.
4. Run `npm run eval:stale`.

CI path filtering for this command is **`TASK-082` Done** (`npm run eval:ci`).

## Related

- Change scenarios: `npm run eval:scenarios` (`TASK-091`)
- Q&A regression: `npm run eval:qa` (`TASK-092`)
- Static content: `npm run eval:content` (`TASK-089`)
- Brand voice: `npm run eval:voice` (`TASK-090`)
- Deployment Guide §22
