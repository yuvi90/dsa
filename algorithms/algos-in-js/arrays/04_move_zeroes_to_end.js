// Time Complexity  - O(n)
// Space Complexity - O(1)

// Leet Code - 283. Move Zeroes

let moveZeroes = function (nums) {
  const n = nums.length;
  if (n <= 1) return nums;
  let zi = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      zi = i;
      break;
    }
  }
  if (zi === -1) return nums;
  for (let i = zi + 1; i < n; i++) {
    if (nums[i] !== 0) {
      nums[zi] = nums[i];
      nums[i] = 0;
      zi++;
    }
  }
  return nums;
};

let nums1 = [0, 1, 0, 3, 12];
let nums2 = [2, 1];
let ans1 = moveZeroes(nums1);
console.log(ans1); // [ 1, 3, 12, 0, 0 ]
let ans2 = moveZeroes(nums2);
console.log(ans2); // [ 2, 1 ]
