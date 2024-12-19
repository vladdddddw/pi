function reverseSequence() {
    const inputSequence = document.getElementById("inputSequence").value;
    const reversedSequence = inputSequence.split(',').reverse().join(', ');
    document.getElementById("outputSequence").innerText = "Обернена послідовність: " + reversedSequence;
}

function removeZeros() {
    const inputArray = document.getElementById("inputArray").value;
    const modifiedArray = inputArray.split(',').map(Number).filter(num => num !== 0);
    document.getElementById("outputArray").innerText = "Модифікований масив: " + modifiedArray.join(', ');
}

function reverseText() {
    const inputText = document.getElementById("inputText").value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById("outputText").innerText = "Обернутий текст: " + reversedText;
}

function modifySentence() {
    const inputSentence = document.getElementById("inputSentence").value;
    const words = inputSentence.split(' ');
    // Поміняти друге і третє слово
    [words[1], words[2]] = [words[2], words[1]];
    // Замінити пропуски комами
    const modifiedSentence = words.join(',');
    document.getElementById("outputSentence").innerText = "Змінене речення: " + modifiedSentence;
}
function compareStrings() {
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;
    const result = compareStringLengths(string1, string2);
    document.getElementById("outputComparison").innerText = "Результат порівняння: " + result;
}

function searchCharInString() {
    const searchString = document.getElementById("searchString").value;
    const searchChar = document.getElementById("searchChar").value;
    const result = findCharIndices(searchString, searchChar);
    document.getElementById("outputSearch").innerText = "Індекси та кількість: " + result;
}

function capitalizeFirstChar() {
    const inputString = document.getElementById("capitalizeString").value;
    const result = capitalizeFirstCharacter(inputString);
    document.getElementById("outputCapitalize").innerText = "Результат: " + result;
}

function countVowels() {
    const vowelsString = document.getElementById("vowelsString").value;
    const result = countVowelsInString(vowelsString);
    document.getElementById("outputVowels").innerText = "Кількість голосних: " + result;
}

function checkForSpam() {
    const spamString = document.getElementById("spamString").value;
    const result = isSpam(spamString);
    document.getElementById("outputSpam").innerText = "Результат перевірки на спам: " + result;
}

function truncateString() {
    const truncateString = document.getElementById("truncateString").value;
    const maxLen = document.getElementById("maxLen").value;
    const result = truncate(truncateString, maxLen);
    document.getElementById("outputTruncate").innerText = "Результат скорочення: " + result;
}

function compareStringLengths(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
}

function findCharIndices(str, char) {
    const indices = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i);
            count++;
        }
    }

    return indices.length > 0
        ? `Індекси: ${indices.join(', ')}, Кількість: ${count}`
        : 'Символ не знайдено в рядку.';
}

function capitalizeFirstCharacter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function countVowelsInString(str) {
    const vowels = "аоіїюуияеєАОІЇЮУИЯЕЄ";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

function isSpam(str) {
    const spamWords = ["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте"];
    
    for (let spamWord of spamWords) {
        if (str.includes(spamWord)) {
            return true;
        }
    }

    return false;
}

function truncate(str, maxLen) {
    if (str.length <= maxLen) {
        return str;
    } else {
        return str.slice(0, maxLen - 3) + "...";
    }
}
function toCamelCase() {
    const snakeCaseInput = document.getElementById("camelCaseInput").value;
    const camelCaseOutput = convertToCamelCase(snakeCaseInput);
    document.getElementById("outputCamelCase").innerText = `Вхідний масив: [${snakeCaseInput}] \nВихідний масив: [${camelCaseOutput}]`;
}

function toSnakeCase() {
    const camelCaseInput = document.getElementById("snakeCaseInput").value;
    const snakeCaseOutput = convertToSnakeCase(camelCaseInput);
    document.getElementById("outputSnakeCase").innerText = `Вхідний масив: [${camelCaseInput}] \nВихідний масив: [${snakeCaseOutput}]`;
}

function replaceDateFormats() {
    const dateFormatInput = document.getElementById("dateFormatInput").value;
    const formattedText = replaceDateFormatsInText(dateFormatInput);
    document.getElementById("outputDateFormat").innerText = `Результат заміни: ${formattedText}`;
}

function convertToCamelCase(snakeCaseInput) {
    return snakeCaseInput.replace(/_([a-z])/g, (_, match) => match.toUpperCase());
}

function convertToSnakeCase(camelCaseInput) {
    return camelCaseInput.replace(/([A-Z])/g, '_$1').toLowerCase();
}

function replaceDateFormatsInText(text) {
    return text.replace(/(\d{4})\/(\d{2})\/(\d{2})/g, '$3.$2.$1');
}
