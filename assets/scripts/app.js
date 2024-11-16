// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

// Clear and Focuse on the user entery field
const clearAndFocus = () => {
	userInput.value = ""; // Clear the input field
	userInput.focus();
};

clearAndFocus();

// pasre the user input to number
const getUsrNoInpt = () => Number(userInput.value);

// Generate and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
	oprationIdentifier,
	previousResult,
	operationNumber,
	newResult
) {
	let logEntry = {
		// key - values, actually the key : property
		op: oprationIdentifier,
		prevResult: previousResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
	console.log(logEntry.op);
}

function operantToOpName(opBtn) {
	switch (opBtn) {
		case "+":
			return "Addition";
		case "-":
			return "Substraction";
		case "*":
			return "Multipication";
		case "/":
			return "Division";
	}
}

function doSimpleMath(opBtn) {
	const userInput = getUsrNoInpt();
	switch (opBtn) {
		case "+":
			currentResult += userInput;
			break;
		case "-":
			currentResult -= userInput;
			break;
		case "*":
			currentResult *= userInput;
			break;
		case "/":
			if (userInput) {
				currentResult /= userInput;
			}
			currentResult = "inf";
			setTimeout(() => {
				currentResult = 0;
				outputResult(currentResult, "");
			}, 2500);
	}
}

function clickEvent(opBtn) {
	const userInput = getUsrNoInpt();
	const initialResult = currentResult;
	doSimpleMath(opBtn);
	writeToLog(operantToOpName(opBtn), initialResult, userInput, currentResult);
	createAndWriteOutput(opBtn, initialResult, userInput);
	clearAndFocus();
}

addBtn.addEventListener("click", () => clickEvent("+"));
divideBtn.addEventListener("click", () => clickEvent("/"));
multiplyBtn.addEventListener("click", () => clickEvent("*"));
subtractBtn.addEventListener("click", () => clickEvent("-"));
