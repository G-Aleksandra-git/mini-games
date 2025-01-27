
function startGuessingNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
    let userGuess = null; // Переменная для хранения ввода пользователя
    let attempts = 0; // Счётчик попыток
    const lastFiveGuesses = []; // Массив для хранения последних пяти ответов

    alert("Я загадал число от 1 до 100. Попробуй угадать!");

    while (userGuess !== randomNumber) {
        const userInput = prompt("Введи своё предположение:");

        // Обрабатываем нажатие "Отмена"
        if (userInput === null) {
            alert("Возвращайся, когда будешь готов сыграть :)");
            return; // Завершаем игру
        }

        // Преобразуем ввод пользователя в число
        userGuess = parseInt(userInput, 10);

        if (isNaN(userGuess)) {
            alert("Пожалуйста, введи корректное число!");
            continue; // Если введено не число, запрашиваем снова
        }

        attempts++; // Увеличиваем количество попыток

        // Добавляем попытку в массив, оставляем только 5 последних попыток
        lastFiveGuesses.push(userGuess);
        if (lastFiveGuesses.length > 5) {
            lastFiveGuesses.shift(); // Удаляем самый старый элемент, если их больше пяти
        }

        if (userGuess < randomNumber) {
            alert(`Загаданное число больше! Твои последние попытки: ${lastFiveGuesses.join(", ")}`);
        } else if (userGuess > randomNumber) {
            alert(`Загаданное число меньше! Твои последние попытки: ${lastFiveGuesses.join(", ")}`);
        } else {
            alert(`Поздравляем! Ты угадал число ${randomNumber} за ${attempts} попыток.`);
            break; // Завершаем цикл когда число угадано
        }
    }
}

