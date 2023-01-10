/*
1) За допомогою prompt отримати дані від користувача(кількість років).
Якщо менше 18 то вивести інформацію  що він ще дуже юний.
Якщо від 18 до 60 то він може проходити дані(повідомлення якогось такого плану).
Якщо більше 60 то вивести що юзер застарий для нашого додатку.


2) Розробити гру "Вгадай число".
За допомогою promp вводимо число(перед цим в коді пишемо в змінну любе число).
Потім порівнюємо введене число із числом яке у змінній, і виводимо за допомогою alert 
користувачу відповідну відповідь(за велике число, замале число, вгадали).Дати можливість користувачу 5 разів 
спробувати вгадувати число.Якщо протягом 5 разів користувач не вгадав число, то вивести повідомлення що він 
програв(користувач).
Кожне із введених користувачем чисел занести в масив та відсортувати по зростанню.
*/

let userAge;

const attempts = 5;
let gameNumber = 15;
let userNumber;
let userNumberArr = [];

alert('Hello!');
userAge = prompt('How old are you?');

switch (true) {
  case +userAge < 18 && userAge !== null && userAge != '':
    alert("Sorry, You're too young for this game!");
    break;
  case +userAge >= 18 && +userAge <= 60:
    alert("Great! Let's play!");

    //part 2
    for (let i = 0; i < attempts; i++) {

      userNumber = prompt('Try to guess my Number! Enter Some Number');
      userNumberArr.push(userNumber);

      if (userNumber == gameNumber) {
        alert('Great! You win!!!');
        console.log(userNumberArr.sort((a, b) => a - b));
        break;

      } else if (+userNumber > gameNumber) {
        alert('Oops! Too big(');

      } else if (+userNumber < gameNumber && userNumber != '' && userNumber != null) {
        alert('Oops! Too small(');

      } else {
        alert('Game over!');
        break;
      }

    }

    if (userNumberArr.length == attempts && userNumber != gameNumber) {
      alert("Game over!");
      console.log(userNumberArr.sort((a, b) => a - b));
    }

    break;
  case +userAge > 60:
    alert("Sorry, You're too old for this game!");
    break;
  case isNaN(userAge) || userAge == "":
    alert("This input isn't correct! Refresh the page and try again!");
    break;
  default:
    alert('Have a nice day!');
    break;
}



/*
if (+userAge < 18 && userAge != null) {
  alert("Sorry, You're too young for this game!");

} else if (+userAge >= 18 && +userAge <= 60) {
  alert("Great! Let's play!");

  //part 2
  for (let i = 0; i < attempts; i++) {

    userNumber = prompt('Try to guess my Number! Enter Some Number');
    userNumberArr.push(userNumber);

    if (userNumber == gameNumber) {
      alert('Great! You win!!!');
      break;

    } else if (+userNumber > gameNumber) {
      alert('Oops! Too big(');

    } else if (+userNumber < gameNumber) {
      alert('Oops! Too small(');

    } else {
      alert('Enter NUMBER, please!');
    }

  }

  if (userNumberArr.length == attempts && userNumber != gameNumber) {
    alert("Game over!");
  }

} else if (+userAge > 60) {
  alert("Sorry, You're too old for this game!");

} else {
  alert("The input isn't correct! Refresh the page and try again!");
}
*/