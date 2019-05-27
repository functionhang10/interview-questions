/**
 *  An image is represented as a 2-dimensional array.  Given a coordinate [ strRow, strCol ],
 *  and it's color 'existingColor', flood fill the image w/ the 'newColor'.
 * 
 *  const image = 
 *    [
 *      [ 1, 1, 1, 1, 1, 1 ],
 *      [ 1, 1, 2, 2, 1, 1 ],
 *      [ 1, 1, 2, 2, 1, 1 ],
 *      [ 1, 1, 2, 2, 1, 1 ],
 *      [ 2, 2, 2, 2, 2, 2 ],
 *      [ 2, 2, 2, 2, 2, 2 ]
 *    ]
 * 
 *  If you click on [4,1] with 'newColor' value of '5'.... all the connecting '2s' will change to '5s'
 */

const image = 
    [
      [ 2, 1, 1, 1, 1, 2, 1, 1 ],
      [ 1, 1, 2, 2, 1, 1, 1, 1 ],
      [ 1, 1, 2, 2, 1, 1, 1, 1 ],
      [ 1, 1, 2, 2, 1, 1, 1, 1 ],
      [ 2, 2, 2, 2, 2, 2, 1, 1 ],
      [ 2, 2, 1, 1, 2, 2, 1, 1 ]
    ];

const printImage = (img) => {
  let rows = [];
  for (let row=0; row < img.length; row++) {
    for (let col=0; col < img[row].length; col++) {
      rows.push(img[row][col]+ ' ');
    }
    console.log(...rows);
    rows = [];
  }
}

// returns the new 'modified' image
const floodFill = (img, strRow, strCol, newColor) => {
  if (img[strRow][strCol] === newColor) return img;

  recursiveFill(img, strRow, strCol, img[strRow][strCol], newColor);
  return img;
}

const recursiveFill = (img, row, col, existingColor, newColor) => {
  if (row < 0 || row >= img.length || 
        col < 0 || col >= img[row].length ||
        img[row][col] !== existingColor) {
    return;
  }

  img[row][col] = newColor;
  recursiveFill(img, row, col + 1, existingColor, newColor);  // right
  recursiveFill(img, row + 1, col, existingColor, newColor);  // bottom
  recursiveFill(img, row, col - 1, existingColor, newColor);  // left
  recursiveFill(img, row - 1, col, existingColor, newColor);  // top
}

console.log('-- before --')
printImage(image);

floodFill(image, 4, 1, 6);

console.log('\n');
printImage(image);
