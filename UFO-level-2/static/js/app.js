// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

console.log(data);

// YOUR CODE HERE!
var $tbody = document.querySelector("tbody");
var $date = document.querySelector("#datetime");
var $city = document.querySelector("#city");
var $state = document.querySelector("#state");
var $country = document.querySelector("#country");
var $shape = document.querySelector("#shape");
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

  function handleSearchButtonClick(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    var CityFilter = $city.value.trim();
    if (CityFilter != "") {
      tableData = data.filter(function (data) {
        var CityField = data.city;
        return CityField === CityFilter;
      });
  };
  renderTable();
    }
  function resetData() {
    tableData = data;
    $city.value = "";
  
    renderTable();
  }
  // Render the table on page load
  renderTable();