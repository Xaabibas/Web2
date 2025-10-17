const svg = document.getElementById("graph");
let pt = svg.createSVGPoint();
let currentR = getMaxR ? getMaxR() : 1.0;

svg.onclick = async function (e) {
    if (!validateR()) {
        return;
    }

    let date = new Date();
    let start = dateToString(date);
    let r = getMaxR();

    pt.x = e.clientX;
    pt.y = e.clientY;

    let cursorPoint = pt.matrixTransform(svg.getScreenCTM().inverse());

    let correctX = (cursorPoint.x - 150) / 120 * r;
    let correctY = -(cursorPoint.y - 150) / 120 * r;

    let json = await checkPoint(correctX.toFixed(2), correctY.toFixed(2), r, start);

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
    console.log(x);
    console.log(r);
    point.setAttribute("data-x", x);
    point.setAttribute("data-y", y);
    point.setAttribute("cx", 150 + 120 * x / r);
    point.setAttribute("cy", 150 - 120 * y / r);
    console.log(point);
    svg.appendChild(point);
    console.log(svg);
}

function removePoints() {
    svg.querySelectorAll("circle").forEach(c => c.remove());
}

function redraw() {
    redrawFigure(currentR);
    redrawPoints(currentR);
}

function redrawPoints() {
    const circles = svg.querySelectorAll("circle");

    circles.forEach(circle => {
        const x = parseFloat(circle.getAttribute("data-x"));
        const y = parseFloat(circle.getAttribute("data-y"));
        circle.setAttribute("cx", 150 + 120 * x / currentR);
        circle.setAttribute("cy", 150 - 120 * y / currentR);
    });
}


function redrawFigure() {
    const centerX = 150;
    const centerY = 150;

    const scale = 120 / currentR;

    const triangle = svg.querySelector("polygon.figure");
    const rect = svg.querySelector("rect.figure");
    const path = svg.querySelector("path.figure");

    const triPoints = [
        [centerX, centerY],
        [centerX + scale * currentR, centerY],
        [centerX, centerY + scale * currentR / 2]
    ];
    triangle.setAttribute(
        "points",
        triPoints.map(p => p.join(",")).join(" ")
    );

    rect.setAttribute("x", centerX);
    rect.setAttribute("y", centerY - scale * currentR);
    rect.setAttribute("width", scale * currentR / 2);
    rect.setAttribute("height", scale * currentR);

    const r = scale * currentR / 2;
    const x1 = centerX - r;
    const y1 = centerY;
    const x2 = centerX;
    const y2 = centerY + r;
    path.setAttribute(
        "d",
        `M ${centerX} ${centerY} L ${centerX} ${centerY + r} A ${r} ${r} 0 0 1 ${centerX - r} ${centerY} Z`
    );
}

function setCurrentR(newR) {
    currentR = newR;
}

function getCurrentR() {
    return currentR;
}

window.drawPoint = drawPoint;
window.removePoints = removePoints;
window.redraw = redraw;
window.getCurrentR = getCurrentR;
window.setCurrentR = setCurrentR;