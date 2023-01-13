/*9)  створити гру Сапер на полі 5х5,
вміст кліточок зберігати в масиві.
*/

//bomb game over

//else win

const container = document.querySelector('.container');
let items = [];
let move = 0;
let game = true;

items.length = 25;
items[0] = 'bomb';

for (let index = 0; index < items.length; index++) {
  container.insertAdjacentHTML("beforeend", `<div class="tile" data-value="${items[index]}"></div>`);
}

let divItems = document.querySelectorAll('.tile');

divItems.forEach((divItem) => {
  divItem.addEventListener('click', function addEventToTile() {
    if (game) {

      if (divItem.dataset.value == "bomb") {
        game = false;
        container.style.backgroundColor = 'red';
        alert("Game Over");

      } else {
        divItem.textContent = '1';
        move++;
        divItem.removeEventListener('click', addEventToTile);

        if (move == items.length - 1) {
          game = false;
          container.style.backgroundColor = 'green';
          alert('Great you win!');
        }
      }
    }

  });
});
