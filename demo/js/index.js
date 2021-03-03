new slidePlaceholder({
    className: "slidePlaceholder",  // класс input в html 
    arrText: ["Смартфоны", "Электроника", "Косметика"], // Массив с текстом для перебора 
    pauseNextSymbol: 100,// Пауза для каждого символа  (по умл: 200)
    pauseDeleteSymbol: 50,// Пауза для каждого символа при удалении  (по умл: 200)
    pauseNextText: 1000, // Пауза для каждого нового слова  (по умл: 0)
    pauseHideText: 1000,// Пауза перед тем как текст будет уходить (по умл: 0)
    cursor: true, // курсор (по умл: false)
   pauseFocus: 1000, // задержка при  фокуса (по умл: 0)
   // repeat: 2 // Сколько раз должна проиграть слайдер (по умл: "infinite")
}).start();