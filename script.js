
// Show selected calculator tab

function showTab(tabName) {

document.querySelectorAll('.calculator').forEach(calc => calc.classList.add('hidden'));

document.getElementById(tabName).classList.remove('hidden');

}



// Append validated input to display

function appendToDisplay(value, type) {

let display = document.getElementById(`display-${type}`);

if (/^[0-9+\-*/().^√logsinco]*$/.test(value)) {

display.value += value;

}

}



// Clear the display

function clearDisplay(type) {

document.getElementById(`display-${type}`).value = "";

}



// Securely evaluate input

function calculate(type) {

let display = document.getElementById(`display-${type}`);

try {

let sanitizedInput = display.value.replace(/[^0-9+\-*/().^√logsinco]/g, '');

let result = Function(`'use strict'; return (${sanitizedInput})`)();

display.value = result;

} catch (error) {

alert("Invalid input!");

}

}



// Disable right-click

document.addEventListener("contextmenu", event => event.preventDefault());



