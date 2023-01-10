/*
2) Реалізувати функцію, яка на вхід приймає масив, 
 а результатом є виклик декількох функцій, одна 
 перебирає масив циклом а  інші за допомогою методів перебору  масивів. 

  2.1) Вивести console.time... для кожної із тих 
  функцій(приклад як я сьогодні в функції викликав іншу функцію але потрібно в одній функції викликаються декілька інших)
  2.2) Вивести всі дані які перебираються в 
  консоль, і за допомогою console.group... згрупувати 
  кожен вивід функції, а також кожній групі дати свої *css* стилі.
  2.3) Зробити вивід console.trace() для кожної із цих функцій.
 */

const fruits = ["apples", "pears", "oranges", "grapefruits", "nectarines", "bananas", "mangoes"];

function callFunctions(array) {
  console.time('allFunctions');
  loopFor(array);
  forEach(array);
  mapMethod(array);
  filterMethod(array);
  console.timeEnd('allFunctions');
  console.trace();
}

function loopFor(arr) {
  console.trace();
  console.time('for');
  console.group("%cFunction for Loop", "color: yellow; font-style: italic; background-color: blue; font-size: 14px;");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  };
  console.groupEnd();
  console.timeEnd('for');
};

function forEach(arr) {
  console.trace();
  console.time('forEach');
  console.group('%cFunction forEach', "color: red; background-color: white; font-size: 14px;");
  arr.forEach(item => console.log(item));
  console.groupEnd();
  console.timeEnd('forEach');
};

function mapMethod(arr) {
  console.trace();
  console.time('map');
  console.group('%cFunction MAP', "color:blue; font-style: italic;background-color: yellow; font-size: 14px;");
  arr.map(item => console.log(item));
  console.groupEnd();
  console.timeEnd('map');
};

function filterMethod(arr) {
  console.trace();
  console.time('filter');
  console.group('%cFunction FILTER', "color: white; background-color: red; font-size: 14px;");
  arr.filter(item => console.log(item));
  console.groupEnd();
  console.timeEnd('filter');
}

callFunctions(fruits);

