// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;

// Clear and Focuse on the user entery field
const clearAndFocus = () => {
	userInput.value = ""; // Clear the input field
	userInput.focus();
};

clearAndFocus();

// Pasre the user input to number
function getUsrInptNo() {
	return Number(userInput.value);
}

// pasre the user input to number
const getUsrNoInpt = () => Number(userInput.value);

// Generate and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
	const initialResult = currentResult;
	currentResult += getUsrNoInpt();
	createAndWriteOutput("+", initialResult, getUsrNoInpt());
	clearAndFocus();
}

function mult() {
	const initialResult = currentResult;
	currentResult *= getUsrNoInpt();
	createAndWriteOutput("*", initialResult, getUsrNoInpt());
	clearAndFocus();
}

function divi() {
	const initialResult = currentResult;
	console.log(`userInputValue = ${getUsrNoInpt()}`);

	if (getUsrNoInpt() !== 0) {
		currentResult /= getUsrNoInpt();
	} else {
		currentResult = "inf";
	}

	createAndWriteOutput("/", initialResult, getUsrNoInpt());

	currentResult = 0;
	setTimeout(() => {
		outputResult(currentResult, "");
	}, 3000);

	clearAndFocus();
}
addBtn.addEventListener("click", add);
divideBtn.addEventListener("click", divi);
multiplyBtn.addEventListener("click", mult);
subtractBtn.addEventListener("click", () => {
	const initialResult = currentResult;
	currentResult -= getUsrNoInpt();
	createAndWriteOutput("-", initialResult, getUsrNoInpt());
	clearAndFocus();
});
