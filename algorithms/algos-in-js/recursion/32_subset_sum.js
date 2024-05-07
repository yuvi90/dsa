/*
  Array = [1,2,1]
  Find subsets whose sum = 2 
*/

// Variation 1 - Solve for all available solutions
function solveForAll(arr, index, sum, sumTarget, currSubset, solution) {
  if (index > arr.length - 1) {
    if (sum === sumTarget) {
      solution.push([...currSubset]);
    }
    return;
  }
  // Include Number
  currSubset.push(arr[index]);
  sum += arr[index];
  solveForAll(arr, index + 1, sum, sumTarget, currSubset, solution);
  // Exclude Number
  sum -= arr[index];
  currSubset.pop();
  solveForAll(arr, index + 1, sum, sumTarget, currSubset, solution);
}

let array = [1, 2, 1];
let sumTarget = 2;
let solution = [];
solveForAll(array, 0, 0, sumTarget, [], solution);
console.log("\nVariation 1\n", solution);

// Variation 2 - Solve for first available solution
function solveForFirstOne(arr, index, sum, sumTarget, currSubset, solution) {
  if (index > arr.length - 1) {
    if (sum === sumTarget) {
      solution.push([...currSubset]);
      return true;
    } else return false;
  }
  // Include Number
  currSubset.push(arr[index]);
  sum += arr[index];
  if (solveForFirstOne(arr, index + 1, sum, sumTarget, currSubset, solution))
    return true;
  // Exclude Number
  sum -= arr[index];
  currSubset.pop();
  if (solveForFirstOne(arr, index + 1, sum, sumTarget, currSubset, solution))
    return true;
  return false;
}

array = [1, 2, 1];
sumTarget = 2;
solution = [];
solveForFirstOne(array, 0, 0, sumTarget, [], solution);
console.log("\nVariation 2\n", solution);

// Variation 3 - Count all available solutions
function solveForCount(arr, index, sum, sumTarget, currSubset) {
  if (index > arr.length - 1) {
    if (sum === sumTarget) {
      return 1;
    } else return 0;
  }
  // Include Number
  currSubset.push(arr[index]);
  sum += arr[index];
  let includeCount = solveForCount(arr, index + 1, sum, sumTarget, currSubset);
  // Exclude Number
  sum -= arr[index];
  currSubset.pop();
  let excludeCount = solveForCount(arr, index + 1, sum, sumTarget, currSubset);

  return includeCount + excludeCount;
}

array = [1, 2, 1];
sumTarget = 2;
solution = solveForCount(array, 0, 0, sumTarget, []);
console.log("\nVariation 3\n", solution);
