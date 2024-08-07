const task3Element = document.getElementById('task-3');
const aName = "Azizam"

function simpleAlert(){
    alert("Hello World!");
}

function showNameAlert(name){
    alert(`Hello ${name}`);
}

task3Element.addEventListener("click", simpleAlert);

function connectStrnings(str1, str2, str3){
    return (`${str1} ${str2} ${str3}`);
}

simpleAlert();
showNameAlert(aName);
alert(connectStrnings("Hello", "my darling,", aName));