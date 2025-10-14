const message = document.getElementById("message");
showFadeOut("#message");

function changeMessage(str) {
    message.textContent = str;
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
window.showFadeIn = showFadeIn;
window.showFadeOut = showFadeOut;
window.blink = blink;