/*
8) Створити текстове поле, в текстове поле вводимо текст який хочемо відформатувати, 
(жирним то вводимо символ # перед словом, якщо курсивом то вводимо символ $ перед словом), 
зробити заміну тих спецсимволів та 1 слова після них на слово обгорнуте у відповідний html тег, і вивести повідомлення відформатоване на екран.
*/

// # ===>> <strong></strong>
// $ ===>> <em></em>

const userInput = document.getElementById('userText');
const btn = document.getElementById('btnTransform');


btn.addEventListener('click', () => {
  const userText = userInput.value.split(' '); //converting String to Array

  let formatingText = userText.map((word) => {
    if (word.includes('#')) {
      return `<strong>${word.substring(1)}</strong>` //substring return word without first character
    }
    if (word.includes('$')) {
      return `<em>${word.substring(1)}</em>`
    }
    return word;
  }); // look for statement

  //output after </button>
  btn.insertAdjacentHTML('afterend', `<p>${formatingText.join(' ')}</p>`); // converting Array to String
});
