# Code Review Checklist — RoseJS (TASK-068)

Use for human and AI-assisted PR review. Tie findings to **`docs/Architecture.md`** and task IDs.

## Architecture alignment

- [ ] Changes match MVP boundaries (no custom backend/DB unless explicitly scoped).
- [ ] CMS access stays in `src/cms/`; pages use loaders/types, not raw provider SDKs.
- [ ] Routing changes update `src/app/routes.tsx` and SEO paths.

## Component reusability

- [ ] UI uses `src/components/ui/` and section patterns; no duplicate card layouts.
- [ ] Props match existing CMS-shaped types.

## Type safety

- [ ] `npm run typecheck` passes; no `any` without justification.
- [ ] `exactOptionalPropertyTypes` respected (no `undefined` passed to optional props).

## Accessibility

- [ ] Interactive elements have accessible names; forms have labels.
- [ ] Focus visible; mobile nav keyboard-friendly.
- [ ] No information conveyed by color alone.

## SEO

- [ ] New routes use **`SEO`** with title, description, and `path`.
- [ ] CMS pages use `seo` fields; article pages use `ogType="article"` when appropriate.

## Performance

- [ ] No large unnecessary dependencies.
- [ ] Images/assets sized appropriately (if added).

## Security

- [ ] No secrets in repo; `VITE_*` only for public config.
- [ ] External links use `rel="noopener noreferrer"` when `target="_blank"`.
- [ ] Contact form: honeypot preserved; no expanded PHI fields.

## CMS boundaries

- [ ] Fallback content changes are healthcare-focused and non-generic.
- [ ] Case studies remain anonymized.

## Environment variables

- [ ] New public config documented in **`.env.example`**.
- [ ] No requirement for GitHub secrets unless documented.

## Test coverage

- [ ] Meaningful tests for behavior changes (not snapshot noise).
- [ ] CI green: lint, test, typecheck, build, E2E.

## AI-generated code risks

- [ ] Verify imports and file paths exist.
- [ ] No hallucinated APIs or task statuses.
- [ ] Diff scope matches PR description.
