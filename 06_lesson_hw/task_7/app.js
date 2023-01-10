/*
7) Створити просту фото галерею, зробити блок де буде відображатись велика картинка, і декілька малих блоків із прев'ю інших картинок, 
при кліку на якусь із них вона буде відображатись у блоці із великою картинкою(замість попередньої). 
Також зробити кнопки щоб переключати картинки в перед та назад.
*/

const images = [...document.querySelectorAll('.preview img')];
const mainImage = document.querySelector('.main-picture img');

const btnPrev = document.querySelector('.nav-prev');
const btnNext = document.querySelector('.nav-next');

function changeImage(currentImg, direction = "next") {
  let currentSrc = currentImg.src;
  let srcArray = images.map(img => img.src);

  if (direction == "next") {
    srcArray.push(mainImage.src);
  } else {
    srcArray.unshift(mainImage.src);
  }

  let newSrcArr = srcArray.filter(el => el != currentSrc);

  images.forEach((img, index) => {
    img.src = newSrcArr[index];
  });

  mainImage.src = currentSrc;
}

images.forEach((image) => {
  image.addEventListener('click', () => {
    changeImage(image);
  });
});

btnNext.addEventListener('click', (e) => {
  e.preventDefault();
  changeImage(images[0]);
});

btnPrev.addEventListener('click', (e) => {
  e.preventDefault();
  changeImage(images[images.length - 1], "prev");
});