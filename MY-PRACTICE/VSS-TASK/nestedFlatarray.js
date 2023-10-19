//Input-const example = [1,2,3,4, [1,2], [3,4, [3,4]] , 5]
//Take the array as the input
// Check the number of rows and store in m variable and and n will store the length of m[i] where i=0 and i<m
//We will take an empty array and will check like if matrix[i] is array then we will call the flatarray used for previous array again and it will
// flat the matrix[0] if it is arraya and push it in empty
// same for matrix[1] and all after that if any one is array will call the flatarray on each matrix[i] if it is nested array
// empty shall be returned.
empty = [];
var matrix = [1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5];
// k = matrix[0].length;
var flatarray2 = function (matrix) {
  //   let k = 0;
  //   empty2 = [];
  m = matrix.length;
  var n = matrix[0].length;
  console.log(m);
  // n = matrix[i].length;
  //   for (let x = 0; x < m; x++) {
  //     n = matrix[x].length;
  //     console.log(n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      if (Array.isArray(matrix[i][j])) {
        // && matrix.length[i][j]
        flatarray2(matrix[i][j]);
      } else {
        empty.push(matrix[i][j]);
      }
      //   empty.push(matrix[i][j]);
      n = matrix[i].length;
      //   console.log(empty);
    }
  }
  //   }
  return empty;
};
console.log(flatarray2([1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5]));

// Not working!!!
