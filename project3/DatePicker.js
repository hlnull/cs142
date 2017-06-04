'use strick';

class DatePicker {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
    }

    render(date) {
        // 1. create a table add it to the document.
        var parent = document.getElementById(this.id);
        var table = document.createElement("table");
        table.style.border = "dotted black";
        var header = table.createTHead();
        parent.appendChild(table);
        
        // 2. set table's header
        var headerRow = header.insertRow(0);
        var leftArrowCell = headerRow.insertCell(0);
        leftArrowCell.innerHTML = "<";
        var monthCell = headerRow.insertCell(1);
        var months = ["January", "February","March", "April","May", "June", "July", "August", "September",
      "October","November","December"];
        monthCell.innerHTML = months[date.getMonth()];
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
        
        // 3. set days.
        var curDate = new Date(date.getTime());
        curDate.setDate(date.getDate() - date.getDay());
        console.log(curDate.getDate());
        var rowIndex = 2;
        while (true) {
            var row = table.insertRow(rowIndex);
            rowIndex = rowIndex + 1;
            
            for (var i = 0; i < 7; ++ i) {
                var cell = row.insertCell(i);
                cell.innerHTML = curDate.getDate();
                curDate.setDate(curDate.getDate() + 1);
            }

            // exit the loop
            if (curDate.getMonth() != date.getMonth()) {
                break;
            }
        }
        
    }
};

