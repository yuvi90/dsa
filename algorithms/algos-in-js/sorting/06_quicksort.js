/*
  Quick Sort - It is the array sorting algorithm. Recursively moving the selected pivot item to its correct index for sorting.

  Time Complexity: 
    O(n log n) - Average and Best Case
    O(n^2) - Worst Case
  
  Space Complexity:
    O(1)
*/

function partition(array, start, end) {
  let pivot = array[end];
  let i = start - 1;
  for (let j = start; j <= end - 1; j++) {
    if (array[j] < pivot) {
      i++;
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }
  i++;
  let temp = array[i];
  array[i] = pivot;
  array[end] = temp;
  return i;
}

function sort(array, start, end) {
  if (start < end) {
    let pivotIndex = partition(array, start, end);
    sort(array, start, pivotIndex - 1); // Recursively sort the left subarray
    sort(array, pivotIndex + 1, end); // Recursively sort the right subarray
  }
}

function quickSort(array) {
  sort(array, 0, array.length - 1);
}

const array = [5, 3, 1, 4, 2];
console.log("Original Array:", array);
quickSort(array);
console.log("Sorted Array:", array);

/*
  Time Complexity:

  Best Case: Ω (N log (N))
  The best-case scenario for quicksort occur when the pivot chosen at the each step divides the array into roughly equal halves.
  In this case, the algorithm will make balanced partitions, leading to efficient Sorting.
  
  Average Case: θ ( N log (N))
  Quicksort’s average-case performance is usually very good in practice, making it one of the fastest sorting Algorithm.
  
  Worst Case: O(N^2)
  The worst-case Scenario for Quicksort occur when the pivot at each step consistently results in highly unbalanced partitions. When the array is already sorted and the pivot is always chosen as the smallest or largest element. To mitigate the worst-case Scenario, various techniques are used such as choosing a good pivot (e.g., median of three) and using Randomized algorithm (Randomized Quicksort ) to shuffle the element before sorting.
  
  Auxiliary Space: O(1), if we don’t consider the recursive stack space. If we consider the recursive stack space then, in the worst case quicksort could make O(N).
  
  Advantages of Quick Sort:
  
  - It is a divide-and-conquer algorithm that makes it easier to solve problems.
  - It is efficient on large data sets.
  - It has a low overhead, as it only requires a small amount of memory to function.
  
  Disadvantages of Quick Sort:
  - It has a worst-case time complexity of O(N^2), which occurs when the pivot is chosen poorly.
  - It is not a good choice for small data sets.
  - It is not a stable sort, meaning that if two elements have the same key, their relative order will not be preserved in the sorted output in case of quick sort, because here we are swapping elements according to the pivot’s position (without considering their original positions).
*/
