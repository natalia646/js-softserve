//calc
const enterNum = prompt("Enter the numbers and the action separated by commas").split(",");
const action = enterNum[2];
const a = +enterNum[0];
const b = +enterNum[1];

function checkAction(a, b, action, plus, minus, multiply, divide) {
    action == "+" ? plus() :
    action == "-" ? minus() :
    action == "*" ? multiply() :
    action == "/" ? divide() :
    null
}

const calcPlus = () => alert(a + b);
const calcMinus = () => alert(a - b);
const calcDivide = () => alert(a / b);
const calcMultiply = () => alert(a * b);

checkAction(a, b, action, calcPlus, calcMinus, calcMultiply, calcDivide);

