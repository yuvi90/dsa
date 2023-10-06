/*
  Reverse String using recursion

  "abcde" ===> "edcba"
*/

// Method 1

function reverseString(string, n, result) {
  if (n < 0) {
    return result;
  }
  result = result + string[n];
  let str = reverseString(string, n - 1, result);

  return str;
}

// Method 2
// String are immutable in javascript therefore converted in array so can pass by reference

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

const inputString = "abcde";
let reversedString1 = reverseString(inputString, inputString.length - 1, "");
let reversedString2 = reverse(inputString, 0, inputString.length - 1);
console.log(inputString);
console.log(reversedString1);
console.log(reversedString2);
