const arr = "Anamika";

function remove(arr) {
  arr = arr.toLowerCase();
  k = arr.split("");
  for (let i = 0; i < k.length; i++) {
    for (let j = i + 1; j < k.length; j++) {
      if (k[i] == k[j]) {
        k[j] = undefined;
      }
    }
  }
  for (i = 0; i < k.length; i++) {
    if (k[i] != undefined) {
      console.log(k[i]);
    }
  }
}

remove(arr);

//This is a program to remove the Duplicate characters from the String.
//This is Day 1-Question 1.
