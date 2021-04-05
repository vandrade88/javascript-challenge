// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach((item) => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })
})