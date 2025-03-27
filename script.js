document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const checkButton = document.getElementById('checkButton');
    const resultDisplay = document.getElementById('resultDisplay');

    checkButton.addEventListener('click', function() {
        const inputValue = numberInput.value;
        const number = parseInt(inputValue);

        if (!isNaN(number)) { // Ensure the input is a valid number
            if (number % 4 === 0 && number % 6 === 0) {
                resultDisplay.textContent = "PopSnap";
            } else if (number % 4 === 0) {
                resultDisplay.textContent = "Pop";
            } else if (number % 6 === 0) {
                resultDisplay.textContent = "Snap";
            } else {
                resultDisplay.textContent = number;
            }
        } else {
            resultDisplay.textContent = "Please enter a valid number.";
        }
    });
});
