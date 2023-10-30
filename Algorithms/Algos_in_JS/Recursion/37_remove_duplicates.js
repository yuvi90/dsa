function removeDuplicates(str) {
  // Base case: if string has 0 or 1 character, there are no duplicates
  if (str.length <= 1) {
    return str;
  }

  // If the first character is equal to the second one, skip it
  if (str[0] === str[1]) {
    return removeDuplicates(str.substring(1)); // Move to the next character
  } else {
    // If not equal, append the first character to the result of the next characters
    return str[0] + removeDuplicates(str.substring(1));
  }
}

const inputString = "bookkeeper";
const result = removeDuplicates(inputString);
console.log(result); // Output: "bokeper"
