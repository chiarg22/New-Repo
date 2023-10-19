function Leapyear(year) {
  if ((year % 4 == 0 && year % 400 == 0) || year % 100 != 0) {
    return "Leap year";
  } else {
    return "Not a Leap year";
  }
}

console.log(Leapyear(2100));
