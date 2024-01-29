// Create elements
const fullNameElement = document.createElement("h1");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const button = document.createElement("button");

input1.type = "text";
input2.type = "text";
input1.id = "input1"; 
input2.id = "input2";

fullNameElement.innerText = "Awe Babalola Babajide";
fullNameElement.style.textAlign = "center";
fullNameElement.style.color = "#A9A9A9"; 

button.innerText = "Calculate Sum";
button.style.backgroundColor = "#2ecc71"; 
button.style.color = "white"; 
button.style.padding = "10px"; 
button.style.marginTop = "10px"; 

document.body.appendChild(fullNameElement);
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);

let errorDiv;
let resultDiv;

button.addEventListener("click", function () {
    calculateSum(validateInput("input1", input1.value), validateInput("input2", input2.value));
});

function showError(input, errorMessage) {

    if (errorDiv) {
        document.body.removeChild(errorDiv);
    }

    errorDiv = document.createElement("div");
    errorDiv.style.color = "#e74c3c";
    errorDiv.innerText = `Error: ${errorMessage}`;
    document.body.appendChild(errorDiv);

    if (input) {
        input.style.border = "2px solid #e74c3c";
    }
}

const validateInput = (inputId, input) => {
    const num = parseFloat(input.trim()); 
    const inputElement = document.getElementById(inputId);

    if (errorDiv) {
        document.body.removeChild(errorDiv);
        errorDiv = null;
    }

    if (inputElement) {
        inputElement.style.border = "";
    }

    if (isNaN(num) || /\D/.test(input)) {
        showError(inputElement, "Input is not a valid number");
        return NaN;
    }

    return num;
};

button.addEventListener("click", function () {

    if (resultDiv && resultDiv.parentNode) {
        resultDiv.parentNode.removeChild(resultDiv);
        resultDiv = null; 
    }

    calculateSum(validateInput("input1", input1.value), validateInput("input2", input2.value));
});

function calculateSum(num1, num2) {

    if (resultDiv) {
        document.body.removeChild(resultDiv);
    }

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;

        resultDiv = document.createElement("div");
        resultDiv.id = "resultDiv";
        resultDiv.innerText = `Sum: ${sum}`;
        resultDiv.style.backgroundColor = "green"; 
        resultDiv.style.textDecoration = "bold"; 
        resultDiv.style.padding = "10px"; 
        resultDiv.style.marginTop = "10px"; 
        document.body.appendChild(resultDiv);
    }
}

document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#ecf0f1"; 
document.body.style.padding = "20px"; 
document.body.style.color = "#2c3e50";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";

fullNameElement.style.marginBottom = "20px";

button.style.backgroundColor = "#3498db"; 
button.style.color = "white"; 
button.style.padding = "15px"; 
button.style.marginTop = "20px"; 
button.style.cursor = "pointer";

input1.style.padding = "10px"; 
input2.style.padding = "10px"; 
input1.style.marginBottom = "10px"; 
input2.style.marginBottom = "10px"; 
input1.style.fontSize = "16px"; 
input2.style.fontSize = "16px"; 
input1.style.width = "200px"; 
input2.style.width = "200px"; 
input1.style.border = "1px solid #3498db"; 
input2.style.border = "1px solid #3498db";


