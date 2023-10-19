//- Write a program to create a factorial of number
//This is the program to find the factorial of a number
//We wil take n as the input and will run the loop till n>1 and keep on n--
//And hence the Output will be the answer.

function factorial(n) {
  output = 1;
  for (let i = n; i > 1; i--) {
    output = output * i;
  }
  return output;
}

console.log(factorial(5));
