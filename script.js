function add() { // Button function for testing purposes
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let answer = num1 + num2;
    alert(answer);
}

function subtract() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let answer = num1 - num2;
    alert(answer);
}

function multiply() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let answer = num1 * num2;
    alert(answer);
}

function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let answer = num1 / num2;
    if (num2 === 0){
        if (num1 === 0) {
            alert("Indeterminate");
        }
        else
            alert("Undefined");
    }
    else
        alert(answer);
    
}