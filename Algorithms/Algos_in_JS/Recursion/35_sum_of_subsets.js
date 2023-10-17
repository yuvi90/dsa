/*

  Example 1:
  Input: N = 3, arr[] = {5,2,1}
  Output: 0,1,2,3,5,6,7,8

  Explanation: We have to find all the subset’s sum and print them.in this case the generated subsets are [ [], [1], [2], [2,1], [5], [5,1], [5,2]. [5,2,1],so the sums we get will be  0,1,2,3,5,6,7,8

  Example 2:
  Input: N=3,arr[]= {3,1,2}
  Output: 0,1,2,3,3,4,5,6

  Explanation: We have to find all the subset’s sum and print them.in this case the generated subsets are [ [], [1], [2], [2,1], [3], [3,1], [3,2]. [3,2,1],so the sums we get will be  0,1,2,3,3,4,5,6

*/

function arraySubsets(array, index, output, sum) {
  if (index === array.length) {
    output.push(sum); // Add a copy of the current subset to the output
    return;
  }

  // Include the current element in sum
  arraySubsets(array, index + 1, output, sum + array[index]);

  // Exclude the current element in sum
  arraySubsets(array, index + 1, output, sum);
}

function generateSubsets(array) {
  const output = [];
  arraySubsets(array, 0, output, 0);
  output.sort((a, b) => a - b);
  return output;
}

const inputArray = [5, 2, 1];
const subsets = generateSubsets(inputArray);
console.log(subsets);
