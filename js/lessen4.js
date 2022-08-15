//calc

const enterNum = prompt("Enter the numbers and the action separated by commas").split(",");
 const action = enterNum[2];
 const a = enterNum[0];
 const b = enterNum[1];

function checkAction(a, b, action, plus, minus, multiply, divide){
    action == "+" ? plus():
    action == "-" ? minus():
    action == "*" ? multiply():
    action == "/" ? divide():
    null
}

function calcPlus(){
    return a + b;
}
function calcMinus(){
    return a - b
}
function calcMultiply(){
    return a * b
}
function calcDivide(){
    return a / b
}

alert(checkAction(enterNum[0], enterNum[1], enterNum[2], calcPlus, calcMinus, calcMultiply, calcDivide))
