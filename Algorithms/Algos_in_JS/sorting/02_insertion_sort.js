/*
  Insertion Sort - Place item to its correct position by comparing to its left items.

  Time Complexity - O(n^2)
*/

// Method 1 - By Iteration
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j--;
    }
  }
}

console.log("\nMethod 1");
const array1 = [2, 0, 7, -1, 5, 2, 4];
console.log(array1);
insertionSort(array1);
console.log(array1);

// Method 2 - By Recursion
function iSort(array, n) {
  // Base Case: When there is only 1 or no elements in the array
  if (n <= 1) {
    return;
  }

  // Hypothesis: Recursive call for sorting array (n-1)
  iSort(array, n - 1);

  // Induction Step: Building solution from hypothesis assuming that all the left elements are sorted.
  let j = n - 1;
  while (j > 0 && array[j - 1] > array[j]) {
    let temp = array[j - 1];
    array[j - 1] = array[j];
    array[j] = temp;
    j--;
  }
}

console.log("\nMethod 2");
const array2 = [2, 0, 7, -1, 5, 2, 4];
console.log(array2);
iSort(array2, array2.length);
console.log(array2);
