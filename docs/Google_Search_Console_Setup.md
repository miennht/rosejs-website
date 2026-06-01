# Google Search Console (TASK-060)

Search Console is configured in **Google’s UI** using the **production** URL.

**Brand:** RoseJS · **Domain:** roseng.org · **Canonical:** https://www.roseng.org — see **`docs/Brand_and_Domain.md`**.

For full indexing steps after deploy, see **`docs/Search_Indexing_Runbook.md`**.

## Prerequisites

- Production site is reachable on **HTTPS** (see **`docs/Domain_SSL_Setup.md`**).
- Canonical site URL: **https://www.roseng.org** (redirect apex **`roseng.org`** to `www` if both are in DNS).

## Steps

1. Open [Google Search Console](https://search.google.com/search-console).
2. **Add property**
   - **Domain** property: covers all protocols/subdomains (verification via **DNS TXT** at the registrar), **or**
   - **URL-prefix** property: e.g. `https://www.example.com/` (verification via DNS, HTML file, or meta tag).
3. Complete **ownership verification** (pick one method Google offers for your property type):

### Verification options (URL-prefix property)

| Method        | Repo hook / steps                                                                                                                                                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML tag**  | Google shows a `<meta name="google-site-verification" content="…" />` line. Paste the `content` value into **`index.html`** (see the commented block in `<head>`), uncomment the tag, rebuild, deploy, then click **Verify** in Search Console. |
| **HTML file** | Download the file Google names (e.g. `google0123….html`) into **`public/`** at repo root, commit, deploy, then verify. Remove the file after verification if Google no longer requires it.                                                      |
| **DNS**       | Add the **TXT** record at your DNS host (no code change). Preferred for **Domain** properties.                                                                                                                                                  |

4. After verification, open **Sitemaps** and submit:
   - **https://www.roseng.org/sitemap.xml**
   - Sitemap is **generated at build** (`npm run generate:sitemap`) from published CMS slugs — re-submit after each production release.
5. **URL inspection** → request indexing for `/`, `/services`, `/about`, and one article URL (see **`docs/Search_Indexing_Runbook.md`**).
6. Use **Page indexing** over the following days; validate with `site:roseng.org` weekly.

## Ongoing

- Re-submit or **ping** the sitemap when major routes or CMS content change (per your release process).
- Keep **Plausible** / analytics separate; Search Console is for **indexing and coverage**, not primary product analytics.

## Validation

- Search Console shows the property as **verified**.
- Sitemap status is **Success** (or errors are triaged).
- **Done (May 2026):** property verified and **https://www.roseng.org/sitemap.xml** submitted — see TASK-060 in **`docs/Tasks.md`**.
