'use strick'

class TableTemplate {
    static fillIn(id, dict, columnName) {
        var table = document.getElementById(id);
        var rows = table.rows;
        var header = rows.item(0);
        var proc = new Cs142TemplateProcessor(header.innerHTML);
        var newHeader = proc.fillIn(dict);
        header.innerHTML = newHeader;

        if (columnName === undefined) {
            // handle the table.
        } else {
            // handle the column.
        }

        if (table.style.visibility === 'hidden') {
            table.style.visibility = 'visible';
        }
    }
}