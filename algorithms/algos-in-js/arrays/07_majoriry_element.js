/*
  Given an array nums of size n, return the majority element.

  The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

  Example 1:
  Input: nums = [3,2,3]
  Output: 3
  Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 
  
  Example 2:
  Input: nums = [2,2,1,1,1,2,2]
  Output: 2
  Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

  Example 3:
  Input:  nums = [4,4,2,4,3,4,4,3,2,4]
  Output: 4
*/

// Approach 1
// Time  Complexity - O(n^2)
// Space Complexity - O(1)
function approach1(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }
    if (count > Math.floor(n / 2)) {
      return nums[i];
    }
  }
}

// Approach 2
// Time  Complexity - O(n)
// Space Complexity - O(n)
function approach2(nums) {
  let n = nums.length;
  let hashMap = new Map();
  for (let i = 0; i < n; i++) {
    hashMap.set(nums[i], hashMap.has(nums[i]) ? hashMap.get(nums[i]) + 1 : 1);
  }
  for (const [key, value] of hashMap) {
    if (value > Math.floor(n / 2)) {
      return key;
    }
  }
}

// Approach 3 (Moore’s Voting Algorithm)
function approach3(nums) {}

let testCases = [
  [[3, 2, 3], 3],
  [[2, 2, 1, 1, 1, 2, 2], 2],
  [[4, 4, 2, 4, 3, 4, 4, 3, 2, 4], 4],
];

testCases.forEach((input, i) => {
  let testCase = i + 1;
  console.log(`\nCase ${testCase}`);
  const nums = input[0];
  const output = input[1];
  console.log("Input : ", nums);
  console.log("Expected : ", output);

  let result = approach1(nums);
  // let result = approach2(nums);
  console.log("Output : ", result);

  if (result !== output) {
    console.log("FAIL");
    return;
  }

  console.log("PASS");
});
