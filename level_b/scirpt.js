console.clear();
console.log("========== УРОВЕНЬ B ==========");
// Задание 216. Вывод элементов массива
console.log("\nЗадание 216. Массив пользователей");
let users = ["Алия", "Иван", "Данияр", "Мария"];
console.log("Все пользователи:");
users.forEach(function(user, index) {
    console.log(index + 1 + ".", user);
});
// Задание 217. Подсчёт суммы чисел
console.log("\nЗадание 217. Сумма чисел");
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log("Числа:", numbers);
console.log("Сумма:", sum);
// Задание 218. Поиск максимального значения
console.log("\nЗадание 218. Максимальное значение");
let values = [14, 52, 8, 91, 37];
let maximum = Math.max(...values);
console.log("Массив:", values);
console.log("Максимальное значение:", maximum);
// Задание 219. Подсчёт длины строки
console.log("\nЗадание 219. Длина строки");
let message = "Искусственный интеллект";
console.log("Строка:", message);
console.log("Количество символов:", message.length);
// Задание 220. Фильтрация файлов по расширению
console.log("\nЗадание 220. Фильтрация файлов");
let files = [
    "index.html",
    "style.css",
    "script.js",
    "image.png",
    "app.js",
    "document.pdf"
];
let jsFiles = files.filter(function(file) {
    return file.endsWith(".js");
});
console.log("Все файлы:", files);
console.log("JavaScript-файлы:", jsFiles);
// Задание 221. Генерация случайных оценок
console.log("\nЗадание 221. Случайные оценки");
let grades = [];
for (let i = 0; i < 5; i++) {
    grades.push(Math.floor(Math.random() * 5) + 1);
}
console.log("Оценки:", grades);
// Задание 222. Подсчёт положительных чисел
console.log("\nЗадание 222. Положительные числа");
let mixedNumbers = [-5, 12, 0, 8, -2, 17, 4];
let positiveNumbers = mixedNumbers.filter(function(number) {
    return number > 0;
});
console.log("Исходный массив:", mixedNumbers);
console.log("Положительные числа:", positiveNumbers);
console.log("Количество положительных чисел:", positiveNumbers.length);
// Задание 223. Среднее значение массива
console.log("\nЗадание 223. Среднее значение");
let marks = [4, 5, 3, 5, 4];
let total = marks.reduce(function(accumulator, mark) {
    return accumulator + mark;
}, 0);
let average = total / marks.length;
console.log("Оценки:", marks);
console.log("Сумма оценок:", total);
console.log("Средняя оценка:", average.toFixed(2));
console.log("\n========== УРОВЕНЬ B ЗАВЕРШЁН ==========");