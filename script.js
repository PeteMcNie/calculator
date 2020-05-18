// ATTAINS ACCESS TO EACH BUTTON
let number = document.querySelectorAll('[data-number]');
// console.log(number)
let operator = document.querySelectorAll('[data-operator]');
// console.log(operator)
let decimal = document.querySelector('[data-decimal]');
// console.log(decimal)
let calculate = document.querySelector('[data-calculate]');
// console.log(calculate)
let clearAll = document.querySelector('[data-clearAll]');
// console.log(clearAll)
let clearEntry = document.querySelector('[data-clearEntry]');
// console.log(clearEntry)


// Setting up event listeners on each group of buttons
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', addNumber, false)
}

let array2 = [];

function addNumber () {
    let num = this.innerHTML;
    let array = [];
    array = num;
    array2.push(...array)

  



    console.log(array2)
    


};











// function display (value) {
//     let display = document.getElementById('#bottomDisplay').innerHTML;
//     display = value;
// }

//this.innerHTML
// console.log(firstNumber)
// console.log(addNumber())