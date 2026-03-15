const { performCalculation, performUnaryCalculation, modulo, power, squareRoot } = require('../calculator');

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
    test('invalid operator x should return error message', () => {
      expect(performCalculation(5, 'x', 2)).toBe('Error: Invalid operator. Use +, -, *, /, %, or ^');
    });
  });

  describe('Modulo', () => {
    test('5 % 2 should equal 1 (from image example)', () => {
      expect(performCalculation(5, '%', 2)).toBe(1);
    });

    test('10 % 3 should equal 1', () => {
      expect(performCalculation(10, '%', 3)).toBe(1);
    });

    test('20 % 5 should equal 0', () => {
      expect(performCalculation(20, '%', 5)).toBe(0);
    });

    test('negative modulo: -10 % 3 should equal -1', () => {
      expect(performCalculation(-10, '%', 3)).toBe(-1);
    });

    test('modulo by zero should return error message', () => {
      expect(performCalculation(5, '%', 0)).toBe('Error: Cannot divide by zero');
    });

    test('large modulo: 100 % 7 should equal 2', () => {
      expect(performCalculation(100, '%', 7)).toBe(2);
    });

    test('decimal modulo: 5.5 % 2 should be approximately 1.5', () => {
      expect(performCalculation(5.5, '%', 2)).toBeCloseTo(1.5, 5);
    });
  });

  describe('Exponentiation', () => {
    test('2 ^ 3 should equal 8 (from image example)', () => {
      expect(performCalculation(2, '^', 3)).toBe(8);
    });

    test('5 ^ 2 should equal 25', () => {
      expect(performCalculation(5, '^', 2)).toBe(25);
    });

    test('10 ^ 0 should equal 1', () => {
      expect(performCalculation(10, '^', 0)).toBe(1);
    });

    test('2 ^ -1 should equal 0.5', () => {
      expect(performCalculation(2, '^', -1)).toBeCloseTo(0.5, 5);
    });

    test('negative base: -2 ^ 3 should equal -8', () => {
      expect(performCalculation(-2, '^', 3)).toBe(-8);
    });

    test('decimals: 2.5 ^ 2 should equal 6.25', () => {
      expect(performCalculation(2.5, '^', 2)).toBeCloseTo(6.25, 5);
    });

    test('large exponent: 2 ^ 10 should equal 1024', () => {
      expect(performCalculation(2, '^', 10)).toBe(1024);
    });

    test('fractional exponent: 4 ^ 0.5 should equal 2 (square root equivalent)', () => {
      expect(performCalculation(4, '^', 0.5)).toBeCloseTo(2, 5);
    });

    test('zero to positive power: 0 ^ 5 should equal 0', () => {
      expect(performCalculation(0, '^', 5)).toBe(0);
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

  describe('Square Root', () => {
    test('sqrt 16 should equal 4 (from image example)', () => {
      expect(performUnaryCalculation('sqrt', 16)).toBe(4);
    });

    test('sqrt 25 should equal 5', () => {
      expect(performUnaryCalculation('sqrt', 25)).toBe(5);
    });

    test('sqrt 2 should be approximately 1.414', () => {
      expect(performUnaryCalculation('sqrt', 2)).toBeCloseTo(1.414, 3);
    });

    test('sqrt 0 should equal 0', () => {
      expect(performUnaryCalculation('sqrt', 0)).toBe(0);
    });

    test('sqrt 1 should equal 1', () => {
      expect(performUnaryCalculation('sqrt', 1)).toBe(1);
    });

    test('sqrt of negative number should return error message', () => {
      expect(performUnaryCalculation('sqrt', -4)).toBe('Error: Cannot calculate square root of a negative number');
    });

    test('sqrt of negative number -16 should return error message', () => {
      expect(performUnaryCalculation('sqrt', -16)).toBe('Error: Cannot calculate square root of a negative number');
    });

    test('sqrt of decimal: sqrt 6.25 should equal 2.5', () => {
      expect(performUnaryCalculation('sqrt', 6.25)).toBeCloseTo(2.5, 5);
    });

    test('sqrt 100 should equal 10', () => {
      expect(performUnaryCalculation('sqrt', 100)).toBe(10);
    });

    test('sqrt of very small number: sqrt 0.0001 should equal 0.01', () => {
      expect(performUnaryCalculation('sqrt', 0.0001)).toBeCloseTo(0.01, 5);
    });

    test('sqrt of large number: sqrt 10000 should equal 100', () => {
      expect(performUnaryCalculation('sqrt', 10000)).toBe(100);
    });
  });

  describe('Direct Function Tests', () => {
    test('modulo function: modulo(10, 3) should equal 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('modulo function by zero should throw error', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot divide by zero');
    });

    test('power function: power(2, 3) should equal 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('squareRoot function: squareRoot(16) should equal 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('squareRoot function with negative should throw error', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });
  });
});
