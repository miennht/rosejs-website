# Railway production variables (TASK-058)

Set these in **Railway → your RoseJS service → Variables** for the **build** phase (Vite inlines `VITE_*` at build time). Trigger a **new deploy** after changes.

## Required for correct production SEO

```text
VITE_SITE_URL=https://www.roseng.org
```

Without this, Open Graph and JSON-LD may use defaults until the next aligned build.

## Recommended for launch

```text
VITE_CONTACT_EMAIL=hello@roseng.org
VITE_PLAUSIBLE_DOMAIN=roseng.org
VITE_CALENDLY_URL=https://calendly.com/roseng0201/30min
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

Optional:

```text
VITE_CALENDLY_EMBED=true
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
VITE_SANITY_PROJECT_ID=
VITE_SANITY_DATASET=production
```

## Do not set in Railway for this MVP

- CMS **write** tokens or API secrets (not used in the browser)
- Values that belong only in **GitHub Actions secrets** (current CI needs none for lint/test/build/E2E)

## Runtime

Railway injects **`PORT`** automatically (often **8080**). Your app must listen on **`0.0.0.0:$PORT`** (`scripts/serve-prod.mjs` does this). Do not override **`PORT`** unless debugging.

### HTTP 502 — “Application failed to respond”

If deploy logs show `Serving … at http://0.0.0.0:8080` but **https://www.roseng.org** returns **502** with `X-Railway-Fallback: true`:

1. **Networking → Custom domain (`www.roseng.org`) → Target port** must match the port in the deploy log (e.g. **8080**). A stale **3000** (old Vite/`serve` default) causes 502 while the app listens on **8080**.
2. Remove a manual **`PORT`** variable if it disagrees with the target port.
3. Redeploy after changing networking. Staging `*.up.railway.app` URLs usually work when production custom domains do not — that pattern almost always means target port mismatch on the custom domain only.

Health check path: **`/health`** (see **`railway.json`**).

Reference: [Railway — Application failed to respond](https://docs.railway.com/networking/troubleshooting/application-failed-to-respond), **`.env.example`**, **`docs/Deployment_Guide.md`** §8, **`docs/Production_Launch_Checklist.md`**.
