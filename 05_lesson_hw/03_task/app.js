/*
3) Створити гру для перевірки знання таблиці множення. 
Користувач має 3 спроби пройти тест (який складається із 5 прикладів).
 По завершенню виводити найкращий результат.
 */

//varibles for HTML
const outMessage = document.querySelector('.container');
const attemptText = document.querySelector('.attempt');
const attemptsText = document.querySelector('.attempts');
const number1Text = document.querySelector('.number1');
const number2Text = document.querySelector('.number2');
const questionText = document.querySelector('.question');
const questionsText = document.querySelector('.questions');
const correctAnswersText = document.querySelector('.correct');

// workers
const userAnswer = document.querySelector("#userAnswer");
const btn = document.querySelector('#btn');

let attempt = 1;
const attempts = 3;
let question = 1;
const questions = 5;

//variables for processing
let rightAnswerCount = 0;
let rightAnswers = [];
let number1, number2, result;

function createRandomQuestion() {
  number1 = Math.floor((Math.random() * 10) + 1);
  number2 = Math.floor((Math.random() * 10) + 1);
  result = number1 * number2;
}

function renderDOM() {
  attemptText.innerHTML = attempt;
  attemptsText.innerHTML = attempts;
  number1Text.innerHTML = number1;
  number2Text.innerHTML = number2;
  questionText.innerHTML = question;
  questionsText.innerHTML = questions;
  correctAnswersText.innerHTML = rightAnswerCount;
}

document.addEventListener('DOMContentLoaded', () => {
  createRandomQuestion();
  renderDOM();
});


btn.addEventListener('click', () => {
  if (userAnswer.value == result) {
    rightAnswerCount++;
  }

  if (question == questions) {
    rightAnswers.push(rightAnswerCount);
    attempt++;
    question = 0;
    rightAnswerCount = 0;
  };

  question++;
  userAnswer.value = "";
  createRandomQuestion();
  renderDOM();

  if (question == questions && attempt == attempts) {
    outMessage.innerHTML = `<h1> Your best score is ${Math.max(...rightAnswers)}</h1>`
  }
});


