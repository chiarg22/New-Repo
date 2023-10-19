function sorted(a) {
  //   let empty = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === 1) {
        a[i] = a[i] + a[j];
        a[j] = a[i] - a[j];
        a[i] = a[i] - a[j];
      }
      //   if (a[i] === 1) {
      //     let lastVar = a[i];
      //     a[i] = a[j];
      //     a[j] = lastVar;
      //   }
    }
  }
  //   return a;
  console.log(a);
}

// console.log(sorted([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0]));
sorted([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0]);

// This is the program to sort an array that contains 0 and 1 only.
//First we are goint to take an empty array and will make a function and pass the given array as arguments and run a loop.
//This is the code that is happening with the help of swapping.
//a=1
//b=2
//a=a+b//3
//b=a-b;//1
//a=a-b;//2
//a=1
//b=2 and c=0
//c=b//2
//b=c//1
//a=c//2
