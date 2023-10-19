//This is the program to search 2d matrix. Question number 74 of leetcode.
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// m == matrix.length
// n == matrix[i].length
/*You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.*/

var searchMatrix = function (matrix, target) {
  let k = 0;
  m = matrix.length;
  var n = 0;
  console.log(m);
  // n = matrix[i].length;
  for (let x = 0; x < m; x++) {
    n = matrix[x].length;
  }
  console.log(n);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == target) {
        k++;
      }
    }
    if (k === 1) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    23
  )
);
