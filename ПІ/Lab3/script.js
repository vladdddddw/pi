// Завдання 1: Розрахунок площ
function calculateArea() {
    const length = parseFloat(document.getElementById("length").value) || 0;
    const width = parseFloat(document.getElementById("width").value) || 0;
    const area = length * width;
    document.getElementById("area-result").textContent = area.toFixed(2);
}

// Завдання 2 і 3: Екранна клавіатура
const uaKeyboard = ["а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я"];
const enKeyboard = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let currentKeyboard = uaKeyboard;

function renderKeyboard() {
    const keyboard = document.getElementById("keyboard");
    keyboard.innerHTML = "";
    currentKeyboard.forEach(letter => {
        const button = document.createElement("button");
        button.textContent = letter;
        button.onclick = () => addText(letter);
        keyboard.appendChild(button);
    });
}

function toggleKeyboard() {
    currentKeyboard = currentKeyboard === uaKeyboard ? enKeyboard : uaKeyboard;
    renderKeyboard();
}

function addText(char) {
    const textArea = document.getElementById("text-display");
    textArea.value += char;
}

function clearText() {
    document.getElementById("text-display").value = "";
}

let images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg", // Додайте сюди всі ваші зображення
];
let currentIndex = 0;

const imageDisplay = document.getElementById("image-display");

function updateImage() {
    imageDisplay.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Ініціалізуємо перше зображення
updateImage();


// Завдання 5: Арифметичні задачі
let score = 0;
let total = 0;
let currentQuestion;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    currentQuestion = { num1, num2, operator };
    document.getElementById("math-question").textContent = `${num1} ${operator} ${num2} = ?`;
}

function checkAnswer() {
    const answer = parseFloat(document.getElementById("math-answer").value);
    const { num1, num2, operator } = currentQuestion;
    const correctAnswer = eval(`${num1} ${operator} ${num2}`);
    total++;
    if (Math.abs(answer - correctAnswer) < 0.01) {
        score++;
        document.getElementById("result-feedback").textContent = "Правильно!";
    } else {
        document.getElementById("result-feedback").textContent = `Помилка, правильна відповідь: ${correctAnswer.toFixed(2)}`;
    }
    document.getElementById("score").textContent = score;
    document.getElementById("total").textContent = total;
}

function nextTask() {
    document.getElementById("math-answer").value = "";
    generateQuestion();
}

generateQuestion();
renderKeyboard();
