// Завдання 1
document.getElementById("student-info").innerText =
    "Привіт! Мене звати Королюк Владислав Андрійович, студент групи ІПЗ-22.";

function showBirthInfo() {
    alert("Я народився 20.12.2005 року в місті Тлумач.");
}

// Завдання 2
function calculation() {
    const x = 14; // Номер варіанта
    const y = 5;
    const result = x * y + 10; // Формула прикладу
    alert("Результат обчислення: " + result);
}

// Завдання 3
function onBlurEvent() {
    document.getElementById("output-field").value = "Фокус було втрачено.";
}

function onSelectEvent() {
    document.getElementById("output-field").value = "Текст було виділено.";
}

// Завдання 4
function calculate() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    let d;
    if (a * b * c > 0) {
        d = a * b - c;
    } else if (a * b * c < 0) {
        d = a - b * c;
    } else {
        d = a * c - Math.sqrt(Math.abs(b));
    }

    document.getElementById("result").value = d.toFixed(2);
}

// Завдання 5
function calculateSeries() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    let sum = 0.0, i = 1, cur = 0.0;
    const epsilon = 0.001;

    do {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        cur = (2 * a * i * i + i / b) / (factorial * factorial);
        sum += cur;
        i++;
    } while (Math.abs(cur) > epsilon);

    document.getElementById("result-series").value = sum.toFixed(5);
}

// Завдання 6 та 7
const products = ["Зошит", "Ручка", "Олівець", "Папір"];
const quantities = [50, 200, 150, 100];
const prices = [20, 10.5, 5, 25];

let selectedIndex = -1;

function displayProductInfo() {
    const productDropdown = document.getElementById("productDropdown");
    selectedIndex = productDropdown.value;

    if (selectedIndex !== "") {
        document.getElementById("quantity").value = quantities[selectedIndex];
        document.getElementById("price").value = prices[selectedIndex];
    } else {
        alert("Будь ласка, виберіть товар зі списку!");
    }
}

function calculateTotal() {
    if (selectedIndex !== -1) {
        const total = quantities[selectedIndex] * prices[selectedIndex];
        document.getElementById("total").value = "Загальна сума: " + total + " грн";
    } else {
        alert("Спочатку виберіть товар!");
    }
}
