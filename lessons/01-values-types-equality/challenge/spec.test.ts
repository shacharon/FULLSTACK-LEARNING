// Lesson 01 spec (owned by the mentor; do not edit). Run: npm run check -- 01
import { describe, expect, it } from 'vitest';
import { firstDefined, sameValue, typeOfValue } from './stub.js';

describe('typeOfValue', () => {
  it('labels primitives like typeof', () => {
    expect(typeOfValue(undefined)).toBe('undefined');
    expect(typeOfValue(true)).toBe('boolean');
    expect(typeOfValue('hi')).toBe('string');
    expect(typeOfValue(10n)).toBe('bigint');
    expect(typeOfValue(Symbol('s'))).toBe('symbol');
    expect(typeOfValue(() => 1)).toBe('function');
  });
  it('labels null as null, not object', () => {
    expect(typeOfValue(null)).toBe('null');
  });
  it('separates NaN from other numbers', () => {
    expect(typeOfValue(NaN)).toBe('nan');
    expect(typeOfValue(42)).toBe('number');
    expect(typeOfValue(0)).toBe('number');
    expect(typeOfValue(-0)).toBe('number');
    expect(typeOfValue(Infinity)).toBe('number');
  });
  it('labels arrays and dates', () => {
    expect(typeOfValue([])).toBe('array');
    expect(typeOfValue([1, 2])).toBe('array');
    expect(typeOfValue(new Date())).toBe('date');
  });
  it('labels every other object as object', () => {
    expect(typeOfValue({})).toBe('object');
    expect(typeOfValue(new Map())).toBe('object');
    expect(typeOfValue(/x/)).toBe('object');
    expect(typeOfValue(new (class Foo {})())).toBe('object');
  });
});

describe('firstDefined', () => {
  it('returns undefined with no arguments or only missing values', () => {
    expect(firstDefined()).toBeUndefined();
    expect(firstDefined(undefined, null)).toBeUndefined();
  });
  it('returns the first present value', () => {
    expect(firstDefined(undefined, null, 'a', 'b')).toBe('a');
    expect(firstDefined(1, 2)).toBe(1);
  });
  it('keeps valid falsy values', () => {
    expect(firstDefined(undefined, 0, 5)).toBe(0);
    expect(firstDefined(null, '', 'x')).toBe('');
    expect(firstDefined(undefined, false, true)).toBe(false);
    expect(firstDefined(undefined, NaN, 1)).toBeNaN();
  });
  it('does not mutate or depend on argument identity', () => {
    const obj = { id: 1 };
    expect(firstDefined(null, obj)).toBe(obj);
  });
});

describe('sameValue', () => {
  it('treats NaN as equal to NaN', () => {
    expect(sameValue(NaN, NaN)).toBe(true);
  });
  it('distinguishes 0 from -0', () => {
    expect(sameValue(0, -0)).toBe(false);
    expect(sameValue(-0, 0)).toBe(false);
    expect(sameValue(0, 0)).toBe(true);
    expect(sameValue(-0, -0)).toBe(true);
  });
  it('follows strict equality for everything else', () => {
    expect(sameValue(1, 1)).toBe(true);
    expect(sameValue(1, 2)).toBe(false);
    expect(sameValue('a', 'a')).toBe(true);
    expect(sameValue(null, undefined)).toBe(false);
    expect(sameValue(1, '1')).toBe(false);
    expect(sameValue(true, 1)).toBe(false);
  });
  it('compares objects by identity', () => {
    const o = {};
    expect(sameValue(o, o)).toBe(true);
    expect(sameValue({}, {})).toBe(false);
    expect(sameValue([], [])).toBe(false);
  });
  it('does not confuse NaN with other values', () => {
    expect(sameValue(NaN, 0)).toBe(false);
    expect(sameValue(NaN, 'NaN')).toBe(false);
    expect(sameValue(NaN, undefined)).toBe(false);
  });
});
