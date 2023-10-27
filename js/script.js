//PROGRAM
const playElem = document.querySelector(".play-btn");
console.log(playElem);

playElem.addEventListener("click", function () {
  for (let i = 0; i < 100; i++) {
    const element = array[i];
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

function heandleCell() {
  this.classList.add("lightgreen");
  console.log(this.innerHtml);
}
