  
function startRockPaperScissors() {
  const options = ["камень", "ножницы", "бумага"];
  
  // Для повторного запуска игры
  let playAgain = true;

  while (playAgain) {
      // Запрашиваем выбор пользователя
      let userChoice = prompt("Выбери: камень, ножницы или бумага");

      // Проверяем, нажал ли пользователь "Отмена"
      if (userChoice === null) {
          alert("Возвращайся, когда будешь готов сыграть :)");
          return; // Завершаем игру
      }

      userChoice = userChoice.toLowerCase(); // Приводим ввод к нижнему регистру

      // Проверяем правильность ввода
      if (!options.includes(userChoice)) {
          alert("Ты ввел что-то не то... Попробуй снова.");
          continue; // Начинаем цикл заново
      }

      // Выбор компьютера
      const computerChoice = options[Math.floor(Math.random() * options.length)];

      // Определяем победителя
      let result = "";
      if (userChoice === computerChoice) {
          result = "победила дружба! :)";
      } else if (
          (userChoice === "камень" && computerChoice === "ножницы") ||
          (userChoice === "ножницы" && computerChoice === "бумага") ||
          (userChoice === "бумага" && computerChoice === "камень")
      ) {
          result = "ты победил! Поздравляю! :)";
      } else {
          result = "увы, ты проиграл.";
      }

      // Показываем результаты
      alert(
          `Ты выбрал "${userChoice}".\nЯ выбрал "${computerChoice}".\nПоэтому ${result}!`
      );

      // Спрашиваем, хочет ли пользователь сыграть еще раз
      playAgain = confirm("Хочешь еще разок? :)");
  }

  // Сообщение после завершения всех игр
  alert("Спасибо за игру! Приходи еще!");
}
