const { performCalculation } = require('../calculator');

describe('Calculator - Basic Operations', () => {
  describe('Addition', () => {
    test('2 + 3 should equal 5', () => {
      expect(performCalculation(2, '+', 3)).toBe(5);
    });

    test('10 + 20 should equal 30', () => {
      expect(performCalculation(10, '+', 20)).toBe(30);
    });

    test('negative numbers: -5 + 3 should equal -2', () => {
      expect(performCalculation(-5, '+', 3)).toBe(-2);
    });

    test('negative plus negative: -5 + -3 should equal -8', () => {
      expect(performCalculation(-5, '+', -3)).toBe(-8);
    });

    test('decimals: 2.5 + 3.5 should equal 6', () => {
      expect(performCalculation(2.5, '+', 3.5)).toBe(6);
    });

    test('zero: 0 + 5 should equal 5', () => {
      expect(performCalculation(0, '+', 5)).toBe(5);
    });
  });

  describe('Subtraction', () => {
    test('10 - 4 should equal 6', () => {
      expect(performCalculation(10, '-', 4)).toBe(6);
    });

    test('5 - 10 should equal -5', () => {
      expect(performCalculation(5, '-', 10)).toBe(-5);
    });

    test('negative numbers: -10 - 5 should equal -15', () => {
      expect(performCalculation(-10, '-', 5)).toBe(-15);
    });

    test('negative minus negative: -5 - (-3) should equal -2', () => {
      expect(performCalculation(-5, '-', -3)).toBe(-2);
    });

    test('decimals: 10.5 - 3.2 should equal 7.3', () => {
      expect(performCalculation(10.5, '-', 3.2)).toBeCloseTo(7.3, 5);
    });

    test('zero: 0 - 5 should equal -5', () => {
      expect(performCalculation(0, '-', 5)).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('45 * 2 should equal 90', () => {
      expect(performCalculation(45, '*', 2)).toBe(90);
    });

    test('5 * 6 should equal 30', () => {
      expect(performCalculation(5, '*', 6)).toBe(30);
    });

    test('negative numbers: -4 * 3 should equal -12', () => {
      expect(performCalculation(-4, '*', 3)).toBe(-12);
    });

    test('negative times negative: -5 * -4 should equal 20', () => {
      expect(performCalculation(-5, '*', -4)).toBe(20);
    });

    test('decimals: 2.5 * 4 should equal 10', () => {
      expect(performCalculation(2.5, '*', 4)).toBe(10);
    });

    test('zero: 0 * 5 should equal 0', () => {
      expect(performCalculation(0, '*', 5)).toBe(0);
    });

    test('multiplication by 1: 100 * 1 should equal 100', () => {
      expect(performCalculation(100, '*', 1)).toBe(100);
    });
  });

  describe('Division', () => {
    test('20 / 5 should equal 4', () => {
      expect(performCalculation(20, '/', 5)).toBe(4);
    });

    test('15 / 3 should equal 5', () => {
      expect(performCalculation(15, '/', 3)).toBe(5);
    });

    test('negative numbers: -12 / 3 should equal -4', () => {
      expect(performCalculation(-12, '/', 3)).toBe(-4);
    });

    test('negative divided by negative: -20 / -4 should equal 5', () => {
      expect(performCalculation(-20, '/', -4)).toBe(5);
    });

    test('decimals: 10 / 4 should equal 2.5', () => {
      expect(performCalculation(10, '/', 4)).toBe(2.5);
    });

    test('result with decimals: 7 / 2 should equal 3.5', () => {
      expect(performCalculation(7, '/', 2)).toBe(3.5);
    });

    test('division by 1: 42 / 1 should equal 42', () => {
      expect(performCalculation(42, '/', 1)).toBe(42);
    });
  });

  describe('Edge Cases - Division by Zero', () => {
    test('division by zero: 5 / 0 should return error message', () => {
      expect(performCalculation(5, '/', 0)).toBe('Error: Cannot divide by zero');
    });

    test('negative division by zero: -10 / 0 should return error message', () => {
      expect(performCalculation(-10, '/', 0)).toBe('Error: Cannot divide by zero');
    });

    test('zero divided by zero: 0 / 0 should return error message', () => {
      expect(performCalculation(0, '/', 0)).toBe('Error: Cannot divide by zero');
    });
  });

  describe('Edge Cases - Invalid Operators', () => {
    test('invalid operator % should return error message', () => {
      expect(performCalculation(5, '%', 2)).toBe('Error: Invalid operator. Use +, -, *, or /');
    });

    test('invalid operator ^ should return error message', () => {
      expect(performCalculation(5, '^', 2)).toBe('Error: Invalid operator. Use +, -, *, or /');
    });

    test('invalid operator with lowercase should return error message', () => {
      expect(performCalculation(5, 'x', 2)).toBe('Error: Invalid operator. Use +, -, *, or /');
    });
  });

  describe('Large Numbers', () => {
    test('addition of large numbers: 1000000 + 2000000 should equal 3000000', () => {
      expect(performCalculation(1000000, '+', 2000000)).toBe(3000000);
    });

    test('multiplication of large numbers: 100000 * 50 should equal 5000000', () => {
      expect(performCalculation(100000, '*', 50)).toBe(5000000);
    });

    test('division of large numbers: 1000000 / 1000 should equal 1000', () => {
      expect(performCalculation(1000000, '/', 1000)).toBe(1000);
    });
  });

  describe('Precision Tests', () => {
    test('floating point addition: 0.1 + 0.2 should be approximately 0.3', () => {
      expect(performCalculation(0.1, '+', 0.2)).toBeCloseTo(0.3, 5);
    });

    test('floating point subtraction: 0.3 - 0.1 should be approximately 0.2', () => {
      expect(performCalculation(0.3, '-', 0.1)).toBeCloseTo(0.2, 5);
    });
  });
});
