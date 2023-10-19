//This is the version 1.

const validParanthesis = (input) => {
  const splittedArr = input.split("");

  const [firstElem] = splittedArr;
  // Array destructuring

  if (
    typeof input !== "string" || // if it is not string then return the false.
    !input || //!input checks for - null, undefined, false,0 and empty -> ""
    input.length % 2 !== 0 || // will check for odd or even
    !["{", "(", "["].includes(firstElem)
  ) {
    return false;
  }

  const stackArr = [];

  for (let i = 0; i < splittedArr.length; i++) {
    const currentElem = splittedArr[i]; // ")"
    const recentlyAddedStackElem = stackArr[stackArr.length - 1]; // (

    // Check for {}
    if (recentlyAddedStackElem === "{" && currentElem === "}") {
      stackArr.pop();
      continue;
    }

    // Check for []
    if (recentlyAddedStackElem === "[" && currentElem === "]") {
      stackArr.pop();
      continue;
    }

    // Check for ()
    if (recentlyAddedStackElem === "(" && currentElem === ")") {
      stackArr.pop();
      continue;
    }

    stackArr.push(currentElem); // []

    // Handle false case
  }
  return stackArr.length === 0;
};

console.log(validParanthesis("())"));
