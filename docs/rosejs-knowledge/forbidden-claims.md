# RoseJS — Forbidden and Stale Claims

**Status:** Approved source of truth (`EVAL-P1-003`, `EVAL-P2-003`, `TASK-102` / `T-EVAL-P1-006`).

**Last reviewed:** 2026-07-10

**Authoritative for:** stale-answer detection (`TASK-093`), brand-voice safety, Q&A regression fails, and human/AI review before merge.

If content matches a **forbidden** or **stale** claim below, evals should **fail** until corrected. Cross-check facts in `company-profile.md`, `services.md`, and `target-industries.md`.

---

## How to use this file

| Severity | Meaning | Deploy policy (when Phase 2 active) |
| -------- | ------- | ----------------------------------- |
| **Forbidden** | Never state, regardless of context | Critical — block merge/deploy until fixed or waived |
| **Stale** | Was true or appeared before; no longer approved | Critical if user-facing; update knowledge base + site together |

String matching for automation (`TASK-093`) should treat the examples below as fail patterns; expand synonyms carefully to avoid false positives on legitimate “healthcare insurance” specialization language.

---

## Forbidden claims (never state)

### Outcome guarantees

- RoseJS guarantees ROI.
- RoseJS guarantees project success.
- RoseJS guarantees delivery dates or timelines without qualification.
- RoseJS promises instant or guaranteed transformation.
- “Zero-risk” modernization or “guaranteed” cost savings.

### Industry misrepresentation

- RoseJS serves healthcare only.
- RoseJS does not work with e-commerce companies.
- RoseJS only works with hospitals (unless describing a specific anonymized case study accurately).
- Any framing that permanently excludes eCommerce from who RoseJS serves.

See `target-industries.md`.

### AI hype

- AI fully replaces human architects or engineers on RoseJS engagements.
- RoseJS delivers “zero-risk” AI automation.
- RoseJS uses unreviewed AI output in production without human accountability.
- “Fully autonomous” engineering or “AI replaces your team.”

### Unapproved social proof

- Claims about named clients that are not approved for public use.
- Claims about certifications, partnerships, or awards not verified and listed in approved materials.
- Fabricated case study metrics or client logos.
- Fake testimonials or invented reviewer quotes.

### Security and compliance overreach

- RoseJS stores or processes PHI on behalf of clients through the marketing website.
- RoseJS is a HIPAA-covered entity or BAA signatory **unless** explicitly approved and documented elsewhere.
- The contact form collects PHI beyond basic business contact information.
- Guarantees of regulatory certification outcomes for client systems.

### Service and commercial misrepresentation

- Listing services not in `services.md` as current offerings.
- Presenting RoseJS as a staffing agency, body shop, or full-time outsourced engineering vendor as the primary model.
- Invented pricing packages, SLAs, or retainers not approved in writing.

---

## Stale terms (update when business facts change)

Maintain current approved values here. Evals fail if content uses an outdated value as the live fact.

| Topic            | Stale (fail)                                            | Current approved                                                                 |
| ---------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Calendly URL     | Any URL other than approved link                        | `https://calendly.com/roseng0201/30min`                                          |
| Schedule path    | Booking CTAs that skip `/schedule` without reason       | https://www.roseng.org/schedule                                                  |
| Primary domain   | Old preview-only URLs presented as production canonical | `https://www.roseng.org`                                                         |
| Contact email    | Non-roseng.org emails presented as primary              | `hello@roseng.org`                                                               |
| Lead magnet      | Outdated title, slug, or file path                      | Title: *Legacy application modernization checklist*; file: `/downloads/legacy-application-modernization-checklist.pdf` (`src/content/fallback/leadMagnets.ts`) |
| Removed services | Services not listed in `services.md`                    | Match `services.md` only                                                         |
| Brand name       | “RoseNG” / “Roseng” as company brand                    | **RoseJS** (`docs/Brand_and_Domain.md`)                                          |

---

## PRD `EVAL-P2-003` examples (must not appear)

These are the canonical regression examples from PRD §27:

- “RoseJS serves healthcare only.”
- “RoseJS guarantees ROI.”
- “RoseJS guarantees project success.”
- “RoseJS offers [service removed from services.md].”
- Old Calendly links not matching the table above.
- Promoting an outdated lead magnet asset.

---

## Detection notes for `TASK-093`

Suggested fail categories for scanners and human review:

1. **Guarantee language** near ROI / success / transformation / zero-risk
2. **Healthcare-only** exclusivity phrases
3. **Calendly / email / domain** mismatch vs approved table
4. **Service titles** not present in `services.md`
5. **Lead magnet** title or PDF path mismatch
6. **Named clients / certifications** not in approved materials

Report failures with: claim text, location (file/route), category, and suggested fix (update copy vs update knowledge base).

---

## When updating this file

1. Change the **Last reviewed** date.
2. Sync approved Calendly, email, lead magnet, and service lists with live site / CMS.
3. Update `Tasks.md` / eval catalog if automated checks reference specific strings.
4. Run Phase 2 stale-claim detection after changes (`TASK-093`) when implemented.
