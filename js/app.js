function generatePin() {
    const DisplayPin = document.getElementById('display-pin');
    const PIN = GetPin();
    DisplayPin.value = PIN
}

function GetPin() {
    let randomNumber = Math.floor(Math.random() * 10000) + "";
    randomNumber.toString()
    if(randomNumber.length == 4){
        return randomNumber
    }else{
        return GetPin()
    }
} 

const buttons = document.getElementById('key-pad');
buttons.addEventListener('click', displayPin)

function displayPin(e) {
    let typePin = e.target.innerText;
    const TypeInput = document.getElementById('typed-numbers')
    if(isNaN(typePin)){
        if(typePin == 'C') {
            TypeInput.value = ""
        }
    }else{
        TypeInput.value += typePin;
    }
}

function verifyPin() {
    const randomPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const Fail = document.getElementById('notify-fail');
    const Success = document.getElementById('notify-success');

    if(randomPin == typedPin){
        Success.style.display = 'block'
        Fail.style.display = 'none'
        document.getElementById('typed-numbers').value = ""
        document.getElementById('display-pin').value = ""
    }else{
        Fail.style.display = 'block'
        Success.style.display = 'none';
        tryCountHandling()
    }
}

let tryCount = 5;
function tryCountHandling() {
    const displayTry = document.getElementById('count');
    if(tryCount == 0) {
        displayTry.innerText = 'No'
    }else if(tryCount < 0){
        displayTry.innerText = 'Try again after sometime. No '
    }else{
        tryCount--;
        displayTry.innerText = tryCount;
    }
}

