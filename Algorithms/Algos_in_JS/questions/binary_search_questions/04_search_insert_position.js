/*
  35. Search Insert Position - Leet Code

  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
  Input: nums = [1,3,5,6], target = 5
  Output: 2

  Example 2:
  Input: nums = [1,3,5,6], target = 2
  Output: 1

  Example 3:
  Input: nums = [1,3,5,6], target = 7
  Output: 4
*/

// Brute Force Approach
// Time Complexity  - O(n)
// Space Complexity - O(1)

function brute(nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return n;
}

// Optimal Solution
// Time Complexity  - O(log n)
// Space Complexity - O(1)
function search(nums, target) {
  let n = nums.length;
  let ans = n;
  let si = 0;
  let ei = n - 1;
  while (si <= ei) {
    let mi = Math.floor((si + ei) / 2);
    if (target <= nums[mi]) {
      ans = mi;
      ei = mi - 1;
    } else {
      si = mi + 1;
    }
  }
  return ans;
}
let cases = [
  [5, [1, 3, 5, 6], 2],
  [2, [1, 3, 5, 6], 1],
  [7, [1, 3, 5, 6], 4],
  [0, [1, 3, 5, 6], 0],
];

cases.forEach((input, i) => {
  let testCase = i + 1;
  console.log(`\nCase ${testCase}`);
  const target = input[0];
  const nums = input[1];
  const output = input[2];
  console.log("Array : ", nums);
  console.log(`Target : ${target}`);
  console.log(`Expected : ${output}`);

  // let result = brute(nums, target);
  let result = search(nums, target);

  console.log("Output : ", result);
  if (output === result) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
});
