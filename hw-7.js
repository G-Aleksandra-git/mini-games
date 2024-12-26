// Задание 1 Преобразовать строку 'js' в верхний регистр.
const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr); 

// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, 
// содержащий только те элементы первого массива, которые начинаются со второй строки. 
// Регистр символов не влияет на результат.
function filterByPrefix(array, prefix) {
    // Приводим префикс к нижнему регистру 
    const lowerPrefix = prefix.toLowerCase();

    // проверяем, начинается ли элемент с указанного префикса
    return array.filter(item => item.toLowerCase().startsWith(lowerPrefix));
}

const fruits = ["Апельсин", "Арбуз", "Яблоко", "Ананас", "Абрикос", "Груша"];
const prefix = "А";

const filteredFruits = filterByPrefix(fruits, prefix);
console.log(filteredFruits); // Вывод: ["Апельсин", "Арбуз", "Ананас", "Абрикос"]

// Задание 3 Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.
const number = 32.58884;

const floor = Math.floor(number);// до меньшего целого
console.log("До меньшего целого:", floor); // 32


const ceil = Math.ceil(number);// до большего целого
console.log("До большего целого:", ceil); // 33

const round = Math.round(number);//  до ближайшего целого
console.log("До ближайшего целого:", round); // 33

// Задание 4 Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const numbers = [52, 53, 49, 77, 21, 32];


const min = Math.min(...numbers);// минимальное значения
console.log("Минимальное значение:", min); // 21

// Нахождение максимального значения
const max = Math.max(...numbers);
console.log("Максимальное значение:", max); // 77

//  Задание 5 Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Генерируем случайное число
    console.log("Случайное число от 1 до 10:", randomNumber); // Выводим результат
}

getRandomNumber();

// Задание 6 Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. 
// Длина массива должна быть в два раза меньше переданного числа.

function generateRandomArray(maxNumber) {
    if (maxNumber <= 0 || !Number.isInteger(maxNumber)) {
        console.error("Введите положительное целое число больше 0");
        return [];
    }

    const arrayLength = Math.floor(maxNumber / 2); // Длина массива — половина от maxNumber
    const randomArray = [];

    for (let i = 0; i < arrayLength; i++) {
        randomArray.push(Math.floor(Math.random() * (maxNumber + 1))); // Генерируем случайное число от 0 до maxNumber
    }

    return randomArray;
}

const maxNumber = 10;
const randomNumbers = generateRandomArray(maxNumber);
console.log(`Случайные числа от 0 до ${maxNumber}:`, randomNumbers);

// Задание 7 Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
function getRandomNumberInRange(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        console.error("Оба значения должны быть целыми числами.");
        return null;
    }

    if (min > max) {
        [min, max] = [max, min]; // Меняем местами, если min больше max
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = getRandomNumberInRange(5, 15);
console.log(`Случайное число в диапазоне:`, randomNum);

// Задание 8 Вывести в консоль текущую дату.

const todayDate = new Date();
console.log("Текущая дата:", currentDate);

// Задание 9 Создать переменную currentDate, хранящую текущую дату. 
// Вывести дату, которая наступит через 73 дня после текущей.

const currentDate = new Date(); // Текущая дата
const futureDate = new Date(); // Копируем текущую дату
futureDate.setDate(currentDate.getDate() + 73); // добавляем 73 дня

console.log("Текущая дата:", currentDate.toLocaleDateString());
console.log("Дата через 73 дня:", futureDate.toLocaleDateString());

// Задание 10 Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function formatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const daysOfWeek = [
        "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.
Время: ${hours}:${minutes}:${seconds}`;
}

const currentDate = new Date();
console.log(formatDate(currentDate));










