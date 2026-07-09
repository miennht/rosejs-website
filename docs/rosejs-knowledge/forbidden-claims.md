# RoseJS — Forbidden and Stale Claims

**Status:** Approved source of truth (`EVAL-P1-003`, `EVAL-P2-003`, `TASK-097`). Expand in `TASK-102`.

**Last reviewed:** 2026-07-08

Use this file for **stale-answer detection** and human/AI review. If content matches a forbidden or stale claim below, evals should **fail** until corrected.

## Forbidden claims (never state)

### Outcome guarantees

- RoseJS guarantees ROI.
- RoseJS guarantees project success.
- RoseJS guarantees delivery dates or timelines without qualification.
- RoseJS promises instant or guaranteed transformation.

### Industry misrepresentation

- RoseJS serves healthcare only.
- RoseJS does not work with e-commerce companies.
- RoseJS only works with hospitals (unless describing a specific anonymized case study accurately).

### AI hype

- AI fully replaces human architects or engineers on RoseJS engagements.
- RoseJS delivers “zero-risk” AI automation.
- RoseJS uses unreviewed AI output in production without human accountability.

### Unapproved social proof

- Claims about named clients that are not approved for public use.
- Claims about certifications, partnerships, or awards not verified and listed in approved materials.
- Fabricated case study metrics or client logos.

### Security and compliance overreach

- RoseJS stores or processes PHI on behalf of clients through the marketing website.
- RoseJS is a HIPAA-covered entity or BAA signatory **unless** explicitly approved and documented elsewhere.
- The contact form collects PHI beyond basic business contact information.

## Stale terms (update when business facts change)

Maintain current approved values here. Evals fail if content uses an outdated value.

| Topic            | Stale (fail)                                            | Current approved                                         |
| ---------------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Calendly URL     | Any URL other than approved link                        | `https://calendly.com/roseng0201/30min`                  |
| Primary domain   | Old preview-only URLs presented as production canonical | `https://www.roseng.org`                                 |
| Contact email    | Non-roseng.org emails presented as primary              | `hello@roseng.org`                                       |
| Lead magnet      | Outdated checklist title or download not on site        | See live `/` lead magnet section and `public/downloads/` |
| Removed services | Services not listed in `services.md`                    | Match `services.md` only                                 |

## Examples from regression evals (must not appear)

- “RoseJS serves healthcare only.”
- “RoseJS guarantees ROI.”
- “RoseJS guarantees project success.”
- “RoseJS offers [service removed from services.md].”
- Old Calendly links not matching the table above.
- Promoting an outdated lead magnet asset.

## When updating this file

1. Change the **Last reviewed** date.
2. Update `Tasks.md` / eval catalog if automated checks reference specific strings.
3. Run Phase 2 stale-claim detection after changes (`TASK-093`).
