arr = [1, 2, 3, 4, 5, 7, 9];
var LetsUnshift = function (array, item) {
  for (var i = array.length - 1; i > 0; i--) {
    array[i + 1] = array[i];
  }
  array[0] = item;
};

function LRU(arr, x) {
  if (arr.length > 0 && arr.length <= 8) {
    if (arr.includes(x)) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
          arr.splice(i, 1);
          LetsUnshift(arr, x);
        }
      }
    } else {
      LetsUnshift(arr, x);
    }
  }
  return arr;
}

console.log(LRU(arr, 5));
