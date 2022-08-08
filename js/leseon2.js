// task 1
const l = Number(prompt('Введіть довжину приміщення'));
const w = Number(prompt('Введіть ширину приміщення'));
const h = Number(prompt('Введіть висоту приміщення'));
const volumeRoom = l * w * h;
const paint = volumeRoom / 16;

if (l >= 1000 || w >= 1000 || h >= 1000) {
    alert('Цe дуууже велике приміщення');
} else {
    alert(`Вам потрібно ${paint} літрів фарби`);
}



//task 2
const celsius  = prompt('Enter ℃');
const fahrenheit = celsius * 1.8 + 32;

if (celsius == Number(celsius)){
  alert(`Temperature ${fahrenheit} ℉`);
}else{
  alert("I don't understand you")
}



