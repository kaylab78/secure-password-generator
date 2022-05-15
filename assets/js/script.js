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
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", ";", ":", "<", ">", ".", "?"];
  var charactersChosen = [];
  var result = [];

  if (confirmLower) {
    // If the user chose lowercase, include at least one random lowercase letter from the lowercase array
    charactersChosen = charactersChosen.concat(lowercase)
    var chooseLower = lowercase[Math.floor(Math.random() * lowercase.length)];
    result.push(chooseLower);
  };

  if (confirmUpper) {

    charactersChosen = charactersChosen.concat(uppercase)
    var chooseUpper = uppercase[Math.floor(Math.random() * uppercase.length)];
    result.push(chooseUpper);
  };

  if (confirmNumbers) {
    charactersChosen = charactersChosen.concat(numbers)
    var chooseNum = numbers[Math.floor(Math.random() * numbers.length)];
    result.push(chooseNum);
  };

  if (confirmSpecial) {
    charactersChosen = charactersChosen.concat(specialCharacters)
    var chooseSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    result.push(chooseSpecial);
  };

  // Fill in remaining characters to reach the user's desired password length
  var length = passwordLength - result.length;

  for (var i = 0; i < length; i++) {
    var finalChoice = charactersChosen[Math.floor(Math.random() * charactersChosen.length)];
    result.push(finalChoice);
  };

  // Return the password to be used in other portion of code
  return result.join("");
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