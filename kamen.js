
function startRockPaperScissors() {
    const options = ["камень", "ножницы", "бумага"];
    
      //для повторного запуска игры
    let playAgain = true;
    
    while (playAgain) {        
        let userChoice = prompt("Выбери: камень, ножницы или бумага").toLowerCase();
            
        if (!options.includes(userChoice)) {// Проверяем правильность ввода
          alert("Ты ввел что-то не то... Попробуйте снова.");
          continue; // идем к началу цикла
        }
    
        // выбор компьютера
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
          result = "увы, ты проиграл";
        }
    
        // показываем результаты
        alert(
          `Ты выкинул "${userChoice}".\nЯ выкинул "${computerChoice}".\nПоэтому ${result}!`
        );
    
        // Спрашиваем, хочет ли сыграть еще раз
        playAgain = confirm("Хочешь еще разок? :)");
    }
    
      // Сообщение после завершения всех игр
    alert("Спасибо за игру! Приходи еще!");
}
  
  
 