# UFOs 
## Overview of Project
Our project was about the UFO sights and their presentation on a web page. By using our source data (data.js) we created an HTML file using Javascript. Data.js contain many objects that this object contains the data such as date, location, shape, and comments about the event. Our data was very long, that's why it would be hard to read all of the sights at once. To make the readability easier, we added multiple filters to our website. The next step mainly will be about filtering the data. 🔽
## Result
- First of all, we added the filter (input) boxes to our HTML code.
![image](https://user-images.githubusercontent.com/98247252/168511065-aa66304a-26c6-4f1f-bf9f-b647a6fe0424.png)

 #### Next We added function to these input boxes on the back end.
 - Importing the source _data_ to app.js
 ``` conts tableData = data```
 - Using d3, in order to insert - create table-data into HTML file 
  ```var tbody = d3.select("tbody");```
  - looping throug each object in data in order to append values in a row (in the HTML file or table)
  ``` data.forEach((dataRow) => {```
  ```let row = tbody.append("tr");```
  - with the help of D3, we looped through each row (or object) and added in seperate cell, (cells are td - table data in the HTML file)
  ``` Object.values(dataRow).forEach((val) => { ```
      ```let cell = row.append("td");```
      ```cell.text(val);```
#### Until here we fetch the data, iterated among the objects, iterated among the key-value pairs in the object and insert them into thei proper places with the help of D# such as "td", "tr", "tbody". Now, we will add function to filters.

-creating _filters_ object to keep user's input values. 
``` var filters = {}; ```
- creating a a function to hold and iterate on objects, holds the IDs, values, and checking if the certain input box is hold any values and written by user.
```function updateFilters() { ```

- adding the event listener that will check the input elemtn in HTML code, if is there any change on it( if is there any input or filter written) it will apply updateFilters function.(this code will appear in the very end of our codes. right before the default full table (buildTable(tableData)) funtion.
``` d3.selectAll("input").on("change", updateFilters); ```

- creating a variable that will select all the elements changed.(changed because of user's input)
 ```let changedElement = d3.select(this); ```
 - saving the changed values as a variable
 ```  let elementValue = changedElement.property("value");```
   ``` console.log(elementValue);```
- saving the id of the changed values (user's input) as a variable
``` let filterId = changedElement.attr("id");```
    ```console.log(filterId); ```
- checking if is there any value entered by user the input box, if yes add the filterId and Value to the _filters_ object
if no, clean the particular filter input box.
```  if(elementValue) {```
      ```filters[filterId] = elementValue;```
   ``` }```
    ```else{```
      ```delete filters[filterId];```
    ```} ```
- adding the default data (full data) as a filtered table(theoricly non filtered table)
``` let filteredData = tableData ```
- looping throug all the filters and checking if any of them matches with the full data, and bringing the mathcing one to the web page by setting them _=_ to "filteredData" variable.
``` Object.entries(filters).forEach(([key,value]) => {```
      ```filteredData = filteredData.filter(row => row[key] === value); ```


### General look to the webpage with filters and default mode.
![image](https://user-images.githubusercontent.com/98247252/168516577-0449958a-3372-4baf-90ac-32d02bebb82f.png)
![image](https://user-images.githubusercontent.com/98247252/168516682-0fcc411e-e03e-44eb-b4d5-8e696770b2ed.png)


## Summary
- In case of having more than thousands of object in the data.js file. We might want to find a solution to automate ```<ul\> <li\> <label\> <input\> ``` part of the _index.html_ file. 


      
      
      
      
      
      
      
 





