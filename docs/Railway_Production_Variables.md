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
VITE_CALENDLY_URL=https://calendly.com/your-event
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

Railway injects **`PORT`** automatically. Do not override unless debugging.

Reference: **`.env.example`**, **`docs/Deployment_Guide.md`** §8, **`docs/Production_Launch_Checklist.md`**.
