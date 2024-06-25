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
      newSquare.addEventListener("mouseover", hover);
      newRow.appendChild(newSquare);
    }
    container.appendChild(newRow);
  }
}

function hover(e) {
  // Use mouseenter and mouseleave for the whole container
  // use mouseover / mouseout for the squares
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

generateGrid(16);
