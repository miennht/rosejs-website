# RoseJS Knowledge Base

**Status:** Approved (`EVAL-P1-001`, `TASK-088` umbrella; detail tasks `TASK-097`–`102` / `T-EVAL-P1-001`–`006`).

**Signed off:** 2026-07-10

**Purpose:** Version-controlled source of truth for RoseJS business facts, services, industries, brand voice, and forbidden claims. Website copy and AI-generated content are evaluated against these files—not against model memory alone.

---

## File inventory (DoD)

| File                                           | Task                     | PRD                      | Role                                                                    |
| ---------------------------------------------- | ------------------------ | ------------------------ | ----------------------------------------------------------------------- |
| [`company-profile.md`](company-profile.md)     | TASK-098 / T-EVAL-P1-002 | EVAL-P1-001              | What RoseJS is, founder summary, methodology, clients, value prop, CTAs |
| [`services.md`](services.md)                   | TASK-099 / T-EVAL-P1-003 | EVAL-P1-001              | Current services (published + cross-cutting); no removed offerings      |
| [`target-industries.md`](target-industries.md) | TASK-100 / T-EVAL-P1-004 | EVAL-P1-001              | Healthcare **and** eCommerce; not healthcare-only                       |
| [`brand-voice.md`](brand-voice.md)             | TASK-101 / T-EVAL-P1-005 | EVAL-P1-003              | Tone rules and voice rubric for `TASK-090`                              |
| [`forbidden-claims.md`](forbidden-claims.md)   | TASK-102 / T-EVAL-P1-006 | EVAL-P1-003, EVAL-P2-003 | Forbidden/stale claims for `TASK-093`                                   |

Scaffold: **TASK-097** / T-EVAL-P1-001 — folder and initial files created.

Related checklist (not in this folder): [`docs/evals/static-website-eval.md`](../evals/static-website-eval.md) — **TASK-103** / T-EVAL-P1-007.

---

## Umbrella sign-off (`TASK-088`)

Verified:

- [x] `TASK-097`–`TASK-102` status **Done** in `docs/Tasks.md`
- [x] Each file has approved, current content usable as eval ground truth
- [x] Manual alignment spot-check vs PRD §7, About/Home/Services, `src/content/fallback/services.ts`, `docs/Brand_and_Domain.md`
- [x] Static website checklist maps checklist themes → these files (`TASK-103`)
- [x] Eval index and AI workflow guide point here for prompting and change control

**Result:** Knowledge base epic **signed off**. Downstream work may treat `docs/rosejs-knowledge/` as the approved Phase 1 source-of-truth set.

---

## How consumers must reference this folder

| Consumer                    | Task            | Required reference                                                                                        |
| --------------------------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| Static page checklist       | TASK-103 (done) | KB map in `docs/evals/static-website-eval.md`                                                             |
| Static content evals        | TASK-089        | Load/compare against files in this folder; report pass/fail per checklist IDs                             |
| Brand-voice evals           | TASK-090        | Rubric in `brand-voice.md`; hard fails via `forbidden-claims.md`                                          |
| Eval catalog / golden cases | TASK-079        | Each golden case must cite at least one file path under `docs/rosejs-knowledge/` (or PRD/Architecture ID) |
| Local / CI runner           | TASK-081        | `npm run eval:sot` reads catalog + this folder                                                            |
| Stale-claim detection       | TASK-093        | Pattern source: `forbidden-claims.md`                                                                     |
| AI prompting                | —               | Cite relevant file(s) in prompts (`docs/AI_Workflow_Guide.md`)                                            |

Until `TASK-079` creates `eval/` (or equivalent catalog), treat this README + `docs/evals/static-website-eval.md` as the interim catalog entry points.

---

## Evaluation rule of thumb

1. **Facts** → `company-profile.md`, `services.md`, `target-industries.md`
2. **Tone** → `brand-voice.md`
3. **Hard fail** → `forbidden-claims.md`
4. **Page walkthrough** → `docs/evals/static-website-eval.md`

A draft can pass voice and still fail on facts or forbidden claims.

---

## Change control

1. Update the relevant file(s) in this folder **first**.
2. Update website/CMS content to match.
3. Update eval checklist, catalog, and scenarios when those exist (`TASK-079`, `TASK-089`–`093`).
4. Bump **Last reviewed** on changed files and note the change in the PR.
5. Do not merge user-facing copy that contradicts this folder without an explicit knowledge-base update in the same change set.
