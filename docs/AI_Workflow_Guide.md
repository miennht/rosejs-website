# AI Workflow Guide — RoseJS (TASK-067)

How AI-assisted work fits this repository and future AI-First templates.

## AI-First pillars (delivery)

1. **Skill** — Human architecture judgment on requirements and trade-offs.
2. **Code review** — Security, a11y, SEO, maintainability before merge.
3. **Test suites** — Vitest component/unit tests; Playwright E2E in CI.
4. **Deployment** — GitHub Flow, CI on PR, Railway production from `main`.

## Prompting guidelines

- Anchor prompts in **`docs/PRD.md`**, **`docs/Architecture.md`**, **`docs/Tasks.md`**, and task IDs.
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
