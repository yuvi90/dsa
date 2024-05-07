function findSubsets(nums, target) {
  const subsets = [];
  backtrack(nums, target, subsets, [], 0);
  return subsets;
}

function backtrack(nums, target, subsets, currentSubset, start) {
  if (target === 0) {
    subsets.push([...currentSubset]);
    return;
  }

  if (target < 0 || start === nums.length) {
    return;
  }

  for (let i = start; i < nums.length; i++) {
    currentSubset.push(nums[i]);
    backtrack(nums, target - nums[i], subsets, currentSubset, i + 1);
    currentSubset.pop();
  }
}

// Example usage
const nums = [2, 4, 6, 8];
const target = 8;
console.log(findSubsets(nums, target));
// Output: [[2, 6], [8]]
