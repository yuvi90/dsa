/*
    Permutation Problem Statement:-
        - Arrange "abc" in possible different ways 
        - N Factorial Solutions i.e. 3 x 2 x 1 = 6 Possible Solutions 
        - Time Complexity = O(n*n!)
*/

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
let result = [];
getPossibleArrangements(string, "", result);
console.log(result);
