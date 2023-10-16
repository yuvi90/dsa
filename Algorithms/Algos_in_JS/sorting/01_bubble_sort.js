/*
  Bubble Sort - Place the largest item at the end of array.

  Time Complexity : O(n^2)
*/

// Method 1 - By Iteration

// Time Complexity O(n^2)
// Space Complexity O(1)

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
}

const array1 = [2, 7, -1, 4, -2, 4];
console.log("\nMethod 1");
console.log(array1);
bubbleSort(array1);
console.log(array1);

// Method 2 - By Recursion

// Time Complexity O(n^2)
// Space Complexity O(n) (due to recursion call stack space)

function bSort(array, n) {
  // Base Case: When there is single or no element in array
  if (n <= 1) {
    return;
  }

  // Induction Step: Place largest element at the last
  for (let i = 0; i < n - 1; i++) {
    if (array[i] > array[i + 1]) {
      // Swap
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }

  // Hypothesis: Recursive call for placing element at last (Assumption)
  bSort(array, n - 1);
}

console.log("\nMethod 2");
const array2 = [2, 0, 7, 2, -1, 5, 4];
console.log(array2);
bSort(array2, array2.length);
console.log(array2);
