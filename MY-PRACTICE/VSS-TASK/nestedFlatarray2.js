let newarray = [];
function printarray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printarray(arr[i]);
    } else {
      newarray.push(arr[i]);
    }
  }
  return newarray;
}
// Check if the element is array :
// If array call the function
// if not array push to the output array
// This is the approach provided by Sushitha
console.log(printarray([1, 2, 3, 4, [1, 2], [3, 4, [3, 4]], 5]));
