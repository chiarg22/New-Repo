var isValid = function (s) {
  let Objecty = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  k = s.split("");
  console.log(s);
  empty = [];
  if (s.length % 2 == 0) {
    for (let i = 0; i < k.length; i++) {
      if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
        empty.push(s[i]);
      } else {
        top = empty.pop();
        if (Objecty[k[i]] !== top) {
          // console.log("False");
          return false;
        }
      }
    }
    if (empty.length === 0) {
      // console.log("The provided input is valid");
      return true;
    }
  } else {
    // console.log("Please provide a valid input");
    return false;
  }
};

s = "()[]{}";
s = "(("; // Only this test case is remaining.
console.log(isValid(s));
