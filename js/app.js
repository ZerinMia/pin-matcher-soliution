function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        //console.log('got 3 digit and calling again',pin);
        return getpin();
    }
}
function generatePin() {
    const pin = getpin();
    document.getElementById('display-pin').value = pin;
}
//jokon calculator er number press kori calc e sei number k dakabe;
document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function varifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const sucssesMessage = document.getElementById('notify-sucsses');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        failError.style.display = 'none';
        sucssesMessage.style.display = 'block';
    }
    else {
        sucssesMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}