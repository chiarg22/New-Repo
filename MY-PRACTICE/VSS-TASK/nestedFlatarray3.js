let arr = [1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5];
var newarray = [];
function printarray(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     newarray.push(arr[i]);
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printarray(arr[i]);
    } else {
      newarray.push(arr[i]);
    }
  }
  return newarray;
}

console.log(printarray(arr));

// This is the approach provided by Sanskriti and here we are rectifying her code.
//This program has been made with the help of recursion.
// Here we are looping through the entire arraya and when array is found using the function Array.isArray at any index of the main array
//we are going to call the main function i.e. the printarray again and hence in this way the last output shall be our answer and the
// rectified array.
