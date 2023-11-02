/*
  Leet Code - 239. Sliding Window Maximum

  You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

  Return the max sliding window.

  Example 1:
  Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
  Output: [3,3,5,5,6,7]
  Explanation: 
  Window position                Max
  ---------------               -----
  [1  3  -1] -3  5  3  6  7       3
   1 [3  -1  -3] 5  3  6  7       3
   1  3 [-1  -3  5] 3  6  7       5
   1  3  -1 [-3  5  3] 6  7       5
   1  3  -1  -3 [5  3  6] 7       6
   1  3  -1  -3  5 [3  6  7]      7
  
  Example 2:
  Input: nums = [1], k = 1
  Output: [1]
*/

function brute(nums, k) {}

const testCases = [
  [3, [1, 3, -1, -3, 5, 3, 6, 7], [3, 3, 5, 5, 6, 7]],
  [1, [1], [1]],
];

testCases.forEach((input, i) => {
  let testCase = i + 1;
  console.log("\nTest Case ", testCase);
  const k = input[0];
  const nums = input[1];
  const output = input[2];
  console.log("K : ", nums);
  console.log("Numbers : ", nums);
  console.log("Expected : ", output);
  let result = brute(nums, k);
  console.log("Output : ", result);
  for (let i = 0; i < output.length; i++) {
    if (output[i] !== result[i]) {
      console.log("FAIL");
      return;
    }
  }
  console.log("PASS");
});
