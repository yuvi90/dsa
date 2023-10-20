/*
  Each element in array repeated twice expect 1 find that non repeating element

  [2,2,1] Output = 1

  Approaches

  1. Brute Force - With Two Loops T - O(n^2) & S - O(1)
  2. Sorting and Find - T - O(n log n) & S - O(n) space might required in sorting
  3. Hash/Set - T - O(n) & S - O(n)
  4. Bitwise - T - O(n) & S - O(1)

*/

function solve(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  console.log(xor);
}

const nums = [4, 1, 2, 2, 1];
solve(nums); // 4
