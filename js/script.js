//PROGRAM
const playElem = document.querySelector(".play-btn");
console.log(playElem);
const gridElem = document.querySelector(".grid");
console.log(gridElem);
const selectElem = document.getElementById("difficulty");
console.log(selectElem);

//logic
playElem.addEventListener("click", function () {
  switch (selectElem.value) {
    //Easy grid 10x10
    case "easy":
      gridElem.innerHTML = "";
      generateAnyGrid(100, "easy");

      break;
    // Medium grid 9x9
    case "medium":
      gridElem.innerHTML = "";
      generateAnyGrid(81, "medium");

      break;
    //Hard grid
    case "hard":
      gridElem.innerHTML = "";
      generateAnyGrid(49, "hard");

      break;

    default:
      gridElem.innerHTML = "";
      generateAnyGrid(100, "easy");
  }
});

//FUNCTION

/* ************************* */

/**
 * Description: Create a grif with any number of cell inside
 * @param {any} gridLenght, the number of cell you want.
 * @param {any} difficulty, the class to add to any cell.
 * @returns {any} Html element, grid with cell.
 */
function generateAnyGrid(gridLenght, difficulty) {
  for (let i = 1; i <= gridLenght; i++) {
    const cell = generateGridCell(i);
    cell.addEventListener("click", heandleCell);
    cell.classList.add(difficulty);
    gridElem.append(cell);
  }
}

/* ************************* */

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

/* ************************* */

/**
 * Description add lightgreen class
 * @returns {any} none
 */
function heandleCell() {
  this.classList.toggle("lightgreen");
  console.log(this.textContent);
}
