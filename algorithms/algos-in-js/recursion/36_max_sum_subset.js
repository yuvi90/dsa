// Time Complexity  O(2^n)
// Space Complexity O(n)

function getMaxSumSubset(nums) {
  const n = nums.length;
  let maxSum = 0;
  let maxSumSubset = [];
  getSubsets(nums, 0, 0, []);
  console.log(`Max Sum is ${maxSum} Subset is ${maxSumSubset}`);

  function getSubsets(arr, index, currentSum, currentSubset) {
    if (index > n - 1) {
      if (maxSum < currentSum) {
        maxSum = currentSum;
        maxSumSubset = [...currentSubset];
      }
      return;
    }
    // Include
    currentSubset.push(arr[index]);
    currentSum = currentSum + arr[index];
    getSubsets(arr, index + 1, currentSum, currentSubset);

    // Exclude
    currentSubset.pop();
    currentSum = currentSum - arr[index];
    getSubsets(arr, index + 1, currentSum, currentSubset);
  }
}

const nums = [2, -3, 5];
getMaxSumSubset(nums);
