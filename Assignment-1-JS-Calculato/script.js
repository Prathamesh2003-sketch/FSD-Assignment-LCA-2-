// Current selected operation
let operation = "+";

// Get operation buttons
const operationButtons = document.querySelectorAll(".operator");

// Handle operation selection
operationButtons.forEach(button => {

    button.onclick = () => {

        operationButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        operation = button.dataset.op;
    };

});


// Calculator
function calculate() {

    const firstInput = document.getElementById("num1");
    const secondInput = document.getElementById("num2");

    const expression = document.getElementById("expression");
    const resultBox = document.getElementById("result");


    // Validate input
    if (firstInput.value === "" || secondInput.value === "") {

        expression.textContent = "Please enter both numbers";
        resultBox.textContent = "Enter numbers";

        return;
    }


    const first = parseFloat(firstInput.value);
    const second = parseFloat(secondInput.value);

    let answer;
    let symbol = operation;


    // Perform calculation
    if (operation === "+") {

        answer = first + second;

    } 
    else if (operation === "-") {

        answer = first - second;

    } 
    else if (operation === "*") {

        answer = first * second;
        symbol = "×";

    } 
    else if (operation === "/") {

        symbol = "÷";

        if (second === 0) {

            expression.textContent = "Invalid calculation";
            resultBox.textContent = "Cannot divide by zero";

            return;
        }

        answer = first / second;

    } 
    else {

        expression.textContent = "Unknown operation";
        resultBox.textContent = "Error";

        return;
    }


    // Display calculation
    expression.textContent =
        `${first} ${symbol} ${second}`;

    resultBox.textContent = answer;


    // Restart animation
    resultBox.classList.remove("result-animation");

    requestAnimationFrame(() => {
        resultBox.classList.add("result-animation");
    });


    // Store calculation
    addToHistory(
        `${first} ${symbol} ${second}`,
        answer
    );

}


// Add result to history
function addToHistory(calculation, answer) {

    const historyBox = document.getElementById("history");


    // Remove default message
    const defaultMessage =
        historyBox.querySelector(".no-history");

    if (defaultMessage) {
        defaultMessage.remove();
    }


    // Create history element
    const record = document.createElement("div");

    record.classList.add("history-item");


    record.innerHTML = `
        <span>${calculation}</span>
        <strong>${answer}</strong>
    `;


    // Show latest result first
    historyBox.prepend(record);


    // Limit history to 5 results
    const records =
        historyBox.querySelectorAll(".history-item");

    if (records.length > 5) {

        records[records.length - 1].remove();

    }

}


// Delete calculation history
function clearHistory() {

    const historyBox =
        document.getElementById("history");

    historyBox.innerHTML = `
        <p class="no-history">
            Your calculations will appear here.
        </p>
    `;
}


// Enter key support
document.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        calculate();
    }

});