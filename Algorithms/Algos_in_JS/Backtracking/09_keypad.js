function solution(string, index, currentCombination, output, mappings) {
  if (index >= string.length) {
    output.push(currentCombination); // Add current combination to the output
    return;
  }

  let num = parseInt(string[index]);
  let value = mappings[num];

  for (let i = 0; i < value.length; i++) {
    // Include the current combination
    currentCombination = currentCombination + value[i];
    solution(string, index + 1, currentCombination, output, mappings);
    // Backtrack to remove the last character
    currentCombination = currentCombination.slice(0, -1);
  }
}

const keyMappings = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "xyz",
];
const num = "23";
const output = [];
solution(num, 0, "", output, keyMappings);
console.log(output);
