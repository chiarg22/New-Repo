//This is the code for the arr.shift()
//arr = [1, 2, 3, 4, 5, 7, 9];
//arr.shift() will give the output as 1
// as it will pop the first elem and change the indexes of previous ones.
// console.log(arr.shift());
// will give us the OP as [2, 3, 4, 5, 7, 9]

arr = [1, 2, 3, 4, 5, 7, 9];

shifty = () => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return arr;
};

console.log(shifty());
