# Diff-Aware Eval CI (TASK-082)

**Status:** Implemented (`EVAL-P2-001`, `EVAL-REG-001`, `EVAL-REG-002`, `NFR-EVAL-003`).

**Last reviewed:** 2026-07-17

**Selector:** `src/evals/ciEvalSelector.ts`  
**Runner:** `npm run eval:ci`  
**Scenarios:** [`eval/scenarios/change-scenarios.json`](../../eval/scenarios/change-scenarios.json)

## Purpose

On every pull request, CI always runs Phase 1 baseline evals, then adds Phase 2 commands based on the git diff. Shared layout, knowledge base, eval catalog, or CI/config changes force **full** regression.

## How to run locally

```text
npm run eval:ci -- --full
npm run eval:ci -- --base origin/main
npm run eval:ci -- --changed src/pages/Home.tsx
npm run eval:regression
```

Report written to `artifacts/eval-ci-report.txt`.

## Selection rules

| Mode       | When                                                                                 | Commands                                               |
| ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| `baseline` | No matching Phase 2 paths                                                            | `eval:content`, `eval:voice`, `eval:sot`               |
| `subset`   | Matched scenario `triggerPaths` or SEO/forms/analytics areas                         | Baseline ∪ matched `evalCommands`                      |
| `full`     | `docs/rosejs-knowledge/`, `eval/`, `src/evals/`, layout, app routes, workflow/config | Baseline + `eval:scenarios` + `eval:qa` + `eval:stale` |

## CI

`.github/workflows/ci.yml` collects `git diff` vs PR base (or previous commit on `main`), then runs `npm run eval:ci -- --changed-file …`. Failed runs upload `artifacts/eval-ci-report.txt` plus Playwright traces (`TASK-084`).

## Related

- Merge gates: `docs/Deployment_Guide.md` §22 (`TASK-084`)
- Critical flows: `e2e/critical-flows.spec.ts` (`TASK-083`)
- Change scenarios: `npm run eval:scenarios` (`TASK-091`)
