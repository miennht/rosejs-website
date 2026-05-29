# Staging / dev environment (Railway)

Use a **dev-first** flow: iterate on **`develop`**, deploy to **Railway staging**, then open **one PR** to **`main`** when ready for **https://www.roseng.org**.

Production runbooks: **`docs/Deployment_Guide.md`**, **`docs/Railway_Production_Variables.md`**, **`docs/Production_Launch_Checklist.md`**.

---

## Branch model

| Branch                            | Deploy target                       | Purpose                                             |
| --------------------------------- | ----------------------------------- | --------------------------------------------------- |
| **`main`**                        | Railway **production**              | Live site only; merge via PR after staging sign-off |
| **`develop`**                     | Railway **staging**                 | Integration branch for polish, content, and QA      |
| `content/*`, `fix/*`, `feature/*` | Optional → merge into **`develop`** | Short-lived work branches                           |

```text
feature/content branch  ──merge──►  develop  ──deploy──►  Railway staging
                                         │
                                    (QA passes)
                                         │
                                    one PR ──►  main  ──deploy──►  production
```

---

## One-time Railway setup (staging)

1. Open **Railway → your RoseJS project**.
2. **Add environment** (e.g. `staging`) or duplicate the service into a **second service** for non-production.
3. Connect the staging service to GitHub branch **`develop`** (not `main`).
4. On the **production** service, confirm deploys trigger only from **`main`**.
5. Set **Build** variables on staging (Vite inlines `VITE_*` at build time):

   | Variable                | Staging example                                                        |
   | ----------------------- | ---------------------------------------------------------------------- |
   | `VITE_SITE_URL`         | `https://<staging-service>.up.railway.app` or `https://dev.roseng.org` |
   | `VITE_CONTACT_EMAIL`    | `hello@roseng.org`                                                     |
   | `VITE_FORM_ENDPOINT`    | Formspree **test** form (optional)                                     |
   | `VITE_CALENDLY_URL`     | Same or test Calendly link                                             |
   | `VITE_PLAUSIBLE_DOMAIN` | Omit on staging, or use a separate Plausible site                      |

   Do **not** copy production Search Console verification into staging unless you intend to index the staging host.

6. (Optional) Add DNS **`dev.roseng.org`** → staging service (**`docs/Domain_SSL_Setup.md`**).
7. Trigger first deploy; confirm `/`, `/services`, and a deep link (e.g. `/contact`) after hard refresh.

Reference: **`railway.json`** — `npm run build`, then `npm start` (`scripts/serve-prod.mjs`).

---

## Day-to-day workflow

### Local (fastest)

```bash
npm run dev
# http://127.0.0.1:5173
```

Quick gate before push:

```bash
npm run lint && npm run typecheck && npm run test && npm run build
```

### Push to staging

```bash
git checkout develop
git pull origin develop
# … edit, commit …
git push origin develop
```

Railway staging redeploys automatically. Smoke-check the staging URL.

Full gate (matches CI before a release PR):

```bash
npm run test:e2e
PRODUCTION_URL=https://<staging-url> npm run verify:production
```

---

## Release to production

When staging looks good:

1. Sync **`develop`** with **`main`**:

   ```bash
   git checkout develop
   git fetch origin
   git merge origin/main
   # resolve conflicts if any; re-run tests
   ```

2. Run full validation locally (same as **`.github/workflows/ci.yml`**):

   ```bash
   npm run lint
   npm run typecheck
   npm run test
   npm run build
   npm run test:e2e
   PRODUCTION_URL=https://<staging-url> npm run verify:production
   ```

3. Open **one PR**: **`develop` → `main`**
   - Use a release-style title, e.g. `release: homepage polish`
   - Summarize all changes since the last production deploy
   - Checklist: CI green, staging QA done

4. Wait for **`CI / validate`** on the PR (**`docs/Branch_Protection_Setup.md`**).

5. **Merge** to **`main`** → Railway production redeploys.

6. Post-deploy:

   ```bash
   npm run verify:production
   ```

   Visual pass on **https://www.roseng.org/**.

---

## Optional: PR previews

Railway **PR previews** give a ephemeral URL per pull request. Useful for one-off review; for ongoing polish, a fixed **`develop` + staging** setup is usually simpler.

You can combine both: day-to-day on **`develop`/staging**, PR preview for final sign-off before merge to **`main`**.

---

## What not to do

- Do **not** merge polish directly to **`main`** while using this model.
- Do **not** point staging `VITE_SITE_URL` at **`www.roseng.org`** (breaks OG/JSON-LD on that host).
- Do **not** submit the staging URL to Google Search Console as canonical production.

---

## Quick reference

| Action                 | Command / location                                   |
| ---------------------- | ---------------------------------------------------- |
| Local dev              | `npm run dev`                                        |
| Local prod-like server | `npm run build && npm start`                         |
| Staging smoke          | `PRODUCTION_URL=<staging> npm run verify:production` |
| Production smoke       | `npm run verify:production`                          |
| CI workflow            | `.github/workflows/ci.yml`                           |
