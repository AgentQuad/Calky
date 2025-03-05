
function showTab(tabName) {

document.querySelectorAll('.calculator').forEach(calc => calc.classList.add('hidden'));

document.getElementById(tabName).classList.remove('hidden');

}



function appendToDisplay(value, type) {

document.getElementById(`display-${type}`).value += value;

}



function clearDisplay(type) {

document.getElementById(`display-${type}`).value = "";

}



function calculate(type) {

try {

let result = eval(document.getElementById(`display-${type}`).value);

document.getElementById(`display-${type}`).value = result;

} catch {

alert("Invalid calculation");

}

}



// Graphing function

function plotGraph() {

let equation = document.getElementById("equation").value;

let ctx = document.getElementById("graphCanvas").getContext("2d");

let xValues = [], yValues = [];


for (let x = -10; x <= 10; x += 0.5) {

xValues.push(x);

try {

yValues.push(eval(equation.replace(/x/g, `(${x})`)));

} catch {

yValues.push(0);

}

}



new Chart(ctx, {

type: "line",

data: {

labels: xValues,

datasets: [{

label: "Graph",

data: yValues,

borderColor: "blue",

fill: false

}]

}

});

}



// Security Code Feature

function checkSecurity() {

let code = document.getElementById("security-code").value;

if (code === "1234") { // Change this to your own security code

document.getElementById("security-screen").classList.add("hidden");

document.getElementById("calculator-app").classList.remove("hidden");

} else {

alert("Incorrect code!");

}

}

