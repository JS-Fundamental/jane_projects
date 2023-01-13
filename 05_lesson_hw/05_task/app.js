/*
5) Реалізувати логіку підрахунку ціни товару по його варіаціях
(шаблон наведений тут, при кліку на колір змінювати ціну товару).
Придумати ще 2 варіації, від яких буде залежати ціна товару.
*/

const outPrice = document.querySelector('#outprice'); //!
let price;
const colorSelectors = [...document.querySelectorAll('.color')];
const shippingSelectors = [...document.querySelectorAll('.shipping')];
const warrantySelectors = [...document.querySelectorAll('.warranty')];

function countPrice() {
  let activeColorValue = +document.querySelector('.color.active').dataset.price;
  let activeShippingValue = +document.querySelector('.shipping.active').dataset.shipping;
  let activeWarrantyValue = +document.querySelector('.warranty.active').dataset.warranty;

  price = activeColorValue + (activeColorValue * activeWarrantyValue) + activeShippingValue;
  outPrice.innerText = price.toFixed(2);
};

document.addEventListener('DOMContentLoaded', countPrice);


colorSelectors.forEach((item) => {
  applyChanges(item, '.color.active');
});


shippingSelectors.forEach((item) => {
  applyChanges(item, '.shipping.active');
});

warrantySelectors.forEach((item) => {
  applyChanges(item, '.warranty.active');
});

function applyChanges(item, activeVariation) {
  item.addEventListener("click", () => {
    let variation = document.querySelector(activeVariation);

    variation.classList.remove('active');
    item.classList.add('active');

    countPrice();
  });
}