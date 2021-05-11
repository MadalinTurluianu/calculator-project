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
    }else if (operator === "/"){
        result = divide(total, ...userInput);
    }
    return result;
}

// --------------------------------------------- ADD NUMBERS ON THE DISPLAY

const numbersBtns = Array.from(document.querySelectorAll(".nr"));
const screen = document.querySelector(".screen h2");
let nrBeforeOp = []
let display = [];


for (btn of numbersBtns) {
    btn.addEventListener("click",function(){
        display.push(this.textContent);
        screen.textContent = display.join("");
    })
}

// --------------------------------------------- SET OPERATOR

const operatorsBtns = Array.from(document.querySelectorAll(".op"));
let operator;

for (btn of operatorsBtns) {
    btn.addEventListener("click", function(){
        nrBeforeOp = [...display];
        operator = this.textContent;
        display = [];
    });
}

// --------------------------------------------- DO THE OPERATION

const equalBtn = document.querySelector(".digit-equal");

equalBtn.addEventListener("click", function(){
    display = [operate(operator, parseInt(nrBeforeOp.join("")), [parseInt(display.join(""))])];
    screen.textContent = display.join("");
})

// --------------------------------------------- CANCEL FUNCTION

const cancelBtn = document.querySelector(".digit-cancel");

cancelBtn.addEventListener("click", function(){
    display = [];
    screen.textContent = "";
})

// --------------------------------------------- BACK FUNCTION

const backBtn = document.querySelector(".digit-back");

backBtn.addEventListener("click", function(){
    display.pop()
    screen.textContent = display.join("");
})