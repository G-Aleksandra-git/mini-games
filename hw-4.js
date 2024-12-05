//Задание 1. Выведите в консоль 2 раза слово «Привет».
let i = 0;
while (i<2) {
    console.log("Привет");
    i++;
};

//Задание 2. Выведите в консоль цифры от 1 до 5.
let k = 0;
while (k<=5) {
    console.log(k);
    k++;    
};
//Задание 3. Выведите в консоль числа от 7 до 22.

let u = 7;
while (u<=22) {
    console.log(u);
    u++;    
};

//Задание 4
//Есть объект (назовем его obj), который содержит следующие пары ключ-значение:
//"Коля" : '200'
//"Вася" : '300'
//"Петя" : '400'
//Эти пары представляют собой имена сотрудников и их зарплаты в долларах. 
//Ваша задача написать код, который будет проходиться по всем записям этого объекта и выводить информацию о каждом сотруднике в формате: "имя сотрудника" — зарплата "сумма" долларов.
//Для итерации по объекту используйте цикл  for-in .

const obj = {
"Коля" : '200',
"Вася" : '300',
"Петя" : '400'
};
for (const key in obj) {
    console.log(`${key} - зарплата ${obj[key]} - долларов`);
};

//Задание 5 Дано число n=1000. Ваша задача — делить его на 2 до тех пор, пока результат деления не станет меньше 50.
//Определите, какое число получится в результате.
//Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную num.
let n = 1000;
let num = 0;
while (n>=50) {
    n = n / 2;
    num++;    
}
console.log(`Число в результате деления: ${n}`);
console.log(`ЧКоличество итераций: ${num}`);

// Задание 6. В вашей компании пятница является отчетным днем. Нужно написать программу, которая:
// считает дни месяца по датам,
// определяет, какой день пятница,
// выводит сообщение с напоминанием, что нужно подготовить еженедельный отчет.
// Условия задачи:
// Создайте переменную, которая хранит в себе номер первой пятницы месяца (число от 1 до 7).
// Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида: "Сегодня пятница, ...-е число. Необходимо подготовить отчет."
// Исходите из того, что в нашем месяце 31 день. Должно вывестись от 4 до 5 сообщений с напоминаниями по разным датам.

const firstFriday = 1;
const daysInMonth = 31; 

for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-ое число. Необходимо подготовить отчет.`);
}


//Дополнительные задания
//Задание 1. Дано число k = 100. Ваша задача — вычитать из него 7 до тех пор, 
// пока результат вычитания не станет меньше 0. Определите, какое число получится в результате. 
// Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, 
// и запишите это количество в переменную iterations.

let s = 100;
let iterations = 0;
while (s > 0 ) {
    s-=7;
    iterations++;
}
console.log(`Получившееся число: ${s}`);
console.log(`Количество итераций: ${iterations}`);

// Задание 2 Создайте массив months с названиями всех месяцев года. 
// Напишите программу, которая выводит название каждого месяца и его порядковый номер в году.
const months = [
    "Январь",
    "Февраль",
    "Март", 
    "Апрель", 
    "Май", 
    "Июнь",
    "Июль", 
    "Август", 
    "Сентябрь", 
    "Октябрь", 
    "Ноябрь", 
    "Декабрь"
];

for (let mon = 0; mon < months.length; mon++) {
    console.log(`Месяц ${mon + 1}: ${months[mon]}`);
}

// Задание 3 Создайте объект, описывающий книгу, с такими свойствами как "название", "автор", "год издания", "жанр". 
// Напишите код, который выводит все свойства этого объекта в консоль.
const book = {
    'Название': "Герой нашего времени",
    'Автор': "М.Ю. Лермонтов",
    'Год издания': 1840,
    'Жанр': "Роман"
};

for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}
// Задание 4 Создайте массив из 10 случайных чисел. 
// Напишите код, который находит минимальное число в массиве и выводит его в консоль.
const numbers = Array.from({ length: 10 }, () => Math.random() * 100 + 1);
console.log("Массив чисел:", numbers);

const minNumber = Math.min(...numbers);
console.log("Минимальное число:", minNumber);

// Array.from: создает массив определенной длины (в данном случае 10 элементов).
// Math.random() генерирует случайное число от 0 до 1.
// Math.min: функция, она возвращает минимальное значение из списка чисел.
// ...numbers: оператор расширения, который раскрывает массив 


