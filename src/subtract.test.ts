import { describe, it, expect, vi } from 'vitest';

/**
 * Auto-generated test file
 * Framework: vitest
 * Tests: 1
 */

// Tests for src/subtract.ts
describe('src/subtract.ts', () => {
  // 测试 subtract 函数在各种正常情况下的正确性
  // Scenario: happy-path
  // Priority: medium
  // Confidence: 95%
import { describe, it, expect } from 'vitest';
import { subtract } from './subtract';

describe('subtract', () => {
  it('should return correct difference when subtracting two positive numbers', () => {
    const result = subtract(5, 3);
    expect(result).toBe(2);
  });

  it('should return negative result when second number is larger', () => {
    const result = subtract(3, 5);
    expect(result).toBe(-2);
  });

  it('should handle zero values correctly', () => {
    const result = subtract(5, 0);
    expect(result).toBe(5);
  });

  it('should handle negative numbers correctly', () => {
    const result = subtract(-5, -3);
    expect(result).toBe(-2);
  });
});

});

