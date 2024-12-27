function startTurnTheTextOver() {
    let continuePlaying = true;

    while (continuePlaying) {
        // Запрашиваем текст у пользователя
        const userInput = prompt("Введи слово или фразу задом наперед. Пошаманю и посмотрим, что получилось :)");

        // Проверяем, чтобы пользователь что-то ввел
        if (userInput === null || userInput.trim() === "") {
            alert("Ты ничего не ввел. Для магии нужно хотя бы одно слово.");
            continue;
        }

        // Переворачиваем текст
        const reversedText = userInput.split('').reverse().join('');

        // Показываем результат пользователю
        alert(`Абракадабра... еще немного магии... Ты ввел "${reversedText}"?`);

        // Узнаем, хочет ли пользователь продолжить
        const playAgain = confirm("Сыграем еще раз?");
        if (!playAgain) {
            continuePlaying = false;
            alert("Спасибо за игру! До встречи!");
        }
    }
}
 