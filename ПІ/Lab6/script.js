// Розбір e-mail
let s = "dwbyu@mail.ua";
let r = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)*$/i;
let a = s.match(r);
let emailAnalysis = document.getElementById("emailAnalysis");
for (let i = 0; i < a.length; i++) {
    emailAnalysis.innerHTML += `<hr> a[${i}] ${a[i] || '@'}`;
}

// Функція валідації
function validateForm() {
    // Email
    let email = document.getElementById("email");
    let emailFeedback = document.getElementById("emailFeedback");
    let emailRegex = /^[a-z0-9._%+-]+@pnu\.edu\.ua$/i;
    validateField(email, emailRegex, emailFeedback, "E-mail має бути у форматі @pnu.edu.ua");

    // Ім'я та прізвище
    let name = document.getElementById("name");
    let nameFeedback = document.getElementById("nameFeedback");
    let nameRegex = /^[A-ZА-Я][a-zа-я]+ [A-ZА-Я]+$/;
    validateField(name, nameRegex, nameFeedback, "Ім'я має починатися з великої, а прізвище має бути великими літерами.");

    // Логін
    let login = document.getElementById("login");
    let loginFeedback = document.getElementById("loginFeedback");
    let loginRegex = /^[a-zA-Z0-9]+$/;
    validateField(login, loginRegex, loginFeedback, "Логін повинен містити тільки латиницю.");

    // Пароль
    let password = document.getElementById("password");
    let passwordFeedback = document.getElementById("passwordFeedback");
    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[-!@#$%^&*])[a-zA-Z\d-!@#$%^&*]{8,}$/;
    validateField(password, passwordRegex, passwordFeedback, "Пароль повинен мати мінімум 8 символів, цифри, букви та спецсимвол.");

    // Поштовий індекс
    let postalCode = document.getElementById("postal-code");
    let postalCodeFeedback = document.getElementById("postalCodeFeedback");
    let postalCodeRegex = /^\d{5}$/;
    validateField(postalCode, postalCodeRegex, postalCodeFeedback, "Поштовий індекс повинен складатися з 5 цифр.");
}

// Допоміжна функція валідації
function validateField(field, regex, feedback, errorMessage) {
    if (regex.test(field.value)) {
        field.style.borderColor = "green";
        feedback.textContent = "✓";
        feedback.style.color = "green";
    } else {
        field.style.borderColor = "red";
        feedback.textContent = errorMessage;
        feedback.style.color = "red";
    }
}
