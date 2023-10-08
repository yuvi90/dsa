/*
  Merge Sort : It is the array sorting algorithm. It used divide and conquer approach which recursively dividing array into half until there is single item then it merges or combining solution of two sorted arrays as single sorted array as single item in arrays considered as sorted array.

  Time Complexity: 
    O(n log n) - Worst Case
  
  Space Complexity:
    O(n)
*/

function merge(arr, start, end, mid) {
  const mergedArray = [];
  let merged_index = 0;
  let index_1 = start; //Track left part of array
  let index_2 = mid + 1; //Track right part of array

  while (index_1 <= mid && index_2 <= end) {
    if (arr[index_1] <= arr[index_2]) {
      mergedArray[merged_index] = arr[index_1];
      merged_index++;
      index_1++;
    } else {
      mergedArray[merged_index] = arr[index_2];
      merged_index++;
      index_2++;
    }
  }

  // If there are pending elements in left half array
  while (index_1 <= mid) {
    mergedArray[merged_index] = arr[index_1];
    merged_index++;
    index_1++;
  }

  // If there are pending elements in right half array
  while (index_2 <= end) {
    mergedArray[merged_index] = arr[index_2];
    merged_index++;
    index_2++;
  }

  // Copying elements from merged array to original array
  for (let i = 0, j = start; i < mergedArray.length; i++, j++) {
    arr[j] = mergedArray[i];
  }
}

function divide(arr, start, end) {
  // Base Case
  if (start >= end) {
    return;
  }

  // Mid Point of Array
  let mid = Math.floor((start + end) / 2);
  // let mid = Math.floor(start + (end - start) / 2);

  // Hypothesis : Dividing Arrays Recursively
  divide(arr, start, mid);
  divide(arr, mid + 1, end);

  // Induction Step : Building Solution by Conquering (Sorting) & Combining Two Sorted Arrays
  merge(arr, start, end, mid);
}

function mergeSort(array) {
  divide(array, 0, array.length - 1);
  return array;
}

const array = [5, 3, 1, 2, -6, 4, 9, 0, -1, 2];
console.log(mergeSort(array));

/*
  Complexity Analysis of Merge Sort:
  
  Time Complexity: O(N log(N)),  Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. 
  
  Recurrence Relation : T(n) = 2T(n/2) + θ(n)

  The above recurrence can be solved either using the Recurrence Tree method or the Master method. It falls in case II of the Master Method and the solution of the recurrence is θ(N log(N)). The time complexity of Merge Sort isθ(N log(N)) in all 3 cases (worst, average, and best) as merge sort always divides the array into two halves and takes linear time to merge two halves.

  Auxiliary Space: O(N), In merge sort all elements are copied into an auxiliary array. So N auxiliary space is required for merge sort.

  
  Applications of Merge Sort:

  - Sorting large datasets: Merge sort is particularly well-suited for sorting large datasets due to its guaranteed worst-case time complexity of O(n log n).
  - External sorting: Merge sort is commonly used in external sorting, where the data to be sorted is too large to fit into memory.
  - Custom sorting: Merge sort can be adapted to handle different input distributions, such as partially sorted, nearly sorted, or completely unsorted data.
  - Inversion Count Problem
  
  Advantages of Merge Sort:
  
  - Stability: Merge sort is a stable sorting algorithm, which means it maintains the relative order of equal elements in the input array.
  - Guaranteed worst-case performance: Merge sort has a worst-case time complexity of O(N logN), which means it performs well even on large datasets.
  - Parallelize: Merge sort is a naturally parallelize algorithm, which means it can be easily parallelized to take advantage of multiple processors or threads.
  
  Drawbacks of Merge Sort:
  
  - Space complexity: Merge sort requires additional memory to store the merged sub-arrays during the sorting process. 
  - Not in-place: Merge sort is not an in-place sorting algorithm, which means it requires additional memory to store the sorted data. This can be a disadvantage in applications where memory usage is a concern.
  - Not always optimal for small datasets: For small datasets, Merge sort has a higher time complexity than some other sorting algorithms, such as insertion sort. This can result in slower performance for very small datasets.
*/
