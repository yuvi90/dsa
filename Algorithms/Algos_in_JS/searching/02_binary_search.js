/*
    Binary search can be implemented only on a sorted list of items. If the elements are not sorted already, we need to sort them first.
    
    Binary Search Algorithm can be implemented in two ways which are discussed below.
    - Iterative Method
    - Recursive Method (The recursive method follows the divide and conquer approach)
*/

// Recursive Method

// Time Complexity O(log n)
// Space Complexity O(log n) (due to recursion call stack space)

let arr = [1, 3, 4, 5, 6, 8];
let start = 0;
let end = arr.length - 1;

function b_search(num, arr, start, end) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // If Find at middle
    if (arr[mid] == num) {
      return mid;
    }

    // Search Left Half
    if (num < arr[mid]) {
      return b_search(num, arr, start, mid - 1);
    }

    // Search Right Half
    if (num > arr[mid]) {
      return b_search(num, arr, mid + 1, end);
    }
  }
  return -1;
}

console.log("\nRecursive Method\n", arr);
console.log("0 ? ", b_search(0, arr, start, end));
console.log("5 ? ", b_search(5, arr, start, end));
console.log("6 ? ", b_search(6, arr, start, end));
console.log("2 ? ", b_search(2, arr, start, end));
console.log("8 ? ", b_search(8, arr, start, end));
console.log("10 ? ", b_search(10, arr, start, end));

// Iterative Method

// Time Complexity O(log n)
// Space Complexity O(1)

function bSearch(target, arr, n) {
  let si = 0;
  let ei = n - 1;
  let mi = Math.floor((si + ei) / 2);
  // Loop for search
  while (si <= ei) {
    if (arr[mi] === target) return mi;
    // Update for right side
    if (target > arr[mi]) {
      si = mi + 1;
    }
    // Update for left side
    if (target < arr[mi]) {
      ei = mi - 1;
    }
    // update mid index
    mi = Math.floor((si + ei) / 2);
  }
  return -1;
}

console.log("\nIterative Method\n", arr);
console.log("0 ? ", bSearch(0, arr, arr.length));
console.log("5 ? ", bSearch(5, arr, arr.length));
console.log("6 ? ", bSearch(6, arr, arr.length));
console.log("2 ? ", bSearch(2, arr, arr.length));
console.log("8 ? ", bSearch(8, arr, arr.length));
console.log("10 ? ", bSearch(10, arr, arr.length));
