/*
3) Створити об'єкт який містить 5 значень, ключами 2-х із яких є  
 warn та err  відповідно. При переборі об'єкту виводити всі значення в 
 консоль, і якщо зістрічається warn то використати  console.war...  
 а якщо зустрічається err то вивести console.er... із тими 
 повідомленнями які є значенням для цих ключів.
  */

let myObject = {
  01: "Everything is going nice!",
  warn: "Oops, change the path",
  02: "Nice job!",
  err: "It`s error time",
  play: "Try harder!"
};

for (const key in myObject) {

  if (key == "warn") {
    console.warn(myObject[key]);
  } else if (key == "err") {
    console.error(myObject[key]);
  } else {
    console.log(myObject[key]);
  }
}