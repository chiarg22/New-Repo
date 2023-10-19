function reverse(a) {
  a.split("");
  // console.log(a);
  if (a.length >= 1) {
    console.log(a[a.length - 1]);
    // a.pop();
    //Point to be noted as a.pop() does not work on strings as the strings are immutable
    // console.log(a.slice(0, a.length - 1));
    reverse(a.slice(0, a.length - 1)); // slice(start index, end index)=> hence it gives us the sub string and does not modifies the
    // original one.
  }
}

reverse("Ankit");

//This is a function to reverse a string using recursion but using slice.
//str.slice(0,-1);
//'Hello, World
// In this case when there is -1 at the end index the slice is cutting it in reverse order.
