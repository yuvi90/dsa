/*
  Example 1:
  Input: prices = {1, 1, 0, 1, 1, 1}
  Output: 3

  Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

  Input: prices = {1, 0, 1, 1, 0, 1} 
  Output: 2
  Explanation: There are two consecutive 1's in the array. 
*/

function consecutiveOnes(nums) {
  let maxCount = 0;
  let count = 0;
  for (let num of nums) {
    if (num === 1) {
      count++;
      maxCount = Math.max(count, maxCount);
    } else {
      count = 0;
    }
  }
  return maxCount;
}

const testCases = [
  [[1, 1, 0, 1, 1, 1], 3],
  [[1, 0, 1, 1, 0, 1], 2],
];

testCases.forEach((input, i) => {
  let testCase = i + 1;
  console.log(`\nCase ${testCase}`);
  const nums = input[0];
  const output = input[1];
  console.log("Input : ", nums);
  console.log("Expected : ", output);

  let result = consecutiveOnes(nums);
  console.log("Output : ", result);

  if (result !== output) {
    console.log("FAIL");
    return;
  }

  console.log("PASS");
});
