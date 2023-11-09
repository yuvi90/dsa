/*
  Example 1:
  Input:
  arr = [4, 7, 1, 0]
  Output:
  7 1 0
  Explanation:
  Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

  Example 2:
  Input:
  arr = [10, 22, 12, 3, 0, 6]
  Output:
  22 12 6
  Explanation:
  6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6.
*/

// Time Complexity  - O(n^2)
// Space Complexity - O(n)
function brute(nums) {
  let n = nums.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    let leader = true;
    for (let j = i + 1; j < n; j++) {
      if (nums[i] < nums[j]) {
        leader = false;
        break;
      }
    }
    if (leader) ans.push(nums[i]);
  }
  return ans;
}

// Time Complexity  - O(n)
// Space Complexity - O(n)
function optimal(nums) {
  let n = nums.length;
  let ans = [];
  let max = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > max) {
      max = nums[i];
      ans.push(max);
    }
  }
  return ans;
}

const testCases = [
  [
    [4, 7, 1, 0],
    [7, 1, 0],
  ],
  [
    [10, 22, 12, 3, 0, 6],
    [22, 12, 6],
  ],
  [
    [1, 2, 3, 2],
    [2, 3],
  ],
];

testCases.forEach((input, i) => {
  let testCase = i + 1;
  console.log("\nCase : ", testCase);
  const nums = input[0];
  const output = input[1];
  console.log("Input : ", nums);
  console.log("Expected : ", output);

  // let result = brute(nums);
  let result = optimal(nums);
  console.log("Output : ", result);
  for (let i = 0; i < output.length; i++) {
    if (!output.includes(result[i])) {
      console.log("FAIL");
      return;
    }
  }
  console.log("PASS");
});
