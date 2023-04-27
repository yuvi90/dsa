function conquer(arr, start, end, mid) {
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
        // console.log('return')
        return;
    }
    // let mid = Math.floor(start + (end - start) / 2);
    let mid = Math.floor((start + end) / 2);
    // Divide
    // console.log(mid, 'left')
    divide(arr, start, mid);
    // console.log(mid + 1, 'right')
    divide(arr, mid + 1, end);
    // Conquer
    // console.log(start, mid, end)
    // console.log('conquer')
    conquer(arr, start, end, mid);
    // console.log(arr)
}

function mergeSort(array) {
    divide(array, 0, array.length - 1);
}

const array = [5, 3, 1, 2, -6, 4, 9, 0, -1, 2];
console.log(array);
mergeSort(array);
console.log(array);