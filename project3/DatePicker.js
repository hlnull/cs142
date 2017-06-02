'use strick';

class DatePicker {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
    }

    render(date) {
        // 1. create a div add it to the document.
        var parent = document.getElementById(this.id);
        // var div = document.createElement("div");
        // setting border so that we can view it in the browser.
        // div.style.border = "black";
        // parent.appendChild(div);

        // 2. add a table in the div.
        var table = document.createElement("table");
        table.style.border = "dotted black";
        var header = table.createTHead();
        parent.appendChild(table);
        
        // 3. set table's header
        var headerRow = header.insertRow(0);
        var leftArrowCell = headerRow.insertCell(0);
        leftArrowCell.innerHTML = "<";
        var monthCell = headerRow.insertCell(1);
        // TODO: add month list
        monthCell.innerHTML = "January";
        monthCell.colSpan = "5";
        var rightArrowCell = headerRow.insertCell(2);
        rightArrowCell.innerHTML = ">";

        // add days of week on the second row
        var daysOfWeek = ["Sun", "Mon","Tues","Wed","Thur","Fri","Sat"];
        var rowWeek = header.insertRow(1);
        for (var i = 0; i < 7; ++ i) {
            var cell = rowWeek.insertCell(i);
            cell.innerHTML = daysOfWeek[i];
        }
        
        // 3. set the contents of the table.
        var curDate = new Date(date.getTime());
        curDate.setDate(date.getDate() - date.getDay());
        console.log(curDate.getDate());

        var row = table.insertRow(2);
        var cell = row.insertCell(0);
        cell.innerHTML = curDate.getDate();

        

    }
};

