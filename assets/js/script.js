function generatePassword(){
  // select the password length
  function length() {
    // Ask user how many characters they want their password to be
    var passwordLength = window.prompt("How many characters do you want your password to have?");
  
      if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please choose a value between 8 and 128.");
      };
      return length();
  };
  
  length();

  // there needs to be a check for length between 8 - 128 characters

  // select password criteria in prompts (lower, upper, special, and number)

  // If the user answers no for the previous password questions, a message will appear saying they need to choose at least one character type. The prompts will start over.

  // generate password

  // return the password to be used in other portion of code
}


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
