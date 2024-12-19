function calculateScore() {
    let totalScore = 0;

    // Очищення результатів
    clearResults();

    // Питання 1
    const question1 = document.getElementsByName("question1");
    let score1 = 0;
    let selectedAnswer1 = "";
    question1.forEach(option => {
        if (option.checked) {
            selectedAnswer1 = option.parentNode.textContent.trim();
            if (option.value === "2") score1 = 1;
        }
    });
    updateResult("selectedAnswer1", "score1", selectedAnswer1, score1);
    totalScore += score1;

    // Питання 2
    const question2 = document.getElementsByName("question2");
    let score2 = 0;
    const selectedAnswer2 = [];
    question2.forEach(option => {
        if (option.checked) {
            selectedAnswer2.push(option.parentNode.textContent.trim());
            if (option.value === "1") score2 += 0.5;
        }
    });
    updateResult("selectedAnswer2", "score2", selectedAnswer2.join(", "), score2);
    totalScore += score2;

    // Питання 3
    const question3 = document.querySelector("[name='question3']");
    const selectedAnswer3 = question3.options[question3.selectedIndex].text;
    const score3 = question3.value === "1" ? 1 : 0;
    updateResult("selectedAnswer3", "score3", selectedAnswer3, score3);
    totalScore += score3;

    // Питання 4
    const question4 = document.getElementById("question4").value.trim();
    const score4 = question4.toLowerCase() === "київ" ? 1 : 0;
    updateResult("selectedAnswer4", "score4", question4, score4);
    totalScore += score4;

    // Питання 5
    const question5 = document.querySelector("[name='question5']").selectedOptions;
    let score5 = 0;
    const selectedAnswer5 = Array.from(question5).map(opt => opt.text);
    score5 = selectedAnswer5.includes("5 + 5") && selectedAnswer5.includes("8 + 2") ? 2 : 0;
    updateResult("selectedAnswer5", "score5", selectedAnswer5.join(", "), score5);
    totalScore += score5;

    // Питання 6
    const question6 = document.getElementsByName("question6");
    let score6 = 0;
    let selectedAnswer6 = "";
    question6.forEach(option => {
        if (option.checked) {
            selectedAnswer6 = option.parentNode.textContent.trim();
            if (option.value === "1") score6 = 1;
        }
    });
    updateResult("selectedAnswer6", "score6", selectedAnswer6, score6);
    totalScore += score6;

    // Загальний бал
    document.getElementById("totalScore").textContent = totalScore;
}

function clearResults() {
    document.querySelectorAll("[id^='selectedAnswer'], [id^='score']").forEach(el => el.textContent = "");
}

function updateResult(answerId, scoreId, answer, score) {
    document.getElementById(answerId).textContent = answer || "Не обрано";
    document.getElementById(scoreId).textContent = score;
}
