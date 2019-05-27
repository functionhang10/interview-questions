const floodFill = (img, targetRow, targetCol, newColor) => {
  if (img[targetRow][targetCol] === newColor) return;
  recurisveFill(img, targetRow, targetCol, img[targetRow][targetCol], newColor);
};

const recurisveFill = (img, row, col, oldColor, newColor) => {
  // base case..
  if (row < 0 || row >= img.length || col < 0 || col >= img[row].length || img[row][col] !== oldColor) {
    return;
  } 
  
  // change the color
  img[row][col] = newColor; 

  // loop it..
  recurisveFill(img, row, col + 1, oldColor, newColor); // right
  recurisveFill(img, row + 1, col, oldColor, newColor); // bottom
  recurisveFill(img, row, col - 1, oldColor, newColor); // left
  recurisveFill(img, row - 1, col, oldColor, newColor); // top
};

module.exports = floodFill