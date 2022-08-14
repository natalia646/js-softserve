//task 1
const dna = prompt("Enter DNA");
const arrDNA = dna.split('');
for (let i = 0; i < arrDNA.length; i++) {
    if (arrDNA[i] === "A") {
        arrDNA[i] = "T"
    } else if (arrDNA[i] === "T") {
        arrDNA[i] = "A"
    } else if (arrDNA[i] === "C") {
        arrDNA[i] = "G"
    } else if (arrDNA[i] === "G") {
        arrDNA[i] = "C"
    } else 
    null;
}
    alert(arrDNA.join(''));

    