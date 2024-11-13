// Функция для преобразования строки в логический тип и вывода результата в alert
function convertAndAlert(inputStr) {
    let booleanValue;
    if (inputStr.toLowerCase() === "true") {
        booleanValue = true;
    } else if (inputStr.toLowerCase() === "false") {
        booleanValue = false;
    } else {
        throw new Error("Некорректное значение для преобразования в логический тип");
    }

    // Вывод результата в alert
    alert(booleanValue);
}

// Пример использования функции
convertAndAlert("true");  // Вывод: true
convertAndAlert("false"); // Вывод: false
