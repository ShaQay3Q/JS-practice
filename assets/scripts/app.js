// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;

function add() {
	currentResult = currentResult + Number(userInput.value);
	outputResult(currentResult, "");
	userInput.value = ""; // Clear the input field after addition
	userInput.focus();
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", () => {
	currentResult = currentResult - Number(userInput.value);
	outputResult(currentResult, "");
	userInput.value = ""; // Clear the input field
	userInput.focus();
});

function mult() {
	currentResult = currentResult * Number(userInput.value);
	outputResult(currentResult, "");
	userInput.value = "";
	userInput.focus();
}

function divi() {
	console.log(`userInputValue = ${userInput.value}`);

	let n = Number(userInput.value);

	if (n !== 0) {
		currentResult = currentResult / n;
	} else {
		currentResult = "inf";
	}
	outputResult(currentResult, "");
	currentResult = 0;
	setTimeout(() => {
		outputResult(currentResult, "");
	}, 3000);

	userInput.value = "";
	userInput.focus();
}

divideBtn.addEventListener("click", divi);
multiplyBtn.addEventListener("click", mult);
