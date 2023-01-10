/*
10) зробити список, після останього елементу списку має бути поле(інпут)
 та кнопка щоб додати новий елемент списку. 
Біля кожного елементу списку має бути знак
 - який видаляє даний елемент списку. Список зберігати в масиві.
*/

const out = document.querySelector('.box');
const listItems = [
  "Buy apples",
  "Learn JS",
  "Learn English"
];
const userItem = document.querySelector('#userInput');
const btn = document.querySelector('.addItem button');
let checkDelete;

function showList() {
  out.innerHTML = '';
  listItems.forEach(item => {
    out.innerHTML += `
    <div>
      <input type="checkbox"> <p>${item}</p>
    </div>
    `
  });

  deleteListItem();
};

showList();

btn.addEventListener('click', () => {
  listItems.push(userItem.value);
  showList();
  userItem.value = '';
});

function deleteListItem() {
  checkDelete = [...document.querySelectorAll('.box input')];
  checkDelete.forEach(input => {
    input.addEventListener('click', () => {
      let indexDelete = checkDelete.indexOf(input);
      listItems.splice(indexDelete, 1);
      showList();
    });
  });
}