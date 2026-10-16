// Lesson 01 — Values, types, equality and truthiness (Tier A: skeleton)
//
// Scenario: a signup form receives messy input. Classify values precisely and compare them safely.
//
// Your job: replace every `throw new Error('not implemented')` with a real implementation.
// Run the checks with:  npm run check -- 01
// Ask for HINT 1 / HINT 2 / SOLUTION whenever you want. They are never offered.

export type ValueType =
  | 'undefined'
  | 'null'
  | 'boolean'
  | 'number'
  | 'nan'
  | 'bigint'
  | 'string'
  | 'symbol'
  | 'function'
  | 'array'
  | 'date'
  | 'object';

/**
 * Exercise 1 — a precise type label.
 * Return one of the ValueType labels:
 *  - 'null' for null (not 'object')
 *  - 'nan' for NaN, 'number' for every other number (including Infinity and -0)
 *  - 'array' for arrays, 'date' for Date instances
 *  - 'object' for any other object (plain objects, Map, class instances, ...)
 *  - otherwise the same label `typeof` gives
 */
export function typeOfValue(value: unknown): ValueType {
  // TODO: handle the cases typeof gets wrong first, then fall back to typeof.
  throw new Error('not implemented');
}

/**
 * Exercise 2 — first value that is present.
 * Return the first argument that is neither null nor undefined, or undefined if there is none.
 * Valid falsy values (0, '', false, NaN) count as present.
 */
export function firstDefined<T>(...values: readonly (T | null | undefined)[]): T | undefined {
  // TODO: walk the values in order; decide what "present" means.
  throw new Error('not implemented');
}

/**
 * Exercise 3 — SameValue equality, written by hand.
 * Return true when a and b are the same value, where:
 *  - NaN equals NaN
 *  - 0 and -0 are different
 *  - everything else follows ===
 * Do NOT use Object.is.
 */
export function sameValue(a: unknown, b: unknown): boolean {
  // TODO: start from ===, then fix the two special cases.
  throw new Error('not implemented');
}
