/*
  array = [2,5,4];
  2^n total subsets i.e. 2^3 = 8

  total subsets : [ [], [2], [5], [4], [2,5,4], [2,5], [5,4], [2, 4] ]
*/

function arraySubsets(array, index, currentSubset, output) {
  if (index === array.length) {
    output.push([...currentSubset]); // Add a copy of the current subset to the output
    return;
  }

  // Exclude the current element
  arraySubsets(array, index + 1, currentSubset, output);

  // Include the current element
  currentSubset.push(array[index]);
  arraySubsets(array, index + 1, currentSubset, output);

  // Backtrack to remove the last element for the next subset
  currentSubset.pop();
}

function generateSubsets(array) {
  const output = [];
  arraySubsets(array, 0, [], output);
  return output;
}

const inputArray = [2, 5, 4];
const subsets = generateSubsets(inputArray);
console.log(subsets);
