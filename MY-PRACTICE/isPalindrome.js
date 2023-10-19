// This is the program to find whether an input is a palindrome or not.
// Firstly we will convert the entire input to the lowercase
// After that we will check whether the provided input is valid or not./
// If valid we store the reverse of the array in another array and then will compare original and reversed array and wil give the O/P.

function palindrome(str) {
  let empty = "";
  //   str = str.toLowerCase();
  //   str = str.toLowerCase();
  console.log(str);
  if (
    str === null ||
    str === undefined ||
    !isNaN(str) ||
    typeof str !== "string"
  ) {
    return "Please provide a valid input and the input must be a string";
  } else {
    str = str.toLowerCase(); // Need to put toLowerCase here bcz if we put above then it will not able to check for numbers as toLowerCase
    // do not work on numbers and will not work on str=123 but will work on str="123";
    for (
      let i = str.length - 1;
      i >= 0;
      i-- // Reason for i=str.length-1 is that the length ie the str.length would be 6 but str[6]= undefined // so we will have str[5]=last element of the array or string.
    ) {
      empty = empty + str[i]; // By default all the empty elements in the array are set to undefined.
    }
  }
  console.log(empty);
  if (empty === str) {
    return true;
  } else {
    return false;
  }
}

str = 123;
console.log(palindrome(str));
