# Change-based business eval scenarios (TASK-091)

Machine-readable scenarios for **EVAL-P2-001**. When business facts change, these scenarios define what must stay true and what must not reappear as stale copy.

| Artifact  | Path                                                                  | Role                                                             |
| --------- | --------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Catalog   | [`change-scenarios.json`](change-scenarios.json)                      | Six change types + trigger paths + pass criteria                 |
| Doc       | [`docs/evals/change-scenarios.md`](../docs/evals/change-scenarios.md) | Human guide                                                      |
| Runner    | `npm run eval:scenarios`                                              | Baseline pass + Calendly dry-run failure (`TASK-091` validation) |
| CI wiring | `TASK-082`                                                            | Diff-aware subset selection from `triggerPaths` / `ciSubset`     |

## Change types covered

| Scenario id                          | Change type                   |
| ------------------------------------ | ----------------------------- |
| `change-target-industries`           | Target industries             |
| `change-service-offerings`           | Service offerings             |
| `change-lead-magnet`                 | Lead magnet                   |
| `change-cta`                         | CTAs                          |
| `change-pricing-consultation-policy` | Pricing / consultation policy |
| `change-calendly-contact-link`       | Calendly or contact links     |

## How to use

1. Update `docs/rosejs-knowledge/` **before** website copy when facts change.
2. Update matching scenario `mustPresent` / `approvedDefaults` and Phase 1 catalog/`patterns.ts` APPROVED constants.
3. Run `npm run eval:scenarios` (and the scenario’s `evalCommands`).
4. After `TASK-082`, CI selects subsets from `triggerPaths`.

## Dry-run

```text
npm run eval:scenarios
```

Baseline against the repo must **PASS**. The built-in outdated-Calendly fixture must **FAIL** detection (proves the scenario catches stale links).
