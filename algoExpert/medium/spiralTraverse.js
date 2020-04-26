function spiralTraverse(array) {
  let startRow = 0;
  let startCol = 0;
  let endRow = array.length - 1;
  let endCol = array[0].length - 1;

  const MAX_ROW = array.length - 1;
  const MAX_COL = array[0].length - 1;

  let spiral = [];

  while (startRow <= endRow && startCol <= endCol) {
    // TOP ROW
    for (let col = startCol; col <= endCol; col++) {
      spiral.push(array[startRow][col]);
    }
    startRow++;

    // RIGHT COL
    for (let row = startRow; row <= endRow; row++) {
      spiral.push(array[row][endCol]);
    }
    endCol--;

    // BOTTOM ROW
    if (startRow <= endRow) {
      for (let col = endCol; col >= startCol; col--) {
        spiral.push(array[endRow][col]);
      }
      endRow--;
    }

    // LEFT COL
    if (startCol <= endCol) {
      for (let row = endRow; row >= startRow; row--) {
        spiral.push(array[row][startCol]);
      }
      startCol++;
    }
  }
  return spiral;
}



// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
