// alert("this shit works!");
// variables defined at the global scope
let finalResult = 0;
const defaultValue = 0;
let currentResult = defaultValue;

function add (n1, n2){
    // const result = n1 + n2;
    // alert(`the result is ${result}`)
    return n1 + n2;
}

// add(1, 2);
// add(5, 5);
// add(6, 8);

const adittionalResault = add(5, 5);

function sub (n1, n2){
    return n1 - n2;
}

function multi (n1, n2){
    return n1 * n2;
}

function div (n1, n2){
    if (!n2){
        return n1 / n2;
    } else {
        return "inf"
    }
}

// let calculationDescription = `result of (` + defaultValue + ` + 10) * 3 / 2 - 1 is:`;

// template literal
let calculationDescription = `result of (${defaultValue} + 10)


* 3 / 2 - 1 is:`;
// if in css file i chnage the h2 attributes and add "white-space = pre" it will renfder
// the white space and show it in brower, else it will get ignored by brwoser.

let errMsg = `here is \\"`
+ `an error message!`;

currentResult = (currentResult + 10) * 3 / 2 - 1;

outputResult(adittionalResault, "5 + 5 = ");