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

let firstNumber = [];

function addNumber () {
    let number = this.innerHTML;
    let array = [];
    array = number;
    firstNumber.push(...array);
    display();


   // console.log(firstNumber)
};



// THE NUMBER BEING DISPLAYED
function display () {
    let display = "";
    display = firstNumber.join('');
    // console.log(firstNumber) 
    document.getElementById('bottomDisplay').innerHTML = display;
}



// Setting up an event listener on OPERATOR buttons
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', operation, false)
}


function operation () {





    console.log('operation')
}