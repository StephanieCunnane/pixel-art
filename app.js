
let gridWidth = document.getElementById("inputWidth");
let gridHeight = document.getElementById("inputHeight");
let color = document.getElementById("colorPicker");
const submit = document.getElementById("submitButton");
const form = document.getElementById("sizePicker");
let grid = document.getElementById("pixelCanvas");


// When size is submitted by the user, call makeGrid()

function changeBackground(e) {
  e.target.style.backgroundColor = color.value;
}

function makeGrid(e) {
  e.preventDefault();
  let rows = gridWidth.value;
  let columns = gridHeight.value;
  for (rowCount = 1; rowCount <= rows; rowCount++) {
    let newTr = document.createElement("tr");
    grid.appendChild(newTr);
    for (columnCount = 0; columnCount < columns; columnCount++) {
      let newTd = document.createElement("td");
      newTr.appendChild(newTd);
      newTr.addEventListener("click", changeBackground);
    }
  }
}

form.addEventListener("submit", makeGrid);
