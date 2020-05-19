// ATTAINS ACCESS TO EACH BUTTON
let number = document.querySelectorAll('[data-number]');
let operator = document.querySelectorAll('[data-operator]');
let decimal = document.querySelector('[data-decimal]');
let calculate = document.querySelector('[data-calculate]');
let clearAll = document.querySelector('[data-clearAll]');
let clearEntry = document.querySelector('[data-clearEntry]');


let currentNumber = [];             //Used to store the current Number we are working with
let operatorLastPressed = "";       //Used to store the operator pressed
let operatorNumber = [];



// Setting up an event listener on NUMBER buttons
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', addNumber, false)
}

function addNumber () {
    let number = this.innerHTML;  
    let array = [];
    array = number;                //The last number pressed is placed into array
    currentNumber.push(...array);  // The currentNumber has each number pressed pushed to it
    operatorNumber.push(...array); 
    display();                     // The function display is called

  // console.log(currentNumber)
};


// THE NUMBER BEING DISPLAYED
function display () {
    let display = currentNumber.join('');               // display is our array turned into a string
    // console.log(display) 
    document.getElementById('bottomDisplay').innerHTML = display;  //the string is placed in our innerHTML 
};


let operatorUsed = false;

// Setting up an event listener on OPERATOR buttons
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', operation, false)
};


function operation () {
    let num = operatorNumber.join('');    //Our currentNumber is turned into a string
    firstNumber = Number(num);           //The string is converted to a number
    //  console.log(firstNumber)

    let num2 = currentNumber.join(''); 
    backupNum = Number(num2);
    //  console.log(backupNum)

    operatorLastPressed = this.innerHTML;   //The last operator pressed is stored as a string
    document.getElementById('topDisplay').innerHTML = `${firstNumber} ${this.innerHTML}`;


    if (!operatorUsed) {
        currentNumber = [];
        operatorUsed = true;
        decimalUsed = false;

        console.log('false: operator not yet used')
        console.log(firstNumber)
        console.log(backupNum)
        return
    } else {
        document.getElementById('bottomDisplay').innerHTML = firstNumber;
        // console.log('true: operator button already pushed')
        // console.log(firstNumber)
        // console.log(backupNum)
        return
    }  
};


let decimalUsed = false;

// Setting up an event listener on Decimal button
decimal.addEventListener('click', dot, false)

function dot () {
    if (!decimalUsed) {
        console.log('false')
        operatorNumber.push(decimal.innerHTML)
        currentNumber.push(decimal.innerHTML)
        display();
        decimalUsed = true;
        return 
    } else {
        console.log('true')
        return
    }
}


// Setting up an event listener on Equals button
calculate.addEventListener('click', calculator, false)

function calculator () {
    let result = 0;                              //Variable for storing result of calc
    let num2 = currentNumber.join('');           //Our currentNumber is turned into a string
    secondNumber = Number(num2)                  //The string is converted to a number

    if (operatorLastPressed === '÷') {
        result = firstNumber / secondNumber
    } else if (operatorLastPressed === 'x') {
        result = firstNumber * secondNumber
    } else if (operatorLastPressed === '+') {
        result = firstNumber + secondNumber
    } else if (operatorLastPressed === '-') {
        result = firstNumber - secondNumber
    }
    document.getElementById('bottomDisplay').innerHTML = `${result}`
    
    currentNumber = [];
    operatorNumber = [];
   // operatorUsed = false;
    operatorNumber.push(result);
    

    // console.log(firstNumber)
    // console.log(secondNumber)
    // console.log(backupNum)
    // console.log(result)
};


// Setting up an event listener on All Clear button
clearAll.addEventListener('click', resetCalc, false)

function resetCalc () {
    currentNumber = [];
    operatorNumber = [];
    operatorLastPressed = ""; 
    decimalUsed = false;
    operatorUsed = false;
    document.getElementById('topDisplay').innerHTML = ``;
    document.getElementById('bottomDisplay').innerHTML = ``; 

     console.log('clearAll')
}


// Setting up an event listener on All Clear button
clearEntry.addEventListener('click', clearLast, false)

function clearLast () {
    currentNumber.pop();
    operatorNumber.pop();
    display();

    // console.log(currentNumber)
    // console.log('clearLast')
};