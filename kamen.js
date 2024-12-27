
function startRockPaperScissors() {
    const options = ["камень", "ножницы", "бумага"]; 
  
    let userChoice = prompt("Выбери: камень, ножницы или бумага").toLowerCase();//ввод игрока
  
    
    if (!options.includes(userChoice)) {// Проверяем ввод
      alert("Ты ввел что-то неверное. Попробуй еще раз.");
      return;
    }
      
    const computerChoice = options[Math.floor(Math.random() * options.length)];// выбор компьютера
  
    // Определяем победителя
    let result = "";
    if (userChoice === computerChoice) {
      result = "у нас ничья!";
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      result = "ты проиграл.";
    } else {
      result = "ты выиграл! :)";
    }
  
    // Выводим результаты
    alert(
      `Ты выкинул "${userChoice}".\nА я "${computerChoice}".\nПоэтому ${result}`
    );
  }
  
 