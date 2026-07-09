# AI Workflow Guide — RoseJS (TASK-067)

How AI-assisted work fits this repository and future AI-First templates.

## AI-First pillars (delivery)

1. **Skill** — Human architecture judgment on requirements and trade-offs.
2. **Code review** — Security, a11y, SEO, maintainability before merge.
3. **Test suites** — Vitest component/unit tests; Playwright E2E in CI.
4. **Deployment** — GitHub Flow, CI on PR, Railway production from `main`.

## Prompting guidelines

- Anchor prompts in **`docs/PRD.md`**, **`docs/Architecture.md`**, **`docs/Tasks.md`**, and task IDs.
- For copy and positioning, also anchor in **`docs/rosejs-knowledge/`** (see AI evaluation workflow below).
- Specify scope: files, acceptance criteria, and what **not** to change.
- Ask for minimal diffs; reject drive-by refactors.
- Reference existing patterns (`src/cms/types.ts`, `SEO`, `ContactForm`).

## Human review rules

- Do not merge AI output without reading the diff.
- Verify claims against the codebase and docs.
- Reject secrets in client bundles (`VITE_*` only for browser-safe values).
- Confirm healthcare copy does not imply PHI handling or client identification in case studies.

## Code generation workflow

1. Branch from `main` (`feature/*`, `fix/*`, `docs/*`).
2. Implement with local `npm run dev`.
3. Run `npm run lint`, `npm run test`, `npm run build` (and `npm run test:e2e` when touching routes/forms).
4. Open PR using **`.github/pull_request_template.md`**.
5. Address CI and human review.

## Test generation workflow

- Prefer **Testing Library** queries by role/label (`src/test/test-utils.tsx` for router).
- E2E for critical journeys only (`e2e/`).
- No tests that only assert implementation details.

## Brand and domain (Option A)

- **Brand:** RoseJS · **Domain:** roseng.org · **Canonical:** https://www.roseng.org — **`docs/Brand_and_Domain.md`**.

## Documentation workflow

- Update **`docs/Tasks.md`** status and validation when completing tasks.
- Keep **`docs/Deployment_Guide.md`** aligned with **`railway.json`** and CI.
- Cross-link new runbooks from **`README.md`**.

## Security boundaries

- No custom backend or database for MVP.
- Form delivery via Formspree (or equivalent); no API keys in frontend.
- No PHI/PII collection beyond business contact fields.
- Branch protection and CI required on `main` (**`docs/Branch_Protection_Setup.md`**).

## Do not overbuild

- No premature abstractions, feature flags, or CMS write paths in the browser.
- No SSR migration unless SEO metrics justify it.
- Prefer extending fallback content or Sanity later over new frameworks.

## Reuse in future projects

Copy: folder layout, CI workflow pattern, PR/issue templates, deployment runbooks, and this guide’s review gates.

---

## AI evaluation workflow (post-MVP)

**Index:** [`docs/evals/README.md`](evals/README.md) (`TASK-078`) — entry point; canonical detail is in this section and **Testing_Strategy.md** §15.

RoseJS uses evals as **quality gates** for AI-generated content, website copy, and future AI features. Requirements: **`docs/PRD.md`** §11.8, §26, §27. Implementation tasks: **`docs/Tasks.md`** §29 (`TASK-078`–`TASK-096`, `T-EVAL-P1-*` via `TASK-097`–`103`). Architecture: **`docs/Architecture.md`** §28. Traceability: **`docs/Traceability_Matrix.md`** §13.

### Three-phase roadmap

| Phase                           | Focus                                                                      | PRD IDs                   | Key tasks                                      |
| ------------------------------- | -------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------- |
| 1 — Source-of-truth             | Approved knowledge base, static content and brand-voice checks             | `EVAL-P1-*`, `EVAL-SOT-*` | `TASK-097`–`103`, `TASK-088`–`090`, `TASK-081` |
| 2 — Change-based and regression | Business-change scenarios, Q&A regression, stale/forbidden claims          | `EVAL-P2-*`, `EVAL-REG-*` | `TASK-091`–`093`, `TASK-082`–`084`             |
| 3 — AI assistant                | Dev-workflow assistants (Cursor) and user-facing assistants (when shipped) | `EVAL-P3-*`, `EVAL-AIA-*` | `TASK-085`–`086`, `TASK-094`–`096`             |

Phases are sequential: complete Phase 1 knowledge base before Phase 2 CI gates; Phase 3 user-facing evals apply when chatbot/FAQ/RAG features ship.

### Phase 1: Source-of-truth for AI prompts

Anchor AI copy and planning prompts in **`docs/rosejs-knowledge/`** (not model memory alone):

| File                   | Use in AI workflow                                               |
| ---------------------- | ---------------------------------------------------------------- |
| `company-profile.md`   | Positioning, founder summary, value proposition                  |
| `services.md`          | Current offerings only — no removed services                     |
| `target-industries.md` | Healthcare **and** e-commerce — not healthcare-only              |
| `brand-voice.md`       | Tone: professional, clear, practical, not hype-driven            |
| `forbidden-claims.md`  | Claims to reject (guaranteed ROI/success, healthcare-only, etc.) |

Detail tasks: **`T-EVAL-P1-001`–`T-EVAL-P1-007`** → **`TASK-097`–`TASK-103`**. Static page checklist: **`docs/evals/static-website-eval.md`** (`TASK-103`).

When drafting website or marketing copy with AI:

1. Load or cite the relevant knowledge-base file in the prompt.
2. Ask the model to flag any statement that contradicts `forbidden-claims.md`.
3. Human-review against **`docs/evals/static-website-eval.md`** before merge.

### Phase 2: Change-based eval workflow

When business facts change (services, industries, lead magnet, CTAs, Calendly URL, pricing policy):

1. Update **`docs/rosejs-knowledge/`** first.
2. Update website/CMS content to match.
3. Update eval scenarios (`TASK-091`) and Q&A regression cases (`TASK-092`).
4. Run regression evals locally; CI runs subsets on PR (`TASK-082`).
5. Failed critical evals block deployment until reviewed (`TASK-084`, PRD `EVAL-P2-002`).

### Phase 3: Assistant eval workflow

**Development-workflow assistants** (Cursor, task planning, code generation, PR review):

- Follow scenarios and rubric in **`TASK-085`**; guardrails in **`TASK-086`**.
- Must respect MVP boundaries in this guide’s Security boundaries section.
- Cross-check **`docs/Code_Review_Checklist.md`**.

**User-facing assistants** (chatbot, FAQ, lead qualification, proposal assistant — future):

- Ground responses in **`docs/rosejs-knowledge/`** (`EVAL-P3-001`).
- RAG evals when retrieval is used (`EVAL-P3-002`, `TASK-095`).
- Business alignment: trust, clear services, qualification, appropriate CTA, no overpromising (`EVAL-P3-003`, `TASK-096`).

### AI agent rules for eval work

1. Do not skip Phase 1 knowledge-base files before adding Phase 2 CI eval gates.
2. Preserve traceability: `NFR-EVAL-*`, `EVAL-P*`, `EVAL-SOT-*`, `EVAL-REG-*`, `EVAL-AIA-*` → task IDs in PR descriptions.
3. Update **`docs/Tasks.md`** status when completing eval tasks.
4. Extend **`docs/Testing_Strategy.md`** §15 when eval runners or CI jobs change.
5. Run **`npm run eval:sot`** locally when implemented (`TASK-081`) after knowledge-base or route/SEO changes.

See **`docs/Testing_Strategy.md`** §15 for eval test types, file layout, and CI integration.
