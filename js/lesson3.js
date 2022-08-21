//task 1
// const dna = prompt("Enter DNA");
// const arrDNA = dna.split('');
// for (let i = 0; i < arrDNA.length; i++) {
//     if (arrDNA[i] === "A") {
//         arrDNA[i] = "T"
//     } else if (arrDNA[i] === "T") {
//         arrDNA[i] = "A"
//     } else if (arrDNA[i] === "C") {
//         arrDNA[i] = "G"
//     } else if (arrDNA[i] === "G") {
//         arrDNA[i] = "C"
//     } else 
//     null;
// }
//     alert(arrDNA.join(''));

//task 2
const sand = prompt("Enter kg sand").split(",");
const box = prompt("Enter volume boxes").split(",");

let sortSand = sand.sort((a, b) => a - b);
let sortBox = box.sort((a, b) => a - b)

function theMostMoney(sortSand, sortBox) {
    for (let j = 0; j < sortSand.length; j++) {
        for (let i = 0; i < sortBox.length; i++) {
            return sortSand[0] * sortBox[0] + sortSand[1] * sortBox[1] + sortSand[2] * sortBox[2];
        }
    }
}
let alertMoney = theMostMoney(sortSand, sortBox);
alert(`You have ${alertMoney}$`)

