// Time Complexity  - O(n)
// Space Complexity - O(1)

let moveZeroes = function (nums) {
  const n = nums.length;
  if (n <= 1) return nums;
  let zi = 0;
  while (nums[zi] !== 0) {
    zi++;
  }
  for (let i = zi + 1; i < n; i++) {
    if (nums[i] !== 0) {
      nums[zi] = nums[i];
      nums[i] = 0;
      zi = i;
    }
  }
  return nums;
};
let nums = [1, 2, 0, 0, 4];
let ans = moveZeroes(nums);
console.log(ans);
