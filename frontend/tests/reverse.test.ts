import { describe, it, expect } from 'vitest';
import { reverse } from '../lib/reverse';

describe('reverse', () => {
  it('reverses a string', () => {
    expect(reverse('abc')).toBe('cba');
  });
});
