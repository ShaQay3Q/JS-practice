// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;
userInput.value = "";
userInput.focus();

function add() {
	const entrdNo = Number(userInput.value);
	const calcDescription = `${currentResult} + ${entrdNo}`;
	currentResult = currentResult + entrdNo;
	console.log(
		`type of Number(userInput.value) is: ${typeof Number(userInput.value)}
		and it's value is: ${entrdNo}`
	);

	outputResult(currentResult, calcDescription);
	userInput.value = ""; // Clear the input field
	userInput.focus();
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", () => {
	const entrdNo = Number(userInput.value);
	const calcDescription = `${currentResult} - ${entrdNo}`;

	currentResult = currentResult - entrdNo;
	outputResult(currentResult, calcDescription);
	userInput.value = "";
	userInput.focus();
});

function mult() {
	const entrdNo = Number(userInput.value);
	const calcDescription = `${currentResult} * ${entrdNo}`;

	currentResult = currentResult * entrdNo;
	outputResult(currentResult, calcDescription);
	userInput.value = "";
	userInput.focus();
}

function divi() {
	const entrdNo = Number(userInput.value);
	const calcDescription = `${currentResult} / ${userInput.value}`;
	console.log(`userInputValue = ${userInput.value}`);

	// let n = Number(userInput.value);

	if (entrdNo !== 0) {
		currentResult = currentResult / entrdNo;
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
