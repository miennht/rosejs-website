# RoseJS Website

Initial repository placeholder for the RoseJS website MVP.

This project is an AI-first healthcare software architecture consulting website built with React + Vite, TypeScript, and Tailwind CSS.

## Documentation

Canonical project documentation lives in `docs/`:

- `docs/PRD.md`
- `docs/Architecture.md`
- `docs/Traceability_Matrix.md`
- `docs/Tasks.md`
- `docs/Testing_Strategy.md`
- `docs/Deployment_Guide.md`
- `docs/AI_Workflow_Guide.md`
- `docs/Code_Review_Checklist.md`
- `docs/SEO_Strategy.md`
- `docs/Content_Plan.md`
- `docs/Component_Map.md`

## Design system (Tailwind CSS)

- **Stack:** Tailwind CSS v4 with `@tailwindcss/vite` (see `vite.config.ts`).
- **Global styles:** `src/index.css` imports Tailwind and defines **RoseJS** semantic colors in `@theme` for layout and contrast (MVP black-and-white direction).

| Token                            | Role                                    |
| -------------------------------- | --------------------------------------- |
| `background` / `foreground`      | Page canvas and primary text            |
| `muted`                          | Secondary body copy                     |
| `surface`                        | Light gray panels / alternate sections  |
| `border`                         | Dividers and outlines                   |
| `primary` / `primary-foreground` | Primary CTA (black button, white label) |

Use utilities such as `bg-background`, `text-foreground`, `text-muted`, `border-border`, `bg-primary`, `text-primary-foreground`.

### UI and layout components

- **Primitives:** `src/components/ui/` — `Button`, `Container`, `Section`, `Badge`, `LinkButton`
- **Shell:** `src/components/layout/` — `Header`, `Navigation`, `MobileNavigation`, `Footer`, `PageLayout` (wired in `src/app/RootLayout.tsx`)

---

## Branching Strategy

This repository uses GitHub Flow.

```text
main
feature/*
fix/*
docs/*
```

- `main` is the production-ready branch.
- All code changes should be made in feature/fix/docs branches and merged via pull requests.
- Branch names should be concise and descriptive, for example `feature/home-page`, `fix/mobile-nav`, `docs/deployment-guide`.

## Branch Protection Plan

Branch protection for `main` is planned as follows:

- Require pull requests before merge.
- Require at least one approving review.
- Require CI checks after workflows are added.
- Restrict direct pushes to `main`.

## Code quality

- **ESLint** — `npm run lint` runs ESLint (TypeScript + React hooks + react-refresh) and **Prettier** (`prettier --check`). Either failing breaks the command.
- **Prettier** — Opinionated formatter; config lives in `prettier.config.js`. Run `npm run format` to apply formatting.
- **CI** — `.github/workflows/ci.yml` runs `npm ci`, lint, typecheck, and build on pushes and pull requests to `main`.
