/*
 1) Реалізувати (не підглядаючи  або підглянути мінімум) 
 обчислення факторіалу за допомогою циклу та рекурсивно. 
 Використовуючи  console.time...  визначити що буде швидше 
 працювати при 5! , 40!, 100!,  1000!, 5000!, 10000!(якщо буде працювати)
 */

//Recursion
console.time('Recursion');
function findFactorial(number) {
  if (number == 1) {
    return 1;
  } else {
    return (number * findFactorial(number - 1));
  }
};
console.log(findFactorial(10));
console.timeEnd('Recursion');

//loops
//While
console.time('loop while');
let factorialNumber = 10;
let resultWhile = 1;
while (factorialNumber > 1) {
  resultWhile *= factorialNumber;
  factorialNumber--;
}
console.log(resultWhile);
console.timeEnd('loop while');

//For
console.time('loop for');
let numberFor = 10;
for (let index = (numberFor - 1); index >= 1; index--) {
  numberFor = numberFor * index;
};
console.log(numberFor);
console.timeEnd('loop for');

/* 
    5 => 120
Recursion: 2.207ms // 1.916ms

loop while: 0.037ms

loop for: 0.021ms
*/


/*
    40 => 8.1591528e+47

Recursion: 1.971ms // 1.989ms

loop while: 0.042ms

loop for: 0.023ms 
*/

/* 
    100 => 9.332622e+157

Recursion: 2.008ms // 2.526ms

loop while: 0.041ms

loop for: 0.024ms
*/

/* 
    1000 => Infinity

Recursion: 2.337ms // 2.242ms

loop while: 0.058ms

loop for: 0.055ms
*/


/* 
    5000 => Infinity

Recursion: 3.276ms // 2.593ms

loop while: 0.203ms 

loop for: 0.258ms
*/

/* 
    10000 => Infinity

Recursion: 2.96ms // 3.241ms

loop while: 0.373ms

loop for: 0.2ms
*/