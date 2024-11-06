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
// const getUsrNoInpt = () => userInput.value;

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

function add() {
	console.log(`add button: ${addBtn}`);
	const initialResult = currentResult;
	currentResult += getUsrNoInpt();
	writeToLog("ADD", initialResult, getUsrNoInpt(), currentResult);
	createAndWriteOutput("+", initialResult, getUsrNoInpt());
	clearAndFocus();
}

function mult() {
	const initialResult = currentResult;
	currentResult *= getUsrNoInpt();
	writeToLog("Multiply", initialResult, getUsrNoInpt(), currentResult);
	createAndWriteOutput("*", initialResult, getUsrNoInpt());
	clearAndFocus();
	// logEntries.push("-");
}

function divi() {
	const initialResult = currentResult;
	if (getUsrNoInpt() !== 0) {
		currentResult /= getUsrNoInpt();
	} else {
		currentResult = "inf";
		setTimeout(() => {
			currentResult = 0;
			outputResult(currentResult, "");
		}, 2500);
	}
	writeToLog("Divide", initialResult, getUsrNoInpt(), currentResult);

	createAndWriteOutput("/", initialResult, getUsrNoInpt());

	clearAndFocus();
}
addBtn.addEventListener("click", () => clickEvent("+"));
divideBtn.addEventListener("click", () => clickEvent("/"));
multiplyBtn.addEventListener("click", () => clickEvent("*"));
subtractBtn.addEventListener("click", () => clickEvent("-"));

function operantToOpName(opBtn) {
	let opName = "";
	if (opBtn === "+") {
		opName = "Addition";
	} else if (opBtn === "-") {
		opName = "Substraction";
	} else if (opBtn === "*") {
		opName = "Multipication";
	} else if (opBtn === "/") {
		opName = "Division";
	}
	return opName;
}

function doSimpleMath(opBtn) {
	if (opBtn === "+") {
		currentResult += getUsrNoInpt();
	} else if (opBtn === "-") {
		currentResult -= getUsrNoInpt();
	} else if (opBtn === "*") {
		currentResult *= getUsrNoInpt();
	} else {
		if (getUsrNoInpt() !== 0) {
			currentResult /= getUsrNoInpt();
		} else {
			currentResult = "inf";
			setTimeout(() => {
				currentResult = 0;
				outputResult(currentResult, "");
			}, 2500);
		}
	}
}

function clickEvent(opBtn) {
	const initialResult = currentResult;
	doSimpleMath(opBtn);
	writeToLog(
		operantToOpName(opBtn),
		initialResult,
		getUsrNoInpt(),
		currentResult
	);
	createAndWriteOutput(opBtn, initialResult, getUsrNoInpt());
	clearAndFocus();
}
