var input1 = document.getElementById("inputField");
var input2 = document.getElementById("inputField2");
var result = document.getElementById("result");

document.getElementById("toplama").addEventListener("click", function() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        result.value = num1 + num2;
    }
});

document.getElementById("cixma").addEventListener("click", function() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        result.value = num1 - num2;
    }
});

document.getElementById("vurma").addEventListener("click", function() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        result.value = num1 * num2;
    }
});

document.getElementById("bolme").addEventListener("click", function() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        result.value = num1 / num2;
    }
    else if (num2 === 0) {
        result.value = "Cannot divide by zero";
    }
});