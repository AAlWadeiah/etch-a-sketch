function generateGrid(numOfSquares = 16) {
  let container = document.querySelector(".grid-container");

  let containerWidth = container.offsetWidth;
  let squareDim = Math.floor(containerWidth / numOfSquares);
  let dimPercent = Math.round((squareDim / containerWidth) * 100) / 100;

  for (let row = 0; row < numOfSquares; row++) {
    let newRow = document.createElement("div");
    newRow.classList.toggle("row");
    for (let col = 0; col < numOfSquares; col++) {
      let newSquare = document.createElement("div");
      newSquare.classList.toggle("square");
      newSquare.style.width = `${dimPercent}%`;
      newSquare.style.height = `${squareDim}px`;
      //   newSquare.addEventListener("mouseover", hoverOverSquare);
      newRow.appendChild(newSquare);
    }
    container.appendChild(newRow);
  }
}

function hoverOverGrid(e) {
  // use mouseover for the squares
  let colorArr = [
    "var(--vermilion)",
    "var(--rose)",
    "var(--deep-sky-blue)",
    "var(--pear)",
    "var(--pumpkin)",
    "var(--jungle-green)",
    "var(--gamboge)",
    "var(--purpureus)",
    "var(--pale-azure)",
    "var(--lime)",
  ];
  let randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
  e.target.style.background = randomColor;
}

function clearBtnHandler(e) {
  let desiredSquares = 16;
  do {
    desiredSquares = +prompt(
      "How many squares per side do you want for the sketch pad? (Max = 100)",
      "16"
    );
  } while (desiredSquares > 101);

  //  clear grid container
  let container = document.querySelector(".grid-container");
  container.innerHTML = "";

  generateGrid(desiredSquares);
}

generateGrid(16);

// One event handler attached to the grid to handle all "hover" events over all squares
let grid = document.querySelector(".grid-container");
grid.addEventListener("mouseover", hoverOverGrid);

let clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearBtnHandler);

// TODO: implement a progressive darkening effect where each interaction darkens the square by 10%
