// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

console.log(data);

// YOUR CODE HERE!
var $tbody = document.querySelector("tbody");
var $date = document.querySelector("#datetime");
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
    var inputs = Object.keys(data);
   
    var row = $tbody.insertRow(i);
    for (var j = 0; j < inputs.length; j++) {
      var input = inputs[j];
      var $cell = row.insertCell(j);
      $cell.innerText = data[input];
    }
  }
}

function handleSearchButtonClick(event) {
  // prevent page from refreshing
  event.preventDefault();

  var DateFilter = $date.value.trim();
  if (DateFilter != "") {
    tableData = data.filter(function (data) {
      var DateField = data.datetime;
      return DateField === DateFilter;
    });
};
renderTable();
  }
function resetData() {
  tableData = data;
  $date.value = "";

  renderTable();
}

// Render the table on page load
renderTable();

// Begin adding different filter options
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }