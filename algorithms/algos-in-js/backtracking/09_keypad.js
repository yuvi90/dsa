/*
  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

  A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

function combinations(digits) {
  if (digits.length === 0) return [];
  // Keypad Mapping
  const keyMappings = new Map();
  keyMappings.set(2, "abc");
  keyMappings.set(3, "def");
  keyMappings.set(4, "ghi");
  keyMappings.set(5, "jkl");
  keyMappings.set(6, "mno");
  keyMappings.set(7, "pqrs");
  keyMappings.set(8, "tuv");
  keyMappings.set(9, "wxyz");
  // Solution
  let result = [];
  solve(digits, 0, "", result);
  function solve(digits, index, currentCombination, output) {
    if (index >= digits.length) {
      // Add current combination to the output
      output.push(currentCombination);
      return;
    }
    let digit = parseInt(digits.charAt(index));
    let mapping = keyMappings.get(digit);
    for (let i = 0; i < mapping.length; i++) {
      // Include the current combination
      currentCombination += mapping.charAt(i);
      solve(digits, index + 1, currentCombination, output);
      // Backtrack to remove the last character
      currentCombination = currentCombination.slice(0, -1);
    }
  }
  return result;
}

const testCases = [
  ["23", ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]],
  ["", []],
  ["2", ["a", "b", "c"]],
  ["9", ["w", "x", "y", "z"]],
];

testCases.forEach((input, i) => {
  let testCase = i + 1;
  console.log("\nCase ", testCase);
  const digits = input[0];
  const output = input[1];
  console.log("Digits : ", digits);
  console.log("Expected : ", output);
  let result = combinations(digits);
  console.log("Output : ", result);
  for (let i = 0; i < output.length; i++) {
    if (!output.includes(result[i])) {
      console.log("FAIL");
      return;
    }
  }
  console.log("PASS");
});
