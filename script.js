// This password generator shall allow a user to generate a password between 8-50 characters with a minimum of one predefined parameter (i.e. numerical length, special characters, and letter case.)

// Global Variables
// This is my database: numbers, special characters, lowercase letters, uppercase letters

let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharacters = ['@', '%', '+', '//', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let allChoices = [];


let password = [];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Functions

// This function will generate the password and return it to the correct password.
function generatePassword() {
  // Need to know how long the password is
  let passwordLength = prompt('How long is your password?');
  // Need to know what type of characters they want in their password
  let hasNumbers = confirm('Do you want numbers?');
  let hasSpecial = confirm('Do you want special characters?');
  let hasLower = confirm('Do you want lower case characters?');
  let hasUpper = confirm('Do you want upper case characters?');

  if (passwordLength < 50 || passwordLength > 8) {
    alert('You must choose a password between 8 and 50 characters.');
    generatePassword();
  }
  // Based on the responses, call from chosen arrays.
  if (hasNumbers === false && hasSpecial === false && hasLower === false && hasUpper === false) {
    alert('You must choose at least one option.');
    generatePassword();
  }
  if (hasNumbers === true) {
    allChoices = allChoices.concat(number);
    let maximum = number.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(number[rnd]);
    passwordLength--;
  }
  if (hasSpecial === true) {
    allChoices = allChoices.concat(specialCharacters);
    let maximum = specialCharacters.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(specialCharacters[rnd]);
    passwordLength--;

  }
  if (hasLower === true) {
    allChoices = allChoices.concat(lowerCase);
    let maximum = lowerCase.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(lowerCase[rnd]);
    passwordLength--;

  }
  if (hasUpper === true) {
    allChoices = allChoices.concat(upperCase);
    let maximum = upperCase.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(upperCase[rnd]);
    passwordLength--;

  }

  for (let i = 0; i < passwordLength; i++) {
    let maximum = allChoices.length - 1;
    let minimum = 0;
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(allChoices[rnd]);
  }

  // Create a password using random numbers as long as the length.
}
// 
function getRandomArbitrary(max) {
  return Math.floor(Math.random() * max)
};

// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
