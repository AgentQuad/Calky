let currentOperation = "";

let resultDisplayed = false;



// Append number to the display

function appendNumber(number) {

const resultDisplay = document.getElementById("result");


if (resultDisplayed) {

resultDisplay.textContent = number; // Start new calculation

resultDisplayed = false;

return;

}



if (resultDisplay.textContent === "0") {

resultDisplay.textContent = number; // Replace initial zero

return;

}



resultDisplay.textContent += number; // Append number

}



// Append operation to the display

function appendOperation(operation) {

const resultDisplay = document.getElementById("result");


if (resultDisplayed) resultDisplayed = false;



currentOperation += resultDisplay.textContent + operation; // Add to operation string

document.getElementById("current-operation").textContent = currentOperation;



resultDisplay.textContent = "0"; // Reset for next number

}



// Clear the display

function clearDisplay() {

currentOperation = "";


document.getElementById("current-operation").textContent = "";


const resultDisplay = document.getElementById("result");


resultDisplay.classList.add("fade-out");


setTimeout(() => {

resultDisplay.textContent = "0";

resultDisplay.classList.remove("fade-out");

}, 300);

}



// Delete last entry

function deleteLast() {

const resultDisplay = document.getElementById("result");


if (resultDisplay.textContent.length > 1) {

resultDisplay.textContent = resultDisplay.textContent.slice(0, -1); // Remove last character

} else {

resultDisplay.textContent = "0"; // Reset to zero if empty

}

}



// Toggle the sign

function toggleSign() {

const resultDisplay = document.getElementById("result");

let currentValue = parseFloat(resultDisplay.textContent);



if (!isNaN(currentValue)) {

resultDisplay.textContent = (currentValue * -1).toString(); // Toggle the sign

}

}



// Calculate the result

function calculate() {

const resultDisplay = document.getElementById("result");

try {

const finalExpression = currentOperation + resultDisplay.textContent;

const calculationResult = eval(finalExpression); // Evaluate the expression


resultDisplay.textContent = calculationResult;

resultDisplay.classList.add("calculate-transition"); // Add animation class


currentOperation = ""; // Reset operation string

document.getElementById("current-operation").textContent = "";

resultDisplayed = true; // Mark as calculated

} catch (error) {

alert("Invalid calculation");

clearDisplay();

} finally {

setTimeout(() => {

resultDisplay.classList.remove("calculate-transition"); // Remove animation class after transition

}, 300);

}

}



document.addEventListener("DOMContentLoaded", () => {

// Simulate loading time (you can remove this when your app is fully loaded)

setTimeout(() => {

document.getElementById("loading-screen").style.display = "none";

document.getElementById("calculator-app").classList.remove("hidden");

}, 1500); // Adjust time as needed

});



// Toggle between light and dark modes

document.getElementById("toggle-theme").addEventListener("click", () => {

const calculatorApp = document.getElementById("calculator-app");

calculatorApp.classList.toggle("light-mode");

calculatorApp.classList.toggle("dark-mode");


const themeButton = document.getElementById("toggle-theme");

themeButton.textContent = calculatorApp.classList.contains("dark-mode") ? "☀️" : "🌙";

});
