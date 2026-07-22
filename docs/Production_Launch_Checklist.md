# Production launch checklist (post–TASK-056/057)

Use after **https://www.roseng.org** is live on Railway. Check items in order; human-only steps link to runbooks.

**Status (May 2026):** TASK-056–061, TASK-069, and TASK-071–075 validation complete. Remaining items are optional operator follow-ups.

## 1. Railway build variables (TASK-058) — done

In **Railway → service → Variables → Build**, set (then **redeploy**):

| Variable                                         | Example / notes                                                  |
| ------------------------------------------------ | ---------------------------------------------------------------- |
| `VITE_SITE_URL`                                  | `https://www.roseng.org`                                         |
| `VITE_CONTACT_EMAIL`                             | `hello@roseng.org`                                               |
| `VITE_PLAUSIBLE_DOMAIN`                          | `roseng.org` or `www.roseng.org` (match Plausible site settings) |
| `VITE_CALENDLY_URL`                              | `https://calendly.com/roseng0201/30min`                          |
| `VITE_CALENDLY_EMBED`                            | `true` (optional; embed defaults on)                             |
| `VITE_FORM_ENDPOINT`                             | Formspree HTTPS endpoint                                         |
| `VITE_LINKEDIN_URL`                              | Optional — full LinkedIn profile/company URL                     |
| `VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET` | When Sanity replaces fallback content                            |

- [x] Variables set in Railway and production redeployed (operator confirmed May 2026)

See **`.env.example`** and **`docs/Deployment_Guide.md`** §8.

## 2. DNS apex (TASK-059) — done

- [x] **https://www.roseng.org** loads the RoseJS app
- [x] **https://roseng.org** redirects to `www` (operator confirmed May 2026)
- Details: **`docs/Domain_SSL_Setup.md`**

## 3. Google Search Console (TASK-060) — done

- [x] Property for **https://www.roseng.org/**
- [x] Ownership verified (HTML tag in **`index.html`** or DNS)
- [x] Sitemap submitted: **https://www.roseng.org/sitemap.xml**

Runbook: **`docs/Google_Search_Console_Setup.md`**

## 4. Branch protection (TASK-055)

- [ ] `main` requires PR + **`CI / CI`** (or **`CI`**)

Runbook: **`docs/Branch_Protection_Setup.md`**

## 5. Production smoke test (TASK-072) — done

Automated: **`npm run verify:production`** and **`npm run test:e2e`** (launch smoke + SEO static specs).

- [x] `/`, `/services`, `/services/software-architecture-consulting`
- [x] `/insights`, one article slug, `/case-studies`, one case study
- [x] `/contact` — validation (E2E); live Formspree submit optional
- [x] `/schedule` — Calendly link
- [x] Home — **Download checklist** PDF link
- [x] Hard refresh on a deep link (SPA fallback via **`serve-prod.mjs`**)
- [x] Mobile nav — open, Tab through links, Escape closes

Local equivalent: `npm run build && npm start` then `npm run test:e2e`.

## 6. Integrations

- [ ] Formspree (or provider) receives test submission on production
- [ ] Plausible shows pageviews (if enabled)
- [ ] Calendly opens correct event type in browser

## 7. Content & docs (§21)

- [x] Fallback/CMS content reviewed (**TASK-062–064**)
- [x] **`docs/SEO_Strategy.md`**, **`docs/Content_Plan.md`** aligned with launch
