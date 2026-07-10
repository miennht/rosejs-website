# RoseJS — Company Profile

**Status:** Approved source of truth (`EVAL-P1-001`, `TASK-098` / `T-EVAL-P1-002`).

**Last reviewed:** 2026-07-10

**Authoritative for:** website About/homepage positioning, AI-generated company copy, Q&A regression (“What does RoseJS do?”), and evals against PRD §7.

Use this file—not model memory alone—when drafting or evaluating RoseJS company facts. Cross-check services in `services.md`, industries in `target-industries.md`, tone in `brand-voice.md`, and claims to reject in `forbidden-claims.md`.

---

## Brand and presence

| Field             | Approved value                                       |
| ----------------- | ---------------------------------------------------- |
| **Brand**         | RoseJS                                               |
| **Domain**        | roseng.org                                           |
| **Canonical URL** | https://www.roseng.org                               |
| **Tagline**       | RoseJS · roseng.org                                  |
| **Contact email** | hello@roseng.org                                     |
| **Contact page**  | https://www.roseng.org/contact                       |
| **Schedule page** | https://www.roseng.org/schedule                      |
| **Calendly**      | https://calendly.com/roseng0201/30min                |

Do not rename the brand to “RoseNG” or “Roseng” unless `docs/Brand_and_Domain.md` is revised.

---

## What RoseJS is

RoseJS is an **AI-first software architecture and modernization consulting practice**. It helps organizations modernize legacy platforms, clarify architecture, integrate APIs and cloud services, reduce technical debt, and adopt disciplined AI-assisted engineering—from strategy through production delivery.

**Primary focus areas:** healthcare technology, healthcare insurance (including RCM and payer platforms), and eCommerce platforms.

RoseJS is **not** a staffing agency, product SaaS vendor, or full-time outsourced engineering team. It is a consulting practice that partners with technical leaders on architecture, modernization, and delivery discipline.

**Approved one-liner (homepage-aligned):** RoseJS helps healthcare and insurance platforms modernize legacy systems, integrate APIs, and adopt AI-first engineering practices with disciplined delivery.

---

## Founder background (summary)

RoseJS was created from years of hands-on software development and architecture experience across:

- Healthcare technology
- Healthcare insurance systems
- eCommerce platforms

Most of that career depth is in **healthcare insurance**, where software must support complex workflows, partner integrations, data accuracy, security, and production reliability. That background shapes how RoseJS approaches modernization: practical, disciplined, and focused on systems teams can maintain and scale.

Public copy may summarize founder experience at this level. Do **not** invent named employers, titles, certifications, or client logos unless they are explicitly approved elsewhere.

---

## Philosophy (About page alignment)

Modernization should make systems easier to understand, operate, and evolve.

RoseJS uses:

- Clear architecture boundaries
- Phased migration paths
- Observability and validation gates
- Structured review before merge

AI accelerates analysis, documentation, development, and testing. **Engineering judgment, security, and production accountability remain human-owned.**

---

## AI-first methodology positioning

RoseJS delivers using four pillars (PRD AI-First methodology; homepage “AI-first delivery pillars”):

| Pillar         | Meaning                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------ |
| **Skill**      | AI accelerates research, planning, documentation, and implementation; senior architecture judgment owns final decisions. |
| **Code review**| Security, accessibility, SEO, maintainability, and scope boundaries are reviewed before merge.   |
| **Test suites**| Automated checks protect core journeys and reduce regressions.                                   |
| **Deployment** | CI/CD-first releases with clear environments and rollback thinking.                              |

**Correct framing:** AI assists; humans remain accountable.  
**Incorrect framing:** AI replaces architects, guarantees outcomes, or ships unreviewed production changes (see `forbidden-claims.md`).

---

## Target client profile

RoseJS works best with:

### Organizations

- Healthcare and payer technology organizations modernizing legacy platforms
- Healthcare insurance and revenue-cycle (RCM) engineering teams
- eCommerce teams modernizing platforms, integrations, and delivery practices
- Digital health and related platforms that need architecture clarity and integration strategy

### Buyers and roles

- CTOs and VPs of Engineering
- Principal / staff architects and technical leaders
- Healthcare insurance platform leaders who care about compliance posture, reliability, and workflow accuracy
- Engineering managers who need architecture review, modernization roadmaps, or delivery acceleration

### Fit signals

- Need a trusted architecture partner, not only more coding capacity
- Value evidence-led roadmaps, phased migration, and audit-friendly documentation
- Prefer pragmatic outcomes over buzzword-heavy transformation theater

RoseJS serves **healthcare and e-commerce** (and related digital platforms)—**not healthcare only**. See `target-industries.md`.

---

## Business value proposition

RoseJS connects business outcomes to technical execution:

- Fewer production incidents through clearer boundaries and validation gates
- Clearer system ownership and defensible architecture decisions
- Predictable modernization milestones with phased cutovers
- Faster experimentation with AI **without** sacrificing quality, security, or delivery control
- Reduced technical debt prioritized by reliability, security, maintainability, and time-to-market

### Approved positioning statements (PRD §7)

**Primary (recommended):**

> RoseJS helps healthcare insurance and healthcare technology teams modernize legacy platforms, design scalable software architecture, and deliver secure AI-first software solutions from strategy to deployment.

**Alternative (also approved):**

> RoseJS helps healthcare organizations modernize legacy systems, design scalable software architecture, and build AI-first digital products with secure, maintainable, production-ready engineering practices.

When copy must also reflect eCommerce (About page, industries), prefer phrasing such as: *healthcare technology, healthcare insurance, and eCommerce platforms*—without dropping eCommerce or claiming healthcare-only.

### Where RoseJS helps (About page list)

- Healthcare and eCommerce platform modernization
- Legacy application refactoring and rebuild planning
- API, cloud, and integration strategy
- Technical debt assessment
- AI-first software delivery practices

Detailed service definitions live in `services.md`.

---

## Messaging principles (for AI and human writers)

Aligned with PRD §7.4:

- Avoid vague buzzwords
- Explain business value clearly
- Connect technical work to outcomes
- Show credibility through examples (only approved case studies)
- Use plain language for executives; enough technical depth for architects
- Emphasize healthcare insurance depth, architecture quality, delivery discipline, and AI-first methodology
- Do not overpromise ROI, timelines, or “zero-risk” transformation

---

## Contact and next steps

Primary CTAs for visitors and AI assistants routing to human follow-up:

1. **Schedule a consultation** — https://www.roseng.org/schedule (Calendly: https://calendly.com/roseng0201/30min)
2. **Contact form** — https://www.roseng.org/contact
3. **Email** — hello@roseng.org

Do not invent alternate booking URLs or form endpoints.

---

## Change control

When company facts change (positioning, founder summary, CTAs, Calendly, email):

1. Update this file first.
2. Update website/CMS copy to match.
3. Update related eval scenarios and Q&A cases (`TASK-091` / `TASK-092` when active).
4. Note the change date in **Last reviewed** above.
