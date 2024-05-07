/*
  In this variant positive and negative numbers are not equally distributed.
*/

const nums = [1, 2, -4, -5, 3, 6];
// Time Complexity  - O(n)
// Space Complexity - O(n)
function solution(nums) {
  let n = nums.length;
  let positive = [];
  let negative = [];

  for (let num of nums) {
    if (num < 0) negative.push(num);
    else positive.push(num);
  }

  let posLength = positive.length;
  let negLength = negative.length;

  if (posLength > negLength) {
    for (let i = 0; i < negLength; i++) {
      nums[2 * i] = positive[i];
      nums[2 * i + 1] = negative[i];
    }
    let index = 2 * negLength;
    for (let i = negLength; i < posLength; i++) {
      nums[index] = positive[i];
      index++;
    }
  } else {
    for (let i = 0; i < posLength; i++) {
      nums[2 * i] = positive[i];
      nums[2 * i + 1] = negative[i];
    }
    let index = 2 * posLength;
    for (let i = posLength; i < negLength; i++) {
      nums[index] = negative[i];
      index++;
    }
  }
  return nums;
}

let result = solution(nums);
console.log(result);
