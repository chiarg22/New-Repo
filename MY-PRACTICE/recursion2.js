function even(n) {
  if (n % 2 == 0) {
    console.log(n);
    even(n - 1);
  } else if (n > 0) {
    even(n - 1);
  }
}

even(5);
