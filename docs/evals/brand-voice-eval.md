# Brand Voice Eval (TASK-090)

**Status:** Implemented (`EVAL-P1-003`, `TASK-090`).

**Last reviewed:** 2026-07-15

**Rubric source:** [`docs/rosejs-knowledge/brand-voice.md`](../rosejs-knowledge/brand-voice.md)  
**Hard fails:** [`docs/rosejs-knowledge/forbidden-claims.md`](../rosejs-knowledge/forbidden-claims.md)

## How to run

```text
npm run eval:voice
npm run eval:voice -- --text "AI-generated draft copy…"
npm run eval:voice -- --file path/to/draft.md
npm run test -- src/evals/evals.test.ts
```

Exit code `0` = pass; non-zero = fail.

## What is checked (automated)

| Layer               | Rules                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| Forbidden claims    | Healthcare-only, ROI/success guarantees, AI-replaces-humans, zero-risk, wrong brand `RoseNG`, etc. |
| Hype / exaggeration | world-class, cutting-edge, revolutionary, 10x, guaranteed faster                                   |
| Golden samples      | Pass/fail examples from `brand-voice.md` must score as documented                                  |

Human Must items that remain manual (skeptical-architect read-aloud, consulting-identity feel) are still in `brand-voice.md` § Rubric — run those when reviewing AI copy before merge.

## Pass / fail examples (automated golden set)

| Expect | Sample                                                                             |
| ------ | ---------------------------------------------------------------------------------- |
| Pass   | “Phased migration with validation gates and rollback plans.”                       |
| Pass   | “Specialized depth in healthcare insurance and RCM, plus eCommerce modernization.” |
| Pass   | “AI assists; humans remain accountable.”                                           |
| Fail   | “Guaranteed 10x delivery with zero-risk AI.”                                       |
| Fail   | “We only serve healthcare.”                                                        |
| Fail   | “Our AI fully replaces your architecture team.”                                    |

## Related

- Static website content eval: `npm run eval:content` (`TASK-089`)
- Checklist: [`static-website-eval.md`](static-website-eval.md)
- Testing Strategy §15
