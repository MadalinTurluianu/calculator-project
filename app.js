const digit_0 = document.querySelector(".digit-0");
const digit_1 = document.querySelector(".digit-1");
const digit_2 = document.querySelector(".digit-2");
const digit_3 = document.querySelector(".digit-3");
const digit_4 = document.querySelector(".digit-4");
const digit_5 = document.querySelector(".digit-5");
const digit_6 = document.querySelector(".digit-6");
const digit_7 = document.querySelector(".digit-7");
const digit_8 = document.querySelector(".digit-8");
const digit_9 = document.querySelector(".digit-9");
const digit_add = document.querySelector(".digit-add");
const digit_subtract = document.querySelector(".digit-subtract");
const digit_multiply = document.querySelector(".digit-multiply");
const digit_divide = document.querySelector(".digit-divide");
const digit_equal = document.querySelector(".digit-equal");
const digit_back = document.querySelector(".digit-back");
const digit_cancel = document.querySelector(".digit-cancel");
const digit_dot = document.querySelector(".digit-dot");

// --------------------------------------------- OPORATIONS FUNCTIONS

function add(total,...numbers){
    let result = total;
    for (n of numbers) {
        result += n;
    }

    return result;
}

function subtract(total,...numbers){
    let result = total;
    for (n of numbers) {
        result -= n;
    }

    return result;
}

function multiply(total,...numbers){
    let result = total;
    for (n of numbers) {
        result *= n;
    }

    return result;
}

function divide(total,...numbers){
    let result = total;
    for (n of numbers) {
        result /= n;
    }

    return result;
}

function operate(operator, total, userInput = []){
    let result = total;

    if (operator === "+") {
        result = add(total, ...userInput);
    }else if (operator === "-") {
        result = subtract(total, ...userInput);
    }else if (operator === "*") {
        result = multiply(total, ...userInput);
    }else {
        result = divide(total, ...userInput);
    }
}