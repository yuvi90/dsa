/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  
  Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]
  
  Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]
*/

// Brute Solution
// Time  Complexity - O(n^2)
// Space Complexity - O(1)
function brute(nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Optimal Solution
// Time  Complexity - O(n)
// Space Complexity - O(n)
function optimal(nums, target) {
  let n = nums.length;
  let hashMap = new Map();
  for (let i = 0; i < n; i++) {
    let requiredNumber = target - nums[i];
    if (hashMap.has(requiredNumber)) {
      let indexOfRequiredNumber = hashMap.get(requiredNumber);
      return [i, indexOfRequiredNumber];
    }
    hashMap.set(nums[i], i);
  }
}

let cases = [
  [9, [2, 7, 11, 15], [0, 1]],
  [6, [3, 2, 4], [1, 2]],
  [6, [3, 3], [0, 1]],
];

cases.forEach((input, i) => {
  let testCase = i + 1;
  console.log(`\nCase ${testCase}`);
  const target = input[0];
  const nums = input[1];
  const output = input[2];
  console.log("Input : ", nums);
  console.log("Target : ", target);
  console.log("Expected : ", output);

  // let result = brute(nums, target);
  let result = optimal(nums, target);
  console.log("Output : ", result);

  for (let i = 0; i < output.length; i++) {
    if (!result.includes(output[i])) {
      console.log("FAIL");
      return;
    }
  }
  console.log("PASS");
});
