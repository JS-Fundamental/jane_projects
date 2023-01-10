/*
4) Зробити опитування користувача, кожна відповідь 
затерає наявне DOM дерево і відрисовує нове
 (із наступним питанням), всі відповіді зберігати 
 в масиві, і в кінці на основі цих відповідей вивести 
 інформацію про користувача на основі відповідей.
 */

const questions = [
  "Ваше Прізвище, Ім'я, По батькові",
  "Скільки Вам років?",
  "З якого ви міста?",
  "Який Ваш улюблений колір?"
];

const answers = [];

const out = document.querySelector('.layout');
const submitBtn = document.getElementById('btn');
let iteration = 0;

out.innerHTML = `<h3>${questions[iteration]}</h3><input type="text" id="userAnswer" />`
let userAnswer = document.getElementById('userAnswer');

submitBtn.addEventListener('click', () => {

  if (iteration < questions.length - 1) {
    answers.push(userAnswer.value);

    iteration++;

    out.innerHTML = null;
    out.innerHTML = `<h3>${questions[iteration]}</h3><input type="text" id="userAnswer" />`
    userAnswer = document.getElementById('userAnswer');

  } else {
    answers.push(userAnswer.value);

    out.innerHTML = null;

    let outputHTML = "";

    answers.forEach((answer, index) => {
      outputHTML += `
      <tr>
      <td>${questions[index]}</td>
      <td>${answer}</td>
    </tr>
    `;
    });

    out.innerHTML = `
    <table>
      ${outputHTML}
    </table>
  `;
    submitBtn.style.cssText = 'display: none;';
  }
});

