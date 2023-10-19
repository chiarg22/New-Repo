function reverse(a) {
  if (a.length <= 1) {
    console.log(a[a.length - 1]);
    a.pop();
    reverse(a);
  }
}

console.log(reverse("Ankit"));

 // else if(a.length===0)
  // {
  //     break;
  // }

/*ankit
len-5
t-popped
print a[length-1]


//Reverse a string using recursion.
// && a.length !== 0
//typeof a === "string" &&

//const flatArrayV1 = (arr) => {
// const result = arr.flat(); // Not working for nested
//   const result = arr.flat(Infinity);
//   return result;
// };

// const flatArrayV2 = (arr) => {
//   const cpArr = [...arr];
//   const result = [];

//   const flatArray = (inputArr) => {
//     for (let i = 0; i < inputArr.length; i++) {
//       const currentElem = inputArr[i];
//       if (!Array.isArray(currentElem)) {
//         result.push(currentElem);
//         continue;
//       }

//       flatArray(currentElem);
//     }
//   };

//   flatArray(cpArr);

//   return result;
// };

// console.log(flatArrayV2([1, 2, [1, 2], [1, 2, [1, 2]], 3]));
