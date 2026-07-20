# Development-workflow assistant evals (TASK-085 / TASK-086)

| Artifact       | Path                                                                                        | Role                                                |
| -------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Scenarios      | [`dev-workflow-scenarios.json`](dev-workflow-scenarios.json)                                | Five Cursor/planning/code/copy/docs/PR-review cases |
| Doc (rubric)   | [`docs/evals/dev-workflow-assistant-eval.md`](../docs/evals/dev-workflow-assistant-eval.md) | Human rubric + failure log                          |
| Guardrails doc | [`docs/evals/dev-workflow-guardrails.md`](../docs/evals/dev-workflow-guardrails.md)         | MVP boundary checklist                              |
| Runners        | `npm run eval:dev-workflow` / `npm run eval:dev-guardrails`                                 | Baseline + draft scoring                            |

## Run

```text
npm run eval:dev-workflow
npm run eval:dev-guardrails
```

User-facing assistant evals (`TASK-094`–`096`) are blocked until those features ship.
