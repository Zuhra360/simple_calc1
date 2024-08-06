var Number1 = '';
var Number2 = '';
var operation = null;

function appendNumber(number) {
    Number1 += number;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = Number1;
}

function setOperation(op) {
    if (Number1 === '') return;
    if (Number2 !== '') {
    calculateResult();
    }
    operation = op;
    Number2 = Number1;
    Number1 = '';
    }

function calculateResult() {
    let result;
    const no2 = parseInt(Number2);
    const no1 = parseInt(Number1);
    switch (operation) {
        case '+':
            result = no2 + no1;
            break;
        case '-':
            result = no2 - no1;
            break;
        case '*':
            result = no2 * no1;
            break;
        case '/':
            result = no2 / no1;
            break;
        default:
            return;
    }
    Number1 = result;
    operation = null;
    Number2 = '';
    updateDisplay();
}

function clearDisplay() {
    Number1 = '';
    Number2 = '';
    operation = null;
    updateDisplay();
}