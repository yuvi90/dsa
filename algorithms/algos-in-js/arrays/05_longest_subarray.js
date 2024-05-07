let cases = [
  [3, "1 2 3 1 1 1 1"],
  [2, "1 2 1 3"],
  [2, "2 2 4 1 2"],
];

// Brute Force Approach
function genSubarray(nums, n, index, sum, targetSum, currSub, solution) {
  if (index === n) {
    if (sum === targetSum) {
      solution.push([...currSub]);
    }
    return;
  }
  currSub.push(nums[index]);
  sum = sum + nums[index];
  genSubarray(nums, n, index + 1, sum, targetSum, currSub, solution);
  currSub.pop();
  sum = sum - nums[index];
  genSubarray(nums, n, index + 1, sum, targetSum, currSub, solution);
}

function findLongestArray(array) {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      longest = array[i].length;
    }
  }
  console.log("Output : ", longest);
}

cases.forEach((input, i) => {
  let testCase = i + 1;
  console.log(`\nCase ${testCase}`);
  const k = input[0];
  const nums = input[1].split(" ").map((item) => Number(item));
  const n = nums.length;
  console.log("Array : ", nums);
  console.log(`n - ${n}`);
  console.log(`k - ${k}`);
  const sol = [];
  genSubarray(nums, n, 0, 0, k, [], sol);
  // if (testCase === 2) console.log(`Sub arrays with sum ${k} : `, sol);
  findLongestArray(sol);
});
