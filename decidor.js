function addRowToTable() {
    var tbl = document.getElementById('optTable');
    var lastRow = tbl.rows.length;

    var iteration = lastRow;
    var row = tbl.insertRow(lastRow);

    // left cell
    var cellLeft = row.insertCell(0);
    var textNode = document.createTextNode(iteration);
    cellLeft.appendChild(textNode);

    // right cell
    var cellRight = row.insertCell(1);
    var el = document.createElement('input');
    el.type = 'text';
    el.name = 'txtRow' + iteration;
    el.id = 'txtRow' + iteration;
    el.size = 40;

    cellRight.appendChild(el);
}

function removeRowFromTable() {
    var tbl = document.getElementById('optTable');
    var lastRow = tbl.rows.length;
    if (lastRow > 2) tbl.deleteRow(lastRow - 1);
}

function getResult() {
    var tbl = document.getElementById('optTable');
    var lastRow = tbl.rows.length - 1;
    var choice = ""

	// get random row if there are more than one
    if (lastRow > 1) {
        var randint = Math.floor(Math.random()*(lastRow)) + 1
        choice = document.getElementById('txtRow' + randint).value
    } else {
        choice = document.getElementById('txtRow1').value
    }

    var out = document.getElementById('result');
    out.appendChild(document.createTextNode("Your Decision: " + choice))
}

function validateRow() {
    var tbl = document.getElementById('optTable');
    var lastRow = tbl.rows.length - 1;
    var i;

	// clean up results and warnings 
    var warn = document.getElementById('warning');
	var out = document.getElementById('result');
    if (warn.hasChildNodes()) {
        warn.removeChild(warn.firstChild)
    }
    if (out.hasChildNodes()) {
        out.removeChild(out.firstChild)
    }

	// check if there are any empty cells
    for (i = 1; i <= lastRow; i++) {
        var aRow = document.getElementById('txtRow' + i);
        if (aRow.value.length <= 0) {
            warn.appendChild(document.createTextNode("Row " + i + " is empty!"))
            return;
        }
    }

    getResult();
}