//PROGRAM
const playElem = document.querySelector(".play-btn");
console.log(playElem);
const gridElem = document.querySelector(".grid");
console.log(gridElem);
const selectElem = document.getElementById("difficulty");
console.log(selectElem);

let clickedCells = [];
let maxClick;
let bombs;
//logic
playElem.addEventListener("click", function () {
  switch (selectElem.value) {
    //Easy grid 10x10
    case "easy":
      gridElem.innerHTML = "";

      bombs = generateBombs(100);
      maxClick = 100 - bombs.length;
      /* generateAnyGrid(100, "easy", bombs) */ console.log(bombs);
      for (let i = 1; i <= 100; i++) {
        const cell = generateGridCell(i);
        cell.classList.add("easy");

        cell.addEventListener("click", function () {
          let control = this.textContent;
          console.log(bombs.includes(parseInt(control)));
          if (bombs.includes(parseInt(control))) {
            this.classList.add("bomb");
          } else {
            this.classList.add("lightgreen");
            console.log(this.textContent);
          }
        });
        gridElem.append(cell);
      }

      break;
    // Medium grid 9x9
    case "medium":
      gridElem.innerHTML = "";
      bombs = generateBombs(81);
      console.log(generateBombs(81));
      maxClick = 81 - bombs.length;
      generateAnyGrid(81, "medium");

      break;
    //Hard grid
    case "hard":
      gridElem.innerHTML = "";
      bombs = generateBombs(49);
      console.log(generateBombs(49));
      maxClick = 49 - bombs.length;
      generateAnyGrid(49, "hard");

      break;

    default:
      gridElem.innerHTML = "";
      bombs = generateBombs(100);
      maxClick = 100 - bombs.length;
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
function generateAnyGrid(gridLenght, difficulty, explosion) {
  for (let i = 1; i <= gridLenght; i++) {
    const cell = generateGridCell(i);
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
  if (bombs.includes(this.textContent) === true) {
    this.classList.add("bomb");
    console.log(this.textContent);
  } else {
    this.classList.add("lightgreen");
  }
}

/* ************************* */

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ************************* */

/**
 * Description Restituisce array di 16 numeri random compresi tra 1 e max senza ripetizioni
 * @returns {array}
 * @param {number} max
 */
function generateBombs(max) {
  const result = [];
  while (result.length < 16) {
    const newNumber = rndNum(1, max);
    if (!result.includes(newNumber)) {
      result.push(newNumber);
    }
  }
  return result;
}
