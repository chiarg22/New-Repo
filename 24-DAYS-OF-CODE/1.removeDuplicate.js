const arr = [1, 2, 3, 0, 3, 2];

function remove(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr[j] = undefined;
      }
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != undefined) {
      console.log(arr[i]);
    }
  }
}

remove(arr);

//This is a program to remove the Duplicate numbers from the array.
//This is Day 1-Question 1(for numbers only).
