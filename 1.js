function sorted(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr2.push(0);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      arr2.push(1);
    }
  }
  console.log(arr2);
}

sorted([1, 0, 1, 0, 0, 0, 0, 0, 1, 1]);
