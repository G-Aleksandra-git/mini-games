// Массив вопросов и  ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2, // номер правильного ответа
        correctText: "Синий" // текст правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2,
        correctText: "Семь"
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2,
        correctText: "Пять"
    }
];

// Функция для запуска викторины
function startQuiz() {
    let correctAnswersCount = 0;

    // Проходим по каждому вопросу в массиве
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];

        // Запрашиваем ответ пользователя
        const userAnswer = prompt(
            `${currentQuestion.question}\n${currentQuestion.options.join("\n")}`
        );

        // Проверяем, нажал ли пользователь "Отмена"
        if (userAnswer === null) {
            alert("Возвращайся, когда будешь готов сыграть :)");
            return; 
        }

        // Проверяем правильность ответа
        if (
            parseInt(userAnswer) === currentQuestion.correctAnswer || // Проверка номера
            userAnswer?.trim().toLowerCase() === currentQuestion.correctText.toLowerCase() // Проверка текста
        ) {
            correctAnswersCount++;
        }
    }

    // Выводим результат
    alert(`Игра окончена! Ты ответил верно на ${correctAnswersCount} из ${quiz.length} вопросов.`);
}
