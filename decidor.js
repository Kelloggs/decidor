function addRowToTable()
 {
    var tbl = document.getElementById('optTable');
    var lastRow = tbl.rows.length;
    // if there's no header row in the table, then iteration = lastRow + 1
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

function removeRowFromTable()
 {
    var tbl = document.getElementById('optTable');
    var lastRow = tbl.rows.length;
    if (lastRow > 2) tbl.deleteRow(lastRow - 1);
}

function getResult(frm)
 {
    // get random row
    var tbl = document.getElementById('optTable');
    var lastRow = tbl.rows.length - 1;
	if (lastRow > 1) {
    	var randint = parseInt(Math.random() * lastRow)
    	var choice = document.getElementById('txtRow' + randint).value
	} else {
		choice = document.getElementById('txtRow1').value
	}

    var out = document.getElementById('result');
	if(out.hasChildNodes()){
		result.removeChild(result.firstChild)
	}
    result.appendChild(document.createTextNode("The Decision: " + choice))
}

function validateRow(frm)
 {
    var tbl = document.getElementById('optTable');
    var lastRow = tbl.rows.length - 1;
    var i;
    for (i = 1; i <= lastRow; i++) {
        var aRow = document.getElementById('txtRow' + i);
        if (aRow.value.length <= 0) {
            alert('Row ' + i + ' is empty');
            return;
        }
    }
    getResult(frm);
}