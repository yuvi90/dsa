/*
  Example 1:
  Input: [100, 200, 1, 3, 2, 4]
  Output: 4
  Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

  Example 2:
  Input: [3, 8, 5, 7, 6]
  Output: 4
  Explanation: The longest consecutive subsequence is 5, 6, 7, and 8.
*/

// Time Complexity  - O(n^2)
// Space Complexity - O(1)
function brute(nums) {
  let n = nums.length;
  if (n === 0) return 0;
  let maxLength = 1;
  // Time (n)
  for (let i = 0; i < n; i++) {
    let x = nums[i];
    let count = 1;
    // Time (n)
    let j = 1;
    while (nums.includes(x + j)) {
      j++;
      count++;
    }
    maxLength = Math.max(maxLength, count);
  }
  return maxLength;
}

// Time Complexity  - O(n log n)
// Space Complexity - O(1)
function better(nums) {
  let n = nums.length;
  let maxLength = 0;
  if (n === 0) return maxLength;
  // Sort
  nums.sort((a, b) => a - b);
  let count = 1;
  let smallerNum = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    if (smallerNum === nums[i]) {
      continue;
    }
    if (nums[i] - 1 === smallerNum) {
      smallerNum = nums[i];
      count++;
    } else if (nums[i] - 1 !== smallerNum) {
      smallerNum = nums[i];
      count = 1;
    }
    maxLength = Math.max(maxLength, count);
  }
  return maxLength;
}

// Time Complexity  - O(n)
// Space Complexity - O(n)
function optimal(nums) {
  let n = nums.length;
  let maxLength = 0;
  if (n === 0) return maxLength;
  // Set DS
  let set = new Set();
  // Time - (n)
  for (let num of nums) {
    set.add(num);
  }
  // Time - (max - 2n)
  for (let it of set) {
    if (!set.has(it - 1)) {
      let count = 1;
      let j = 1;
      // This loop is not n
      while (set.has(it + j)) {
        count++;
        j++;
      }
      maxLength = Math.max(maxLength, count);
    }
  }
  return maxLength;
}

const testCases = [
  [[100, 200, 1, 3, 2, 4], 4],
  [[3, 8, 5, 7, 6], 4],
  [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9],
  [[0, 3, 7, 2, 4, 5, 8, 4, 6, 0, 1], 9],
  [[], 0],
];

testCases.forEach((input, i) => {
  let testCase = i + 1;
  console.log("\nCase : ", testCase);
  const nums = input[0];
  const output = input[1];
  console.log("Input : ", nums);
  console.log("Expected : ", output);

  // let result = brute(nums);
  // let result = better(nums);
  let result = optimal(nums);
  console.log("Output : ", result);

  if (output !== result) {
    console.log("FAIL");
    return;
  }

  console.log("PASS");
});
