/*
  Example 1:
  Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
  Result: 4 7
  Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

  Example 2:
  Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 8
  Result: 8 8
  Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.
*/

// Brute Force Solution
// Time  - O(n)
// Space - O(1)
function brute(nums, target) {
  let n = nums.length;
  let floor = n;
  let ceil = n;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= target) {
      floor = nums[i];
    }
    if (nums[i] > target) break;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] >= target) {
      ceil = nums[i];
      break;
    }
  }
  return [floor, ceil];
}

// Optimal Solution
// Time  - O(log n)
// Space - O(1)
function optimal(nums, target) {
  let n = nums.length;
  // Calculate Floor
  let si = 0;
  let ei = n - 1;
  let floor = n;
  while (si <= ei) {
    let mi = Math.floor((si + ei) / 2);
    if (nums[mi] <= target) {
      floor = nums[mi];
      si = mi + 1;
    } else {
      ei = mi - 1;
    }
  }
  // Calculate Ceil
  si = 0;
  ei = n - 1;
  let ceil = n;
  while (si <= ei) {
    let mi = Math.floor((si + ei) / 2);
    if (nums[mi] >= target) {
      ceil = nums[mi];
      ei = mi - 1;
    } else {
      si = mi + 1;
    }
  }
  return [floor, ceil];
}

let cases = [
  [5, [3, 4, 4, 7, 8, 10], [4, 7]],
  [8, [3, 4, 4, 7, 8, 10], [8, 8]],
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
    if (output[i] !== result[i]) {
      console.log("FAIL");
      return;
    }
  }
  console.log("PASS");
});
