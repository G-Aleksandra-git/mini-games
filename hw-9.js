 //Задание 1. Скрытие и показ текста
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.
// Инструкция:
// В HTML создайте заголовок <h1> с текстом и кнопку.
// Используйте метод querySelector для получения ссылок на заголовок и кнопку.
// Используйте событие click и метод addEventListener, чтобы скрывать и показывать заголовок при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Скрыть» скрывает текст заголовка. Повторное нажатие показывает текст снова.

// ссылки на элементы
 const header = document.querySelector('#header');
 const button = document.querySelector('#toggleButton');

 // Добавляем обработчик события click для кнопки
 button.addEventListener('click', () => {
   if (header.style.display === 'none') {
     header.style.display = 'block';
     button.textContent = 'Скрыть';
   } else {
     header.style.display = 'none';
     button.textContent = 'Показать';
   }
 });

//  Задание 2. Изменение стиля элемента
//   Задача: создайте кнопку, которая изменяет цвет текста в элементе  <p> .
//   Инструкция:
//   В HTML создайте абзац  <p>  и кнопку.
//  Используйте метод  querySelector  для получения ссылки на абзац и кнопку.
//  Используйте событие  click  и метод  addEventListener , чтобы изменить стиль элемента, например его цвет.
//  Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим.
  // Получаем ссылки на элементы
  const paragraph = document.querySelector('#text');
  const button1 = document.querySelector('#colorButton');

  // Добавляем обработчик события click для кнопки
  button1.addEventListener('click', () => {
    paragraph.style.color = 'red';
    paragraph.style.fontWeight = 'bold'; 
    paragraph.style.fontStyle = 'italic'; 
    paragraph.style.fontSize = '20px';
  });

//   Задание 3. Динамическое изменение текста
//   Задача: создайте кнопку, которая меняет текст в заголовке   <h1>.  
//   Инструкция:  
//   В HTML создайте заголовок <h1> с текстом и кнопку.
//   Используйте метод   querySelector   для получения ссылки на заголовок и кнопку.
//   Используйте событие   click   и метод   addEventListener  , чтобы изменить текст заголовка при нажатии на кнопку.
//   Как должно работать: нажатие на кнопку «Изменить текст» меняет текст заголовка на «Привет, мир!».

const heading = document.querySelector('#heading');
const button2 = document.querySelector('#changeTextButton');

// Добавляем обработчик события
button2.addEventListener('click', () => {
  heading.textContent = 'Привет, мир!';
});

// Задание 4. Поиск и изменение элементов по классу
// Задача: найдите все элементы с классом description и измените их текст на «Измененный текст».
// Инструкция:
// В HTML создайте несколько элементов с классом description.
// Используйте метод querySelectorAll для поиска всех элементов с этим классом.
// Переберите найденные элементы и измените их текстовое содержимое с помощью свойства textContent.
// Как должно работать: 
// после выполнения скрипта все элементы с классом description изменяют свой текст на «Измененный текст».

const descriptions = document.querySelectorAll('.description');

// Перебираем 
descriptions.forEach(element => {
  element.textContent = 'Измененный текст';
});

// Задание 5. Работа с querySelectorAll
// Задача: создайте несколько элементов <p> с разными классами. 
// Используйте querySelectorAll, чтобы найти все элементы с классом description и изменить их текст.
// Инструкция:
// В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
// Используйте querySelectorAll для поиска всех элементов с классом description.
// Переберите найденные элементы и измените их текстовое содержимое.
// Как должно работать: после выполнения скрипта все элементы с классом 
// description изменяют свой текст на «Новый текст».

const descriptions1 = document.querySelectorAll('.description1');

// Перебираем найденные элементы и изменяем их текстовое содержимое
descriptions1.forEach(element => {
  element.textContent = 'Новый текст';
});

// Задание 6. Добавление нового элемента в DOM/
// Задача: создайте кнопку, 
// которая добавляет новый элемент <p> с текстом в конец документа.
// Инструкция:
// В HTML создайте кнопку.Используйте метод createElement для создания нового элемента.
// Используйте appendChild для добавления нового элемента в конец документа при нажатии на кнопку.
// Как должно работать: 
// нажатие на кнопку «Добавить элемент» добавляет в конец страницы новый абзац с текстом «Новый абзац».

const button3 = document.querySelector('#addButton');

// ссылка на секцию с классом task
const taskSection = document.querySelector('.task-2');

// обработчик события  для кнопки
button3.addEventListener('click', () => {
  // новый элемент <p>
  const newParagraph = document.createElement('p');
  
  // содержимое нового элемента
  newParagraph.textContent = 'Новый абзац';

  // Добавляем элемент в конец секции
  taskSection.appendChild(newParagraph);
});


// Задание 7. Удаление элемента
// Задача: создайте кнопку, которая удаляет первый элемент <p> с классом description.
// Инструкция:
// В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
// Используйте метод querySelector для поиска первого элемента с классом description.
// Используйте метод remove для удаления этого элемента при нажатии на кнопку.
// Как должно работать: 
// нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом description со страницы.

const deleteButton = document.querySelector('#deleteButton'); // кнопка удаления 

deleteButton.addEventListener('click', () => {
    // первый элемент с классом description
    const firstDescription = document.querySelector('.description3');
   
    if (firstDescription) { // удаляем элемент если найден
      firstDescription.remove();
    }
  });











