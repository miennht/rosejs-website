# RoseJS — Target Industries

**Status:** Approved source of truth (`EVAL-P1-001`, `TASK-100` / `T-EVAL-P1-004`).

**Last reviewed:** 2026-07-10

**Authoritative for:** industry positioning on Home/About/Services, AI-generated industry copy, and evals that must reject “healthcare only” claims.

Use this file—not model memory alone—when stating who RoseJS serves. Cross-check `company-profile.md`, `services.md`, `brand-voice.md`, and `forbidden-claims.md`.

---

## Non-negotiable rule

**RoseJS does not serve healthcare only.**

Approved industry set always includes **Healthcare** (technology + insurance/payer) **and** **eCommerce**. Website and AI copy that implies exclusive healthcare focus must **fail** evals (see `forbidden-claims.md`).

---

## Approved industries (current)

### 1. Healthcare technology

Digital health products, clinical and operational platforms, and engineering organizations modernizing regulated or operationally complex healthcare systems.

**Typical work:** platform modernization, architecture clarity, API/cloud integration, technical debt reduction, AI-first delivery practices.

**Live-site signals:** About (“healthcare technology”), Services intro (“healthcare technology and eCommerce”), homepage healthcare platform messaging.

---

### 2. Healthcare insurance and payer platforms

Health plans, payer operations, claims, enrollment, billing, revenue-cycle (RCM) workflows, clearinghouse and partner integrations, and batch/real-time processing constraints.

**Typical work:** RCM/payer architecture consulting, claims and enrollment integrations, secure data flows, legacy modernization with audit-friendly documentation.

**Specialization note:** Healthcare insurance and RCM are a **depth specialization**, not an exclusive industry limit. Prefer: “specialized depth in healthcare insurance and RCM” — never: “only healthcare insurance.”

**Live-site signals:** homepage trust points, RCM service (`healthcare-insurance-rcm-consulting`), PRD §7 positioning.

---

### 3. eCommerce

eCommerce platform modernization, integration strategy, technical debt reduction, and AI-first engineering practices for retail and digital commerce teams.

**Typical work:** catalog/checkout/fulfillment architecture, partner integrations, delivery discipline, composed modernization engagements (see `services.md` → eCommerce modernization).

**Live-site signals:** About (“eCommerce platforms”), Services page (“healthcare technology and eCommerce teams”), About “Where RoseJS helps” list.

---

## Industry summary table

| Industry                           | Status               | Role                                                              |
| ---------------------------------- | -------------------- | ----------------------------------------------------------------- |
| Healthcare technology              | Approved             | Primary focus                                                     |
| Healthcare insurance / payer / RCM | Approved             | Primary specialization (depth)                                    |
| eCommerce                          | Approved             | Explicit secondary focus — **required** in “who we serve” framing |
| Digital health (related)           | Approved as adjacent | May appear with healthcare technology                             |

---

## Positioning rules for evals

| Approved                                                   | Not approved / fail eval                                             |
| ---------------------------------------------------------- | -------------------------------------------------------------------- |
| “Healthcare **and** eCommerce modernization”               | “RoseJS serves healthcare only”                                      |
| “Specialized depth in healthcare insurance and RCM”        | “RoseJS only works with hospitals” (unless engagement-specific case) |
| “Healthcare-focused consulting with eCommerce experience”  | Excluding eCommerce when describing who RoseJS helps                 |
| “Consulting for healthcare technology and eCommerce teams” | “RoseJS does not work with e-commerce companies”                     |
| Homepage may lead with healthcare insurance depth          | Homepage or About that permanently drops eCommerce from scope        |

**Homepage nuance:** Leading with healthcare insurance messaging is allowed (specialization). Claiming or implying **exclusive** healthcare scope is not.

---

## Future industries

Additional industries (e.g., fintech, government, education) may be added **only** after explicit approval and an update to this file.

Until listed here:

- Do not claim RoseJS specializes in those verticals.
- Adjacent digital platforms may be described case-by-case without inventing a new industry specialization.

---

## Eval checklist (industries)

- [ ] Copy mentions or allows eCommerce when describing industries served (About/Services-level claims)
- [ ] No “healthcare only” / “hospitals only” / “no e-commerce” language
- [ ] Healthcare insurance depth framed as specialization, not exclusivity
- [ ] Industry list matches this file when AI answers “What industries does RoseJS serve?”

---

## Change control

When target industries change:

1. Update this file first (add/remove/rename with approval).
2. Update About, Services intro, homepage, and SEO descriptions.
3. Update `forbidden-claims.md` stale/forbidden industry phrases if needed.
4. Update change-based eval scenarios (`TASK-091`) when active.
5. Update **Last reviewed** above.
