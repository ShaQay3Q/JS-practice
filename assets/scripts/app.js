// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;
// clear the user entery field and keep the focus on
clearAndFocus();

// pasre the user input to number
function getUsrInptNo() {
	return Number(userInput.value);
}

// pasre the user input to number
const getUsrNoInpt = () => Number(userInput.value);

// write the currentResult, the operator and inputed value as well as outputing the result
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

// clear the user entery field and keep the focus on
const clearAndFocus = () => {
	userInput.value = ""; // Clear the input field
	userInput.focus();
};

function add() {
	const initialResult = currentResult;
	currentResult = currentResult + getUsrNoInpt();
	createAndWriteOutput("+", initialResult, getUsrNoInpt());
	clearAndFocus();
}

function mult() {
	const initialResult = currentResult;

	currentResult = currentResult * getUsrNoInpt();
	createAndWriteOutput("/", initialResult, getUsrNoInpt());
	clearAndFocus();
}

function divi() {
	const initialResult = currentResult;
	console.log(`userInputValue = ${getUsrNoInpt()}`);

	if (getUsrNoInpt() !== 0) {
		currentResult = currentResult / getUsrNoInpt();
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

	currentResult = currentResult - getUsrNoInpt();
	createAndWriteOutput("/", initialResult, getUsrNoInpt());
	userInput.value = "";
	userInput.focus();
});
