function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let a, b;
let operator = "";

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);

        case "-":
            return subtract(a, b);

        case "*":
            return multiply(a, b);

        case "/":
            if (b === 0) {
                alert("Did you learn nothing at school?");
                equation = [];
                display.textContent = "";
                return;
            }
            return divide(a, b);

        default: 
            return;
    }
}

function calculate() {
    let numbers = equation.map(item => Number(item));
    const op = numbers.findIndex(n => Number.isNaN(n));

    if (op === -1 || op + 1 === equation.length) {
        alert("Invalid statement");
        equation = [];
        display.textContent = "";
        return "";
    } 
    
    const firstNumber = Number(equation.slice(0, op).join(""));
    const secondNumber = Number(equation.slice(op + 1).join(""));
    
    return +(operate(firstNumber, secondNumber, equation[op])).toFixed(7);
}

const display = document.querySelector(".display");
let equation = [];

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        equation.push(button.innerHTML);
        display.textContent = equation.join("");
    })
})

operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (equation.every(n => !Number.isNaN(Number(n)))) {
            equation.push(button.innerHTML);
            display.textContent = equation.join("");
        }
        else {
            const result = calculate();
            equation = [result, button.innerHTML];
            display.textContent = equation.join("");
        }
    })
})

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
    equation.pop();
    display.textContent = equation.join("");
})

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    const result = calculate();
    display.textContent = result;
})

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    equation = [];
})