console.clear();
console.log("========== УРОВЕНЬ A ==========");
// Задание 211. Проверка количества токенов
console.log("\nЗадание 211. Проверка количества токенов");
let tokens = 850;
let tokenLimit = 1000;
if (tokens <= tokenLimit) {
    console.log("Запрос разрешён.");
} else {
    console.log("Превышен лимит токенов.");
}
console.log("Использовано токенов:", tokens);
console.log("Лимит:", tokenLimit);
// Задание 212. Проверка готовности студента
console.log("\nЗадание 212. Проверка готовности");
let completedTasks = 8;
let requiredTasks = 10;
if (completedTasks >= requiredTasks) {
    console.log("Студент готов к сдаче работы.");
} else {
    console.log("Нужно выполнить ещё", requiredTasks - completedTasks, "задания.");
}
// Задание 213. Расчёт стоимости оперативной памяти сервера
console.log("\nЗадание 213. Стоимость RAM сервера");
let ramGB = 16;
let pricePerGB = 500;
let ramCost = ramGB * pricePerGB;
console.log("Объём RAM:", ramGB, "ГБ");
console.log("Цена за 1 ГБ:", pricePerGB, "тенге");
console.log("Общая стоимость:", ramCost, "тенге");
// Задание 214. Проверка количества ошибок
console.log("\nЗадание 214. Проверка ошибок");
let errorCount = 3;
if (errorCount === 0) {
    console.log("Ошибок нет.");
} else if (errorCount <= 3) {
    console.log("Небольшое количество ошибок:", errorCount);
} else {
    console.log("Слишком много ошибок:", errorCount);
}
// Задание 215. Статус запроса
console.log("\nЗадание 215. Статус запроса");
let requestStatus = "success";
if (requestStatus === "success") {
    console.log("Запрос выполнен успешно.");
} else if (requestStatus === "pending") {
    console.log("Запрос обрабатывается.");
} else if (requestStatus === "error") {
    console.log("При выполнении запроса произошла ошибка.");
} else {
    console.log("Неизвестный статус запроса.");
}
console.log("\n========== УРОВЕНЬ A ЗАВЕРШЁН ==========");