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
