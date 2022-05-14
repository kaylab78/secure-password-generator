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
