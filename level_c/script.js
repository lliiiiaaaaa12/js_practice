console.clear();
console.log("========== УРОВЕНЬ C ==========");
// Задание 224. Функция расчёта стоимости
console.log("\nЗадание 224. Расчёт стоимости");
function calculateCost(quantity, price) {
    return quantity * price;
}
console.log("Стоимость:", calculateCost(5, 1200), "тенге");
// Задание 225. Объект сервера
console.log("\nЗадание 225. Информация о сервере");
let server = {
    name: "Server-01",
    ram: 32,
    storage: 1000,
    status: "Работает"
};
console.log("Название:", server.name);
console.log("Оперативная память:", server.ram, "ГБ");
console.log("Хранилище:", server.storage, "ГБ");
console.log("Статус:", server.status);
// Задание 226. Расчёт стоимости использования AI
console.log("\nЗадание 226. Стоимость AI");
function calculateAIPrice(tokens, pricePerThousand) {
    return tokens / 1000 * pricePerThousand;
}
let aiTokens = 25000;
let pricePerThousand = 15;
let aiCost = calculateAIPrice(aiTokens, pricePerThousand);
console.log("Количество токенов:", aiTokens);
console.log("Цена за 1000 токенов:", pricePerThousand, "тенге");
console.log("Стоимость:", aiCost, "тенге");
// Задание 227. Проверка занятости кабинетов
console.log("\nЗадание 227. Занятость кабинетов");
let rooms = [
    { number: 101, occupied: true },
    { number: 102, occupied: false },
    { number: 103, occupied: true },
    { number: 104, occupied: false },
    { number: 105, occupied: true }
];
rooms.forEach(function(room) {
    let status = room.occupied ? "Занят" : "Свободен";
    console.log("Кабинет", room.number + ":", status);
});
let freeRooms = rooms.filter(function(room) {
    return !room.occupied;
});
console.log("Количество свободных кабинетов:", freeRooms.length);
// Задание 228. Анализ активности пользователей
console.log("\nЗадание 228. Активность пользователей");
let activity = [
    { name: "Алия", minutes: 45 },
    { name: "Иван", minutes: 15 },
    { name: "Данияр", minutes: 70 },
    { name: "Мария", minutes: 30 }
];
activity.forEach(function(user) {
    console.log(user.name + ":", user.minutes, "минут");
});
let activeUsers = activity.filter(function(user) {
    return user.minutes >= 30;
});
console.log("Активные пользователи:", activeUsers.map(user => user.name));
// Задание 229. Проверка бюджета проекта
console.log("\nЗадание 229. Бюджет проекта");
let budget = 150000;
let expenses = [25000, 40000, 15000, 30000];
let totalExpenses = expenses.reduce(function(total, expense) {
    return total + expense;
}, 0);
let remainingBudget = budget - totalExpenses;
console.log("Бюджет:", budget, "тенге");
console.log("Расходы:", totalExpenses, "тенге");
console.log("Остаток:", remainingBudget, "тенге");
if (remainingBudget >= 0) {
    console.log("Проект укладывается в бюджет.");
} else {
    console.log("Бюджет превышен на", Math.abs(remainingBudget), "тенге.");
}
// Задание 230. Распределение задач между участниками
console.log("\nЗадание 230. Распределение задач");
let team = ["Алия", "Иван", "Данияр"];
let tasks = [
    "Создать интерфейс",
    "Написать JavaScript",
    "Проверить программу",
    "Подготовить отчёт",
    "Исправить ошибки",
    "Сделать презентацию"
];
let distribution = {};
team.forEach(function(member) {
    distribution[member] = [];
});
tasks.forEach(function(task, index) {
    let member = team[index % team.length];
    distribution[member].push(task);
});
for (let member in distribution) {
    console.log("\n" + member + ":");
    distribution[member].forEach(function(task) {
        console.log("-", task);
    });
}
console.log("\n========== УРОВЕНЬ C ЗАВЕРШЁН ==========");