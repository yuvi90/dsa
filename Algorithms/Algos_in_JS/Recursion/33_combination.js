/*

  Input: array = [2,3,6,7], target = 7
  Output: [[2,2,3],[7]]

  Explanation: 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
  7 is a candidate, and 7 = 7.
  These are the only two combinations.

*/
const candidates = [2, 3, 6, 7];
const target = 7;
const result = [];
findCombinations(candidates, 0, target, [], result);
console.log(result);

function findCombinations(arr, index, target, currentCombination, result) {
  if (index > arr.length - 1) {
    if (target === 0) {
      result.push([...currentCombination]);
    }
    return;
  }

  if (arr[index] <= target) {
    currentCombination.push(arr[index]);
    findCombinations(
      arr,
      index,
      target - arr[index],
      currentCombination,
      result
    );
    currentCombination.pop();
  }
  findCombinations(arr, index + 1, target, currentCombination, result);
}
