# Development-Workflow Guardrail Evals (TASK-086)

**Status:** Implemented (`EVAL-AIA-002`, `EVAL-AIA-003`, `NFR-EVAL-005`).

**Last reviewed:** 2026-07-20

**Runner:** `npm run eval:dev-guardrails`  
**Scenarios:** [`dev-workflow-assistant-eval.md`](dev-workflow-assistant-eval.md) (`TASK-085`)  
**References:** [`Code_Review_Checklist.md`](../Code_Review_Checklist.md), [`Tasks.md`](../Tasks.md) §28, [`AI_Workflow_Guide.md`](../AI_Workflow_Guide.md)

## Purpose

Scripted + checklist guardrails for **development-workflow** AI outputs (plans, PR descriptions, diffs, generated code notes). Complements — **does not replace** — human code review.

User-facing assistant guardrails remain `TASK-094`–`096` (blocked until those features ship).

## Automated checks (`EVAL-AIA-003`)

| Rule id                       | Detects                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------ |
| `mvp-custom-backend`          | Proposing Express/Fastify/Nest custom API server for MVP                       |
| `mvp-custom-database`         | Introducing Prisma/Postgres/Mongo as app database for MVP                      |
| `phi-collection`              | Collecting SSN, medical record numbers, diagnosis, etc. via the site           |
| `secrets-in-frontend`         | Hardcoded API keys/tokens/private keys in frontend guidance                    |
| `lib-isolation`               | Putting CMS/analytics/form provider SDKs outside `src/cms` / `src/lib` / forms |
| `healthcare-only-positioning` | Healthcare-only framing in assistant copy (reuses forbidden patterns)          |

### How to run

```text
npm run eval:dev-guardrails
npm run eval:dev-guardrails -- --text "Add Express + Prisma for contact submissions."
npm run eval:dev-guardrails -- --file path/to/pr-description.md
npm run test -- src/evals/evals.test.ts
```

Exit `0` = pass; non-zero = fail. Baseline fixtures prove anti-patterns are detected.

## Human checklist (before merging large AI PRs)

Cross-check `Code_Review_Checklist.md` and Tasks.md §28:

- [ ] No custom backend/database for MVP scope
- [ ] No PHI/PII collection beyond contact form fields
- [ ] No secrets committed; only documented `VITE_*` public config
- [ ] CMS stays in `src/cms`; analytics in `src/lib/analytics.ts`; forms isolated
- [ ] Marketing/AI copy checked against `docs/rosejs-knowledge/` + `forbidden-claims.md`
- [ ] CI green (`lint`, `test`, `typecheck`, `build`, `test:e2e`, `eval:ci`)

## Relationship to human review

| Automated guardrails                                    | Human review                        |
| ------------------------------------------------------- | ----------------------------------- |
| Fast fail on known anti-pattern phrases in drafts/plans | Architecture fit, UX, a11y nuance   |
| Reproducible in CI/local before merge                   | Product judgment, exception waivers |
| Does not prove the diff is correct                      | Must still read the diff            |

## Sample dry-run

```text
npm run eval:dev-guardrails -- --text "We'll add an Express API and store patient MRNs in Postgres."
```

Expected: **FAIL** with `mvp-custom-backend`, `mvp-custom-database`, and/or `phi-collection`.

## Related

- Scenarios/rubric: `npm run eval:dev-workflow` (`TASK-085`)
- Merge gates: Deployment Guide §22 (`TASK-084`)
- Traceability: Traceability_Matrix §13 (`TASK-087`)
