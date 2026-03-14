#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (sqrt)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function displayWelcome() {
  console.log('\n╔════════════════════════════════════╗');
  console.log('║     Node.js CLI Calculator         ║');
  console.log('║  Supported: +, -, *, /, %, ^      ║');
  console.log('║  Unary: sqrt                       ║');
  console.log('╚════════════════════════════════════╝\n');
}

function performCalculation(num1, operator, num2) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return 'Error: Cannot divide by zero';
      }
      result = num1 / num2;
      break;
    case '%':
      try {
        result = modulo(num1, num2);
      } catch (error) {
        return `Error: ${error.message}`;
      }
      break;
    case '^':
      result = power(num1, num2);
      break;
    default:
      return 'Error: Invalid operator. Use +, -, *, /, %, or ^';
  }

  return result;
}

function performUnaryCalculation(operator, num) {
  let result;

  switch (operator) {
    case 'sqrt':
      try {
        result = squareRoot(num);
      } catch (error) {
        return `Error: ${error.message}`;
      }
      break;
    default:
      return 'Error: Invalid unary operator. Use sqrt';
  }

  return result;
}

function startCalculator() {
  displayWelcome();

  const askQuestion = () => {
    rl.question('Enter calculation (e.g., 5 + 3) or "exit" to quit: ', (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log('\nThank you for using the calculator. Goodbye!\n');
        rl.close();
        return;
      }

      const parts = input.trim().split(/\s+/);

      let result;
      if (parts.length === 2 && parts[0] === 'sqrt') {
        const num = parseFloat(parts[1]);
        if (isNaN(num)) {
          console.log('Error: Input must be a number.\n');
          askQuestion();
          return;
        }
        result = performUnaryCalculation('sqrt', num);
        console.log(`\nResult: sqrt(${num}) = ${result}\n`);
      } else if (parts.length === 3) {
        const num1 = parseFloat(parts[0]);
        const operator = parts[1];
        const num2 = parseFloat(parts[2]);

        if (isNaN(num1) || isNaN(num2)) {
          console.log('Error: First and third inputs must be numbers.\n');
          askQuestion();
          return;
        }

        result = performCalculation(num1, operator, num2);
        console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}\n`);
      } else {
        console.log('Invalid input. Use format: <number> <operator> <number> or sqrt <number>\n');
        askQuestion();
        return;
      }

      askQuestion();
    });
  };

  askQuestion();
}

module.exports = { performCalculation, performUnaryCalculation, modulo, power, squareRoot };

if (require.main === module) {
  startCalculator();
}
