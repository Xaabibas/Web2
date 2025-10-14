const message = document.getElementById("message");
showFadeOut("#message");
const pointResult = document.getElementById("point-result");
showFadeOut("#point-result");

function changeMessage(str) {
    message.textContent = str;
}

function showResult(result, x, y) {
    if (result) {
        showHit(x, y);
    } else {
        showMiss(x, y);
    }
    showFadeIn("#point-result");
}

function showMiss(x, y) {
    changeResult("Промах в точке (" + x + ", " + y + ")", "orange");
}

function showHit(x, y) {
    changeResult("Попадание в точку (" + x + ", " + y + ")", "green");
}

function hideResult() {
    changeResult("", "black");
    showFadeOut("#point-result");
}

function changeResult(str, color) {
    pointResult.textContent = str;
    pointResult.style.color = color;
}

function showFadeIn(id) {
    $(id).fadeIn();
}

function showFadeOut(id) {
    $(id).fadeOut();
}

function blink(id) {
    $(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

window.changeMessage = changeMessage;
window.showResult = showResult;
window.hideResult = hideResult;
window.showFadeIn = showFadeIn;
window.showFadeOut = showFadeOut;
window.blink = blink;