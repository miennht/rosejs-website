# RoseJS — Brand Voice

**Status:** Approved source of truth (`EVAL-P1-003`, `TASK-101` / `T-EVAL-P1-005`).

**Last reviewed:** 2026-07-10

**Authoritative for:** marketing copy tone, AI-generated drafts, brand-voice evals (`TASK-090`), and human review against PRD `EVAL-P1-003`.

Use this file with `forbidden-claims.md` (hard fails) and `company-profile.md` / `services.md` (facts). Tone can pass voice checks and still fail if facts or forbidden claims are wrong.

---

## Tone principles (must hold)

RoseJS content should sound:

| Principle                         | Meaning                                                         |
| --------------------------------- | --------------------------------------------------------------- |
| **Professional**                  | Credible for executives and engineering leaders                 |
| **Clear**                         | Plain language; explain value without jargon walls              |
| **Human**                         | Written by practitioners, not generic marketing AI              |
| **Practical**                     | Phased paths, trade-offs, and what teams can actually ship      |
| **AI-first but not hype-driven**  | AI accelerates work; humans own judgment and accountability     |
| **Confident but not exaggerated** | Strength without guarantees or miracle claims                   |
| **Helpful**                       | Useful to healthcare **and** e-commerce modernization audiences |

Aligned with PRD §7.3 brand tone: professional, clear, trustworthy, technical but approachable, strategic, practical, senior-level, outcome-focused.

---

## Write this way

- Connect technical work to business outcomes (reliability, audit readiness, time-to-market, fewer incidents).
- Use specific domains when relevant: healthcare insurance, RCM, payer platforms, legacy modernization, integrations, eCommerce platforms.
- Prefer short sentences and concrete nouns over buzzwords.
- Acknowledge risk, compliance, and operational reality in regulated environments.
- Use **RoseJS** as the brand; **roseng.org** when referring to the website or email host (`docs/Brand_and_Domain.md`).
- Frame AI as assistive under human review (four pillars in `company-profile.md`).
- Offer a clear next step: schedule consultation, contact form, or approved lead magnet—without pressure tactics.

### Approved voice samples (live-site aligned)

> Modernization should make systems easier to understand, operate, and evolve.

> AI is used to accelerate analysis, documentation, development, and testing — while engineering judgment, security, and production accountability remain human-owned.

> Consulting engagements for healthcare technology and eCommerce teams—architecture, modernization, integration, and AI-first delivery.

> Tell us about your constraints, timelines, and risk posture.

---

## Avoid this way

- Vague superlatives: “world-class,” “cutting-edge,” “revolutionary,” “10x,” “instant transformation”
- Exaggerated AI claims: “fully autonomous engineering,” “AI replaces your team,” “guaranteed faster delivery”
- Fear-based or condescending tone toward legacy teams
- Generic outsourcing or staff-augmentation pitch language
- Overpromising timelines or outcomes without scope context
- Hype-stacked adjectives with no operational meaning
- Invented client logos, awards, or certifications

Hard-fail phrases also live in `forbidden-claims.md` (ROI guarantees, healthcare-only, etc.).

---

## Audience notes

| Audience                        | Emphasis                                                    |
| ------------------------------- | ----------------------------------------------------------- |
| CTO / VP Engineering            | Architecture clarity, risk reduction, roadmap defensibility |
| Architects / tech leads         | Boundaries, integration patterns, migration sequencing      |
| Healthcare / payer stakeholders | Compliance-aware pragmatism, operational reliability        |
| eCommerce leaders               | Platform modernization, integrations, sustainable delivery  |
| Engineering managers            | Methodology reliability, maintainability, test discipline   |

PRD §7.4: plain language for executives; enough technical depth for architects.

---

## Rubric for human or scripted voice evals (`TASK-090`)

Score each draft or page section. **Fail** the voice eval if any Must item fails.

### Must (fail if no)

1. Sounds professional and clear to a skeptical architect if read aloud.
2. Avoids exaggerated AI or outcome hype.
3. Aligns with RoseJS consulting identity (architecture/modernization partner, not body shop).
4. Appropriate for healthcare and/or e-commerce modernization audiences when industries are mentioned.
5. Does not contradict `forbidden-claims.md`.

### Should (fix when practical)

6. Connects technical work to business outcomes.
7. Uses concrete domain language where relevant.
8. Keeps CTAs calm and specific (schedule / contact / download).

### Pass / fail examples

| Pass                                                                               | Fail                                            |
| ---------------------------------------------------------------------------------- | ----------------------------------------------- |
| “Phased migration with validation gates and rollback plans.”                       | “Guaranteed 10x delivery with zero-risk AI.”    |
| “Specialized depth in healthcare insurance and RCM, plus eCommerce modernization.” | “We only serve healthcare.”                     |
| “AI assists; humans remain accountable.”                                           | “Our AI fully replaces your architecture team.” |

---

## Eval checklist (voice)

- [ ] Professional, clear, human, practical
- [ ] AI-first framing without hype
- [ ] Confident without exaggerated guarantees
- [ ] Helpful to healthcare and e-commerce leaders
- [ ] Aligns with `forbidden-claims.md`
- [ ] Brand naming: RoseJS / roseng.org used correctly

---

## Change control

When brand voice rules change:

1. Update this file and note **Last reviewed**.
2. Spot-check Home, About, Services, Contact against the new rubric.
3. Update brand-voice eval procedures (`TASK-090`) when active.
4. Keep hard-fail claims synchronized with `forbidden-claims.md`.
