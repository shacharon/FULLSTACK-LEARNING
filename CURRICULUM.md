# CURRICULUM — FULLSTACK-LEARNING

**Status: DRAFT — PENDING APPROVAL.** Created 2026-10-16. Lesson 01 is prepared (files only) and is **not started**. Do not start any lesson until the learner approves this file.
**Rules for this file:** it is the contract. It changes only with the learner's explicit approval, and every change is logged in the Change log. It contains no lesson content, hints or solutions; lesson material is produced by the mentor (see MENTOR.md).

## Scaffolding tiers
| Tier | `challenge/` contains | You design |
|---|---|---|
| **A — Skeleton** | `stub.ts` with signatures, types, `// TODO:` comments; a spec with explicit expected values | Function bodies and the answers in `answer.md` |
| **B — Interfaces + requirements** | `REQUIREMENTS.md`, exported types, a spec that calls them. No bodies | Structure, helpers, edge cases |
| **C — Scenario + acceptance criteria** | `SCENARIO.md`, acceptance criteria, a spec through a minimal entry-point name | Everything else, plus some of your own tests in `my-tests/` |

Every lesson: theory + hands-on TypeScript + Vitest tests + short written answers + one interview question. Pacing is mastery-based: no deadlines (MENTOR.md section 7).

## Study order
Modules in order **M1 → M11**, then lesson 35. Within a module, lessons in order, then the module review (R1–R11). Ids are stable keys.

## Syllabus (11 modules, 35 lessons, 11 reviews)
Columns: prerequisites · scenario · challenge · interview focus.

### M1 — JavaScript
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 01 | Values, types, equality and truthiness | none | Validating messy form input | Classify values precisely; first defined value; SameValue equality | typeof pitfalls; == vs ===; ?? vs || | A |
| 02 | Scope, closures and hoisting | 01 | A rate limiter factory with private state | Counter and once/memoize factories using closures | What a closure captures; stale closures | A |
| 03 | Objects, prototypes, `this` and classes | 02 | A small event emitter | Implement on/off/emit; fix lost `this` | Prototype chain; `this` rules; class vs closure | B |
| 04 | Async JavaScript: event loop, promises, async/await | 03 | Fetching profiles with retry and timeout | Sequential vs parallel, error handling, timeout wrapper | Microtasks vs macrotasks; Promise.all vs allSettled | B |
| **R1** | **Review:** mixed exercise on JavaScript (tier C) + five rapid-fire questions | 01–04 | | | | C |

### M2 — TypeScript
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 05 | Types, narrowing and unions | 01 | Parsing API payloads safely | Type guards and exhaustive narrowing | `unknown` vs `any`; narrowing | A |
| 06 | Generics and utility types | 05 | A typed cache and a result type | Generic functions and mapped utilities | When generics help; constraints | B |
| 07 | Modelling with discriminated unions, readonly and error types | 05, 06 | Payment states that cannot be invalid | Model a state machine as types | Make illegal states unrepresentable | B |
| **R2** | **Review:** mixed exercise on TypeScript (tier C) + five rapid-fire questions | 05–07 | | | | C |

### M3 — RxJS
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 08 | Observables vs promises, subscribing and unsubscribing | 04 | Live search box | Build an observable and clean up subscriptions | Cold vs hot; leaks | A |
| 09 | Operators: map, filter, debounce, switchMap vs mergeMap | 08 | Typeahead with cancellation | Compose operators for typeahead | switchMap vs mergeMap vs concatMap | B |
| 10 | Errors, retry, Subjects and sharing | 09 | Polling with backoff and a shared stream | Retry with backoff; share a stream | Hot vs cold; Subject vs BehaviorSubject | B |
| **R3** | **Review:** mixed exercise on RxJS (tier C) + five rapid-fire questions | 08–10 | | | | C |

### M4 — Signals
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 11 | signal, computed and effect | 05 | A shopping cart total | Model derived state with computed | Why signals; effect pitfalls | A |
| 12 | Signals vs RxJS: when each, and interop | 10, 11 | Search results with debounce | Bridge a stream to a signal and back | Signals vs observables trade-offs | B |
| **R4** | **Review:** mixed exercise on Signals (tier C) + five rapid-fire questions | 11–12 | | | | C |

### M5 — Angular
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 13 | Components, templates, inputs and outputs | 11 | A reusable rating widget | Component contract and tests | Component communication patterns | A |
| 14 | Services, dependency injection and routing | 13 | A product list with detail route | Service with injected dependency; route params | DI scopes; why DI helps tests | B |
| 15 | Forms and HTTP | 14, 10 | A signup form with async validation | Typed form and an HTTP service with error handling | Reactive vs template-driven forms | B |
| 16 | Change detection and OnPush | 13, 11 | A slow list | Make a component OnPush-safe | How change detection runs; immutability | B |
| **R5** | **Review:** mixed exercise on Angular (tier C) + five rapid-fire questions | 13–16 | | | | C |

### M6 — Node.js
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 17 | Modules, the event loop and streams | 04 | A log processor for a big file | Stream a file line by line with backpressure | Blocking the loop; streams vs buffers | A |
| 18 | HTTP servers, middleware and errors | 17 | A small API with auth middleware | Router, middleware chain, error handler | Middleware order; error propagation | B |
| 19 | Configuration, logging and async patterns | 18 | Service that must start safely | Validated config; structured logging; graceful shutdown | 12-factor config; graceful shutdown | B |
| **R6** | **Review:** mixed exercise on Node.js (tier C) + five rapid-fire questions | 17–19 | | | | C |

### M7 — NestJS
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 20 | Modules, controllers, providers and DI | 18, 14 | A tasks API | Provider wiring and a controller | Nest module system; DI tokens | A |
| 21 | DTO validation, pipes and guards | 20 | Role-protected endpoints | Validation pipe and a guard | Pipe vs guard vs interceptor | B |
| 22 | Exceptions, interceptors and configuration | 21, 19 | Consistent errors and request logging | Exception filter and logging interceptor | Request lifecycle order | B |
| **R7** | **Review:** mixed exercise on NestJS (tier C) + five rapid-fire questions | 20–22 | | | | C |

### M8 — Testing
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 23 | Unit tests, test doubles and arrange-act-assert | 02 | Testing a pricing module | Stubs, spies and fakes; deterministic time | Mock vs stub vs fake; what not to mock | A |
| 24 | Testing async code and RxJS | 23, 10 | A retrying client | Fake timers; marble-style stream tests | Flaky tests; testing time | B |
| 25 | Testing strategy for Angular and Nest units | 23, 14, 20 | Deciding what to test where | Unit vs integration split for one feature | Test pyramid; cost of e2e | B |
| **R8** | **Review:** mixed exercise on Testing (tier C) + five rapid-fire questions | 23–25 | | | | C |

### M9 — Performance
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 26 | Measuring first: profiling and complexity in practice | 04 | A slow report | Measure, find the hotspot, fix and re-measure | Premature optimisation; Big O in real code | B |
| 27 | Front-end performance: bundles, lazy loading, rendering | 16 | A heavy dashboard | Lazy-load and reduce re-renders (reasoned) | Core Web Vitals; bundle splitting | B |
| 28 | Back-end performance: caching, N+1, streaming | 19, 22 | An endpoint that times out | Remove an N+1; add a cache with invalidation | Cache invalidation; N+1 | C |
| **R9** | **Review:** mixed exercise on Performance (tier C) + five rapid-fire questions | 26–28 | | | | C |

### M10 — Debugging
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 29 | Reading errors, stack traces and reproducing bugs | 04 | A failing build and a flaky bug | Reproduce, bisect, isolate | Systematic debugging process | B |
| 30 | Debugging async code and memory leaks | 29, 08 | A leaking subscription | Find and fix a leak | Common leak sources | C |
| 31 | Debugging in production: logs, tracing, metrics | 29, 19 | An intermittent 500 | Add the logging that would have found it | Observability basics | C |
| **R10** | **Review:** mixed exercise on Debugging (tier C) + five rapid-fire questions | 29–31 | | | | C |

### M11 — Clean Code
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 32 | Naming, small functions and code smells | 03 | A tangled order module | Identify smells and rename | What makes code readable | B |
| 33 | Refactoring under tests | 32, 23 | Legacy function with characterization tests | Refactor safely in small steps | Refactoring without tests | B |
| 34 | Boundaries: layers, dependencies and modules | 33, 20, 14 | Splitting a feature across layers | Define interfaces between layers | Dependency direction; coupling | C |
| **R11** | **Review:** mixed exercise on Clean Code (tier C) + five rapid-fire questions | 32–34 | | | | C |

### Capstone
| # | Topic | Prereq | Scenario | Challenge | Interview focus | Tier |
|---|---|---|---|---|---|---|
| 35 | Capstone: review one full-stack feature end to end | gates M1–M11 | Add a small feature across Angular and Node/Nest (design and review) | Design, test strategy and review under questions | Trade-offs across the stack | C |

## Gates
A module gate needs every lesson `passed` or `passed-with-help` and its review exercise green, plus the learner's explicit approval. Skips or reorders need approval and a change-log entry.

## Dependency schedule (nothing installed before it is needed; ask first)
| From lesson | Dependency | Note |
|---|---|---|
| 01 | `typescript`, `vitest`, `tsx`, `@types/node` | already installed |
| 08 | `rxjs` | RxJS lessons |
| 11 | `@angular/core` (signals) or a framework-free equivalent | decide at lesson 11 |
| 13 | Angular testing setup | decide at lesson 13; exercises stay headless unit tests |
| 18 | optional HTTP library | decide at lesson 18 |
| 20 | `@nestjs/*` | decide at lesson 20 |

## Coverage check (requested topics → lessons)
| Topic | Lessons |
|---|---|
| JavaScript | 01–04, R1 |
| TypeScript | 05–07, R2 |
| RxJS | 08–10, R3 |
| Signals | 11–12, R4 |
| Angular | 13–16, R5 |
| Node.js | 17–19, R6 |
| NestJS | 20–22, R7 |
| Testing | 23–25, R8 (and a test in every lesson) |
| Performance | 26–28, R9 |
| Debugging | 29–31, R10 |
| Clean Code | 32–34, R11 |
| Capstone | 35 |

Out of scope: databases and ORMs, DevOps and deployment, mobile, GraphQL, authentication providers, visual design.

## Change log
| Date | Change | Approved by |
|---|---|---|
| 2026-10-16 | File created as a draft; Lesson 01 prepared ahead (files only) at the owner's request | not yet approved |
