// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log({ i });
//   }, 0);
// }

// Ways to fix it to get { i: 0 }
// { i: 1 }
// { i: 2 }
// { i: 3 }
// { i: 4 }

//1-> using let as it is going to change var i=0 from global to local scope let i=0;

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log({ i });
//   }, 0);
// }

//2-> Create a function

for (var i = 0; i < 5; i++) {
  function run() {
    setTimeout(() => {
      console.log({ i });
    }, 0);
  }

  run();
}

//3-> Create a function

// for (var i = 0; i < 5; i++) {
//   let j = i;
//   setTimeout(() => {
//     console.log({ j });
//   }, 0);
// }

//4-> Using IIFE.

// for (var i = 0; i < 5; i++) {
//   ((i) => {
//     setTimeout(() => {
//       console.log({ i });
//     }, 0);
//   })(i);
// }
