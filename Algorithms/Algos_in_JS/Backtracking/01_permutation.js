/*
    Permutation Problem Statement:-
        - Arrange "abc" in possible different ways 
        - N Factorial Solutions i.e. 3 x 2 x 1 = 6 Possible Solutions 
        - Time Complexity = O(n*n!)
*/

// Arrays
function getCombinations(array, index, result) {
  if (index >= array.length) {
    result.push([...array]);
    return;
  }

  for (let i = index; i < array.length; i++) {
    let temp = array[index];
    array[index] = array[i];
    array[i] = temp;
    getCombinations(array, index + 1, result);
    temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }
}

let array = [1, 2, 3];
let result = [];
getCombinations(array, 0, result);
console.log(result);

// Strings
function getPossibleArrangements(string, currentCombination, result) {
  if (string.length === 0) {
    result.push(currentCombination);
    return;
  }

  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    let newString = string.substring(0, i) + string.substring(i + 1);
    getPossibleArrangements(newString, currentCombination + currChar, result);
  }
}

let string = "abc";
result = [];
getPossibleArrangements(string, "", result);
console.log(result);

// Strings by Arrays Approach (Because strings are immutable you cannot pass by reference therefore convert it into array before passing)
function permutation(string, index, result) {
  if (index >= string.length) {
    result.push(string);
    return;
  }

  const charArray = string.split(""); // Convert string to an array of characters

  for (let i = index; i < charArray.length; i++) {
    // Swap characters
    const temp = charArray[index];
    charArray[index] = charArray[i];
    charArray[i] = temp;

    permutation(charArray.join(""), index + 1, result); // Convert the array back to a string

    // Restore the original order for backtracking
    charArray[i] = charArray[index];
    charArray[index] = temp;
  }
}
