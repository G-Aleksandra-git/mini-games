function startArithmetic() {
    const operations = ['+', '-', '*', '/'];
    const maxNumber = 100; // Максимальное значение числа в задаче

    while (true) {
        // Генерация случайных чисел и операции
        const num1 = Math.floor(Math.random() * maxNumber) + 1;
        const num2 = Math.floor(Math.random() * maxNumber) + 1;
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let correctAnswer;

        // Рассчитываем правильный ответ
        if (operation === '+') {
            correctAnswer = num1 + num2;
        } else if (operation === '-') {
            correctAnswer = num1 - num2;
        } else if (operation === '*') {
            correctAnswer = num1 * num2;
        } else if (operation === '/') {
            correctAnswer = (num1 / num2).toFixed(2); // Ответ с округлением до двух знаков
        }

        while (true) {
            // Запрашиваем ответ пользователя
            const userAnswer = prompt(`Реши: ${num1} ${operation} ${num2}`);

            // Выход из игры, если пользователь нажимает "Отмена"
            if (userAnswer === null) {
                alert('Возвращайся, когда будешь готов сыграть :)');
                return; // Завершаем игру
            }

            // Проверяем, является ли ввод числом
            if (isNaN(userAnswer)) {
                alert('Ты ввел что-то не то, попробуй еще раз.');
                continue; // Запрашиваем ввод снова
            }

            // Проверяем ответ
            if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
                alert('Верно! :) Молодец!');
            } else {
                alert(`Неверно! Правильный ответ: ${correctAnswer}`);
            }

            break; // Выходим из цикла после проверки ответа
        }

        // Спрашиваем, хочет ли пользователь продолжить
        const playAgain = confirm('Продолжаем? :)');
        if (!playAgain) {
            alert('Спасибо за игру! Надеюсь, скоро увидимся :)');
            break;
        }
    }
}
