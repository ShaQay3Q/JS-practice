const task3Element = document.getElementById("task-3");
const aName = "Azizam";

function simpleAlert() {
	alert("Hello World!");
}

// function getTheUserName() {
// 	const userName = prompt("Please enter your name:");
// 	if (userName) {
// 		alert(`task 2: show your name, ${userName}`);
// 	} else {
// 		alert(`Jerk! `);
// 	}
// }

window.onload = function () {
	// Prompt the user for their name
	const userName = prompt("Welcome! What's your name?");

	console.log("Entered name:", userName);

	// If the user enters a name (not null or empty string), show the name in an alert
	if (userName) {
		alert(`Hello, ${userName}!`);
	} else {
		alert("You didn't enter a name.");
	}
};


task3Element.addEventListener("click", simpleAlert);

function connectStrnings(str1, str2, str3) {
	return `${str1} ${str2} ${str3}`;
}

simpleAlert();
showNameAlert(aName);
alert(connectStrnings("Hello", "my darling,", aName));
