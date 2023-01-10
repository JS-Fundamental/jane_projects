/*
6) Реалізувати гру в міліонера, є 5 питань і 3 життя, якщо людина 3 рази не правильно відповіла то вона програла, 
якщо менше 3-х помилок, то людина виграла.
*/

const body = document.body;
const submitBtn = [...document.querySelectorAll('.btn')];
const sections = [...document.querySelectorAll('.section')];
let correctAnswerText = document.querySelector('.section.visible .correct');
const gameOver = document.querySelector('.game-over');
let userResultsText = document.querySelector('.results');
const lives = [...document.querySelectorAll('.lives svg')];

let scoreCount = 0;
let livesCount = 3;


function listenToAnswers() {
  let inputsVisible = [...document.querySelectorAll('.section.visible .input-radio')]

  inputsVisible.forEach((input) => {
    input.addEventListener('click', () => {

      if (input.dataset.answer) {
        body.style.backgroundColor = "#77dd77";
        scoreCount++;
      } else {
        livesCount--;
        body.style.backgroundColor = "#ED2939";
        lives[livesCount].classList.add('wasted');
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

    if (livesCount > 0) {
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
        userResultsText.innerText = "You WIN !!!"
        userResultsText.dataset.heading = "You WIN !!!"
      }

    } else {
      sections[visible].classList.toggle("visible");
      gameOver.classList.add('visible');
    }

  });
});



