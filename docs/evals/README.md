# RoseJS AI Evaluation — Index (TASK-078)

This folder is the entry point for post-MVP AI evaluation work. **Do not duplicate** the canonical implementation guides; use them for procedures, acceptance criteria, and CI details.

## Canonical implementation guides

| Guide                                                                                            | Use for                                                                      |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [**Testing_Strategy.md** §15](../Testing_Strategy.md#15-ai-evaluation-testing-strategy-post-mvp) | Test types, phases, validation methods, CI commands, eval definition of done |
| [**AI_Workflow_Guide.md**](../AI_Workflow_Guide.md#ai-evaluation-workflow-post-mvp)              | Prompting with knowledge base, change workflow, assistant eval rules         |

## Requirements and architecture

| Document                                            | Section         | IDs                                                   |
| --------------------------------------------------- | --------------- | ----------------------------------------------------- |
| [PRD.md](../PRD.md)                                 | §11.8, §26, §27 | `NFR-EVAL-*`, `EVAL-P1/P2/P3-*`, `EVAL-SOT/REG/AIA-*` |
| [Architecture.md](../Architecture.md)               | §28             | Eval architecture, CI integration, file layout        |
| [Traceability_Matrix.md](../Traceability_Matrix.md) | §13             | Requirement → task → validation                       |
| [Tasks.md](../Tasks.md)                             | §29             | `TASK-078`–`096`, `T-EVAL-P1-*` (`TASK-097`–`103`)    |
| [Deployment_Guide.md](../Deployment_Guide.md)       | §22             | Merge and deployment gates (`TASK-084`)               |

## Three phases (summary)

| Phase                           | Goal                                                    | Start here                                                               |
| ------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1 — Source-of-truth             | Knowledge base, static page checks, brand voice         | `TASK-097` (`T-EVAL-P1-001`) after this index                            |
| 2 — Change-based and regression | Business-change scenarios, Q&A regression, stale claims | After Phase 1 complete (`TASK-091`–`093`)                                |
| 3 — AI assistant                | Dev-workflow and user-facing assistant evals            | After Phase 2 CI (`TASK-085`–`086`; `TASK-094`–`096` when features ship) |

Phases are sequential. See PRD §26 exit criteria and Tasks.md §25.2 dependencies.

## Authoritative source-of-truth artifacts

- [`docs/rosejs-knowledge/`](../rosejs-knowledge/README.md) — approved business, brand, and forbidden-claims files (`TASK-088` / `TASK-097`–`102` Done)
- `docs/evals/static-website-eval.md` — static page checklist (`TASK-103` Done; input to `TASK-089`)
- [`static-content-eval.md`](static-content-eval.md) — automated static content eval (`TASK-089` Done; `npm run eval:content`)
- [`brand-voice-eval.md`](brand-voice-eval.md) — brand-voice eval (`TASK-090` Done; `npm run eval:voice`)
- `docs/Brand_and_Domain.md` — brand and domain defaults
- `docs/Component_Map.md` — UI and route map
- [`eval/catalog.json`](../../eval/catalog.json) — golden catalog (`TASK-079` Done); cases cite `docs/rosejs-knowledge/` paths; runner is `TASK-081`
- [`cms-fallback-vs-live.md`](cms-fallback-vs-live.md) — CMS vs fallback eval boundaries (`TASK-080` Done)

## Requirement ID families

| Prefix       | PRD section | Phase              |
| ------------ | ----------- | ------------------ |
| `NFR-EVAL-*` | §11.8       | Cross-cutting      |
| `EVAL-P1-*`  | §27         | 1                  |
| `EVAL-P2-*`  | §27         | 2                  |
| `EVAL-P3-*`  | §27         | 3                  |
| `EVAL-SOT-*` | §26.3       | 1 (implementation) |
| `EVAL-REG-*` | §26.4       | 2 (implementation) |
| `EVAL-AIA-*` | §26.5       | 3 (dev-workflow)   |

## Commands

```text
npm run eval:content   # TASK-089 static website content eval
npm run eval:voice     # TASK-090 brand-voice eval (+ optional --text / --file)
npm run eval:phase1    # both
```

## Next task

**`TASK-080` Done.** Last Phase 1 implementation task: **`TASK-081`** (`npm run eval:sot` against `eval/catalog.json`).
