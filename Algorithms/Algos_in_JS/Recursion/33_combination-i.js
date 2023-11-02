/* 
  Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

  The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
  frequency
  of at least one of the chosen numbers is different.

  The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

  Example 1:
  Input: candidates = [2,3,6,7], target = 7
  Output: [[2,2,3],[7]]
  Explanation:
  2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
  7 is a candidate, and 7 = 7.
  These are the only two combinations.

  Example 2:
  Input: candidates = [2,3,5], target = 8
  Output: [[2,2,2,2],[2,3,3],[3,5]]
  
  Example 3:
  Input: candidates = [2], target = 1
  Output: []
  
  Constraints:
  - 1 <= candidates.length <= 30
  - 2 <= candidates[i] <= 40
  - All elements of candidates are distinct.
  - 1 <= target <= 40
*/

function combinations(nums, targetSum) {
  const result = [];

  function solution(nums, index, targetSum, currentCombination) {
    // Base Case
    if (index > nums.length - 1) {
      if (targetSum === 0) result.push([...currentCombination]);
      return;
    }
    // Recursive Call
    if (nums[index] <= targetSum) {
      currentCombination.push(nums[index]);
      solution(nums, index, targetSum - nums[index], currentCombination);
      // Backtrack
      currentCombination.pop();
    }
    solution(nums, index + 1, targetSum, currentCombination);
  }

  solution(nums, 0, targetSum, []);
  return result;
}

// Test Case [target, [nums], [expected_output]]
const testCase = [
  [7, [2, 3, 6, 7], [[2, 2, 3], [7]]],
  [
    8,
    [2, 3, 5],
    [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ],
  ],
  [1, [2], []],
];

testCase.forEach((input, i) => {
  console.log("\nCase : ", i + 1);
  const target = input[0];
  const nums = input[1];
  const output = input[2];
  console.log("Target : ", target);
  console.log("Input : ", nums);
  console.log("Expected : ", output);
  let result = combinations(nums, target);
  console.log("Output : ", result);
  for (let i = 0; i < output.length; i++) {
    if (output[i].join("") !== result[i].join("")) {
      console.log("FAIL");
      return;
    }
  }
  console.log("PASS");
});
