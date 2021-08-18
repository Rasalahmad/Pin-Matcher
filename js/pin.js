function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event) {
    const calcInput = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number
        calcInput.value = newNumber;
    }
});


function varifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        failMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
        failMessage.style.display = 'block';
    }
}


// 
function del() {
    var prevalue = document.getElementById("typed-numbers").value;
    document.getElementById("typed-numbers").value = prevalue.substr(0, prevalue.length - 1);
}