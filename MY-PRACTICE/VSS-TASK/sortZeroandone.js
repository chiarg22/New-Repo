function sorted(arr) {
  let empty = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "0") {
      empty.push(arr[i]);
      //   console.log(empty);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "1") {
      empty.push(arr[i]);
    }
  }
  return empty;
}

console.log(sorted([1, 0, 1, 0, 0, 0, 0, 0, 1, 1]));

// This is the program to sort an array that contains 0 and 1 only.
//First we are goint to take an empty array and will make a function and pass the given array as arguments and run a loop.
// Afterwards we will compare each element of the array wiht 0 and if true push it into the empty array.
// Now where the loop is ending create another loop and and push the 1 in the same way by which it will put the element on same index
//at which the previous loop was stopped and thus will retain the value.
// Thus return empty.
