function longest(input) {
  let x = input.split(" ");
  console.log(x);
  let largest = 0;
  let y = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i].length > largest) {
      largest = x[i].length;
      y = x[i];
    }
  }
  console.log("The longest word is :", y);
  console.log("The length longest word is :", largest);
}

longest("My name is Chirag");

//The above function has been created to find the length of the longest word from the string.
//Practice Question.
