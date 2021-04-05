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

// create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // select the value from the input field that the user enters
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // make copy of original data so our filtered data function doesn't affect original
  var new_data = tableData;

  // function to filter data by datetime
  var filteredData = new_data.filter(item => item.datetime == inputValue);

  // call make_table function to create new table with filteredData
  make_table(filteredData);
}

//   var names = filteredData.map(person => person.fullName);
//   // if we wanted to create a variable of of this attribute (Person's Name)

//   console.log(filteredData);

//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);
//   // easiest way to get a list of attributes (age in this case)

//   d3.select(".name_list").text(names);

//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");
//   // this erases or removes all the items in the original list
//   // we are doing this in this case because we want a brand new list to populate each time
//   // the code is ran. Each table should be a brand new table, so this erases all the items inside
//   // the list and then replaces it with a new one which is the code below

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);
//   // the below is extra from Sam's example if we wanted to add each person's name that matches
//   // the blood type inside our list as a new list item for each name
//   names.forEach(name => list.append("li").text(name));
//   var table = d3.select(".table_class");
//   // the below is extra from additional in-class example by Sam
//   filteredData.forEach(person => {
//     var row = table.append("tr")
//     row.append("td").text(person.fullName)
//     row.append("td").text(person.bloodType)
//     row.append("td").text(person.age)
//   })
// };
