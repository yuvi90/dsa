/*
  There is an integer array nums sorted in ascending order (with distinct values).

  Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

  Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

  Example 2:
  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1

  Example 3:
  Input: nums = [1], target = 0
  Output: -1
  
  Constraints:
  1 <= nums.length <= 5000
  -104 <= nums[i] <= 104
  All values of nums are unique.
  nums is an ascending array that is possibly rotated.
  -104 <= target <= 104
*/

// Approach 1
// Time  Complexity - O(n)
// Space Complexity - O(1)
function brute(nums, target) {
  let n = nums.length;
  let ans = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      ans = i;
      break;
    }
  }
  return ans;
}

// Approach 2
// Time  Complexity - O(n + log n + log n)
// Space Complexity - O(1)
function approach2(nums, target) {
  let n = nums.length;
  let k = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      k = i;
    }
  }
  let ans = search(nums, k, n - 1, target);
  if (ans === -1) {
    ans = search(nums, 0, k - 1, target);
  }
  return ans;
}

function search(nums, start, end, target) {
  let n = nums.length;
  let si = start;
  let ei = end;
  let ans = -1;
  while (si <= ei) {
    let mi = Math.floor((si + ei) / 2);
    if (nums[mi] === target) {
      ans = mi;
    }
    if (nums[mi] < target) {
      si = mi + 1;
    } else {
      ei = mi - 1;
    }
  }
  return ans;
}

// Approach 3
// Time  Complexity - O(log n)
// Space Complexity - O(1)
function optimal(nums, target) {
  let n = nums.length;
  let si = 0;
  let ei = n - 1;
  while (si <= ei) {
    let mi = Math.floor((si + ei) / 2);
    if (nums[mi] === target) {
      return mi;
    }
    // Check if left is sorted
    if (nums[si] <= nums[mi]) {
      if (nums[si] <= target && target < nums[mi]) {
        ei = mi - 1;
      } else {
        si = mi + 1;
      }
    }
    // Check if right is sorted
    if (nums[ei] >= nums[mi]) {
      if (nums[ei] >= target && target > nums[mi]) {
        si = mi + 1;
      } else {
        ei = mi - 1;
      }
    }
  }
  return -1;
}

const testCases = [
  [0, [4, 5, 6, 7, 0, 1, 2], 4],
  [3, [4, 5, 6, 7, 0, 1, 2], -1],
  [0, [1], -1],
];

testCases.forEach((input, i) => {
  let testCase = i + 1;
  console.log(`\nCase ${testCase}`);
  const target = input[0];
  const nums = input[1];
  const output = input[2];
  console.log("Array : ", nums);
  console.log(`Target : ${target}`);
  console.log(`Expected : ${output}`);

  // let result = brute(nums, target);
  let result = optimal(nums, target);

  console.log("Output : ", result);
  if (output === result) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
});
