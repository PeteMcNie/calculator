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

let currentNumber = [];            //Used to store the current Number we are working with
let operatorLastPressed = "";       //Used to store the operator pressed

console.log(operatorLastPressed)


function addNumber () {
    let number = this.innerHTML;  
    let array = [];
    array = number;                //The last number pressed is placed into array
    currentNumber.push(...array);  // The currentNumber has each number pressed pushed to it
    display();                     // The function display is called


 //  console.log(currentNumber)
};



// THE NUMBER BEING DISPLAYED
function display () {
    let display = currentNumber.join('');               // display is our array turned into a string
    // console.log(display) 
    document.getElementById('bottomDisplay').innerHTML = display;  //the string is placed in our innerHTML
    
}












// Setting up an event listener on OPERATOR buttons
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', operation, false)
}

function operation () {
    let num = currentNumber.join('');    //Our currentNumber is turned into a string
    // console.log(num)
    firstNumber = Number(num)           //The string is converted to a number
    // console.log(firstNumber)

    document.getElementById('topDisplay').innerHTML = `${firstNumber} ${this.innerHTML}`;

    operatorLastPressed = this.innerHTML;   //The last operator pressed is stored as a string
    console.log(operatorLastPressed)
    
    
    currentNumber = [];
    return operatorLastPressed
   // document.getElementById('bottomDisplay').innerHTML = `${this.innerHTML}`;
}



// Setting up an event listener on Equals button
calculate.addEventListener('click', calculator, false)

function calculator () {
    console.log(operatorLastPressed)

    console.log(1 + 1)
}