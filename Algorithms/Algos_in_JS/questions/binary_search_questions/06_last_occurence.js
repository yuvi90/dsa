/*
  Example 1:
  Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
  Output: 4
  Explanation: As the target value is 13 , it appears for the first time at index number 2.

  Example 2:
  Input: N = 7, target=60, array[] = {3,4,13,13,13,20,40}
  Output: -1
  Explanation: Target value 60 is not present in the array 
*/

// Approach 1
// Time  Complexity - O(n)
// Space Complexity - O(1)
function brute(nums, target) {
  let n = nums.length;
  let output = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] === target) {
      output = i;
      break;
    }
  }
  return output;
}

// Approach 2
// Time  Complexity - O(log n)
// Space Complexity - O(1)
function optimal(nums, target) {
  let n = nums.length;
  let si = 0;
  let ei = n - 1;
  let output = -1;
  while (si <= ei) {
    let mi = Math.floor((si + ei) / 2);
    if (nums[mi] === target) {
      output = mi;
      si = mi + 1;
    }
    if (nums[mi] > target) {
      ei = mi - 1;
    } else {
      si = mi + 1;
    }
  }
  return output;
}

const testCase = [
  [13, [3, 4, 13, 13, 13, 20, 40], 4],
  [60, [3, 4, 13, 13, 13, 20, 40], -1],
];
testCase.forEach((input, i) => {
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

  if (output !== result) {
    console.log("FAIL");
    return;
  }
  console.log("PASS");
});
