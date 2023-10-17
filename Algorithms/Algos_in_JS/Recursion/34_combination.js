/*

  Input: candidates = [10,1,2,7,6,1,5], target = 8

  Output: 
  [ [1,1,6], [1,2,5], [1,7], [2,6] ]

  Explanation: These are the unique combinations whose sum is equal to target.

*/

const candidates = [1, 2, 2, 1, 1];
const target = 4;
const result = [];
candidates.sort((a, b) => a - b);
findCombinations(candidates, 0, target, [], result);
console.log(result);

function findCombinations(arr, index, target, currentCombination, result) {
  if (index > arr.length - 1) {
    if (target === 0) {
      result.push([...currentCombination]);
    }
    return;
  }

  for (let i = index; i < arr.length; i++) {
    if (arr[index] <= target) {
      if (i > index && arr[index] === arr[index - 1]) {
        continue;
      }
      if (arr[i] > target) break;

      currentCombination.push(arr[index]);
      findCombinations(arr, i + 1, target - arr[i], currentCombination, result);
      currentCombination.pop();
    }
  }
}
