# Q&A regression suite (TASK-092)

| Artifact | Path                                                                      | Role                                                 |
| -------- | ------------------------------------------------------------------------- | ---------------------------------------------------- |
| Suite    | [`regression-suite.json`](regression-suite.json)                          | Seven recurring questions + golden pass/fail answers |
| Doc      | [`docs/evals/qa-regression-eval.md`](../docs/evals/qa-regression-eval.md) | Human guide                                          |
| Runner   | `npm run eval:qa`                                                         | Baseline + optional draft scoring                    |

## Run

```text
npm run eval:qa
```

## Update rule

Knowledge base change → update this suite’s `passAnswer` / tokens → re-run `eval:qa` before merge.
