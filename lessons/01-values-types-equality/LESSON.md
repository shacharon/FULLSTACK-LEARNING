# Lesson 01 — Values, types, equality and truthiness (Tier A)

**Scenario:** a signup form receives messy input from the browser and from other services. Before any logic runs, you must classify values precisely and compare them without surprises.
**Type:** pure functions, no I/O.

## Terminology you must be able to define
primitive vs object · `typeof` · `null` vs `undefined` · `NaN` · truthy / falsy · `==` (loose) vs `===` (strict) · `Object.is` / SameValue · type coercion · nullish coalescing `??` vs logical OR `||`.

## What / why / when
- JavaScript has 7 primitives (`string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`) and objects. `typeof` is a quick check, but it has historical quirks.
- **Falsy values** are `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`. Everything else is truthy, including `"0"`, `[]` and `{}`.
- **Why it matters:** many bugs come from treating "empty" and "missing" as the same, or from `NaN !== NaN`.
- **When to use what:** use `===` by default; use `??` when only `null`/`undefined` should trigger a default; use `||` only when every falsy value should.

## Trade-offs
| Tool | Strength | Pitfall |
|---|---|---|
| `typeof x` | Fast, built in | `typeof null === 'object'`; arrays are `'object'` |
| `x == y` | Short | Coercion surprises |
| `x === y` | Predictable | `NaN === NaN` is false; `0 === -0` is true |
| `Object.is(a, b)` | Handles `NaN` and `-0` | Less familiar |
| `a \|\| b` | Short default | Replaces valid `0`, `""`, `false` |
| `a ?? b` | Replaces only `null`/`undefined` | Not for "empty string means missing" |

## Your challenge
Edit `challenge/stub.ts` and implement three functions (follow the TODO comments):
1. `typeOfValue` — a more precise type label than `typeof`
2. `firstDefined` — the first value that is not `null` or `undefined`
3. `sameValue` — equality where `NaN` equals `NaN` and `0` differs from `-0`, **without using `Object.is`**

Then fill in `challenge/answer.md` (three short written answers).

## Acceptance criteria (encoded in `challenge/spec.test.ts`)
1. Each function returns the documented result for normal, boundary and tricky inputs.
2. `firstDefined` keeps valid falsy values (`0`, `""`, `false`).
3. No `any`; `npm run check -- 01` reports tests PASS and tsc PASS.
4. `challenge/answer.md` is complete; the mentor reviews it in chat (tests cannot grade prose).

## Help
Ask for `HINT 1`, `HINT 2` or `SOLUTION` any time. They are never offered. The review and the interview question come after your tests pass.
