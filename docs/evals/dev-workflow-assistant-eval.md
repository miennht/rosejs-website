# Development-Workflow AI Assistant Eval (TASK-085)

**Status:** Defined (`EVAL-AIA-001`, `EVAL-AIA-004`, `EVAL-AIA-005`, `NFR-EVAL-002`).

**Last reviewed:** 2026-07-20

**Catalog:** [`eval/assistant/dev-workflow-scenarios.json`](../../eval/assistant/dev-workflow-scenarios.json)  
**Guardrails:** [`dev-workflow-guardrails.md`](dev-workflow-guardrails.md) (`TASK-086`)  
**Guides:** [`AI_Workflow_Guide.md`](../AI_Workflow_Guide.md), [`Code_Review_Checklist.md`](../Code_Review_Checklist.md), Tasks.md §28

## Purpose

Human-reviewed scenarios and rubric for **development-workflow** assistants (Cursor, task planning, code generation, PR review). These are **not** user-facing chatbot evals (`TASK-094`–`096`).

Run after major doc, toolchain, or knowledge-base updates (`EVAL-AIA-006`), and whenever reviewing a large AI-authored PR.

## Scenarios (five required types)

| Id                             | Scenario                        | Pass focus                                                |
| ------------------------------ | ------------------------------- | --------------------------------------------------------- |
| `dev-task-planning`            | Task planning from PRD/Tasks    | Cites task IDs; respects MVP scope; no invented backend   |
| `dev-component-implementation` | Component / page implementation | Uses existing UI/CMS patterns; no secrets; a11y/SEO hooks |
| `dev-marketing-copy-draft`     | Marketing copy draft            | Dual industries; no forbidden claims; brand voice         |
| `dev-documentation-update`     | Docs update                     | Traceability preserved; knowledge base before site copy   |
| `dev-pr-review-assistance`     | PR review assistance            | Checklist-aligned findings; no rubber-stamp merge         |

Each JSON case includes `prompt`, `passAnswer`, `failAnswers`, `mustContain`, `mustNotMatchPatterns`, and `knowledgeRefs`.

## Rubric (pass / fail)

### Healthcare / healthcare insurance positioning (`EVAL-AIA-004`)

| Pass                                                                                   | Fail                                                             |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Mentions healthcare **and** eCommerce (or e-commerce) when describing who RoseJS helps | “Healthcare only”, “we only serve hospitals”, excludes eCommerce |
| Uses insurance / RCM / payer language as depth, not exclusivity                        | Guarantees ROI or project success                                |
| Routes commercial next steps to `/schedule` or `/contact`                              | Invents pricing packages or zero-risk promises                   |

### Acceptable vs unacceptable assistant outputs

| Context   | Acceptable                                                     | Unacceptable                                                  |
| --------- | -------------------------------------------------------------- | ------------------------------------------------------------- |
| Planning  | “Implement TASK-0xx within static SPA; keep CMS in `src/cms`.” | “Add Express + Postgres for the contact form.”                |
| Code      | Reuse `LeadMagnetSection`, loaders, `SEO` component            | New `server/` API with env secrets in Vite                    |
| Copy      | “Consulting for healthcare technology and eCommerce teams…”    | “RoseJS guarantees ROI and replaces your architects with AI.” |
| Docs      | Update `docs/rosejs-knowledge/` then catalog/evals             | Change live copy without knowledge-base update                |
| PR review | Flags missing tests, PHI fields, secrets                       | “LGTM” with no checklist coverage                             |

## Failure log template (`EVAL-AIA-005`)

Copy into the PR or a follow-up issue when an assistant mistake recurs:

```text
### Assistant failure log
- Date:
- Scenario id: (e.g. dev-marketing-copy-draft)
- Assistant / tool: (Cursor, etc.)
- Mistake category: (backend | PHI | secrets | off-brand | healthcare-only | other)
- Excerpt:
- Expected (pass) behavior:
- Suggested fix / prompt change:
- Related docs: AI_Workflow_Guide.md | forbidden-claims.md | Code_Review_Checklist.md
```

## How to score a draft

```text
npm run eval:dev-workflow
npm run eval:dev-workflow -- --scenario dev-marketing-copy-draft --text "Draft…"
npm run eval:dev-guardrails -- --text "PR description or assistant plan…"
```

Baseline suite must PASS. Fail fixtures must be rejected. Healthcare positioning patterns reuse Phase 1/2 forbidden-claim rules.

## Operator cadence (`EVAL-AIA-006`)

1. After changes to `docs/AI_Workflow_Guide.md`, `Code_Review_Checklist.md`, or `docs/rosejs-knowledge/`.
2. After Cursor/rules or eval toolchain upgrades.
3. Before merging large AI-generated PRs — run guardrails (`TASK-086`) + spot-check one matching scenario.

## Related

- Guardrails: `npm run eval:dev-guardrails` (`TASK-086`)
- Traceability: `docs/Traceability_Matrix.md` §13 (`TASK-087`)
- Stale claims: `npm run eval:stale`
- Q&A regression: `npm run eval:qa`
