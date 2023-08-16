// let array = [1, 3, 5, 2, 6, 7, 4];
// let obj = {};

// for (let i = 0; i < array.length; i++) {
//   obj[i] = obj.hasOwnProperty(i) ? obj[i]++ : 1;
// }

// console.log(obj);
array = [1, 3, 5, 2, 6, 7, 4];
obj = {};

for (let i = 0; i < array.length; i++) {
  obj[i] = obj.hasOwnProperty(i) ? obj[i] + 1 : 1;
}

console.log(obj);
let a = Object.keys(obj);
second(a);

function second(x) {
  leng = x.length - 1;
  console.log(leng);
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      if (x[i] > x[j]) {
        x[i] = x[j];
      }
    }
  }
  console.log(x); // ascending order
  //To find the second largest
  console.log(x[leng - 1]);
}

//   x = [1, 2, 3, 45, 2, 4, 6, 8, 55, 444];
//   second(x);
