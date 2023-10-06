/*
  Check Palindrome using Recursion

  if both strings are equal then its a palindrome
    - string = "abba"
    - reversed_string = "abba" 
*/

// Method 1

function isPalindrome(string, i, j) {
  // Base Case
  if (i >= j) {
    return true;
  }
  if (string[i] !== string[j]) {
    return false;
  }
  // Hypothesis
  const result = isPalindrome(string, ++i, --j);
  // Induction Step
  return result;
}

// Method 2

function checkPalindrome(string, n) {}

const inputString = "abba";
console.log(isPalindrome(inputString, 0, inputString.length - 1));
