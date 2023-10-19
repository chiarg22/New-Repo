let arr = [1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5];
function printarray(arr) {
  return arr.toString();
}

console.log(printarray(arr));

//This is tumhare bhai ki approach.
// In this process, the toString() method is recursively applied to their elements until a string representation is generated.
