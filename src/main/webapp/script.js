const table = document.getElementById("checkTable");
const message = document.getElementById("message");
showFadeOut("#message")
let x;
let y;
let r;

window.onload = function() {
    load();
}

const buttons = document.getElementsByClassName("y-param");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
        e.preventDefault();

        y = this.value;
        console.log(y);
    }
}

document.getElementById("checkButton").onclick = async function (e) {
    e.preventDefault();

    x = $("input[name='x-param']").val();
    if (!(validateX(x) && validateY(y) && validateR())) {
        return;
    }

    let date = new Date();
    let start = dateToString(date);

    let json = await checkPoint(x, y, r, start);
    showFadeOut("#message");

    if (!(json.error == null || json.error == "")) {
        changeMessage(json.error);
        showFadeIn("#message");
        return;
    }

    append(x, y, r, json.result, start, json.time);
};

document.getElementById("clean").onclick = async function (e) {
    e.preventDefault();

    clear();

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

}

async function checkPoint(x, y, r, start) {
    try {
        let data = {x, y, r, start};
        const response = await fetch("/Web2-1.0-SNAPSHOT/controller", {
            method: "POST",
            headers: {
                "Action": "check",
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const json = await response.json();

        console.log(json);

        return json;
    } catch (err) {
        console.log(err.message);
    }
}

async function clear() {
    try {
        const response = await fetch("/Web2-1.0-SNAPSHOT/controller", {
            method: "POST",
            headers: {
                "Action": "clear"
            }
        });
    } catch (err) {
        console.log(err.message);
    }
}

function append(x, y, r, result, start, time) {
    let newRow = table.insertRow(1);
    const rowX = newRow.insertCell(0);
    const rowY = newRow.insertCell(1);
    const rowR = newRow.insertCell(2);
    const rowHit = newRow.insertCell(3);
    const rowReqTime = newRow.insertCell(4);
    const rowWorkTime = newRow.insertCell(5);

    rowX.textContent = x;
    rowY.textContent = y;
    rowR.textContent = r;
    rowHit.textContent = result;
    rowReqTime.textContent = start;
    rowWorkTime.textContent = time;
}

function dateToString(date) {
    return (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) + ":" +
                (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()) + ":"
                + (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
}

function validateX(x) {
    if (x == null || x == "") {
        changeMessage("Не введено значение поля X");
        showFadeIn("#message");
        return false;
    }
    if (isNaN(x)) {
        changeMessage("Не выбрано значение поля X");
        showFadeIn("#message");
        return false;
    }
    if (Math.abs(x) > 5) {
        changeMessage("Значение поля X должно находится в промежутке [-5; 5]");
        showFadeIn("#message");
        return false;
    }
    return true;
}

function validateY(y) {
    if (y == null || y == "") {
        changeMessage("Не введено значение поля Y");
        showFadeIn("#message");
        return false;
    }
    if (isNaN(y)) {
        changeMessage("Введено некорректное значение поля Y");
        showFadeIn("#message");
        return false;
    }
    return true;
}

function validateR() {
    allR = document.getElementsByClassName("r-param");
    checkedR = [];
    for (let i = 0; i < allR.length; i++) {
        if (allR[i].checked) {
            checkedR.push(allR[i]);
        }
    }
    console.log(checkedR)
    console.log(checkedR.length);
    if (checkedR.length < 1) {
        changeMessage("Не выбрано значение поля R");
        showFadeIn("#message");
        return false;
    }
    if (checkedR.length > 1) {
        changeMessage("Необходимо выбрать одно значение R");
        showFadeIn("#message");
        return false;
    }
    r = checkedR[0].value;
    if (isNaN(r)) {
        changeMessage("Не выбрано значение поля R");
        showFadeIn("#message");
        return false;
    }
    if (r < 0) {
        changeMessage("Радиус не может быть отрицательным");
        showFadeIn("#message");
        return false;
    }
    return true;
}

function changeMessage(str) {
    message.textContent = str;
}

function showFadeIn(field) {
    $(field).fadeIn();
}

function showFadeOut(field) {
    $(field).fadeOut();
}

function load() {
    fetch('data.csv')
        .then(response => response.text())
        .then(csv => {
            const rows = csv.split("\n");
            if (rows.length < 2) {
                return;
            }
            rows.slice(1).forEach(row => {
                const values = row.split(",");
                append(...values);
            })
        })

}