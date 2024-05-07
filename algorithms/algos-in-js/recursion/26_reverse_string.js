/*
  Reverse String using recursion

  "abcde" ===> "edcba"
*/

// Method 1

function reverseString(string, n) {
  if (n === 0) {
    return string[n];
  }
  let remainingPart = reverseString(string, n - 1);
  return string[n] + remainingPart;
}

console.log("\nMethod 1");
let inputString = "abcde";
console.log("Input String - ", inputString);
let reversedString = reverseString(inputString, inputString.length - 1);
console.log("New Reversed String - ", reversedString);
console.log("Original String - ", inputString);

// Method 2
// Strings are immutable in javascript therefore converted in array so can pass by reference if we want to use pointers

function reverse(string, i, j) {
  if (i >= j) {
    return string; // Base case: Return the reversed string
  }

  const stringArray = string.split(""); // Convert the string to an array
  const temp = stringArray[i];
  stringArray[i] = stringArray[j];
  stringArray[j] = temp;
  i++;
  j--;
  // Convert the array back to a string and make a recursive call
  let str = reverse(stringArray.join(""), i, j);
  return str;
}

console.log("\nMethod 2");
inputString = "Hello";
console.log("Input String - ", inputString);
reversedString = reverse(inputString, 0, inputString.length - 1);
console.log("New Reversed String - ", reversedString);
console.log("Original String - ", inputString);
