function kthlargest(a, k) {
  let largest = 0;
  for (let j = 0; j < k; j++) {
    largest = 0;
    let index = 0;
    for (let i = 0; i < a.length; i++) {
      // largest = a[i];
      if (largest < a[i]) {
        largest = a[i];
        index = i;
      }
    }
    // console.log(largest);
    // console.log(index);
    a.splice(index, 1);
  }
  console.log(a);
  console.log(largest);
}

a = [1, 2, 3, 45, 2, 4, 6, 8, 55, 444];
kthlargest(a, 2);
