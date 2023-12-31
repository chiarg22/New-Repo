let firstName = document.getElementById("firstName");
let middleName = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let githubLink = document.getElementById("githubLink");
let linkedinLink = document.getElementById("linkedinLink");
let submit = document.getElementById("submit");
let okbox = document.getElementById("okbox");
let ok = document.getElementById("ok");

let firstNameError = document.getElementById("firstNameError");
let middleNameError = document.getElementById("middleNameError");
let lastNameError = document.getElementById("lastNameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let githubError = document.getElementById("githubError");
let linkedinError = document.getElementById("linkedinError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

const passwordPattern = /^(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
const githubPattern = /github\.com\/([A-Za-z_-]+\/)?[A-Za-z0-9_-]+$/;
const linkedinPattern = /linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/; // Usage of regex

firstName.oninput = () => {
  const inputValue = firstName.value; //Chirag
  console.log(inputValue);
  for (let i = 0; i < inputValue.length; i++) {
    const inputtedvalue = inputValue.charCodeAt(i);
    if (
      inputtedvalue === null ||
      inputtedvalue === undefined ||
      !isNaN(inputtedvalue) ||
      typeof inputtedvalue !== "string"
    ) {
      // console.log("char");

      firstNameError.innerText = "Invalid characters";
      firstNameError.style.display = "block";
      firstName.style.padding = ".3rem";
      firstName.style.outline = "2px solid red";

      break;
    } else {
      // console.log("not char");
      firstName.style.outline = "none";
      // firstName.style.outline = "2px solid green";
      firstNameError.style.display = "none";
      firstName.style.padding = ".5rem";
    }
  }
};

middleName.oninput = () => {
  const inputValue = middleName.value;

  for (let i = 0; i < inputValue.length; i++) {
    const inputtedvalue = inputValue.charCodeAt(i);
    if (
      inputtedvalue === null ||
      inputtedvalue === undefined ||
      !isNaN(inputtedvalue) ||
      typeof inputtedvalue !== "string"
    ) {
      middleNameError.innerText = "Invalid characters";
      middleNameError.style.display = "block";
      middleName.style.padding = ".3rem";
      middleName.style.outline = "1px solid red";

      break;
    } else {
      middleName.style.outline = "none";
      middleNameError.style.display = "none";
      middleName.style.padding = ".5rem";
    }
  }
};

lastName.oninput = () => {
  const inputValue = lastName.value;

  for (let i = 0; i < inputValue.length; i++) {
    const inputtedvalue = inputValue.charCodeAt(i);
    if (
      inputtedvalue === null ||
      inputtedvalue === undefined ||
      !isNaN(inputtedvalue) ||
      typeof inputtedvalue !== "string"
    ) {
      lastNameError.innerText = "Invalid characters";
      lastNameError.style.display = "block";
      lastName.style.padding = ".3rem";
      lastName.style.outline = "1px solid red";

      break;
    } else {
      lastName.style.outline = "none";
      lastNameError.style.display = "none";
      lastName.style.padding = ".5rem";
    }
  }
};
submit.onclick = () => {
  // Email validation
  if (
    !(
      email.value.includes("@gmail.com") ||
      email.value.includes("@outlook.com") ||
      email.value.includes("@yahoo.com") ||
      email.value.includes("@aol.com") ||
      email.value.includes("@mail.com")
    )
  ) {
    email.style.outline = "1px solid red";
    emailError.innerText = "Invalid email format";
    emailError.style.display = "block";
    email.style.padding = ".3rem";
  } else {
    emailError.style.display = "none";
    email.style.padding = ".5rem";
    email.style.outline = "none";
  }

  // Password validation
  if (password.value.length <= 8 && !passwordPattern.test(password.value)) {
    // The test() method tests for a match in a string.
    //If it finds a match, it returns true, otherwise it returns false and it is like is the substring there in the string.
    passwordError.innerText =
      "Password must contain at least 8 characters with a number and a special character";
    passwordError.style.display = "block";
    password.style.padding = ".3rem";
    password.style.outline = "1px solid red";
  } else {
    password.style.outline = "none";
    passwordError.style.display = "none";
    password.style.padding = ".5rem";
  }

  // Confirm Password validation
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.innerText = "Passwords do not match";
    confirmPasswordError.style.display = "block";
    confirmPassword.style.padding = ".3rem";
    confirmPassword.style.outline = "1px solid red";
  } else {
    confirmPasswordError.style.display = "none";
    confirmPassword.style.padding = ".5rem";
    confirmPassword.style.outline = "none";
  }

  // GitHub URL validation
  if (!githubPattern.test(githubLink.value)) {
    // githubLink.value.trim() !== "" &&
    githubError.innerText = "Invalid GitHub URL format";
    githubError.style.display = "block";
    githubLink.style.padding = ".3rem";
    githubLink.style.outline = "1px solid red";
  } else {
    githubLink.style.outline = "none";
    githubError.style.display = "none";
    githubLink.style.padding = ".5rem";
  }

  //DOB

  // LinkedIn URL validation
  if (!linkedinPattern.test(linkedinLink.value)) {
    linkedinError.innerText = "Invalid LinkedIn URL format";
    linkedinError.style.display = "block";
    linkedinLink.style.padding = ".3rem";
    linkedinLink.style.outline = "1px solid red";
  } else {
    linkedinLink.style.outline = "none";
    linkedinError.style.display = "none";
    linkedinLink.style.padding = ".5rem";
  }

  // First Name validation
  if (firstName.value.trim() === "") {
    firstNameError.innerText = "First name cannot be empty";
    firstNameError.style.display = "block";
    firstName.style.padding = ".3rem";
    firstName.style.outline = "1px solid red";
  } else {
    firstName.style.outline = "none";
    firstNameError.style.display = "none";
    firstName.style.padding = ".5rem";
  }

  // Middle Name validation
  middleName.style.outline = "none";
  middleNameError.style.display = "none";
  middleName.style.padding = ".5rem";

  // Last Name validation
  if (lastName.value.trim() === "") {
    lastNameError.innerText = "Last name cannot be empty";
    lastNameError.style.display = "block";
    lastName.style.padding = ".3rem";
    lastName.style.outline = "1px solid red";
  } else {
    lastName.style.outline = "none";
    lastNameError.style.display = "none";
    lastName.style.padding = ".5rem";
  }

  if (
    emailError.style.display === "none" &&
    passwordError.style.display === "none" &&
    confirmPasswordError.style.display === "none" &&
    githubError.style.display === "none" &&
    linkedinError.style.display === "none" &&
    firstNameError.style.display === "none" &&
    lastNameError.style.display === "none"
  ) {
    okbox.style.display = "block";
  }
};
