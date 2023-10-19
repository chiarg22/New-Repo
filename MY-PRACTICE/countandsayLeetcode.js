//This is the approach provided by Romesh.

const countAndSay = (n) => {
  let str = "1";
  if (n < 0) {
    return false;
  }
  for (let i = 1; i < n; i++) {
    let nextstr = "";
    let count = 1;

    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[j + 1]) {
        count++;
        // console.log(nextstr);
        // console.log(str);
      } else {
        nextstr += count + str[j];
        count = 1;
        console.log(nextstr);
        // console.log(str);
      }
    }

    str = nextstr;
  }

  return str;
};

let n = 2;
console.log(countAndSay(n));
