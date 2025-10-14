const table = document.getElementById("checkTable");

document.getElementById("clean").onclick = async function (e) {
    e.preventDefault();

    clear();

    while (table.rows.length > 1) {
        table.deleteRow(1);
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

window.append = append;
window.load = load;