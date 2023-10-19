//This is the program to find the reverse of a string.
// It will check whether the provided input is valid or not and if it is invaid then the error will be displayed "Please enter the valid input"
// And if the input is valid then we will be reversing the string.

function reverse(str) {
  let result = "";
  if (
    !isNaN(str) ||
    typeof str !== "string" ||
    str === undefined ||
    str === null
  ) {
    return "Please enter the valid input";
  } else {
    for (let i = str.length - 1; i >= 0; i--) {
      result = result + str[i];
    }
  }
  return result;
}

// str = "Chirag";
// str = 123;
str = "Muskan";
console.log(reverse(str));
