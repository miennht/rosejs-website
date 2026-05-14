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
- `docs/Branch_Protection_Setup.md`
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
- **Cards:** `src/components/cards/` — `ServiceCard`, `BlogCard`, `CaseStudyCard` (shared layout + CMS-shaped props)
- **CMS layer:** `src/cms/` — types, mappers, `queries`, `client`, `fallbackContentSource` (Sanity-ready factory). Demo content: `src/content/fallback/`. Route loaders: `src/app/cmsLoaders.ts`.
- **SEO (SPA):** `src/components/seo/SEO.tsx` — updates `document.title`, description, Open Graph, and basic Twitter tags per route; `StructuredData.tsx` + `siteSchemas.ts` for JSON-LD; `src/lib/seo.ts` for canonical URLs (set `VITE_SITE_URL` in production).
- **Forms:** `src/components/forms/ContactForm.tsx` — PRD fields; posts to `VITE_FORM_ENDPOINT` when set.
- **Marketing sections:** `src/components/sections/` — `Hero`, `ServicesOverview`, `MethodologySection`, `TrustSection`, `FeaturedInsights`, `CTASection`, `LeadMagnetSection`
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

Configure **`main`** in GitHub (rulesets or classic branch protection) so that:

- Pull requests are required before merging (GitHub Flow).
- At least one approving review is required if your team wants human or AI-assisted review on every merge.
- Required status checks include the **`validate`** job from the **CI** workflow (see `.github/workflows/ci.yml`).
- Direct pushes to `main` are disallowed for day-to-day changes.

Step-by-step UI instructions: **`docs/Branch_Protection_Setup.md`** (TASK-055).

## Code quality

- **ESLint** — `npm run lint` runs ESLint (TypeScript + React hooks + react-refresh) and **Prettier** (`prettier --check`). Either failing breaks the command.
- **Prettier** — Opinionated formatter; config lives in `prettier.config.js`. Run `npm run format` to apply formatting.
- **Unit / component tests** — `npm run test` (Vitest + Testing Library + jsdom). Helpers in `src/test/test-utils.tsx`.
- **E2E tests** — `npm run test:e2e` (Playwright, Chromium). First run: `npx playwright install chromium`. CI builds the app, installs Playwright browsers, then runs E2E against `vite preview`.
- **CI** — `.github/workflows/ci.yml` runs `npm ci`, lint, unit tests, typecheck, build, Playwright Chromium install, and E2E on pushes and pull requests to `main`.

## Deployment (Railway)

Hosting target for MVP is **Railway** (see `docs/Tasks.md` / DEC-003). This repo ships a **Node static server** so client-side routes work in production (SPA fallback to `index.html`).

| Item           | Value                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Production** | **[https://rosejs.up.railway.app](https://rosejs.up.railway.app)** — live RoseJS site                                             |
| Config         | `railway.json` — `npm ci && npm run build`, then `npm start`                                                                      |
| Build output   | `dist/` (Vite)                                                                                                                    |
| Start          | `node scripts/serve-prod.mjs` — serves `dist` with [`serve` `-s`](https://github.com/vercel/serve) (unknown paths → `index.html`) |
| Listen         | `PORT` from Railway (falls back to `3000` locally)                                                                                |

**First-time setup (dashboard):**

1. Create a Railway project and a **service** from this GitHub repository.
2. Set the **production** environment to deploy from the **`main`** branch (disable auto-deploy from other branches unless you intend to).
3. Under **Variables**, no secrets are required for the static MVP; Railway sets **`PORT`**. Use **Build**-scoped variables later for any `VITE_*` keys (see `.env.example`).
4. (Optional) Enable **PR previews** / ephemeral environments in Railway so pull requests get preview URLs.
5. After the first successful deploy, open `/`, `/services`, and `/contact`, then **hard refresh** each URL to confirm the SPA rewrite behaves correctly.

**Local production smoke test:** `npm run build && npm start`, then visit `http://127.0.0.1:3000/services`.
