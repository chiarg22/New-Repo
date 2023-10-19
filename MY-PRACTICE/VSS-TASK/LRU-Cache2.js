// arr = [1, 2, 3, 4, 5, 7, 9];

// var LetsUnshift = function (array, item) {
//   for (var i = array.length - 1; i > 0; i--) {
//     array[i + 1] = array[i];
//   }
//   array[0] = item;
//   return array;
// };

// console.log(LetsUnshift(arr, 5));

// arr.unshift(5) will give the output as 8
// console.log(arr.unshift(5));
// will give us the OP as [5, 1, 2, 3, 4, 5, 7, 9]

arr = [1, 2, 3, 4, 5, 7, 9];

function unshifty(arr, x) {
  k = arr.length;
  for (let i = k; k > 0; k--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = x;
  return arr;
}

console.log(unshifty(arr, 5));
