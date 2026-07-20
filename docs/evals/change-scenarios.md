# Change-Based Business Eval Scenarios (TASK-091)

**Status:** Defined (`EVAL-P2-001`, `EVAL-REG-002`, `NFR-EVAL-003`).

**Last reviewed:** 2026-07-15

**Catalog:** [`eval/scenarios/change-scenarios.json`](../../eval/scenarios/change-scenarios.json)  
**Knowledge:** [`docs/rosejs-knowledge/`](../rosejs-knowledge/README.md)  
**CI wiring:** `TASK-082` Done (`npm run eval:ci`)

## Purpose

When RoseJS business data changes, website and AI-generated copy must:

1. Reflect the **latest approved** facts (knowledge base + fallback/constants).
2. **Not** keep stale or removed facts (old Calendly, removed services, healthcare-only, etc.).

## Scenarios (six required types)

| Id                                   | Change             | Pass criteria (summary)                                | Primary evals                |
| ------------------------------------ | ------------------ | ------------------------------------------------------ | ---------------------------- |
| `change-target-industries`           | Industries         | Dual healthcare + eCommerce; no exclusivity            | `eval:content`, `eval:sot`   |
| `change-service-offerings`           | Services           | Seven published slugs match `services.md` / fallback   | `eval:content`, `eval:sot`   |
| `change-lead-magnet`                 | Lead magnet        | Title, slug, PDF path match approved defaults          | `eval:content`, `eval:sot`   |
| `change-cta`                         | CTAs               | `/schedule` and `/contact` remain core targets         | `eval:content`, `eval:sot`   |
| `change-pricing-consultation-policy` | Pricing / policy   | No ROI/success/zero-risk guarantees; consult CTAs only | `eval:content`, `eval:voice` |
| `change-calendly-contact-link`       | Calendly / contact | Approved Calendly, email, origin only                  | `eval:content`, `eval:sot`   |

Each JSON entry includes `triggerPaths` (for future path filters), `scanFiles`, `mustPresent`, optional `mustAbsent` / `mustAbsentPatterns`, `staleExamples`, and `ciSubset`.

## How to run

```text
npm run eval:scenarios
npm run test -- src/evals/evals.test.ts
```

- Exit `0`: baseline scenarios pass **and** the outdated-Calendly dry-run correctly **detects** failure.
- Exit non-zero: baseline drift or dry-run did not detect the stale Calendly URL.

## Operator checklist (business-fact PR)

1. Update knowledge files under `docs/rosejs-knowledge/`.
2. Update site sources / fallback / `APPROVED` constants / `eval/catalog.json` as needed.
3. Update `eval/scenarios/change-scenarios.json` `approvedDefaults` and scenario `mustPresent` lists.
4. Run `npm run eval:scenarios` plus listed `evalCommands`.
5. Note the scenario id(s) in the PR.

## Related

- Stale detection expansion: [`stale-claim-eval.md`](stale-claim-eval.md) (`TASK-093` Done)
- Q&A regression: `npm run eval:qa` (`TASK-092` Done)
- Diff-aware CI: `npm run eval:ci` (`TASK-082` Done)
- Merge gates: `TASK-084` / Deployment Guide §22
- Phase 1 SoT: `npm run eval:sot`
