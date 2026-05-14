# Deployment_Guide.md

# RoseJS Website Deployment Guide

## 1. Purpose

This document defines the deployment process for the RoseJS website MVP.

It describes how the project should move from local development to GitHub pull request review, CI validation, preview deployment, production deployment, and post-launch verification.

This document is based on:

- `PRD.md`
- `Architecture.md`
- `Traceability_Matrix.md`
- `Tasks.md`
- `Testing_Strategy.md`

### 1.1 TASK-061 content map

This file is the canonical **`Deployment_Guide.md`** for **TASK-061**. Required topics map here as follows:

| TASK-061 topic                | Location in this guide                           |
| ----------------------------- | ------------------------------------------------ |
| Hosting provider              | §7 (Railway MVP)                                 |
| Environment variables         | §8; template **`.env.example`** in repo root     |
| CI/CD flow                    | §6; live workflow **`.github/workflows/ci.yml`** |
| Preview deployment process    | §4.2                                             |
| Production deployment process | §4.3, §15                                        |
| Rollback process              | §16                                              |
| Post-deployment verification  | §15.3, §18, §19                                  |

**Related runbooks:** **`docs/Domain_SSL_Setup.md`** (TASK-059), **`docs/Google_Search_Console_Setup.md`** (TASK-060), **`docs/Branch_Protection_Setup.md`** (TASK-055).

### 1.2 Release quick path (TASK-061)

After CI is green on `main` and Railway (or your host) deploys from `main`:

1. Confirm production URL loads over **HTTPS** and key routes refresh (SPA fallback).
2. Set or confirm **`VITE_*`** build variables on the host (see §8 and **`.env.example`**).
3. Run the **§15.3** post-deploy checklist and **§18** release checklist at least once per launch window.
4. Complete **Search Console** steps in **`docs/Google_Search_Console_Setup.md`** when the public hostname is final (TASK-060).
5. If something breaks, follow **§16** rollback first, then fix forward with a PR.

---

## 2. Deployment Goals

The deployment process must ensure that:

1. Production releases are controlled and reviewable.
2. GitHub is the source of truth for code.
3. CI/CD runs quality checks before merge.
4. Production deployment is tied to approved merges.
5. Preview deployments are available where supported.
6. Environment variables and secrets are managed safely.
7. The site can be rolled back if a deployment fails.
8. The deployment model can be reused for future AI-First projects.
9. No custom backend or database is required for MVP deployment.

---

## 3. Deployment Architecture Summary

### 3.1 MVP Deployment Architecture

```text
Developer / AI-assisted changes
      ↓
GitHub feature branch
      ↓
Pull request
      ↓
GitHub Actions CI
      ↓
Preview deployment where supported
      ↓
Human review
      ↓
Merge to main
      ↓
Production deployment
      ↓
Post-deployment verification
```

### 3.2 Production System Components

| Component         | Tool / Service                                                     |
| ----------------- | ------------------------------------------------------------------ |
| Source Control    | GitHub                                                             |
| CI/CD             | GitHub Actions and/or hosting-provider CI/CD                       |
| Frontend Build    | React + Vite                                                       |
| Hosting           | Railway (selected), Vercel, Netlify, or self-hosted static hosting |
| CMS               | Selected CMS, such as Sanity, Strapi, or Contentful                |
| Scheduling        | Calendly                                                           |
| Contact Form      | Formspree, Netlify Forms, Resend, or serverless function           |
| Analytics         | Plausible Analytics                                                |
| Search Visibility | Google Search Console                                              |
| Domain / SSL      | Hosting provider or DNS provider                                   |

---

## 4. Deployment Environments

## 4.1 Local Development

Purpose:

- Build and test changes locally.
- Run the app using Vite.
- Validate components, pages, and basic flows before opening a pull request.

Expected commands:

```text
npm install
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```

## 4.2 Preview Environment

Purpose:

- Review pull request changes in a browser before production merge.
- Validate UI, content, SEO, and interaction changes.

Recommended providers:

- Railway service deployments for branch/PR validation
- Vercel preview deployments
- Netlify deploy previews

Preview deployment should be created automatically for pull requests when supported by the hosting provider.

## 4.3 Production Environment

Purpose:

- Serve the live RoseJS website.
- Receive public visitors and search engine crawlers.
- Track traffic through Plausible Analytics.
- Route contact form submissions and Calendly scheduling.

Production deployment should happen only from approved merges to `main`.

---

## 5. GitHub Source Control Workflow

## 5.1 Branching Strategy

Recommended MVP strategy: GitHub Flow.

```text
main
feature/*
fix/*
docs/*
```

Rules:

- `main` is production-ready.
- Do not commit directly to `main`.
- All changes should go through pull requests.
- Pull requests should pass CI before merge.
- Production deployment should be triggered from merge to `main`.

## 5.2 Branch Naming

Recommended naming examples:

```text
feature/home-page
feature/cms-integration
feature/contact-form
fix/mobile-navigation
fix/seo-metadata
docs/testing-strategy
```

## 5.3 Pull Request Requirements

Every PR should include:

- Summary of changes
- Related task IDs
- Screenshots for UI changes
- Testing performed
- Accessibility notes if UI changed
- SEO notes if metadata or routing changed
- Deployment risk notes if applicable

## 5.4 Branch Protection Rules

Recommended branch protection for `main`:

- Require pull request before merging.
- Require status checks to pass before merging.
- Require branch to be up to date before merging if feasible.
- Restrict direct pushes to `main`.
- Require at least one approval if desired.

---

## 6. CI/CD Workflow

## 6.1 CI Purpose

The CI workflow protects the project from broken code, type errors, test failures, and invalid production builds.

## 6.2 Required CI Checks

Required pull request checks:

```text
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Optional when stable:

```text
npm run test:e2e
```

## 6.3 Recommended CI Trigger

CI should run on:

```text
pull_request
push to main
```

## 6.4 Example GitHub Actions CI Workflow

```yaml
name: CI

on:
  pull_request:
  push:
    branches:
      - main

jobs:
  validate:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run lint
        run: npm run lint

      - name: Run typecheck
        run: npm run typecheck

      - name: Run tests
        run: npm run test

      - name: Build production app
        run: npm run build
```

## 6.5 E2E in CI

This repository runs **Playwright** end-to-end tests in **`.github/workflows/ci.yml`** after a successful production build: install **Chromium** with `npx playwright install --with-deps chromium`, then **`npm run test:e2e`** (against `vite preview` when `CI` is set).

For local runs without CI, use **`npm run test:e2e`** (starts the Vite dev server via Playwright config). First-time setup: **`npx playwright install chromium`**.

---

## 7. Hosting Provider Setup

## 7.1 Hosting Options

| Provider    | Strength                                                                                           | Best Use                                   |
| ----------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Railway     | Unified service hosting, environment variable management, and easy path to future backend services | MVP hosting with backend-ready growth path |
| Vercel      | Clean frontend deployment and preview environments                                                 | Simple React/Vite deployment               |
| Netlify     | Static hosting, preview deployments, Netlify Forms                                                 | If using Netlify Forms                     |
| Self-hosted | More control                                                                                       | If infrastructure control is required      |

## 7.2 Recommended MVP Hosting

Use Railway.

Recommendation:

- Use **Railway** as the default MVP hosting provider.
- Use **Netlify** only if you later switch to Netlify Forms and want tighter platform coupling.
- Use **Vercel** only if you later prioritize frontend-only preview ergonomics over platform consolidation.

## 7.3 Railway Build Settings

Recommended React + Vite settings on Railway:

| Setting           | Value                                                                   |
| ----------------- | ----------------------------------------------------------------------- |
| Build command     | `npm run build` (matches **`railway.json`** `build.buildCommand`)       |
| Start command     | `npm start` → **`scripts/serve-prod.mjs`** (`serve dist -s` on `$PORT`) |
| Node version      | 20 or current LTS                                                       |
| Production branch | `main`                                                                  |

Note:

- **`npm run preview`** is fine for smoke tests locally; **production** on Railway for this repo uses **`npm start`** so client-side routes resolve via **`serve -s`** (see **`railway.json`**).
- If you later switch to a Docker-based deploy, ensure the runtime serves the built `dist` directory and listens on `$PORT`.

## 7.4 SPA Routing Configuration

Because the site uses React Router, hosting must support fallback routing to `index.html` for deep links.

### Railway SPA Fallback Recommendation

For Railway, ensure your runtime server is configured with SPA fallback behavior (`/* -> /index.html`).

If you use a custom Node/Express server, include an index fallback route for unknown paths.

If you use Docker with Nginx, configure `try_files $uri /index.html;`.

### Netlify Redirect Example

Create:

```text
public/_redirects
```

Content:

```text
/* /index.html 200
```

### Vercel Rewrite Example

Create:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Use the provider-specific configuration only if needed.

---

## 8. Environment Variables and Secrets

## 8.1 Environment Files

Local environment:

```text
.env.local
```

Safe example template:

```text
.env.example
```

Never commit `.env.local`.

## 8.2 MVP Environment Variables

Use **`.env.example`** in the repository as the source of truth for names and comments. Summarized here:

```text
VITE_SITE_URL=
VITE_PLAUSIBLE_DOMAIN=
VITE_CALENDLY_EMBED=
VITE_CALENDLY_URL=
VITE_FORM_ENDPOINT=
VITE_SANITY_PROJECT_ID=
VITE_SANITY_DATASET=
```

CMS keys use **`VITE_SANITY_*`** today; generic **`VITE_CMS_*`** names in older diagrams map to the same idea once a CMS client is wired.

Only browser-safe variables should use the `VITE_` prefix.

## 8.3 Secrets Rules

Do not expose private secrets in frontend code.

Private values should be stored in:

- GitHub Actions Secrets
- Hosting provider environment variables
- Serverless function environment variables if used
- CMS dashboard secrets if provider-managed

**GitHub Actions:** the current **CI** workflow (lint, unit tests, typecheck, build, E2E) does **not** require repository **secrets** for the static MVP. Add secrets only if you introduce deploy keys, CMS tokens in CI, or similar.

Never commit:

- CMS write tokens
- Deployment tokens
- Email provider private keys
- API keys that grant write/admin access
- Any secret used by serverless functions

## 8.4 Environment Variable Checklist

Before production deployment:

- `.env.example` is documented.
- Local variables work.
- Preview variables are configured.
- Production variables are configured.
- Secrets are not committed.
- Build succeeds in hosting environment.

---

## 9. CMS Deployment Considerations

## 9.1 CMS Role

The CMS is the content data source for:

- Services
- Blog posts
- Case studies
- Lead magnets
- SEO metadata

## 9.2 CMS Production Checklist

Before launch:

- CMS provider selected.
- Production CMS project/environment exists.
- Read-only frontend access is configured.
- Content schemas are created.
- Initial services content is entered.
- At least 3 blog posts are entered.
- At least 1 case study is entered.
- Lead magnet metadata is entered or referenced.
- SEO fields are populated.
- CMS preview/draft behavior is understood.

## 9.3 CMS Access Rules

- Frontend should use read-only access where possible.
- Write/admin tokens should not be exposed to the browser.
- CMS logic should remain isolated inside `src/cms`.

---

## 10. Contact Form Deployment

## 10.1 Form Provider Options

| Option                               | Best For                                           |
| ------------------------------------ | -------------------------------------------------- |
| Formspree                            | Simple standalone form handling                    |
| Netlify Forms                        | Easiest if hosting on Netlify                      |
| Resend + serverless function         | More control over email workflow                   |
| Hosting provider serverless function | Lightweight custom processing without full backend |

## 10.2 MVP Rule

Do not build a custom backend platform for the contact form.

Use a form provider or a serverless function.

## 10.3 Contact Form Production Checklist

Before launch:

- Form provider selected.
- Form endpoint configured.
- Success state tested.
- Error state tested.
- Spam protection configured if available.
- No PHI/PII is requested.
- Submission notification email works.
- Production form submission is tested.

---

## 11. Calendly Deployment

## 11.1 Calendly Configuration

Calendly URL should be configured as:

```text
VITE_CALENDLY_URL=
```

## 11.2 Integration Options

| Mode          | Description                           |
| ------------- | ------------------------------------- |
| External Link | CTA opens Calendly in new tab         |
| Embed         | Calendly embedded on `/schedule` page |

## 11.3 MVP Recommendation

Use external link first for simplicity. Add embed later if desired.

## 11.4 Calendly Production Checklist

- Calendly event type exists.
- Calendly link works.
- CTA appears on Contact page.
- CTA appears in key CTA sections where appropriate.
- `/schedule` page works if used.
- Click tracking is configured where feasible.

---

## 12. Plausible Analytics Deployment

## 12.1 Analytics Configuration

Plausible should be configured using the production domain.

Environment variable:

```text
VITE_PLAUSIBLE_DOMAIN=
```

## 12.2 Events to Track

| Event               | Purpose                     |
| ------------------- | --------------------------- |
| Page View           | Measure traffic             |
| CTA Click           | Measure conversion intent   |
| Contact Submit      | Measure lead generation     |
| Calendly Click      | Measure scheduling intent   |
| Lead Magnet Click   | Measure content conversion  |
| External Link Click | Measure off-site engagement |
| Blog View           | Measure content engagement  |

## 12.3 Analytics Production Checklist

- Plausible domain is configured.
- Script loads in production.
- Page views appear in Plausible dashboard.
- Custom events are verified where implemented.
- Analytics does not block rendering.

---

## 13. SEO Deployment

## 13.1 SEO Files

Production deployment must include:

```text
robots.txt
sitemap.xml
```

## 13.2 SEO Production Checklist

When the production domain is live, follow **`docs/Google_Search_Console_Setup.md`** (TASK-060) for verification and sitemap submission.

- Each page has unique title.
- Each page has unique meta description.
- Blog posts have CMS-managed SEO fields.
- Case studies have CMS-managed SEO fields.
- Sitemap includes core routes.
- Sitemap includes CMS routes where available.
- Robots.txt points to sitemap when domain is final.
- Open Graph metadata is present where implemented.
- Structured data is valid where implemented.
- Google Search Console is configured.
- Sitemap is submitted to Google Search Console.

## 13.3 React + Vite SEO Note

React + Vite is a client-side architecture. For MVP, reduce SEO risk by:

- Using strong metadata.
- Using semantic HTML.
- Keeping content crawlable where possible.
- Adding sitemap and robots.txt.
- Monitoring Search Console.

If SEO performance becomes a limitation later, consider:

- Static prerendering
- Hosting-level prerendering
- Framework migration to SSR/static generation

---

## 14. Domain and SSL Setup

Step-by-step for Railway custom domains and HTTPS: **`docs/Domain_SSL_Setup.md`** (TASK-059).

## 14.1 Domain Decision

The final domain name is still open. The phrase “Healthcare Insurance” is treated as the business/domain focus, not the website URL.

Before production launch, choose the actual website domain.

## 14.2 Domain Checklist

- Domain purchased or available.
- DNS records configured for hosting provider.
- Domain connected in hosting dashboard.
- Production site loads on final domain.
- `www` and root domain behavior is configured intentionally.

## 14.3 SSL Checklist

- HTTPS enabled.
- SSL certificate issued.
- HTTP redirects to HTTPS where supported.
- No mixed-content warnings appear.

---

## 15. Production Deployment Steps

## 15.1 Pre-Deployment Checklist

Before first production deployment:

- GitHub repository exists.
- Branching strategy is defined.
- CI workflow exists.
- CI checks pass.
- Hosting provider is selected.
- Environment variables are configured.
- CMS production content exists.
- Contact form provider is configured.
- Calendly URL is configured.
- Plausible domain is configured.
- Sitemap and robots.txt exist.
- Build succeeds locally.

## 15.2 Deployment Steps

1. Create a release pull request or final MVP pull request.
2. Confirm related tasks are complete.
3. Run local validation:

```text
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

4. Push branch to GitHub.
5. Confirm CI passes.
6. Review preview deployment.
7. Perform manual QA on preview.
8. Merge to `main` after approval.
9. Confirm production deployment completes.
10. Run production validation checklist.

## 15.3 Post-Deployment Validation

After production deployment:

- Home page loads.
- Services page loads.
- About page loads.
- Insights page loads.
- Blog article loads.
- Case Studies page loads.
- Contact page loads.
- Schedule page or Calendly link works.
- Contact form works.
- Lead magnet download works.
- Mobile navigation works.
- HTTPS works.
- Plausible receives traffic.
- Sitemap is accessible.
- Robots.txt is accessible.
- Search Console is configured.

---

## 16. Rollback Plan

## 16.1 Rollback Scenarios

Rollback may be needed if:

- Production site fails to load.
- Routing breaks.
- Contact form fails in production.
- CMS integration breaks core pages.
- Environment variables are missing.
- Deployment introduces major UI or SEO regression.

## 16.2 Rollback Options

| Option                    | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| Hosting Provider Rollback | Revert to previous successful deployment in Railway/Vercel/Netlify |
| Git Revert                | Revert problematic commit and redeploy                             |
| Hotfix Branch             | Create fix branch, PR, CI, merge to main                           |

## 16.3 Recommended MVP Rollback

Use hosting provider rollback for urgent failures.

Then follow up with a Git revert or hotfix PR so the repository matches production state.

## 16.4 Rollback Checklist

- Identify issue.
- Determine severity.
- Roll back through hosting provider if urgent.
- Verify production site works after rollback.
- Create follow-up GitHub issue.
- Fix root cause through PR.
- Confirm CI passes.
- Redeploy after review.

---

## 17. Troubleshooting Guide

## 17.1 Build Fails in CI

Check:

- Node version mismatch
- Missing dependencies
- TypeScript errors
- ESLint errors
- Missing environment variables
- Test failures

Actions:

```text
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Run locally and fix before pushing again.

## 17.2 Deployment Succeeds but Page Shows 404 on Refresh

Likely cause:

- SPA routing fallback is missing.

Fix:

- Add Railway SPA fallback, Netlify `_redirects`, Vercel rewrites, or provider-specific SPA fallback configuration.

## 17.3 CMS Content Does Not Load

Check:

- CMS project ID
- Dataset/environment
- API version
- Read token or public access settings
- CORS settings
- Query syntax
- Network errors

## 17.4 Contact Form Does Not Submit

Check:

- Form endpoint
- Provider configuration
- Required fields
- CORS errors
- Spam protection behavior
- Environment variable values

## 17.5 Plausible Does Not Track

Check:

- Domain configured correctly in Plausible
- Script is loaded in production
- Ad blockers may affect local testing
- Event names match Plausible configuration

## 17.6 Calendly Link Does Not Work

Check:

- `VITE_CALENDLY_URL`
- Calendly event type is active
- Link opens in new tab or embed configuration is correct

---

## 18. Release Checklist

Use this checklist before each production release.

### Code Quality

- Lint passes.
- Typecheck passes.
- Tests pass.
- Build passes.
- No secrets committed.
- No unintended backend/database added.

### UX

- Pages render correctly.
- Mobile layout works.
- Navigation works.
- CTAs work.
- Contact form works.
- Calendly works.
- Lead magnet works.

### SEO

- Metadata is correct.
- Sitemap is current.
- Robots.txt is correct.
- Internal links work.
- Blog/case study slugs work.

### Deployment

- Preview deployment reviewed.
- Production deployment completed.
- HTTPS works.
- Plausible receives traffic.
- Search Console is updated if needed.

---

## 19. Deployment Definition of Done

Deployment is complete when:

1. GitHub repository is connected to hosting provider.
2. CI runs on pull requests.
3. CI checks pass.
4. Production deployment is tied to merge to `main`.
5. Environment variables are configured.
6. Domain is connected.
7. HTTPS is enabled.
8. Production site loads.
9. Contact form works.
10. Calendly CTA works.
11. Lead magnet download works.
12. Plausible Analytics works.
13. Sitemap and robots.txt are accessible.
14. Google Search Console is configured.
15. Rollback process is documented.

---

## 20. Future Deployment Enhancements

Post-MVP improvements may include:

- Lighthouse CI
- Automated accessibility checks in CI
- Automated broken link checks
- CMS-triggered rebuilds
- Preview content workflow
- Deployment smoke tests
- Release tagging
- Semantic versioning
- Automated changelog generation
- Monitoring for 404s
- Error tracking with Sentry or similar tool
- Separate staging environment

---

## 21. Notes for Future AI Agents

Future AI agents must follow these deployment rules:

1. Do not bypass GitHub pull requests.
2. Do not deploy directly from local machine to production unless formally approved.
3. Do not commit secrets.
4. Do not introduce a custom backend or database for MVP.
5. Keep deployment documentation updated when provider decisions change.
6. Make sure CI passes before recommending merge.
7. Use preview deployments for UI review when available.
8. Confirm production deployment with a checklist, not assumptions.
