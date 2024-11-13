'use strict';

const max = (matrix) => {
  let max = -Infinity;
  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > max) {
        max = matrix[row][col];
      }
    }
  return max;
};
console.log(max([[1,  2, 3], [4, 11, 6], [7, 8, 9]]));


module.exports = { max };
