#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayWelcome() {
  console.log('\n╔════════════════════════════════════╗');
  console.log('║     Node.js CLI Calculator         ║');
  console.log('║  Supported: +, -, *, /            ║');
  console.log('╚════════════════════════════════════╝\n');
}

function performCalculation(num1, operator, num2) {
  let result;

  switch (operator) {
    case '+':
      // Addition
      result = num1 + num2;
      break;
    case '-':
      // Subtraction
      result = num1 - num2;
      break;
    case '*':
      // Multiplication
      result = num1 * num2;
      break;
    case '/':
      // Division
      if (num2 === 0) {
        return 'Error: Cannot divide by zero';
      }
      result = num1 / num2;
      break;
    default:
      return 'Error: Invalid operator. Use +, -, *, or /';
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

      if (parts.length !== 3) {
        console.log('Invalid input. Please use format: <number> <operator> <number>\n');
        askQuestion();
        return;
      }

      const num1 = parseFloat(parts[0]);
      const operator = parts[1];
      const num2 = parseFloat(parts[2]);

      if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: First and third inputs must be numbers.\n');
        askQuestion();
        return;
      }

      const result = performCalculation(num1, operator, num2);
      console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}\n`);

      askQuestion();
    });
  };

  askQuestion();
}

module.exports = { performCalculation };

if (require.main === module) {
  startCalculator();
}
