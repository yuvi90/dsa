/*
  Example 1:
  Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
  Output: 4
  Explanation: 3 is occurring 4 times in 
  the given array so it is our answer.

  Example 2:
  Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
  Output: 5
  Explanation: 2 is occurring 5 times in the given array so it is our answer.
*/

// Approach 1
// Time  Complexity - O(n)
// Space Complexity - O(1)
function brute(nums, x) {
  let n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === x) {
      count++;
    }
  }
  return count;
}

// Approach 2
// Time  Complexity - O(log n)
// Space Complexity - O(1)
function optimal(nums, target) {
  let n = nums.length;
  // First Occurrence
  let si = 0;
  let ei = n - 1;
  let first = -1;
  while (si <= ei) {
    let mi = Math.floor((si + ei) / 2);
    if (nums[mi] === target) {
      first = mi;
      ei = mi - 1;
    }
    if (nums[mi] < target) {
      si = mi + 1;
    } else {
      ei = mi - 1;
    }
  }
  // Last Occurrence
  si = 0;
  ei = n - 1;
  let last = -1;
  while (si <= ei) {
    let mi = Math.floor((si + ei) / 2);
    if (nums[mi] === target) {
      last = mi;
      si = mi + 1;
    }
    if (nums[mi] > target) {
      ei = mi - 1;
    } else {
      si = mi + 1;
    }
  }
  if (first && last === -1) return 0;
  return last - first + 1;
}

const testCases = [
  [3, [2, 2, 3, 3, 3, 3, 4], 4],
  [2, [1, 1, 2, 2, 2, 2, 2, 3], 5],
  [1, [2, 3, 4, 5], 0],
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
