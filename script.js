function checkSecurity() {

const code = document.getElementById("security-code").value;

if (code === "1234") {

document.getElementById("security-screen").classList.add("hidden");

document.getElementById("calculator-app").classList.remove("hidden");

} else {

alert("Incorrect code");

}

}

function showTab(tabName) {

document.querySelectorAll('.calculator').forEach(tab => tab.classList.add('hidden'));

document.getElementById(tabName).classList.remove('hidden');

}
