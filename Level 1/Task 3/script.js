const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operator = '';
let firstOperand = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value >= '0' && value <= '9') {
      currentInput += value;
      display.value = currentInput;
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput === '') return;
      operator = value;
      firstOperand = parseFloat(currentInput);
      currentInput = '';
    } else if (value === '=') {
      if (operator && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        let result = 0;
        if (operator === '+') result = firstOperand + secondOperand;
        else if (operator === '-') result = firstOperand - secondOperand;
        else if (operator === '*') result = firstOperand * secondOperand;
        else if (operator === '/') result = firstOperand / secondOperand;

        display.value = result;
        currentInput = result.toString();
        operator = '';
        firstOperand = null;
      }
    } else if (value === 'C') {
      currentInput = '';
      operator = '';
      firstOperand = null;
      display.value = '';
    }
  });
});
