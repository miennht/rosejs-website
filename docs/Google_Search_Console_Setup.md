# Google Search Console (TASK-060)

Search Console is configured in **Google’s UI** using the **production** URL. This document is the repeatable checklist; it does not replace verifying the property in Google.

## Prerequisites

- Production site is reachable on **HTTPS** (see **`docs/Domain_SSL_Setup.md`**).
- Canonical site URL is decided (with or without `www`); use **one** preferred host and redirect the other if both exist.

## Steps

1. Open [Google Search Console](https://search.google.com/search-console).
2. **Add property**
   - **Domain** property: covers all protocols/subdomains (verification via **DNS TXT** at the registrar), **or**
   - **URL-prefix** property: e.g. `https://www.example.com/` (verification via DNS, HTML file, or meta tag).
3. Complete **ownership verification** using the method Google offers (DNS TXT is typical for domain properties).
4. After verification, open **Sitemaps** and submit your sitemap URL, for example:
   - `https://<your-production-host>/sitemap.xml`
   - Ensure `public/sitemap.xml` in the repo uses the same host (or rebuild after updating it / `VITE_SITE_URL` workflows).
5. Use **Page indexing**, **Experience**, and **Enhancements** (if shown) over the following days to confirm crawling and fix obvious errors.

## Ongoing

- Re-submit or **ping** the sitemap when major routes or CMS content change (per your release process).
- Keep **Plausible** / analytics separate; Search Console is for **indexing and coverage**, not primary product analytics.

## Validation

- Search Console shows the property as **verified**.
- Sitemap status is **Success** (or errors are triaged).
- **Human:** mark TASK-060 validation in `docs/Tasks.md` after you complete the above on the real production host.
