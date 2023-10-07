/*
  Selection Sort: Assuming current minimum item is at the first index and then find if next items is smaller than current minimum by comparing all the next items in the array and mark it as minimum current item, if found then swap its position with previous minimum item. Goal is to place smaller items to the left.

  We can also do it in a opposite way assuming current max item.

  Time Complexity - O(n^2)
*/

// Method 1 - By Iteration
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let currentMinimum = i; // current minimum item index
    let j = i; // current item index
    while (j < array.length) {
      if (array[j] < array[currentMinimum]) {
        // mark current minimum position
        currentMinimum = j;
      }
      j++;
    }
    // swapping previous minimum
    let temp = array[i];
    array[i] = array[currentMinimum];
    array[currentMinimum] = temp;
  }
  return array;
}

console.log("\nMethod 1");
const array1 = [4, 1, -2, 1, 0];
console.log(array1);
console.log(selectionSort(array1));

// Method 2 - By Recursion
function sSort(array, n) {
  // Base Case : If there is no or one items left in the array.
  if (n === 1 || n === 0) {
    return;
  }

  // Hypothesis: Assumption that it will sort array of size (n-1)
  sSort(array, n - 1);

  // Induction Step: Building solution from assumption that left side is sorted

  // Find the index of the minimum element in the unsorted portion.
  let currentIndex = n - 2;
  let minIndex = currentIndex;

  for (let j = currentIndex + 1; j < array.length; j++) {
    if (array[j] < array[minIndex]) {
      minIndex = j;
    }
  }

  // Swap the minimum element with the last element in the sorted portion.
  let temp = array[currentIndex];
  array[currentIndex] = array[minIndex];
  array[minIndex] = temp;
}

console.log("\nMethod 2");
const array2 = [4, 8, 1, -5, 1, 0];
console.log(array2);
sSort(array2, array2.length);
console.log(array2);
