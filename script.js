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
            add(a, b);
            break;

        case "-":
            subtract(a, b);
            break;

        case "*":
            multiply(a, b);
            break;

        case "/":
            divide(a, b);
            break;

        default: 
            alert("Invalid operator")
    }
}