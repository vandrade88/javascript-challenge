// from data.js
var tableData = data;

var table = d3.select("tbody");

// create function to create our table and append data to it
function make_table(tableData) {
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

// select the input elements and get the raw HTML node
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

// create event handlers 
button.on("click", runEnter);

// complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // select the value from the input field that the user enters
  var inputValueDate = inputDate.property("value");
  var inputValueCity = inputCity.property("value").toLowerCase();
  var inputValueState = inputState.property("value").toLowerCase();
  var inputValueCountry = inputCountry.property("value").toLowerCase();
  var inputValueShape = inputShape.property("value").toLowerCase();

  // print console log and clear input values
  console.log(`Date: ${inputValueDate}`);
  d3.select("#datetime").node().value = "";
  console.log(`City: ${inputValueCity}`);
  d3.select("#city").node().value = "";
  console.log(`State: ${inputValueState}`);
  d3.select("#state").node().value = "";
  console.log(`Country: ${inputValueCountry}`);
  d3.select("#country").node().value = "";
  console.log(`Shape: ${inputValueShape}`);
  d3.select("#shape").node().value = "";

  // make copy of original data so our filtered data function doesn't affect original
  var new_data = tableData;

  // function to filter data by datetime
  var filteredDate = new_data.filter(item => item.datetime == inputValueDate);
  var filteredCity = new_data.filter(item => item.city == inputValueCity);
  var filteredState = new_data.filter(item => item.state == inputValueState);
  var filteredCountry = new_data.filter(item => item.country == inputValueCountry);
  var filteredShape = new_data.filter(item => item.shape == inputValueShape);
  
  // remove HTML inside tbody object
  table.html("");

  // call make_table function to create new table with filtered data
  make_table(filteredDate);
  make_table(filteredCity);
  make_table(filteredState);
  make_table(filteredCountry);
  make_table(filteredShape);
}