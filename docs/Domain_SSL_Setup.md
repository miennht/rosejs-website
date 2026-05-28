# Domain and SSL (TASK-059)

**Production canonical host:** **https://www.roseng.org** (RoseJS on Railway).

Final **hostname**, **DNS**, and **HTTPS** are applied in the hosting dashboard, not only in git. Use this checklist when adding or changing domains.

## Railway (MVP hosting)

1. In **Railway → your service → Settings → Networking**, add a **Custom domain** (e.g. `www.example.com` or apex `example.com` per your DNS strategy).
2. At your **DNS provider**, create the records Railway shows (typically **CNAME** for `www`, or **ALIAS/ANAME** for apex if required).
3. Wait for DNS propagation and Railway certificate issuance (**HTTPS** is provisioned automatically for Railway-managed certificates).
4. Open `https://<your-domain>/` in a browser; confirm the padlock and no mixed-content warnings.
5. If Railway offers **“Redirect HTTP to HTTPS”** or equivalent, enable it so plain **HTTP** redirects to **HTTPS** where supported.

## Align the app with the live hostname

After the domain is live:

1. Set **`VITE_SITE_URL`** in Railway **build** variables to the canonical origin **without** a trailing slash (e.g. `https://www.example.com`). Rebuild so Open Graph / JSON-LD use the correct origin.
2. Update **`public/sitemap.xml`** and **`public/robots.txt`** so `Sitemap:` and `<loc>` entries use the same production origin (or automate generation in a later task).
3. Re-verify **Plausible** (`VITE_PLAUSIBLE_DOMAIN`) and **Search Console** (see **`docs/Google_Search_Console_Setup.md`**) for the new hostname.

## Validation

- Browser: site loads on **HTTPS**, deep links (e.g. `/services`) refresh correctly (SPA fallback).
- External: SSL Labs or similar TLS check (optional).
- **Follow-up:** Ensure apex **`roseng.org`** redirects to **`https://www.roseng.org`** (apex may still point at a registrar parking page until DNS is updated).
