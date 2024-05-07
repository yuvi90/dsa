/*
  You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

  You should rearrange the elements of nums such that the modified array follows the given conditions:

  Every consecutive pair of integers have opposite signs.
  For all integers with the same sign, the order in which they were present in nums is preserved.
  The rearranged array begins with a positive integer.
  Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

  Example 1:
  Input: nums = [3,1,-2,-5,2,-4]
  Output: [3,-2,1,-5,2,-4]
  Explanation:
  The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
  The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
  Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions. 

  Example 2:
  Input: nums = [-1,1]
  Output: [1,-1]
  Explanation:
  1 is the only positive integer and -1 the only negative integer in nums.
  So nums is rearranged to [1,-1].
  

  Constraints:
  2 <= nums.length <= 2 * 105
  nums.length is even
  1 <= |nums[i]| <= 105
  nums consists of equal number of positive and negative integers.
*/

// Time Complexity  - O(n)
// Space Complexity - O(n)
function brute(nums) {
  let n = nums.length;
  let positive = [];
  let negative = [];
  for (let num of nums) {
    if (num >= 0) {
      positive.push(num);
    }
    if (num < 0) {
      negative.push(num);
    }
  }
  for (let i = 0; i < n / 2; i++) {
    nums[2 * i] = positive[i];
    nums[2 * i + 1] = negative[i];
  }
  return nums;
}

// Slightly Optimal (Single Pass Solution)
// Time Complexity  - O(n)
// Space Complexity - O(n)
function optimal(nums) {
  let n = nums.length;
  let ans = new Array(n);
  let positiveIndex = 0;
  let negativeIndex = 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      ans[negativeIndex] = nums[i];
      negativeIndex = negativeIndex + 2;
    } else {
      ans[positiveIndex] = nums[i];
      positiveIndex = positiveIndex + 2;
    }
  }
  return ans;
}

const testCase = [
  [
    [3, 1, -2, -5, 2, -4],
    [3, -2, 1, -5, 2, -4],
  ],
  [
    [-1, 1],
    [1, -1],
  ],
];

testCase.forEach((input, i) => {
  let testCase = i + 1;
  console.log("\nCase : ", testCase);
  const nums = input[0];
  const output = input[1];
  console.log("Input : ", nums);
  console.log("Expected : ", output);

  // let result = brute(nums);
  let result = optimal(nums);
  console.log("Output : ", result);

  for (let i = 0; i < output.length; i++) {
    if (result[i] !== output[i]) {
      console.log("FAIL");
      return;
    }
  }

  console.log("PASS");
});
