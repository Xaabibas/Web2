const message = document.getElementById("message");

showFadeOut("#message");

function changeMessage(str) {
    message.textContent = str;
}

function showFadeIn(field) {
    $(field).fadeIn();
}

function showFadeOut(field) {
    $(field).fadeOut();
}

window.changeMessage = changeMessage;
window.showFadeIn = showFadeIn;
window.showFadeOut = showFadeOut;