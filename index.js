let firstNumber="";
let secondNumber="";
let operator="";

function append(number){
    if(operator===""){
        firstNumber+=number;
        document.getElementById('res').value=firstNumber;
    }
    else{
        secondNumber+=number;
         document.getElementById('res').value=firstNumber+operator+secondNumber;
    }
}
function operate(op){
    operator=op;
     document.getElementById('res').value=firstNumber+operator;
}

function calculate(){
    let result;
    switch (operator){
     case '+':
        result=parseInt(firstNumber)+parseInt(secondNumber);
        break;
        case '-':
        result=parseInt(firstNumber)-parseInt(secondNumber);
        break;
        case '*':
        result=parseInt(firstNumber)*parseInt(secondNumber);
        break;
        case '/':
        result=parseInt(firstNumber)/parseInt(secondNumber);
        break;
    }
    document.getElementById('res').value=result;
}

function clearresult(){
    firstNumber="";
    secondNumber="";
    operator="";
    document.getElementById('res').value="";
}
function playSound() {
    let sound = document.getElementById("btnSound");
    sound.currentTime = 0;
    sound.play();
}
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", playSound);
});