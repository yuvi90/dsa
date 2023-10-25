/*
  Example 1:
  Input Format: N = 4, arr = [1,2,2,3], x = 2
  Result: 3
  Explanation: Index 3 is the smallest index such that arr[3] > x.

  Example 2:
  Input Format: N = 6, arr = [3,5,8,9,15,19], x = 9
  Result: 4
  Explanation: Index 4 is the smallest index such that arr[4] > x.
*/

// Brute Force Solution
// Time  - O(n)
// Space - O(1)
function brute(nums, n, x) {
  for (let i = 0; i < n; i++) {
    if (x < nums[i]) {
      return i;
    }
  }
  return n;
}

// Optimal Solution
// Time  - O(log n)
// Space - O(1)
function higherBound(array, n, x) {
  let si = 0;
  let ei = n - 1;
  let ans = n;
  while (si <= ei) {
    mi = Math.floor((si + ei) / 2);
    if (array[mi] > x) {
      ans = mi;
      ei = mi - 1;
    } else {
      si = mi + 1;
    }
  }
  return ans;
}

let cases = [
  [2, "1 2 2 3", 3],
  [9, "3 5 8 9 15 19", 4],
  [7, "1 4 7 8 10", 3],
  [10, "1 2 5 6 10", 5],
  [5, "1 5 5 7 7 9 10", 3],
];

cases.forEach((input, i) => {
  let testCase = i + 1;
  console.log(`\nCase ${testCase}`);
  const x = input[0];
  const nums = input[1].split(" ").map((item) => Number(item));
  const n = nums.length;
  const output = input[2];
  console.log("Array : ", nums);
  console.log("N : ", n);
  console.log("X : ", x);
  console.log("Expected : ", output);

  // let result = brute(nums, n, x);
  let result = higherBound(nums, n, x);

  console.log("Output : ", result);
  if (output === result) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
});
