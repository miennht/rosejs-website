# Q&A Regression Eval Suite (TASK-092)

**Status:** Implemented (`EVAL-P2-002`, `NFR-EVAL-004`, `NFR-EVAL-006`).

**Last reviewed:** 2026-07-17

**Suite:** [`eval/qa/regression-suite.json`](../../eval/qa/regression-suite.json)  
**Knowledge:** [`docs/rosejs-knowledge/`](../rosejs-knowledge/README.md)

## Purpose

Repeatable **automated** regression for seven recurring RoseJS business questions. Same questions, pass/fail against golden answers and knowledge-base grounding—run after content, prompt, or knowledge-base changes.

This is **not** a human review workflow. Failures feed CI / merge gates (`TASK-082`, `TASK-084`).

## Questions covered

| Id                            | Question                                    |
| ----------------------------- | ------------------------------------------- |
| `what-does-rosejs-do`         | What does RoseJS do?                        |
| `who-does-rosejs-help`        | Who does RoseJS help?                       |
| `what-is-ai-first`            | What is AI-first development?               |
| `works-with-ecommerce`        | Does RoseJS work with e-commerce companies? |
| `guarantee-project-success`   | Can RoseJS guarantee project success?       |
| `how-to-contact`              | How can someone contact RoseJS?             |
| `what-makes-rosejs-different` | What makes RoseJS different?                |

## How to run

```text
npm run eval:qa
npm run eval:qa -- --question what-does-rosejs-do --text "AI draft answer…"
npm run eval:qa -- --question how-to-contact --file drafts/answer.md
npm run test -- src/evals/evals.test.ts
```

Exit `0` = pass; non-zero = fail.

## What baseline checks

1. All seven cases exist.
2. Each golden `passAnswer` scores **pass** (`mustContain`, no forbidden patterns / stale Calendly).
3. Each `failAnswers` fixture is **rejected**.
4. `knowledgeMustContain` tokens still appear in cited `docs/rosejs-knowledge/` files (detects KB drift vs suite).

## Operator notes

When updating approved facts:

1. Edit knowledge files first.
2. Update matching `passAnswer` / `mustContain` / `knowledgeMustContain` in `eval/qa/regression-suite.json`.
3. Run `npm run eval:qa`.

## Related

- Stale claims: `npm run eval:stale` (`TASK-093`)
- Change scenarios: `npm run eval:scenarios` (`TASK-091`)
- CI wiring: `npm run eval:ci` (`TASK-082` Done)
- Flow regression integration: `TASK-083`
