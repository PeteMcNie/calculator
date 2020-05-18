// ATTAINS ACCESS TO EACH BUTTON
let number = document.querySelectorAll('[data-number]');
let operator = document.querySelectorAll('[data-operator]');
let decimal = document.querySelector('[data-decimal]');
let calculate = document.querySelector('[data-calculate]');
let clearAll = document.querySelector('[data-clearAll]');
let clearEntry = document.querySelector('[data-clearEntry]');



// Setting up an event listener on NUMBER buttons
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', addNumber, false)
}

let currentNumber = [];
let operatorLastPressed = "";

function addNumber () {
    let number = this.innerHTML;
    let array = [];
    array = number;
    currentNumber.push(...array);
    display();


 //  console.log(currentNumber)
};



// THE NUMBER BEING DISPLAYED
function display () {
    let display = "";
    display = currentNumber.join('');
    // console.log(display) 
    document.getElementById('bottomDisplay').innerHTML = display;
    
}





// Setting up an event listener on OPERATOR buttons
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', operation, false)
}

function operation () {
    let num = currentNumber.join('');
    // console.log(num)
    firstNumber = Number(num)
    // console.log(firstNumber)

    document.getElementById('topDisplay').innerHTML = `${firstNumber} ${this.innerHTML}`;

    operatorLastPressed = this.innerHTML;
    // console.log(operatorLastPressed)

    
    currentNumber = [];
   // document.getElementById('bottomDisplay').innerHTML = `${this.innerHTML}`;
}



// Setting up an event listener on Equals button
calculate.addEventListener('click', calculator, false)

function calculator () {


    console.log(1 + 1)
}