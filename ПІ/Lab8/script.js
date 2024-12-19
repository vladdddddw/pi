let time = { hours: 0, minutes: 0, seconds: 0 };

// Завдання 1.1: Виведення поточного часу
function showCurrentTime() {
    const now = new Date();
    time.hours = now.getHours();
    time.minutes = now.getMinutes();
    time.seconds = now.getSeconds();
    document.getElementById('current-time').textContent = `${time.hours}:${time.minutes}:${time.seconds}`;
}

// Завдання 1.2: Зміна часу (секунди)
function changeSeconds() {
    const seconds = parseInt(document.getElementById('change-seconds').value);
    const date = new Date();
    date.setHours(time.hours, time.minutes, time.seconds + seconds);
    updateTime(date);
}

// Завдання 1.3: Зміна часу (хвилини)
function changeMinutes() {
    const minutes = parseInt(document.getElementById('change-minutes').value);
    const date = new Date();
    date.setHours(time.hours, time.minutes + minutes, time.seconds);
    updateTime(date);
}

// Завдання 1.4: Зміна часу (години)
function changeHours() {
    const hours = parseInt(document.getElementById('change-hours').value);
    const date = new Date();
    date.setHours(time.hours + hours, time.minutes, time.seconds);
    updateTime(date);
}

function updateTime(date) {
    time.hours = date.getHours();
    time.minutes = date.getMinutes();
    time.seconds = date.getSeconds();
    showCurrentTime();
}

// Завдання 2.1: Поточна дата, день тижня і час
function showCurrentDateTime() {
    const now = new Date();
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
    document.getElementById('current-date-time').textContent = `Дата: ${now.toLocaleDateString()} \nДень тижня: ${days[now.getDay()]} \nЧас: ${now.getHours()}:${now.getMinutes()}`;
}

// Завдання 2.2: Інформація про день тижня
function getDayInfo() {
    const now = new Date();
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
    const dayInfo = {
        dayNumber: now.getDay() + 1,
        dayName: days[now.getDay()]
    };
    document.getElementById('day-info').textContent = `Номер тижня: ${dayInfo.dayNumber}\nНазва дня тижня: ${dayInfo.dayName}`;
}

// Завдання 2.3: Дата N днів назад чи вперед
function shiftDate() {
    const days = parseInt(document.getElementById('days-shift').value);
    const now = new Date();
    now.setDate(now.getDate() + days);
    document.getElementById('shifted-date').textContent = now.toDateString();
}

// Завдання 2.4: Останній день місяця
function getLastDayOfMonth() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value) - 1;
    const date = new Date(year, month + 1, 0);
    document.getElementById('last-day').textContent = `Останній день: ${date.getDate()}`;
}

// Завдання 2.5: Кількість секунд
function getSecondsInfo() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const secondsPassed = Math.floor((now - startOfDay) / 1000);
    const secondsRemaining = Math.floor((endOfDay - now) / 1000);
    document.getElementById('seconds-info').textContent = `Пройшло: ${secondsPassed} сек. До початку наступного дня: ${secondsRemaining} сек.`;
}

// Завдання 2.6: Інформація про дату
function processInputDate() {
    const input = document.getElementById('input-date').value;
    const [datePart, timePart] = input.split(' ');
    const [day, month, year] = datePart.split('.').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    const inputDate = new Date(year, month - 1, day, hours, minutes);
    const now = new Date();
    const diff = (now - inputDate) / 1000;

    let result;
    if (diff < 60) {
        result = `${Math.floor(diff)} сек. назад`;
    } else if (diff < 3600) {
        result = `${Math.floor(diff / 60)} хв. назад`;
    } else {
        result = inputDate.toLocaleString('uk-UA');
    }

    document.getElementById('date-info').textContent = result;
}
