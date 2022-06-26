function createRows(num) {
  // Create 'num' amount of divs vertically
  const grid = document.querySelector('#grid');
  for (let rowNum = 0; rowNum < num; rowNum++) {
    const row = document.createElement('div');
    row.style.cssText = 'display: flex; flex: auto;';
    row.classList.add('row');
    grid.appendChild(row);
  }
}

function createColumns(num) {
  // Create 'num' amount of columns, and append them to rows horizontally
  const rows = document.querySelectorAll('.row');
  for (let rowNum = 0; rowNum < num; rowNum++) {
    for (let colNum = 0; colNum < num; colNum++) {
      const col = document.createElement('div');
      col.style.cssText = `
          flex: auto;
          background-color:white;`;
      col.addEventListener('mouseover', () => col.style.backgroundColor = 'black');
      rows[rowNum].appendChild(col);
    }
  }
}

function createGrid(num) {
  // Create a pixel grid of size 'num'
  createRows(num);
  createColumns(num);
}

function getSize() {
  // Gets a valid number to change the size of the canvas
  let size = +prompt('Enter a number: ');
  while (isNaN(size) || size > 100 || size < 1) {
    size = +prompt('Invalid Input. Enter another number: ');
  }
  return size;
}

function clearCanvas() {
  // Clears the canvas
  const grid = document.querySelector("#grid");
  while (grid.firstChild) grid.removeChild(grid.firstChild);
}

function changeSize() {
  // Change the size of the canvas
  const size = getSize();
  clearCanvas();
  createGrid(size);
}

const sizeBtn = document.querySelector('#size-btn');
sizeBtn.addEventListener('click', changeSize);

createGrid(16);
