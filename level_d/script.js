console.log("========== УРОВЕНЬ D: МИНИ-ПРОЕКТЫ ==========");
// Задание 231. Тестирование знаний
const questions = [
    {
        question: "1. Как объявить переменную в JavaScript?",
        answers: ["var", "print", "echo"],
        correct: 0
    },
    {
        question: "2. Как вывести сообщение в консоль?",
        answers: ["console.log()", "console.write()", "print()"],
        correct: 0
    },
    {
        question: "3. Какой оператор проверяет строгое равенство?",
        answers: ["=", "===", "!="],
        correct: 1
    },
    {
        question: "4. Как создать массив?",
        answers: ["{}", "[]", "()"],
        correct: 1
    },
    {
        question: "5. Как объявить функцию?",
        answers: ["function", "create", "method"],
        correct: 0
    },
    {
        question: "6. Как получить длину массива arr?",
        answers: ["arr.size", "arr.length", "arr.count"],
        correct: 1
    },
    {
        question: "7. Как добавить элемент в конец массива?",
        answers: ["push()", "pop()", "shift()"],
        correct: 0
    },
    {
        question: "8. Как записать условие?",
        answers: ["if", "for", "return"],
        correct: 0
    },
    {
        question: "9. Как преобразовать строку в число?",
        answers: ["Number()", "String()", "Boolean()"],
        correct: 0
    },
    {
        question: "10. Как сохранить данные в localStorage?",
        answers: [
            "localStorage.setItem()",
            "localStorage.save()",
            "localStorage.add()"
        ],
        correct: 0
    }
];
const quizContainer = document.getElementById("quiz");
questions.forEach(function(question, index) {
    const block = document.createElement("div");
    block.className = "question";
    const title = document.createElement("p");
    title.textContent = question.question;
    block.appendChild(title);
    question.answers.forEach(function(answer, answerIndex) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "question" + index;
        radio.value = answerIndex;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + answer));
        block.appendChild(label);
        block.appendChild(document.createElement("br"));
    });
    quizContainer.appendChild(block);
});
document.getElementById("finishQuiz").addEventListener("click", function() {
    let score = 0;
    let answered = 0;
    questions.forEach(function(question, index) {
        const selected = document.querySelector(
            'input[name="question' + index + '"]:checked'
        );
        if (selected) {
            answered++;
            if (Number(selected.value) === question.correct) {
                score++;
            }
        }
    });
    const result =
        "Отвечено: " + answered + " из " + questions.length +
        "\nПравильных ответов: " + score +
        "\nРезультат: " + Math.round(score / questions.length * 100) + "%";
    document.getElementById("quizResult").textContent = result;
    console.log("Задание 231:", result);
});
// Задание 232. Заявки на оборудование
let requests = [];
try {
    requests = JSON.parse(localStorage.getItem("equipmentRequests")) || [];
} catch (error) {
    requests = [];
}
function saveRequests() {
    localStorage.setItem("equipmentRequests", JSON.stringify(requests));
}
function renderRequests() {
    const list = document.getElementById("requests");
    list.innerHTML = "";
    requests.forEach(function(request, index) {
        const item = document.createElement("li");
        item.textContent =
            request.equipment + " — " + request.student + " ";
        const removeButton = document.createElement("button");
        removeButton.textContent = "Удалить";
        removeButton.addEventListener("click", function() {
            requests.splice(index, 1);
            saveRequests();
            renderRequests();
            console.log("Заявка удалена.");
        });
        item.appendChild(removeButton);
        list.appendChild(item);
    });
}
document.getElementById("addRequest").addEventListener("click", function() {
    const equipment = document.getElementById("requestName").value.trim();
    const student = document.getElementById("requestStudent").value.trim();
    if (!equipment || !student) {
        alert("Заполни название оборудования и имя студента.");
        return;
    }
    requests.push({
        equipment: equipment,
        student: student,
        date: new Date().toLocaleDateString()
    });
    saveRequests();
    renderRequests();
    console.log("Задание 232. Добавлена заявка:", equipment, student);
    document.getElementById("requestName").value = "";
    document.getElementById("requestStudent").value = "";
});
renderRequests();
// Задание 233. Статистика студентов
const students = [
    { name: "Алия", grade: 5 },
    { name: "Иван", grade: 4 },
    { name: "Данияр", grade: 3 },
    { name: "Мария", grade: 5 },
    { name: "Азамат", grade: 4 }
];
document.getElementById("showStats").addEventListener("click", function() {
    const total = students.reduce(function(sum, student) {
        return sum + student.grade;
    }, 0);
    const average = total / students.length;
    const excellent = students.filter(function(student) {
        return student.grade === 5;
    }).length;
    let report = "Количество студентов: " + students.length +
        "\nСредняя оценка: " + average.toFixed(2) +
        "\nОтличные оценки: " + excellent + "\n\n";
    students.forEach(function(student) {
        report += student.name + ": " + student.grade + "\n";
    });
    document.getElementById("stats").textContent = report;
    console.log("Задание 233. Статистика:\n" + report);
});
// Задание 234. Чат-бот на основе правил
const chatHistory = [];
function getBotAnswer(message) {
    const text = message.toLowerCase();
    if (text.includes("привет") || text.includes("здравствуй")) {
        return "Привет! Чем могу помочь?";
    }
    if (text.includes("имя")) {
        return "Я учебный JavaScript-бот.";
    }
    if (text.includes("javascript") || text.includes("код")) {
        return "JavaScript позволяет создавать интерактивные сайты.";
    }
    if (text.includes("помощь")) {
        return "Я могу рассказать о JavaScript, коде и учебных заданиях.";
    }
    if (text.includes("пока")) {
        return "Пока! Удачи в учёбе!";
    }
    return "Я пока не знаю ответа. Попробуй спросить о JavaScript.";
}
document.getElementById("sendChat").addEventListener("click", function() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (!message) {
        return;
    }
    const answer = getBotAnswer(message);
    chatHistory.push({
        user: message,
        bot: answer
    });
    const output = document.getElementById("chatOutput");
    output.textContent = "";
    chatHistory.forEach(function(item) {
        output.textContent +=
            "Ты: " + item.user + "\n" +
            "Бот: " + item.bot + "\n\n";
    });
    console.log("Задание 234. Пользователь:", message);
    console.log("Ответ бота:", answer);
    input.value = "";
});
document.getElementById("chatInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("sendChat").click();
    }
});
// Задание 235. Менеджер лаборатории
let equipment = [];
try {
    equipment = JSON.parse(localStorage.getItem("labEquipment")) || [];
} catch (error) {
    equipment = [];
}
function saveEquipment() {
    localStorage.setItem("labEquipment", JSON.stringify(equipment));
}
function renderEquipment() {
    const list = document.getElementById("equipmentList");
    const filter = document.getElementById("statusFilter").value;
    list.innerHTML = "";
    const filteredEquipment = equipment.filter(function(item) {
        return filter === "Все" || item.status === filter;
    });
    filteredEquipment.forEach(function(item) {
        const li = document.createElement("li");
        li.appendChild(
            document.createTextNode(item.name + " — " + item.status + " ")
        );
        const statusSelect = document.createElement("select");
        ["Доступно", "Выдано", "На ремонте"].forEach(function(status) {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            statusSelect.appendChild(option);
        });
        statusSelect.value = item.status;
        statusSelect.addEventListener("change", function() {
            item.status = statusSelect.value;
            saveEquipment();
            renderEquipment();
            console.log("Статус изменён:", item.name, item.status);
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", function() {
            equipment = equipment.filter(function(current) {
                return current.id !== item.id;
            });
            saveEquipment();
            renderEquipment();
            console.log("Оборудование удалено:", item.name);
        });
        li.appendChild(statusSelect);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
    console.log("Задание 235. Оборудование:", filteredEquipment);
}
document.getElementById("addEquipment").addEventListener("click", function() {
    const nameInput = document.getElementById("equipmentName");
    const status = document.getElementById("equipmentStatus").value;
    const name = nameInput.value.trim();
    if (!name) {
        alert("Введи название оборудования.");
        return;
    }
    equipment.push({
        id: Date.now() + Math.random(),
        name: name,
        status: status
    });
    saveEquipment();
    renderEquipment();
    console.log("Оборудование добавлено:", name, status);
    nameInput.value = "";
});
document.getElementById("statusFilter").addEventListener("change", renderEquipment);
document.getElementById("exportCSV").addEventListener("click", function() {
    const rows = [
        ["Название оборудования", "Статус"],
        ...equipment.map(function(item) {
            return [item.name, item.status];
        })
    ];
    const csv = rows.map(function(row) {
        return row.map(function(value) {
            return '"' + String(value).replace(/"/g, '""') + '"';
        }).join(";");
    }).join("\n");
    const blob = new Blob(["\uFEFF" + csv], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lab-equipment.csv";
    link.click();
    URL.revokeObjectURL(url);
    console.log("Задание 235. CSV-файл подготовлен.");
});
renderEquipment();
console.log("========== УРОВЕНЬ D ЗАГРУЖЕН ==========");