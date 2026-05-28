# Production launch checklist (post–TASK-056/057)

Use after **https://www.roseng.org** is live on Railway. Check items in order; human-only steps link to runbooks.

## 1. Railway build variables (TASK-058)

In **Railway → service → Variables → Build**, set (then **redeploy**):

| Variable                                         | Example / notes                                                  |
| ------------------------------------------------ | ---------------------------------------------------------------- |
| `VITE_SITE_URL`                                  | `https://www.roseng.org`                                         |
| `VITE_CONTACT_EMAIL`                             | `hello@roseng.org`                                               |
| `VITE_PLAUSIBLE_DOMAIN`                          | `roseng.org` or `www.roseng.org` (match Plausible site settings) |
| `VITE_CALENDLY_URL`                              | Your Calendly scheduling URL                                     |
| `VITE_FORM_ENDPOINT`                             | Formspree HTTPS endpoint                                         |
| `VITE_LINKEDIN_URL`                              | Optional — full LinkedIn profile/company URL                     |
| `VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET` | When Sanity replaces fallback content                            |

See **`.env.example`** and **`docs/Deployment_Guide.md`** §8.

## 2. DNS apex (TASK-059 follow-up)

- [ ] **https://www.roseng.org** loads the RoseJS app
- [ ] **https://roseng.org** redirects to `www` (or serves the same app)—not a parking page
- Details: **`docs/Domain_SSL_Setup.md`**

## 3. Google Search Console (TASK-060)

- [ ] Property for **https://www.roseng.org/**
- [ ] Ownership verified (HTML tag in **`index.html`** or DNS)
- [ ] Sitemap submitted: **https://www.roseng.org/sitemap.xml**

Runbook: **`docs/Google_Search_Console_Setup.md`**

## 4. Branch protection (TASK-055)

- [ ] `main` requires PR + **`CI / validate`** (or **`validate`**)

Runbook: **`docs/Branch_Protection_Setup.md`**

## 5. Production smoke test

After redeploy with build variables:

- [ ] `/`, `/services`, `/services/software-architecture-consulting`
- [ ] `/insights`, one article slug, `/case-studies`, one case study
- [ ] `/contact` — validation + demo or Formspree submit
- [ ] `/schedule` — Calendly link
- [ ] Home — **Download checklist** PDF
- [ ] Hard refresh on a deep link (SPA fallback)
- [ ] Mobile nav — open, Tab through links, Escape closes

Local equivalent: `npm run build && npm start` then `npm run test:e2e`.

## 6. Integrations

- [ ] Formspree (or provider) receives test submission
- [ ] Plausible shows pageviews (if enabled)
- [ ] Calendly opens correct event type

## 7. Content & docs (§21)

- [ ] Fallback/CMS content reviewed (**TASK-062–064**)
- [ ] **`docs/SEO_Strategy.md`**, **`docs/Content_Plan.md`** aligned with launch
