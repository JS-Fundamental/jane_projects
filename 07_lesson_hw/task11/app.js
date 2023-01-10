/*
11) зробити сторінку реєстрації, і в залежності від віку людини виводити
 їй різний контент після натиснення кнопки надіслати,
 менше 18 вивести фото мультфільмів і опис компанії дісней та піксар. 
 більше 18 і менше 60 вивести блок із автомобілями, 
якщо більше 60 то вивести блок із новинами.
*/

const form = document.querySelector('form');
const containers = [...document.querySelectorAll('.container')];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let userAge = e.target.elements.age.value;
  switch (true) {
    case (userAge < 18):
      showContainer('cartoons');
      break;
    case (userAge >= 18 && userAge < 60):
      showContainer('cars');
      break;
    case (userAge >= 60):
      showContainer('news');
      break;
    default: alert('The form was filled in wrong');
      break;
  }
});

function showContainer(selector) {
  containers.forEach(container => {
    if (container.classList.contains(selector)) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  });
}