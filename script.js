// ATTAINS ACCESS TO EACH BUTTON
let number = document.querySelectorAll('[data-number]');
//console.log(number)

let operator = document.querySelectorAll('[data-operator]');
//console.log(operator)

let decimal = document.querySelectorAll('[data-decimal]');
// console.log(decimal)

let calculate = document.querySelectorAll('[data-calculate]');
// console.log(calculate)

let clearAll = document.querySelectorAll('[data-clearAll]');
// console.log(clearAll)

let clearEntry = document.querySelectorAll('[data-clearEntry]');
// console.log(clearEntry)


// Setting up event listeners on each group of buttons
number.forEach((number) => {
    number.addEventListener('click', addNumber(), false)
})

function addNumber () {
    console.log()
};