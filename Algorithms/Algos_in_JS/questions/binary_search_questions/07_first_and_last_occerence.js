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
  return [first, last];
}

const testCase = [
  [13, [3, 4, 13, 13, 13, 20, 40], [2, 4]],
  [60, [3, 4, 13, 13, 13, 20, 40], [-1, -1]],
  [2, [], [-1, -1]],
  [4, [1, 2, 4, 5], [2, 2]],
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

  for (let i = 0; i < output.length; i++) {
    if (output[i] !== result[i]) {
      console.log("FAIL");
      return;
    }
  }
  console.log("PASS");
});
