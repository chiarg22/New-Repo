function Replace(name) {
  if (name === null || name === undefined || typeof name !== "string") {
    console.log("Please enter a valid input");
  } else {
    const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Welcome to the team ${formattedName}`;
  }
}

const result = Replace("cHIRag");
console.log(result); // Output: "Welcome to the team Chirag"

function Replace(name) {
    if (name === null || name === undefined || typeof name !== "string") {
      console.log("Please enter a valid input");
    } else {
      const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
      console.log(formattedName);
      return `Hello ${formattedName} , welcome to VSS`;
    //   return `Welcome to the team ${formattedName}`;
            //   return 'Welcome to the team ${formattedName}';
      // return `Hello ${formattedName}, welcome to the team`;
    }
  }