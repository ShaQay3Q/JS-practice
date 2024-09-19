// alert("this shit works!");
// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;

function add(n1, n2) {
	// const result = n1 + n2;
	// alert(`the result is ${result}`)
	currentResult = currentResult + userInput.value;
	// currentResultOutput.textContent = currentResult;
	outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", () => {
	currentResult = currentResult - userInput.value;
	outputResult(currentResult, "");
});

function sub(n1, n2) {
	return n1 - n2;
}

function multi(n1, n2) {
	return n1 * n2;
}

function div(n1, n2) {
	if (!n2) {
		return n1 / n2;
	} else {
		return "inf";
	}
}
