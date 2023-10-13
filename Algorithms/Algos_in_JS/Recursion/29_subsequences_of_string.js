/*
  string = 'abc'
  2^n total subsets i.e. 2^3 = 8

  total subsets : [ '', 'a', 'b', 'c', 'abc', 'ab', 'bc', 'ac' ]
*/

function subsequencesOfStrings(string, index, currentSubseq, output) {
  if (index === string.length) {
    output.push(currentSubseq); // Add current subsequence to the output
    return;
  }
  // Exclude the current character
  subsequencesOfStrings(string, index + 1, currentSubseq, output);
  // Include the current character
  currentSubseq = currentSubseq + string[index];
  subsequencesOfStrings(string, index + 1, currentSubseq, output);
  // Backtrack to remove the last character for the next subsequence
  currentSubseq = currentSubseq.slice(0, -1);
}

const string = "abc";
const output = [];
subsequencesOfStrings(string, 0, "", output);
console.log(output);
