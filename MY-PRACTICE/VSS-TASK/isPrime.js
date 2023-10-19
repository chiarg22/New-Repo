//- Write a program to check if a number is a Prime number
//This is the program to find the prime of a number
//We wil take n as the input and will run the loop till and take a couter=0 and will divide it by i.
//And if counter==2 return prime and else return not prime.

function isPrime(n) {
  counter = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      counter++;
    }
  }
  if (counter == 2) {
    return "Prime";
  } else {
    return "NotPrime";
  }
}

console.log(isPrime(5));
