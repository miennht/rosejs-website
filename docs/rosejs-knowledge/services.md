# RoseJS — Services

**Status:** Approved source of truth (`EVAL-P1-001`, `TASK-099` / `T-EVAL-P1-003`).

**Last reviewed:** 2026-07-10

**Authoritative for:** `/services` and service detail pages, AI-generated service copy, static content evals (`EVAL-P1-002`), and stale-service detection.

Use this file—not model memory alone—when listing or describing RoseJS offerings. Cross-check company positioning in `company-profile.md`, industries in `target-industries.md`, tone in `brand-voice.md`, and claims to reject in `forbidden-claims.md`.

Canonical website source for published service records: `src/content/fallback/services.ts` (until CMS replaces fallback). Services page intro: consulting for **healthcare technology and eCommerce** teams—architecture, modernization, integration, and AI-first delivery.

---

## How to use this file

- Only list services marked **Current** below in website copy or AI responses.
- Match titles, slugs, and scope to this file and live `/services` content.
- Healthcare insurance and RCM depth is a **specialization**, not an exclusive limit on industries served.
- RoseJS is consulting/architecture-led—not a staffing agency, body shop, or guaranteed-outcome vendor.
- Do not invent packages, retainers, pricing tiers, or SLAs unless approved elsewhere.

---

## Current services (published on site)

These seven services have published records and detail routes under `/services/{slug}`.

### 1. Software architecture consulting

| Field | Approved content |
| ----- | ---------------- |
| **Title** | Software architecture consulting |
| **Slug** | `software-architecture-consulting` |
| **Summary** | Clarify system boundaries, integration patterns, and scalable architecture paths for complex healthcare and payer platforms. |
| **Problem** | Teams ship features faster than the architecture can safely absorb, creating coupling, outages, and audit risk. |
| **Description** | RoseJS leads structured discovery, decision records, and incremental hardening so architecture matches how care and revenue actually flow. |
| **Business outcome** | Fewer production incidents, clearer ownership between clinical and finance systems, and roadmaps teams can defend to compliance partners. |
| **Typical deliverables** | Current-state and target-state diagrams; risk-ranked modernization backlog; architecture review cadence with engineering leadership |

**Also called in evals:** architecture review / architecture consulting.

---

### 2. Legacy application modernization (AI-first)

| Field | Approved content |
| ----- | ---------------- |
| **Title** | Legacy application modernization |
| **Slug** | `legacy-application-modernization` |
| **Summary** | Reduce modernization risk with strangler patterns, phased migration, observability, and validation gates. |
| **Problem** | Monoliths and batch jobs block new regulations, integrations, and member experiences while attrition erodes institutional knowledge. |
| **Description** | Sequence refactors around revenue-critical paths, add safety nets (tests, telemetry, rollback), and align business and engineering on measurable milestones. |
| **Business outcome** | Predictable releases, lower mean-time-to-recover, and defensible documentation for security and payer audits. |
| **Typical deliverables** | Strangler-map and cutover plan; test and release strategy for high-risk domains; executive-ready risk narrative |

**Also called in evals:** AI-first legacy modernization / legacy modernization.

---

### 3. Technical debt assessment

| Field | Approved content |
| ----- | ---------------- |
| **Title** | Technical debt assessment |
| **Slug** | `technical-debt-assessment` |
| **Summary** | Prioritize remediation where risk, customer impact, and regulatory exposure intersect—not where politics is loudest. |
| **Problem** | Debt backlogs become political instead of evidence-led, starving the changes that actually reduce operational risk. |
| **Description** | Score debt across reliability, security, maintainability, and time-to-market, then tie recommendations to business outcomes. |
| **Business outcome** | A defensible roadmap engineering and product can fund together. |
| **Typical deliverables** | Heat-mapped debt inventory; cost-of-delay framing for top items; 90-day execution slice with owners |

---

### 4. Healthcare insurance & RCM platform consulting

| Field | Approved content |
| ----- | ---------------- |
| **Title** | Healthcare insurance & RCM platform consulting |
| **Slug** | `healthcare-insurance-rcm-consulting` |
| **Summary** | Navigate claims, enrollment, billing, and partner integrations with domain-aware architecture and vendor coordination. |
| **Problem** | RCM platforms accumulate vendor adapters, idiosyncratic payer rules, and fragile batch windows that resist change. |
| **Description** | Align service boundaries to how money and eligibility actually move, and design APIs and events that survive the next payer mandate. |
| **Business outcome** | Cleaner integrations, fewer manual interventions, and faster onboarding of new lines of business. |
| **Typical deliverables** | Integration landscape map; payer and clearinghouse touchpoint matrix; operational playbooks for batch and real-time flows |

---

### 5. Cloud and API integration (healthcare system integration)

| Field | Approved content |
| ----- | ---------------- |
| **Title** | Cloud and API integration |
| **Slug** | `cloud-api-integration` |
| **Summary** | Connect clinical, payer, and operations systems with explicit contracts, versioning, and operational guardrails. |
| **Problem** | Point-to-point integrations hide failures until revenue or care is impacted, and teams fear changing working-but-fragile pipes. |
| **Description** | Design event-first boundaries where appropriate, document failure modes, and sequence cutovers with measurable rollback points. |
| **Business outcome** | Safer partner onboarding, clearer ownership of payloads, and reduced weekend-war-room frequency. |
| **Typical deliverables** | API and event catalog; versioning and deprecation policy; observability plan for cross-system journeys |

**Also called in evals:** healthcare system integration / cloud and API integration.

---

### 6. Secure data and system integration

| Field | Approved content |
| ----- | ---------------- |
| **Title** | Secure data and system integration |
| **Slug** | `secure-data-system-integration` |
| **Summary** | Design PHI-aware flows, least-privilege access, and integration patterns that auditors and security partners can follow. |
| **Problem** | Data copies proliferate across vendors, warehouses, and internal tools without consistent controls or lineage. |
| **Description** | Align integration design to minimum-necessary data movement, with clear retention and access narratives. |
| **Business outcome** | Fewer shadow integrations and clearer answers under security review. |
| **Typical deliverables** | Data-flow and trust-boundary diagrams; control mapping for high-risk interfaces; hardening checklist for new connectors |

---

### 7. AI-first product development

| Field | Approved content |
| ----- | ---------------- |
| **Title** | AI-first product development |
| **Slug** | `ai-first-product-development` |
| **Summary** | Ship AI-assisted features with human review, data boundaries, and deployment discipline suited to regulated environments. |
| **Problem** | Teams want velocity from AI while compliance and safety teams need traceability and human accountability. |
| **Description** | Define where models assist, where humans decide, and how logging and rollback behave when automation misfires. |
| **Business outcome** | Faster experimentation without turning models into silent single points of failure. |
| **Typical deliverables** | AI boundary and review checklist; threat-modeling workshop for new AI surfaces; CI/CD hooks for policy checks where applicable |

---

## Current cross-cutting offerings (promoted; may not have separate CMS slugs)

These are **approved** and appear in About/positioning and TASK-099 acceptance criteria. They may be scoped as engagements that compose the published services above rather than separate CMS records.

### eCommerce modernization

Platform modernization, integration strategy, technical debt reduction, and AI-first delivery practices for eCommerce engineering teams. Engagements align architecture and delivery discipline to catalog, checkout, fulfillment, and partner integrations.

- **Industries:** eCommerce (see `target-industries.md`)
- **Often composed from:** architecture consulting, legacy modernization, technical debt assessment, cloud/API integration, AI-first product development
- **Do not claim:** RoseJS is an eCommerce platform vendor or agency that runs ads/media buying

### AI workflow implementation

Practical adoption of AI-assisted engineering workflows: prompting discipline, review gates, test suites, CI/CD integration, and guardrails for teams adopting AI-first delivery.

- **Related published service:** AI-first product development (`ai-first-product-development`)
- **Related methodology:** four pillars in `company-profile.md` (Skill, Code review, Test suites, Deployment)
- **Do not claim:** AI fully replaces human architects or ships unreviewed production changes

---

## Quick reference (eval checklist)

| Must appear when describing “current services” | Site slug / note |
| ---------------------------------------------- | ---------------- |
| AI-first legacy modernization | `legacy-application-modernization` |
| Architecture review / consulting | `software-architecture-consulting` |
| Technical debt assessment | `technical-debt-assessment` |
| Healthcare system / cloud & API integration | `cloud-api-integration` |
| Healthcare insurance & RCM consulting | `healthcare-insurance-rcm-consulting` |
| Secure data and system integration | `secure-data-system-integration` |
| AI-first product development | `ai-first-product-development` |
| eCommerce modernization | Cross-cutting (About / industries) |
| AI workflow implementation | Cross-cutting (methodology + AI-first product) |

---

## Out of scope / do not list as RoseJS services

Unless explicitly approved and added here later:

- Staffing / staff augmentation as a primary offering
- Managed hosting or 24/7 NOC as a productized service
- Guaranteed ROI, guaranteed delivery dates, or “zero-risk” transformation packages
- PHI storage or HIPAA BAA via the marketing website
- Removed or renamed historical offerings not listed above

See `forbidden-claims.md` for claim-level failures.

---

## Engagement framing (for copy and AI)

Services page CTA language (approved tone):

- Walk through constraints, timelines, and risk posture
- Leave with a pragmatic next-step map
- Primary CTA: Schedule a consultation → `/schedule`
- Secondary CTA: Contact RoseJS → `/contact`

Each published service page should support: problem framing, outcomes, and related reading (blog/case studies)—matching live site behavior.

---

## Change control

When services change (add, rename, remove, or change scope):

1. Update this file and `src/content/fallback/services.ts` (or CMS) together.
2. Update website cards, SEO descriptions, and related links.
3. Update eval scenarios and Q&A cases (`TASK-091` / `TASK-092` when active).
4. Move retired offerings to an explicit “Removed” note here so stale-claim scans can fail on them.
5. Update **Last reviewed** above.
