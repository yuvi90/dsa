/*
  Find the maximum sum of a subarray with a length k within the nums array.
*/

// Time Complexity  - O(n^2)
// Space Complexity - O(1)
function brute(nums, k) {
  let n = nums.length;
  let maxSum = 0;
  for (let i = 0; i < n - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < k + i; j++) {
      sum += nums[j];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

// Time Complexity  - O(n)
// Space Complexity - O(1)
function optimal(nums, k) {
  let n = nums.length;
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  maxSum = currentSum;
  for (let i = k; i < n; i++) {
    currentSum = currentSum - nums[i - k] + nums[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

const testCases = [
  [3, [1, 3, -1, -3, 5, 3, 6, 7], 16],
  [1, [1], 1],
  [2, [2, 3, 5, 1, 9], 10],
];

testCases.forEach((input, i) => {
  let testCase = i + 1;
  console.log("\nTest Case ", testCase);
  const k = input[0];
  const nums = input[1];
  const output = input[2];
  console.log("K : ", k);
  console.log("Numbers : ", nums);
  console.log("Expected : ", output);
  // let result = brute(nums, k);
  let result = optimal(nums, k);
  console.log("Output : ", result);
  if (output !== result) {
    console.log("FAIL");
    return;
  }
  console.log("PASS");
});
