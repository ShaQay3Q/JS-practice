// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;
userInput.value = "";
userInput.focus();

function getUsrInptNo() {
	return Number(userInput.value);
}

const getUsrNoInpt = () => Number(userInput.value);

function add() {
	const calcDescription = `${currentResult} + ${getUsrNoInpt()}`;
	currentResult = currentResult + getUsrNoInpt();
	console.log(
		`type of Number(userInput.value) is: ${typeof Number(userInput.value)}
		and it's value is: ${getUsrNoInpt()}`
	);

	outputResult(currentResult, calcDescription);
	userInput.value = ""; // Clear the input field
	userInput.focus();
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", () => {
	// const entrdNo = Number(userInput.value);
	const calcDescription = `${currentResult} - ${getUsrNoInpt()}`;

	currentResult = currentResult - getUsrNoInpt();
	outputResult(currentResult, calcDescription);
	userInput.value = "";
	userInput.focus();
});

function mult() {
	const calcDescription = `${currentResult} * ${getUsrNoInpt()}`;

	currentResult = currentResult * getUsrNoInpt();
	outputResult(currentResult, calcDescription);
	userInput.value = "";
	userInput.focus();
}

function divi() {
	const calcDescription = `${currentResult} / ${getUsrNoInpt()}`;
	console.log(`userInputValue = ${getUsrNoInpt()}`);

	if (getUsrNoInpt() !== 0) {
		currentResult = currentResult / getUsrNoInpt();
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
