// Task 1: Clock
function startClock() {
    setInterval(() => {
        const now = new Date();
        const formattedTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ` +
            `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        document.getElementById("clock-display").innerText = formattedTime;
    }, 1000);
}

// Task 2: Calculator
let calcExpression = "";
function appendCalc(value) {
    calcExpression += value;
    document.getElementById("calc-display").value = calcExpression;
}
function clearCalc() {
    calcExpression = "";
    document.getElementById("calc-display").value = "";
}
function calculate() {
    try {
        calcExpression = eval(calcExpression).toString();
        document.getElementById("calc-display").value = calcExpression;
    } catch {
        alert("Invalid expression");
        clearCalc();
    }
}

// Task 3: Dynamic Table
function buildTable() {
    const rows = document.getElementById("rows").value;
    const cols = document.getElementById("cols").value;
    let tableHTML = "<table>";
    for (let i = 1; i <= rows; i++) {
        tableHTML += "<tr>";
        for (let j = 1; j <= cols; j++) {
            tableHTML += `<td><input type="number" id="cell-${i}-${j}" value="${i * j}"></td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    document.getElementById("table-container").innerHTML = tableHTML;
}

function calculateTable() {
    const rows = document.getElementById("rows").value;
    const cols = document.getElementById("cols").value;
    let sum = 0;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (i === j) { // Diagonal condition
                sum += Number(document.getElementById(`cell-${i}-${j}`).value);
            }
        }
    }
    alert(`Sum of diagonal elements: ${sum}`);
}

// Task 4: Console Outputs
console.log("Remainder:", 7 % 3);
console.log("Is even:", (7 % 2 === 0));
const sampleArray = [1, 2, 3];
console.log("Sample array: %o", sampleArray);

// Task 5: Console Methods
console.info("This is info");
console.warn("This is a warning");
console.error("This is an error");
console.dir({key: "value"});
console.time("Timer");
setTimeout(() => {
    console.timeEnd("Timer");
}, 1000);

// Initialize clock on load
startClock();
