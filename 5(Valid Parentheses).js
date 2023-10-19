// Creating the program with the help of object.

function ValidParentheses(a) {
  let Objecty = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  k = a.split("");
  console.log(k);
  empty = [];
  if (a.length % 2 == 0) {
    for (let i = 0; i < k.length; i++) {
      if (a[i] == "(" || a[i] == "{" || a[i] == "[") {
        empty.push(a[i]);
      } else {
        top = empty.pop();
        if (Objecty[k[i]] !== top) {
          console.log("False");
          //   console.log(Objecty[k[i]]);
        }
      }
    }
    if (empty.length === 0) {
      console.log("The provided input is valid");
    }
  } else {
    console.log("Please provide a valid input");
  }
}

// a = "(){}[]";
// a = "()()()()()()()()()()()()()()()()()()()()";
// a = "][";
// a = "()[";
a = "((";
ValidParentheses(a);
