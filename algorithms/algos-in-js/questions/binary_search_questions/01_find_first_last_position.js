/*
  Find first and last positions of an element in a sorted array using recursion.
*/

function searchRange(nums, target) {
  const results = [-1, -1];
  const targetIndex = search(0, nums.length - 1, target, nums);
  if (targetIndex !== -1) {
    results[0] = leftBoundary(targetIndex - 1, target, nums); // Left Boundary
    results[1] = rightBoundary(targetIndex + 1, target, nums); // Right Boundary
  }
  return results;
}

function search(si, ei, target, arr) {
  if (si <= ei) {
    let mid = Math.floor((si + ei) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      return search(si, mid - 1, target, arr);
    }
    if (arr[mid] < target) {
      return search(mid + 1, ei, target, arr);
    }
  }
  return -1;
}

function leftBoundary(index, target, arr) {
  if (index >= 0) {
    if (arr[index] !== target) {
      return index + 1;
    }
    return leftBoundary(index - 1, target, arr);
  }
  return index + 1;
}

function rightBoundary(index, target, arr) {
  if (arr[index] !== target) {
    return index - 1;
  }
  return rightBoundary(index + 1, target, arr);
}

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

const result = searchRange(nums, target);
console.log(result);
