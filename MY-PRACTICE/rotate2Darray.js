/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/*Leetcode Question number -48
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 DO NOT allocate another 2D matrix and do the rotation.
 */

//Algorithg-Take the 2D array as the input
//Transpose the array - means change the rows to column or vice-versa by using swapping and not taking the other array.
// After transposing the array just reverse each row and we are done.

var rotate = function (matrix) {
  const n = matrix.length;
  // console.log(n);

  // Step 1: Changing rows to column and change column to rows.
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
      //   matrix[i][j] = matrix[i][j] + matrix[j][i];
      //   matrix[j][i] = matrix[i][j] - matrix[j][i];
      //   matrix[i][j] = matrix[i][j] - matrix[j][i];
      //       a = a + b;
      // b = a - b;
      // a = a - b;
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);

console.log(matrix);
