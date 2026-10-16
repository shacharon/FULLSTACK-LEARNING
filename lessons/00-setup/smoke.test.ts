// Setup check, not a lesson. Confirms Vitest and strict TypeScript run in this repo.
// Safe to delete once lesson 01 has passed.
import { describe, expect, it } from 'vitest';

function double(values: readonly number[]): number[] {
  return values.map((v) => v * 2);
}

describe('setup smoke test', () => {
  it('doubles every value', () => {
    expect(double([1, 2, 3])).toEqual([2, 4, 6]);
  });

  it('returns an empty array for empty input', () => {
    expect(double([])).toEqual([]);
  });
});
