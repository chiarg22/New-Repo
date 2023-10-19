// function reverseNumber(number) {
//   var revNumber = 0;
//   while (number > 0) {
//     revNumber = revNumber * 10 + (number % 10);
//     number = Math.floor(number / 10);
//   }
//   return revNumber;
// }
// console.log(reverseNumber(876));

//step - 1 creat a function reverseNumber with parameter num.
//step - 2 consider numsreversed to 0.
//step - 3 consider a variable numsreversed to store the reversed number, and a variable sign to store the sign of the input number
//step - 4 While num is greater than 0:
//step - 5 Extract the last digit of num using num % 10.
//step - 6 Multiply reversed by 10 and add the last digit to it (reversed * 10 + num % 10).
//step - 7 Remove the last digit from the original number using Math.floor(num / 10).
//step - 8 Multiply reversed by sign to retain the original number's sign.
//step - 9 Return reversed as the reversed number.

function reverseNumber(num) {
  let numsreversed = 0;
  let sign = num < 0 ? -1 : 1;
  num = Math.abs(num);

  while (num > 0) {
    numsreversed = numsreversed * 10 + (num % 10);
    num = Math.floor(num / 10);
    console.log(numsreversed);
  }

  return numsreversed * sign;
}

let input = -48763120;
let output = reverseNumber(input);
console.log(output);
