// alert("this shit works!");

const { userInfo, type } = require("os");

// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;

function add() {
	currentResult = currentResult + Number(userInput.value);
	outputResult(currentResult, "");
	// userInfo.value = "";
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", () => {
	currentResult = currentResult - Number(userInput.value);
	outputResult(currentResult, "");
	// userInfo.value = "";
});

function div() {
	type = typeof userInput.value;
	n = Number(userInput.value);
	if (!typeof type === "number" && !n) {
		if (!n) {
			currentResult = currentResult / n;
		} else {
			currentResult = "inf";
		}
	} else {
		currentResult;
	}
	return currentResult;
}
