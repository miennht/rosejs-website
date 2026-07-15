# Domain and SSL (TASK-059)

**Production canonical host:** **https://www.roseng.org** (RoseJS on Railway).

Final **hostname**, **DNS**, and **HTTPS** are applied in the hosting dashboard, not only in git. Use this checklist when adding or changing domains.

**Registrar:** Squarespace Domains ([domains.squarespace.com](https://domains.squarespace.com)) — nameservers `nsb1`–`nsb4.squarespacedns.com`.

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
- **Done (May 2026):** Apex **https://roseng.org** redirects to **https://www.roseng.org** (operator confirmed).

---

## Troubleshooting: Safari “Can't Find the Server” / NXDOMAIN

If browsers show **Safari Can't Find the Server** (or Chrome `DNS_PROBE_FINISHED_NXDOMAIN`) for `www.roseng.org` / `roseng.org`, the app and Railway deploy are usually fine — **public DNS is not publishing the domain**.

### Diagnose

```text
whois roseng.org | grep -i status
dig +short www.roseng.org A
dig @nsb1.squarespacedns.com www.roseng.org A +short
```

| Result                                                                        | Meaning                                                                                                        |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| WHOIS includes **`clientHold`**                                               | Registrar suspended the domain; public resolvers return **NXDOMAIN** even if Squarespace DNS still has records |
| Public `dig` empty / NXDOMAIN, but `@nsb1.squarespacedns.com` returns a CNAME | Confirms hold (or registry not serving the zone), not a missing CNAME                                          |
| CNAME target `*.up.railway.app` returns Railway **404 Application not found** | Stale Railway hostname — update the CNAME to the target shown in Railway → Networking                          |

**Incident (July 2026):** `roseng.org` had EPP **`clientHold`** at Squarespace Domains. Public DNS = NXDOMAIN; Safari could not open https://www.roseng.org. Authoritative Squarespace DNS still had `www` → `c5mgygx6.up.railway.app` (that Railway host later returned 404 — re-check Railway custom-domain target after unsuspend).

### Fix (operator — cannot be done from git)

1. Sign in to **[Squarespace Domains](https://domains.squarespace.com)** for **roseng.org**.
2. Clear the hold (see [Fix domain suspensions and verification issues](https://support.squarespace.com/hc/en-us/articles/218907017-Fix-domain-suspensions-and-verification-issues)):
   - Check inbox/spam for verification mail from `customercare@squarespace.com` or `no-reply@squarespace.com` and complete verification.
   - Confirm billing / payment method is current.
   - If still on hold, contact Squarespace support and ask them to remove **`clientHold`**.
3. Confirm WHOIS no longer lists `clientHold`, then wait for public DNS (often minutes; up to ~48h).
4. In **Railway → service → Settings → Networking → Custom domain (`www.roseng.org`)**, copy the **current** required CNAME/ALIAS target and update Squarespace DNS if it differs from the old `*.up.railway.app` value.
5. Confirm apex strategy: redirect **roseng.org** → **www.roseng.org** (do not leave apex on Squarespace parking IPs if production should be Railway).
6. Validate: `dig +short www.roseng.org` resolves; https://www.roseng.org loads; `npm run verify:production`.

### Temporary access while the domain is held

Use the Railway **public** or **custom** service URL from the Railway dashboard (Settings → Networking), not the suspended custom domain. That URL is for operators only — keep **`VITE_SITE_URL`** as `https://www.roseng.org` for production builds once DNS is restored.
