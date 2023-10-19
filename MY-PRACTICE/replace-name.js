function Replace(name) {
  if (name === null || name === undefined || typeof name !== "string") {
    return "Please enter a valid input";
  } else {
    const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    // console.log(formattedName);
    return `Hello ${formattedName} , welcome to VSS`;
    //   return `Welcome to the team ${formattedName}`;
    //   return 'Welcome to the team ${formattedName}';
    // return `Hello ${formattedName}, welcome to the team`;
  }
}
console.log(Replace("ramesh"));
//The above function has been created to replace the name within the sentence and convert the first letter of name to upper and remaining to the lowercase.
//Practice Question.
