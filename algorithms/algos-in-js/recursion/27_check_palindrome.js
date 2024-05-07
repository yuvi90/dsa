/*
  Check Palindrome using Recursion

  if both strings are equal then its a palindrome
    - string = "abba"
    - reversed_string = "abba" 
*/

// Method 1

function isPalindrome(string, i, j) {
  // Base Case: Two Different Base Cases
  if (i >= j) {
    return true;
  }
  if (string.charAt(i) !== string.charAt(j)) {
    return false;
  }
  // Hypothesis
  const result = isPalindrome(string, ++i, --j);
  // Induction Step
  return result;
}

let inputString = "abba";
console.log(
  "\nMethod 1\n",
  isPalindrome(inputString, 0, inputString.length - 1)
);

// Method 2

function checkPalindrome(string, i) {
  // Base Case: Two Different Base Cases
  if (i >= string.length - 1 - i) {
    return true;
  }
  // Hypothesis
  if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
    return false;
  }
  // Induction Step
  return checkPalindrome(string, i + 1);
}

inputString = "madam";
console.log("\nMethod 2\n", checkPalindrome(inputString, 0));
