document.getElementById("checkButton").onclick = async function (e) {
    e.preventDefault();
    hideResult();

    if (!(validateX() && validateY() && validateR())) {
        return;
    }

    let date = new Date();
    let start = dateToString(date);
    getRs().forEach(async (r) =>
    {
        let json = await checkPoint(getX(), getY(), r, start);
        showFadeOut("#message");

        if (!(json.error == null || json.error == "")) {
            changeMessage(json.error);
            showFadeIn("#message");
            return;
        }

        showResult(json.result, getX(), getY());
        append(getX(), getY(), r, json.result, start, json.time);
    }
    );
};

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
        drawPoint(x, y, r, json.result);

        return json;
    } catch (err) {
        console.log(err.message);
    }
    redraw();
}

function dateToString(date) {
    return (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) + ":" +
                (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()) + ":"
                + (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
}

