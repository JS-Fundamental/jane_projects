/*
1. Напишіть JS-функцію для друку чисел від 1 до 100 в консоль.
2. Напишіть JS-функцію для друку парних чисел від 1 до 100 в консоль.
3. Напишіть JS-функцію для друку непарних чисел від 1 до 100 в консоль.
4. Напишіть функцію із таким же функціоналом як попередні, але числа потрібно брати із масиву.
5. Напишіть функцію яка  видаляє всі значення із масиву.
6. Реалізувати функцію яка рахує степінь числа за допомогою циклу.
*/

// Task 1
function printNumbers(x, y) {
  for (let i = x; i <= y; i++) {
    console.log(i);
  }
};
printNumbers(1, 100);

console.log("*******************");

//Task 2
function printEvenNumbers(x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
printEvenNumbers(1, 100);

console.log("*******************");

//Task 3
function printOddNumbers(x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};
printOddNumbers(1, 100);

console.log("*******************");

//Task 4
let numbers = [25, 32, 56, 802, 605];

function printArray(arr, task = "all") {

  switch (true) {
    case task == "all":
      for (const item of arr) {
        console.log(item);
      };
      break;
    case task == "odd":
      for (const item of arr) {
        if (item % 2 != 0) {
          console.log(item);
        }
      };
      break;
    case task == "even":
      for (const item of arr) {
        if (item % 2 == 0) {
          console.log(item);
        }
      };
      break;
    default:
      break;
  };
};
printArray(numbers, "all");
console.log("------------");

printArray(numbers, "even");
console.log("------------");

printArray(numbers, "odd");
console.log("------------");

printArray(numbers);

console.log("*******************");

//Task 5
function deleteItems(arr) {
  return arr = [];
}
console.log(deleteItems(numbers));

console.log("*******************");

//Task 5 (long version)
/*
function deleteItems(arr) {
  for (let i = arr.length; i > 0; i--) {
    arr.pop();
  }
  return arr;
}
console.log(deleteItems(numbers));

console.log("*******************");
*/

//Task 6
function exponentiation(x, n) {
  let result = 1;
  for (let index = 0; index < n; index++) {
    result *= x
  };
  return result;
};
console.log(exponentiation(12, 6));

