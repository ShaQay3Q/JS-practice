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
	let logEnrty = {
		op: "+",
		initValue: initialResult,
		userInpurt: getUsrNoInpt(),
		curValue: currentResult,
	};
	logEntries.push(logEnrty);
	console.log(logEntries);
	createAndWriteOutput("+", initialResult, getUsrNoInpt());
	clearAndFocus();
}

function mult() {
	const initialResult = currentResult;
	currentResult *= getUsrNoInpt();
	let logEnrty = {
		op: "*",
		initValue: initialResult,
		userInpurt: getUsrNoInpt(),
		curValue: currentResult,
	};
	logEntries.push(logEnrty);
	console.log(logEntries);
	createAndWriteOutput("*", initialResult, getUsrNoInpt());
	clearAndFocus();
	logEntries.push("-");
}

function divi() {
	const initialResult = currentResult;
	if (getUsrNoInpt() !== 0) {
		currentResult /= getUsrNoInpt();
		console.log(logEntries);
	} else {
		currentResult = "inf";
		setTimeout(() => {
			currentResult = 0;
			outputResult(currentResult, "");
		}, 3000);
	}
	let logEnrty = {
		op: "/",
		initValue: initialResult,
		userInpurt: getUsrNoInpt(),
		curValue: currentResult,
	};
	logEntries.push(logEnrty);
	console.log(logEntries);

	createAndWriteOutput("/", initialResult, getUsrNoInpt());

	clearAndFocus();
}
addBtn.addEventListener("click", add);
divideBtn.addEventListener("click", divi);
multiplyBtn.addEventListener("click", mult);
subtractBtn.addEventListener("click", () => {
	const initialResult = currentResult;
	currentResult -= getUsrNoInpt();
	let logEnrty = {
		op: "-",
		initValue: initialResult,
		userInpurt: getUsrNoInpt(),
		curValue: currentResult,
	};
	logEntries.push(logEnrty);
	console.log(logEntries);
	createAndWriteOutput("-", initialResult, getUsrNoInpt());
	clearAndFocus();
});
