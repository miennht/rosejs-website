# Static Website Content Eval Checklist

**Status:** Approved checklist (`EVAL-P1-002`, `TASK-103` / `T-EVAL-P1-007`).

**Last reviewed:** 2026-07-10

**Purpose:** Human-review (and future semi-automated) evaluation of key marketing pages against `docs/rosejs-knowledge/`. Supports `TASK-089` (static content evals) and `TASK-081` (local runner). Knowledge-base index: [`../rosejs-knowledge/README.md`](../rosejs-knowledge/README.md) (`TASK-088`).

**How to use:** For each page below, walk the checklist against the live or preview site. Mark Pass / Fail / N/A. Any **Fail** on a Critical item blocks merge when Phase 2 gates are active (`Deployment_Guide.md` §22).

---

## Knowledge-base map

| Checklist theme | Primary source file |
| --------------- | ------------------- |
| Company facts, positioning, CTAs | [`company-profile.md`](../rosejs-knowledge/company-profile.md) |
| Service names and scope | [`services.md`](../rosejs-knowledge/services.md) |
| Industries served | [`target-industries.md`](../rosejs-knowledge/target-industries.md) |
| Tone | [`brand-voice.md`](../rosejs-knowledge/brand-voice.md) |
| Forbidden / stale claims | [`forbidden-claims.md`](../rosejs-knowledge/forbidden-claims.md) |

---

## Shared checks (every page)

Apply to Homepage, Services, About, Contact, and Lead magnet section.

### Clarity (Critical)

- [ ] Visitor can tell what RoseJS does within the first screenful
- [ ] Language is plain enough for executives; technical depth does not obscure the offer
- [ ] No contradictory statements vs other core pages

**KB:** `company-profile.md`, `brand-voice.md`

### Accuracy (Critical)

- [ ] Positioning matches approved statements in `company-profile.md`
- [ ] Industries: healthcare **and** eCommerce allowed; no “healthcare only”
- [ ] Services mentioned exist in `services.md` (no removed offerings)
- [ ] Brand/domain: RoseJS / https://www.roseng.org / hello@roseng.org as applicable

**KB:** `company-profile.md`, `services.md`, `target-industries.md`

### CTA (Critical where CTAs appear)

- [ ] Primary CTA routes to `/schedule` or `/contact` as intended
- [ ] Calendly destination matches approved URL (`forbidden-claims.md` table)
- [ ] No invented booking or form endpoints

**KB:** `company-profile.md`, `forbidden-claims.md`

### SEO

- [ ] Single logical H1
- [ ] Title and meta description present and on-brand
- [ ] Path matches expected route map (`/`, `/services`, `/about`, `/contact`, etc.)

**KB:** `company-profile.md` (brand); site SEO defaults

### Tone (Critical for marketing copy)

- [ ] Professional, clear, practical, not hype-driven
- [ ] AI framed as assistive with human accountability
- [ ] Passes `brand-voice.md` Must rubric items

**KB:** `brand-voice.md`

### Safety (Critical)

- [ ] No forbidden claims (ROI/success guarantees, healthcare-only, unapproved clients, PHI overreach)
- [ ] No stale Calendly, email, domain, or lead magnet values
- [ ] No PHI collection beyond basic business contact on forms

**KB:** `forbidden-claims.md`

---

## 1. Homepage (`/`)

| # | Check | Severity | KB file |
| - | ----- | -------- | ------- |
| H1 | Hero communicates modernization / architecture / AI-first delivery without guarantees | Critical | company-profile, brand-voice |
| H2 | Services overview titles match `services.md` (or accurate summaries) | Critical | services |
| H3 | Methodology pillars match Skill / Code review / Test suites / Deployment | Critical | company-profile |
| H4 | Trust points do not imply healthcare-only exclusivity | Critical | target-industries |
| H5 | CTAs: schedule and/or contact present and correct | Critical | company-profile |
| H6 | Lead magnet section (if shown): see §5 | Critical | forbidden-claims |
| H7 | SEO title/description on-brand | Should | company-profile |

**Reviewer notes:** ________________________________

---

## 2. Services page (`/services`)

| # | Check | Severity | KB file |
| - | ----- | -------- | ------- |
| S1 | Intro mentions healthcare technology **and** eCommerce (or equivalent dual framing) | Critical | target-industries |
| S2 | Listed cards match published services in `services.md` | Critical | services |
| S3 | No removed or invented service titles | Critical | services, forbidden-claims |
| S4 | Detail pages (spot-check ≥2): problem / outcome framing present; tone practical | Should | services, brand-voice |
| S5 | Consultation CTAs correct | Critical | company-profile |
| S6 | SEO description lists real service themes only | Should | services |

**Reviewer notes:** ________________________________

---

## 3. About page (`/about`)

| # | Check | Severity | KB file |
| - | ----- | -------- | ------- |
| A1 | Founder/background summary matches `company-profile.md` (no invented employers/certs) | Critical | company-profile |
| A2 | Mentions healthcare technology, healthcare insurance, **and** eCommerce | Critical | target-industries, company-profile |
| A3 | Philosophy: AI assists; humans accountable | Critical | company-profile, brand-voice |
| A4 | “Where RoseJS helps” items align with approved help areas / services | Critical | company-profile, services |
| A5 | Schedule CTA present and correct | Critical | company-profile |
| A6 | Tone: human, practical, not hype | Critical | brand-voice |

**Reviewer notes:** ________________________________

---

## 4. Contact page (`/contact`)

| # | Check | Severity | KB file |
| - | ----- | -------- | ------- |
| C1 | Form collects business contact fields only (no PHI solicitation) | Critical | forbidden-claims |
| C2 | Displayed email is `hello@roseng.org` (or current approved) | Critical | company-profile, forbidden-claims |
| C3 | Schedule / Calendly path uses approved URL | Critical | forbidden-claims |
| C4 | Copy does not promise response SLAs or outcomes not approved | Should | brand-voice, forbidden-claims |
| C5 | Industries framing (if present) is not healthcare-only | Critical | target-industries |
| C6 | SEO title/description on-brand | Should | company-profile |

**Reviewer notes:** ________________________________

---

## 5. Lead magnet section

Appears on homepage and/or dedicated resource surfaces. Current approved asset:

| Field | Approved value |
| ----- | -------------- |
| **Title** | Legacy application modernization checklist |
| **Slug** | `legacy-application-modernization-checklist` |
| **File** | `/downloads/legacy-application-modernization-checklist.pdf` |
| **Source** | `src/content/fallback/leadMagnets.ts` |

| # | Check | Severity | KB file |
| - | ----- | -------- | ------- |
| L1 | Title matches approved lead magnet | Critical | forbidden-claims |
| L2 | Download href matches approved file path | Critical | forbidden-claims |
| L3 | Not email-gated (free download per PRD LEAD-*) | Critical | company-profile / PRD |
| L4 | Related services (if shown) exist in `services.md` | Critical | services |
| L5 | No outdated checklist name or alternate PDF promoted as current | Critical | forbidden-claims |
| L6 | Tone of surrounding copy is practical, not hype | Should | brand-voice |

**Reviewer notes:** ________________________________

---

## Sign-off

| Field | Value |
| ----- | ----- |
| Reviewer | |
| Date | |
| Environment (local / preview / production) | |
| Result (Pass / Fail) | |
| Failed item IDs | |
| Follow-up task / PR | |

---

## Automation hooks (`TASK-089`, `TASK-081`)

When implementing runners:

1. Map Critical rows to automated assertions where possible (routes, titles, Calendly URL, lead magnet path, forbidden string scan).
2. Keep tone and “sounds human” items as human or LLM-assisted rubric checks (`TASK-090`).
3. Store results with page path, checklist ID, and knowledge-base file reference for traceability (`Traceability_Matrix.md` §13).

---

## Change control

When pages or knowledge-base facts change:

1. Update the relevant `docs/rosejs-knowledge/` file first.
2. Re-run this checklist on affected pages before merge.
3. Update approved lead magnet / CTA rows here if those assets change.
4. Update **Last reviewed** above.
