# PROGRESS — FULLSTACK-LEARNING

> Written by the mentor only. The CURRENT block is the only part that is overwritten; every log below it is append-only.
> Add your own comments in "Your notes" at the bottom; the mentor never edits that section.
> Pacing is mastery-based; dates below are records only.

## CURRENT
- lesson: 01
- title: Values, types, equality and truthiness (prepared, not started)
- tier: A
- step: 0 (not started)
- pending task: Say "start lesson 01" to begin (syllabus approved 2026-10-16). Lesson 01 files are prepared but have not been presented or taught.
- files: CURRICULUM.md · lessons/01-values-types-equality/
- last validation: `npm run check -- 01` -> tests FAIL (0/14 pass, all "not implemented" as expected), tsc PASS (2026-10-16, baseline)
- hints used: 0
- awaiting: learner
- open interview question: none

Step legend: 0 not started · 1 theory presented · 2 challenge presented · 3 learner implementing · 4 hint/solution requested · 5 in review · 6 interview question asked · 7 awaiting approval to advance.

## Lessons (study order)
| # | Lesson | Tier | Status | Hints used | Specs | tsc | Interview | Date |
|---|---|---|---|---|---|---|---|---|
| 01 | Values, types, equality and truthiness | A | prepared (not started) | - | - | - | - | - |
| 02 | Scope, closures and hoisting | A | locked | - | - | - | - | - |
| 03 | Objects, prototypes, `this` and classes | B | locked | - | - | - | - | - |
| 04 | Async JavaScript: event loop, promises, async/await | B | locked | - | - | - | - | - |
| R1 | Review R1: JavaScript | C | locked | - | - | - | - | - |
| 05 | Types, narrowing and unions | A | locked | - | - | - | - | - |
| 06 | Generics and utility types | B | locked | - | - | - | - | - |
| 07 | Modelling with discriminated unions, readonly and error types | B | locked | - | - | - | - | - |
| R2 | Review R2: TypeScript | C | locked | - | - | - | - | - |
| 08 | Observables vs promises, subscribing and unsubscribing | A | locked | - | - | - | - | - |
| 09 | Operators: map, filter, debounce, switchMap vs mergeMap | B | locked | - | - | - | - | - |
| 10 | Errors, retry, Subjects and sharing | B | locked | - | - | - | - | - |
| R3 | Review R3: RxJS | C | locked | - | - | - | - | - |
| 11 | signal, computed and effect | A | locked | - | - | - | - | - |
| 12 | Signals vs RxJS: when each, and interop | B | locked | - | - | - | - | - |
| R4 | Review R4: Signals | C | locked | - | - | - | - | - |
| 13 | Components, templates, inputs and outputs | A | locked | - | - | - | - | - |
| 14 | Services, dependency injection and routing | B | locked | - | - | - | - | - |
| 15 | Forms and HTTP | B | locked | - | - | - | - | - |
| 16 | Change detection and OnPush | B | locked | - | - | - | - | - |
| R5 | Review R5: Angular | C | locked | - | - | - | - | - |
| 17 | Modules, the event loop and streams | A | locked | - | - | - | - | - |
| 18 | HTTP servers, middleware and errors | B | locked | - | - | - | - | - |
| 19 | Configuration, logging and async patterns | B | locked | - | - | - | - | - |
| R6 | Review R6: Node.js | C | locked | - | - | - | - | - |
| 20 | Modules, controllers, providers and DI | A | locked | - | - | - | - | - |
| 21 | DTO validation, pipes and guards | B | locked | - | - | - | - | - |
| 22 | Exceptions, interceptors and configuration | B | locked | - | - | - | - | - |
| R7 | Review R7: NestJS | C | locked | - | - | - | - | - |
| 23 | Unit tests, test doubles and arrange-act-assert | A | locked | - | - | - | - | - |
| 24 | Testing async code and RxJS | B | locked | - | - | - | - | - |
| 25 | Testing strategy for Angular and Nest units | B | locked | - | - | - | - | - |
| R8 | Review R8: Testing | C | locked | - | - | - | - | - |
| 26 | Measuring first: profiling and complexity in practice | B | locked | - | - | - | - | - |
| 27 | Front-end performance: bundles, lazy loading, rendering | B | locked | - | - | - | - | - |
| 28 | Back-end performance: caching, N+1, streaming | C | locked | - | - | - | - | - |
| R9 | Review R9: Performance | C | locked | - | - | - | - | - |
| 29 | Reading errors, stack traces and reproducing bugs | B | locked | - | - | - | - | - |
| 30 | Debugging async code and memory leaks | C | locked | - | - | - | - | - |
| 31 | Debugging in production: logs, tracing, metrics | C | locked | - | - | - | - | - |
| R10 | Review R10: Debugging | C | locked | - | - | - | - | - |
| 32 | Naming, small functions and code smells | B | locked | - | - | - | - | - |
| 33 | Refactoring under tests | B | locked | - | - | - | - | - |
| 34 | Boundaries: layers, dependencies and modules | C | locked | - | - | - | - | - |
| R11 | Review R11: Clean Code | C | locked | - | - | - | - | - |
| 35 | Capstone: review one full-stack feature end to end | C | locked | - | - | - | - | - |

Status values: `prepared (not started) | not started | locked | in progress | passed | passed-with-help`.

## Completed tasks log (append-only)
| Date | Lesson | Task | Result |
|---|---|---|---|
| 2026-10-16 | setup | Project created: MENTOR.md, triggers, CURRICULUM.md (draft), PROGRESS/QUESTIONS/MISTAKES, TypeScript + Vitest config | done; see Test results log |
| 2026-10-16 | 01 | Lesson 01 prepared ahead at the owner's request (LESSON.md, challenge/stub.ts, spec.test.ts, answer.md); not taught | done |

## Test results log (append-only)
| Date | Lesson | Command | Result |
|---|---|---|---|
| 2026-10-16 | 00 (setup smoke) | `npm run check -- 00` | tests 2 pass / 0 fail, tsc pass |
| 2026-10-16 | 01 | spec validated against a throwaway reference outside the repo (deleted) | 14/14 pass |
| 2026-10-16 | 01 | `npm test` (baseline, stubs not implemented) | 14 fail (expected) / 2 pass (smoke) |
| 2026-10-16 | setup | `npm run typecheck` | exit 0, clean |
| 2026-10-16 | 01 | `npm run check -- 01` (baseline) | tests FAIL (0/14), tsc PASS |

## Interview log (append-only)
| Date | Lesson | Question | Answer summary | Rating (weak/ok/strong) | Gaps |
|---|---|---|---|---|---|

## Knowledge gaps
| id | Topic | Origin lesson | Re-ask after lesson | Status (open/closed) | Related mistake |
|---|---|---|---|---|---|

## Protocol review log (append-only)
Required before lesson 02 (MENTOR.md section 7).
| Date | After lesson | Findings | Changes approved | Status |
|---|---|---|---|---|
| - | 01 | pending | - | **not done** |

## Your notes
(Free space for the learner. The mentor never edits this section.)
