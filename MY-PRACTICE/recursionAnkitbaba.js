const runLoopInReverse = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
};

const runLoopInReverseUsingRecusrion = (num) => {
  const iterateNumer = (i) => {
    console.log(i);
    if (i !== 0) {
      num--;
      iterateNumer(num);
    }
  };

  iterateNumer(num);
};

runLoopInReverseUsingRecusrion(10);

/*const reverse = (str) => {
  let newStr = "";

  const reverseAgain = (index) => {
    if (index >= 0) {
      newStr += str[index];
      reverseAgain(index - 1);
    }
  };

  reverseAgain(str.length - 1);
  return newStr;
};

const str = "romesh";
console.log(reverse(str)); 
*/
