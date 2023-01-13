/*
2) Створити додаток для розрахунку площі прямокутника. 
На основі значень введених в поля, при кліку на кнопку Побудувати, 
в div блоці із класом out потрібно відрисувати 
прямокутник із заданими параметрами (але в пікселях а не сантиметрах)
*/

const userLength = document.getElementById('length');
const userWidth = document.getElementById('width');
const submitBtn = document.getElementById('area');
const out = document.querySelector('.out');
const outText = document.querySelector('.out-text');

submitBtn.addEventListener('click', () => {
  let result = userLength.value * userWidth.value;
  let rectangle = document.createElement("div");

  rectangle.style.cssText = `height: ${userLength.value}px; width: ${userWidth.value}px;`;

  out.innerHTML = null;
  out.appendChild(rectangle);

  outText.innerHTML = `Площа прямокутника =  ${result} см.`;
});
