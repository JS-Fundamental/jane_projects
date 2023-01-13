/*
1) Створити додаток (html сайт) який буде переводити температуру із Цельсія в Фаренгейт та навпаки.
Функція перетворення має працювати на подію input.
Якщо вводяться значення в поле Цельсій то відбувається перетворення в Фаренгейт,
якщо вводимо дані в поле Фаренгейт,
то запускається функція перетворення в Цельсій.
*/
//T (° F) = T (° C) × 9/5 + 32
//T (° C) = ( T (° F) - 32) × 5/9

let celcNumber = document.querySelector('#celc');
let fahrNumber = document.querySelector('#fahr');

celcNumber.addEventListener('input', (e) => {
  let celcValue = e.target.value;
  fahrNumber.value = (celcValue * 9 / 5 + 32).toFixed(3);
  if (celcValue == "") {
    fahrNumber.value = null;
  }
});

fahrNumber.addEventListener('input', (e) => {
  let fahrValue = e.target.value;
  celcNumber.value = ((fahrValue - 32) * 5 / 9).toFixed(3);
  if (fahrValue == "") {
    celcNumber.value = null;
  }
});