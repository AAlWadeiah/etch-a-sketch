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
      // can set height and width with a single string as well
      //   let squareStyle = `width: ${dimPercent}%; height: ${squareDim}px;`;
      //   newSquare.setAttribute("style", squareStyle);
      newRow.appendChild(newSquare);
    }
    container.appendChild(newRow);
  }
}

generateGrid(16);
