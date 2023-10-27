//PROGRAM
const playElem = document.querySelector(".play-btn");
console.log(playElem);
const gridElem = document.querySelector(".grid");
console.log(gridElem);

//logic
playElem.addEventListener("click", function () {
  if (gridElem.innerHTML === "") {
    for (let i = 1; i <= 100; i++) {
      const cell = generateGridCell(i);
      cell.addEventListener("click", heandleCell);
      gridElem.append(cell);
    }
  }
});

//FUNCTION

/**
 * Description create one cell with a number inside
 * @param {any} innerNumber
 * @returns {any} html element
 */
function generateGridCell(innerNumber) {
  const newcell = document.createElement("div");
  newcell.classList.add("cell");
  newcell.innerHTML = innerNumber;
  return newcell;
}

/* **** */

/**
 * Description add lightgreen class
 * @returns {any} none
 */
function heandleCell() {
  this.classList.add("lightgreen");
  console.log(this.innerHtml);
}
