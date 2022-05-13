// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {  // val represents each argument or value in the object
        let cell = row.append("td"); // we'll append each value of the object to a cell in the table.
        cell.text(val); // add values to the 
        }
      );
    });
  }

  function handleClick() {
      let date = d3.select("#datetime").property("value"); //look for the datetime id (#) in the html tags .propery says:grab this informatin and 
                                                            // store in the date variable

      let filteredData = tableData;


      if (date){
          filteredData = filteredData.filter(row => row.datetime === date); //row => row.datetime === date);
      };

      buildTable(filteredData);
      
  }
  d3.selectAll("#filter=btn").on("click", handleClick); // on click execute our handleclick function

  buildTable(tableData);

  



