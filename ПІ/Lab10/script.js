$(document).ready(function() {
    // Завдання 2: Виведення тексту в першому і останньому абзаці
    $("p:first").text("DOM first!");
    $("#lastParagraph").text("DOM last!");  // Вибираємо за ID останній абзац

    // Завдання 2: Додавання hover ефекту на div
    $('#specialDiv').hover(
        function() {
            $(this).addClass('hover-style');
        },
        function() {
            $(this).removeClass('hover-style');
        }
    );

    // Завдання 3: Обробка одинарного і подвійного кліку на specialDiv
    $('#specialDiv').click(function() {
        $(this).css('border', '2px solid black').css('background-color', 'yellow');
    });

    $('#specialDiv').dblclick(function() {
        $(this).css('border', '').css('background-color', '');
    });

    // Завдання 3: Повідомлення про одинарний та подвійний клік на кнопках
    $('#singleClickBtn').click(function() {
        alert('Одинарний клік');
    });

    $('#doubleClickBtn').dblclick(function() {
        alert('Подвійний клік');
    });

    // Завдання 3: Показати зображення при кліку
    $('#showImage').click(function() {
        $('#image').show();
    });

    // Приховати зображення при кліку на нього
    $('#image').click(function() {
        $(this).hide();
    });

    // Показати спливаюче повідомлення при наведенні на зображення
    $('#image').mouseover(function() {
        $(this).attr('title', 'Це Кункка, герой з Dota 2');
    });

    $('#image').mouseout(function() {
        $(this).removeAttr('title');
    });

    // Завдання 4: Перевірка введеного слова
    $('#validationForm').submit(function() {
        const userInput = $('#userInput').val();
        if (userInput === "correct") {
            $('#validationMessage').text("Успішно!").show();
            return true;
        }
        $('#validationMessage').text("Неправильно!").show().fadeOut(1000);
        return false;
    });
});
