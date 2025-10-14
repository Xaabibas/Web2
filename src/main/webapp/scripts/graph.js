const pointer = document.getElementById("pointer");

let svg = document.getElementById("graph");
let pt = svg.createSVGPoint();

svg.onclick = async function (e) {
    if (!validateR()) {
        return;
    }

    let date = new Date();
    let start = dateToString(date);

    pt.x = e.clientX;
    pt.y = e.clientY;

    let cursorPoint = pt.matrixTransform(svg.getScreenCTM().inverse());

    let correctX = (cursorPoint.x - 150) / 120 * r;
    let correctY = -(cursorPoint.y - 150) / 120 * r;

    console.log(correctX, correctY);

    let json = await checkPoint(correctX, correctY, getR(), start);

    showFadeOut("#message");

    if (!(json.error == null || json.error == "")) {
        changeMessage(json.error);
        showFadeIn("#message");
        return;
    }

    append(correctX, correctY, getR(), json.result, start, json.time);
}

function hidePointer() {
    pointer.style.visibility = "hidden";
}

function showPointer(x, y, r) {
    pointer.style.visibility = "visible";
    pointer.setAttribute("cx", 150 + 120 * x / r);
    pointer.setAttribute("cy", 150 - 120 * y / r);
}

window.hidePointer = hidePointer;
window.showPointer = showPointer;