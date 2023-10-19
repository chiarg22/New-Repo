//This is the program to find the union of 2 arrays
//Considerign the arrays are  var arr1 = [ 1, 2, 4, 5, 6 ];
//        var arr2 = [ 2, 3, 5, 7 ]; so the desired output should be arr3=arr1+arr2 => [1,2,4,5,6,3,5,7]

function Union(arr1, arr2) {
  x = arr1.length;
  y = arr2.length;
  for (i = 0; i < x; i++) {
    for (j = 0; j < y; j++) {
      if (arr2[j] === arr1[i]) {
        arr1.splice(i, 1);
      }
    }
  }
  console.log(arr1);
  return arr1.concat(arr2); // Here we are using the concat method to add 2 arrays.
}

var arr1 = [1, 2, 4, 5, 6];
var arr2 = [2, 3, 5, 7];
console.log(Union(arr1, arr2));
// arr = arr1 + arr2;
// console.log(arr);
