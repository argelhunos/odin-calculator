let argument1 = "";
let argument2 = "";
let operator = "";
const display = document.querySelector('#display');

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case "CLEAR":
                display.textContent = "";
                argument1 = "";
                argument2 = "";
                operator = "";
                break;
            case "+":
                checkForExistingOperand();
                operator = "+";
                display.textContent += button.textContent;
                break;
            case "-":
                checkForExistingOperand();
                operator = "-";
                display.textContent += button.textContent;
                break;
            case "X":
                checkForExistingOperand();
                operator = "X";
                display.textContent += button.textContent;
                break;
            case "÷":
                checkForExistingOperand();
                operator = "/";
                display.textContent += button.textContent;
                break;
            case "=":
                // check if second argument doesn't exist
                if (argument2 === "") {
                    display.textContent = argument1;
                    operator = "";
                } else {
                    display.textContent = operate(operator, argument1, argument2);
                    argument1 = display.textContent;
                    argument2 = "";
                    operator = "";
                }
                break;
            default:
                if (operator === "") {
                    argument1 += button.textContent;
                } else {
                    argument2 += button.textContent;
                }
                display.textContent += button.textContent;
        }
    })
});

function checkForExistingOperand() {
    if (operator != "") {
        display.textContent = operate(operator, argument1, argument2);
        argument1 = display.textContent;
        argument2 = "";
    }
}

function add(a, b) {
    return parseFloat(a)+parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a)-parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a)*parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a)/parseFloat(b);
}

function operate(op, num1, num2) {
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "X":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            break;
    }
}