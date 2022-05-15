function generatePassword() {
  // Select the password length
  do {
    var passwordLength = window.prompt("How many characters do you want your password to have?");
    
    // Check that the password length is between 8 - 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please choose a value between 8 and 128.");
    };
  } while (passwordLength < 8 || passwordLength > 128);

  // Select password criteria in prompts (lower, upper, number, and special)
  do {
    var confirmLower = window.confirm("Click OK to use lowercase characters in your password.");
    var confirmUpper = window.confirm("Click OK to use uppercase characters in your password.");
    var confirmNumbers = window.confirm("Click OK to use numbers in your password.");
    var confirmSpecial = window.confirm("Click OK to use special characters in your password.");
  
    // If the user answers no for the previous password questions, a message will appear saying they need to choose at least one character type. The prompts will start over.
    if (confirmLower === false && confirmUpper === false && confirmNumbers === false && confirmSpecial === false) {
      window.alert("You must choose at least one character type for your password.");
    };
  } while (confirmLower === false && confirmUpper === false && confirmNumbers === false && confirmSpecial === false);

  // Generate password
  // List the character options
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "~`!@#$%^&*()-_=+{}[]|;:',<>.?";

  if (confirmLower) {
    
  }

  for (var i = 8; i <= passwordLength; i++) {
    generatePassword = Math.floor(Math.random() * passwordLength);
  };

  //array?
  // var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", ";", ":", "<", ">", ".", "?"];

  //object?
  // var characterOptions = [
  //   {
  //     lowercase: "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  //     uppercase: "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  //     numerical: "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  //     special: "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", ";", ":", "<", ">", ".", "?",
  //   }
  // ];




  // If the user wants lowercase letters in their password, the computer should include at least one lowercase letter in the password
  // do {
  //   charset = "abcdefghijklmnopqrstuvwxyz"

  //   for (var i=0, n=charset.)
  // } while (confirmLower)


  // Return the password to be used in other portion of code
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
