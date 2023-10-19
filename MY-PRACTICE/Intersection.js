//This is the program to find the union of 2 arrays
//Considerign the arrays are  var arr1 = [ 1, 2, 4, 5, 6 ];
//        var arr2 = [ 2, 3, 5, 7 ]; so the desired output should be [2,5];

function Union(arr1, arr2) {
  x = arr1.length;
  y = arr2.length;
  for (i = 0; i < x; i++) {
    for (j = 0; j < y; j++) {
      if (arr2[j] === arr1[i]) {
        console.log(arr2[j]);
      }
    }
  }
  //   console.log(arr1);
  //   return arr1.concat(arr2); // Here we are using the concat method to add 2 arrays.
}

var arr1 = [1, 2, 4, 5, 6];
var arr2 = [2, 3, 5, 7];
Union(arr1, arr2);
// arr = arr1 + arr2;
// console.log(arr);
