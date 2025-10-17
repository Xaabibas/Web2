let x;
let y;
let rs = [1.0];

const messageId = "#message";
const pointId = "#point-result"
const xid = "#select-x";
const yid = "#select-y";
const rid = "#select-r";

function validateX(x) {
    x = $("input[name='x-param']").val();
    if (x == null || x == "") {
        changeMessage("Не введено значение поля X");
        showFadeIn(messageId);
        blink(xid);
        return false;
    }
    if (isNaN(x)) {
        changeMessage("Не выбрано значение поля X");
        showFadeIn(messageId);
        blink(xid);
        return false;
    }
    if (Math.abs(x) > 5) {
        changeMessage("Значение поля X должно находится в промежутке [-5; 5]");
        showFadeIn(messageId);
        blink(xid);
        return false;
    }
    return true;
}

function getX() {
    x = $("input[name='x-param']").val();
    return x;
}

function validateY() {
    if (y == null || y == "") {
        changeMessage("Не введено значение поля Y");
        showFadeIn(messageId);
        blink(yid);
        return false;
    }
    if (isNaN(y)) {
        changeMessage("Введено некорректное значение поля Y");
        showFadeIn(messageId);
        blink(yid);
        return false;
    }
    return true;
}

const buttons = document.getElementsByClassName("y-param");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
        e.preventDefault();

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("selected");
        }
        this.classList.add("selected");

        y = this.value;
        console.log(y);
    }
}

function getY() {
    return y;
}

const allR = document.getElementsByClassName("r-param");
for (let i = 0; i < allR.length; i++) {
    allR[i].onchange = function() {
        handler(this);
    };
}

function handler(checkbox) {
    rs = Array.from(allR)
        .filter(r => r.checked)
        .map(r => parseFloat(r.value));

    if (rs.length === 0) return;

    const newR = Math.max(...rs);
    if (newR !== getCurrentR()) {
        setCurrentR(newR);
        redraw();
    }
}


function validateR() {
    const checkedR = [];
    for (let i = 0; i < allR.length; i++) {
        if (allR[i].checked) {
            checkedR.push(allR[i].value);
        }
    }
    console.log(checkedR)
    console.log(checkedR.length);
    if (checkedR.length < 1) {
        changeMessage("Не выбрано значение поля R");
        showFadeIn(messageId);
        blink(rid);
        return false;
    }
    rs = checkedR;
    return true;
}

function getRs() {
    return rs;
}

function getMaxR() {
    return rs[rs.length - 1];
}

window.validateX = validateX;
window.validateY = validateY;
window.validateR = validateR;
window.getX = getX;
window.getY = getY;
window.getR = getRs;
window.getMaxR = getMaxR;
