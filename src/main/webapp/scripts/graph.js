const svg = document.getElementById("graph");
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

    let json = await checkPoint(correctX.toFixed(2), correctY.toFixed(2), getR(), start);

    showFadeOut(messageId);

    if (!(json.error == null || json.error == "")) {
        changeMessage(json.error);
        showFadeIn(messageId);
        return;
    }

    showResult(json.result, correctX.toFixed(2), correctY.toFixed(2));
    drawPoint(correctX.toFixed(2), correctY.toFixed(2), r, json.result)
    append(correctX.toFixed(2), correctY.toFixed(2), getR(), json.result, start, json.time);
}

function drawPoint(x, y, r, result) {
    let point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    if (result) {
        point.classList.add("hit");
    } else {
        point.classList.add("miss");
    }
    point.style.visibility = "visible";
    point.setAttribute("r", 3);
    point.setAttribute("cx", 150 + 120 * x / r);
    point.setAttribute("cy", 150 - 120 * y / r);
    console.log(point);
    svg.appendChild(point);
    console.log(svg);
}

function removePoints() {
    svg.querySelectorAll("circle").forEach(c => c.remove());
}

window.drawPoint = drawPoint;
window.removePoints = removePoints;