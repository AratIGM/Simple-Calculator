let currentDisplay = '0';

function updateDisplay() {
    document.getElementById('display').textContent = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (currentDisplay === '0' && value !== '.') {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        currentDisplay = eval(currentDisplay).toString();
        updateDisplay();
    } catch (error) {
        currentDisplay = 'Error';
        updateDisplay();
    }
}

updateDisplay();
