// from data.js
var tableData = data;

// YOUR CODE HERE!
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $button = document.querySelector("#filter-btn");
// var $tbody = d3.select("tbody");
// var $dateInput = d3.select("#datetime").node();
// var $searchBtn = d3.select("#filter-btn").node();

// Add event listener to the button, with a function when clicked
$button.addEventListener("click", handleSearchButtonClick);

// renderTable outputs data into tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    
    var data = tableData[i];
    var fields = Object.keys(data);
   
    var row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick(event) {
  // prevent page from refreshing
  event.preventDefault();

  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    tableData = data.filter(function (data) {
      var dataDate = data.datetime;
      return dataDate === filterDate;
    });
};
renderTable();
  }
function resetData() {
  tableData = data;
  $dateInput.value = "";

  renderTable();
}

// Render the table on page load
renderTable();