// Global Variables 
const color = document.getElementById('colorPicker');
const canvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker')
const rows = document.getElementById('inputHeight');
const cols = document.getElementById('inputWidth');

function makeGrid() {
for (let x=0; x<rows.value; x++) {
    // Creating a new element 'tr'
    let tableRows = document.createElement('tr'); 
    // Creating a rwo of cells
    canvas.append(tableRows);

for(let y=0; y<cols.value; y++) {
    // Creating a new element 'td'
    let tableColums = document.createElement('td');
    // Adding a cell after each row
    tableRows.append(tableColums);
    // console.log("rows:" + x + " cols:" + y);
    } 
  }
}

let submit = document.getElementById('submitButton');
// When user click on 'submit' button, call makeGrid function
submit.addEventListener('click', function (event) {
    // This code is to remove anything on the table (tr or td)
    canvas.innerHTML='';
    // Prevent the default behavior of the submit button
    event.preventDefault(); 
    makeGrid();
});

// This function will allows the user to color a cell on 'click'
canvas.addEventListener('click', function (event) {
    let color = document.getElementById('colorPicker').value;
    let cell = event.target;
    cell.style.cssText=`background-color: ${color}`;
// console.log('The cell has been filled with the selected color');
})
