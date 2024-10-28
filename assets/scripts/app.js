// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;
userInput.value = "";
userInput.focus();

function add() {
	const calcDescription = `${currentResult} + ${userInput.value}`;
	currentResult = currentResult + Number(userInput.value);
	outputResult(currentResult, calcDescription);
	userInput.value = ""; // Clear the input field
	userInput.focus();
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", () => {
	const calcDescription = `${currentResult} - ${userInput.value}`;
	currentResult = currentResult - Number(userInput.value);
	outputResult(currentResult, calcDescription);
	userInput.value = "";
	userInput.focus();
});

function mult() {
	const calcDescription = `${currentResult} * ${userInput.value}`;
	currentResult = currentResult * Number(userInput.value);
	outputResult(currentResult, calcDescription);
	userInput.value = "";
	userInput.focus();
}

function divi() {
	const calcDescription = `${currentResult} / ${userInput.value}`;
	console.log(`userInputValue = ${userInput.value}`);

	let n = Number(userInput.value);

	if (n !== 0) {
		currentResult = currentResult / n;
	} else {
		currentResult = "inf";
	}
	outputResult(currentResult, calcDescription);
	currentResult = 0;
	setTimeout(() => {
		outputResult(currentResult, "");
	}, 3000);

	userInput.value = "";
	userInput.focus();
}

divideBtn.addEventListener("click", divi);
multiplyBtn.addEventListener("click", mult);
