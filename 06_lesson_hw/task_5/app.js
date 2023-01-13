/*
5) створити тест, будь-які 5 питань, якщо відповідь на питання правильне, 
то закрашувати фон в зелений колір, якщо ні, то в червоний і відкривати знизу правильну відповідь та пояснення. 
Питання відображати по 1 штуку.
*/

const body = document.body;
const submitBtn = [...document.querySelectorAll('.btn')];
const sections = [...document.querySelectorAll('.section')];
let correctAnswerText = document.querySelector('.section.visible .correct');
const gameOver = document.querySelector('.game-over');
const scoreText = document.querySelector('.score');

let scoreCount = 0;


function listenToAnswers() {
  let inputsVisible = [...document.querySelectorAll('.section.visible .input-radio')]

  inputsVisible.forEach((input) => {
    input.addEventListener('click', () => {

      if (input.dataset.answer) {
        body.style.backgroundColor = "#77dd77";
        scoreCount++;
      } else {
        body.style.backgroundColor = "#ED2939";
        correctAnswerText = document.querySelector('.section.visible .correct');
        correctAnswerText.classList.add('visible');
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  listenToAnswers();
});


submitBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    let visible = sections.findIndex((section) => {
      return section.classList.contains('visible');
    });

    if (visible < sections.length - 1) {
      sections[visible].classList.toggle("visible");
      sections[visible + 1].classList.toggle("visible");
    }

    body.style.backgroundColor = "#a8c0ff";
    correctAnswerText.classList.remove('visible');

    listenToAnswers();

    if (visible == sections.length - 1) {
      sections[visible].classList.toggle("visible");
      gameOver.classList.add('visible');
      scoreText.innerText = scoreCount;
    }

  });
});



