// const arr = ['school', 'table', 2, 4, 5.4, 'museum', 'cat', 'dog'];
// console.log(arr)
////////splice//////
// const sp1 = arr.splice(2, 3); починаючи з 2 індекса видаляє 3 улументи
// const sp2 = arr.splice(2, 3, 'chair', 'nose'); починаючи з 2 індекса дидаляє 3 елементи, а натомість вставляє два нові: 'chair', 'nose' 
// const sp3 = arr.splice(2, 0, 999, 888, 777); не видаляє жодного елемента, і починаючи з індекса 2 додає нові елументи, а тих що були пересуває
//////slice///////
// const sl1 = arr.slice(2, 5); // копіює з 2 індекса, по 5 порядковий елемент
// const sl2 = arr.slice(5)// копіює з 5 індукса до кінця
// const sl3 = arr.slice(1,-2); // коп з 1 індуксу до 2 зі заду
// const sl4 = arr.slice(-3)// коп остані 3


// const ar = [1, 2, 3, 6, 7, 8, 9, 12, 15];
// console.log(ar);
// const ar1 = ar.slice();

// function removeEven(arr) {
//     for (let i = arr.length; i >= 0; i--)
//         if (arr[i] % 2) arr.splice(i, 1)
//     return arr
// }
// console.log(removeEven(ar1))

// function threeInOne(arr) {
//     let arrCopy = arr.slice();
//     let arrNew = [];
//     for (let i = arrCopy.length; i >= 0; i--) {
//         for (let j = i / 3; j >= 0; j--) {
//             let arrSumm = arrCopy[i] + arrCopy[i + 1] + arrCopy[i + 2];
//          arrNew.push(arrSumm)
//         }
//     }
// }

// function threeInOne(arr) {
//     let arrCopy = arr.slice();
//     let arrNew = [];
//     for (let i = 0; i< arrCopy.length; i+=3){
//         arrNew.push(arr[i] + arr[i+1] + arr[i+2]);
//     }
// }
