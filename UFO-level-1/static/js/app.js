// from data.js
var tableData = data;

var table = d3.select("tbody");

tableData.forEach((item) => {
    // append new rows into table
    var row = table.append("tr");
    // insert values from data.js into each new row
    Object.values(item).forEach((value) => {
        // append new cells inside of rows
        var cell = row.append("td");
        // insert values from each object into each new cell
        cell.text(value);
    });
});