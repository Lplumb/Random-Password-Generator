// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays for all avaiable characters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+", "="];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//adding variables for confirmations
var passLength;
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmnumber;


//asked for password length
function makePassword(){
  passLength = prompt ("Please enter how long you want your password (Must be between 8 to 128 characters long)");

//checks if pass word length is between 8 to 128 characters, if not it will alert the user and put them back on the prompt screen
if (passLength < 8 || passLength > 128) {
  alert ("Password must be 8 to 128 characters!");
  makePassword();
}

return passLength;
}

//asks if you want uppercase letters in your password
function askUpper() {
  confirmUpper = confirm("Would you like uppercase letters in your password?");
  return confirmUpper;
}

function askLower() {
  confirmLower = confirm("Would you like lowercase letters in your password?");
  return confirmLower;
}

function askSpecial() {
  confirmSpecial = confirm("Would you like special characters in your password?");
  return confirmSpecial;
}

function askNumber() {
  confirmnumber = confirm("Would you like numbers in your password?");
  return confirmnumber;
}


// mixes all of the arrays if they are true
var passCharacters = []

if (confirmUpper) {
  passCharacters = passCharacters.concat(upperCase)
}

if (confirmLower) {
  passCharacters = passCharacters.concat(lowerCase)
}

if (confirmnumber) {
  passCharacters = passCharacters.concat(number)
}

if (confirmSpecial) {
  passCharacters = passCharacters.concat(specChar)
}

console.log(passCharacters);
 
var ranPassword = ""

for (i = 0; i < passLength; i++) (
  ranpassword = ranPassword + passCharacters[Math.floor(math.random() * passCharacters.length)]
);

console.log(ranPassword);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
