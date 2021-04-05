// from data.js
var tableData = data;

var table = d3.select("tbody");

// create function to create our table and append data to it
function make_table(tableData) {
    // remove HTML inside tbody object
    table.html("");
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
}

// call make_table function to show table with original data
make_table(tableData);

// select the button to create an event handler
var button = d3.select("#filter-btn");

// select the form to create an event handler
var form = d3.select("form");

// select the input elements and get the raw HTML node
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");

// create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // select the value from the input field that the user enters
  var inputValueDate = inputDate.property("value");
  var inputValueCity = inputCity.property("value");

  console.log(inputValueDate);
  console.log(inputValueCity);

  // make copy of original data so our filtered data function doesn't affect original
  var new_data = tableData;

  // function to filter data by datetime
  var filteredDate = new_data.filter(item => item.datetime == inputValueDate);
  var filteredCity = new_data.filter(item => item.city == inputValueCity);


  // call make_table function to create new table with filteredData
  make_table(filteredDate);
  make_table(filteredCity);
}