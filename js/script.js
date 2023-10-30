//PROGRAM
const playElem = document.querySelector(".play-btn");
console.log(playElem);
const gridElem = document.querySelector(".grid");
console.log(gridElem);
const selectElem = document.getElementById("difficulty");
console.log(selectElem);

//logic
//Normal grid 10x10
playElem.addEventListener("click", function () {
  switch (selectElem.value) {
    case "easy":
      gridElem.innerHTML = "";
      for (let i = 1; i <= 100; i++) {
        const cell = generateGridCell(i);
        cell.addEventListener("click", heandleCell);
        gridElem.append(cell);
      }

      break;

    case "medium":
      gridElem.innerHTML = "";
      for (let i = 1; i <= 81; i++) {
        const cell = generateGridCell(i);
        cell.addEventListener("click", heandleCell);
        cell.classList.add("medium");
        gridElem.append(cell);
      }

      break;

    case "hard":
      gridElem.innerHTML = "";
      for (let i = 1; i <= 49; i++) {
        const cell = generateGridCell(i);
        cell.addEventListener("click", heandleCell);
        cell.classList.add("hard");
        gridElem.append(cell);
      }

      break;
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
  this.classList.toggle("lightgreen");
  console.log(this.textContent);
}
