// Задание 1 С помощью метода массива sort отсортируйте массив people
//  по возрастанию возраста и выведите результат в консоль.

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 // Сортировка по возрасту
 console.log(
    people.sort((a, b) => a.age - b.age)
 );

//  Задание 2 Реализуйте функцию filter, которая должна работать аналогично методу массива filter. 
// Возьмите за основу функцию map, которую мы реализовывали на уроке.
// Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, 
// принимать решение о том, добавлять в результирующий массив очередной элемент или нет.

function isPositive() {
// писать код тут
return number > 0;
}
function isMale() {
// писать код тут
return person.gender === 'male';
}
function filter() {
// писать код тут
const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]); // Добавляем в результат, если ruleFunction true
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people1, isMale));
 

// Задание 3 Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. 
// Последней строкой должно выводиться сообщение «30 секунд прошло».

function logCurrentDateWithTimeout() {
    const interval = 3000; // Интервал для вывода каждые 3 сек. в миллисекундах (3 секунды)
    const totalTime = 30000; // Общее время выполнения (30 секунд)

    const timer = setInterval(() => {
        console.log(new Date().toLocaleString()); // Выводим текущую дату
    }, interval);

    setTimeout(() => {
        clearInterval(timer); // Останавливаем интервал после 30 секунд
        console.log("30 секунд прошло"); 
    }, totalTime);
}

// Запускаем программу
logCurrentDateWithTimeout();

// Задание 4 Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
// Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, 
// а спустя 1 секунду. Используйте setTimeout.

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000);    
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Задание 5 Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.Допишите функцию delayForSecond так,
//  чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Исправленный вызов:
delayForSecond(() => sayHi('Глеб'));










