const nums = [1, 2, 2, 3];
const n = nums.length;
const x = 4;

// Brute Force Solution
// Time  - O(n)
// Space - O(1)
function solve(nums, n, x) {
  for (let i = 0; i < n; i++) {
    if (x <= nums[i]) {
      console.log(i);
      return;
    }
  }
  console.log(n);
}
solve(nums, n, x);

// Optimal Solution
// Time  - O(log n)
// Space - O(1)
function lowerBound(array, n, x) {
  let si = 0;
  let ei = n - 1;
  let ans = n;
  while (si < ei) {
    mi = Math.floor((si + ei) / 2);
    if (array[mi] >= x) {
      ans = mi;
      ei = mi - 1;
    } else {
      si = mi + 1;
    }
  }
  console.log(ans);
}

lowerBound(nums, n, x);
