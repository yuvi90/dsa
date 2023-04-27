/*
    Binary Search in Sorted Array.
    Binary search can be implemented only on a sorted list of items. If the elements are not sorted already, we need to sort them first.
    
    Binary Search Algorithm can be implemented in two ways which are discussed below.
    - Iterative Method
    - Recursive Method (The recursive method follows the divide and conquer approach)
*/

let arr = [1, 3, 4, 5, 6, 8];
let start = 0;
let end = arr.length;

function b_search(num, arr, start, end) {
    if (start >= 0) {
        // let mid = Math.floor(start + (end - start) / 2);
        // let mid = Math.floor(start + end / 2);
        let mid = start + (end - start) / 2;
        // let mid = start + end / 2;
        // If Find at middle
        if (arr[mid] == num) {
            return mid;
        }
        // Search Right Half
        if (num > arr[mid]) {
            return b_search(num, arr, mid + 1, end);
        }
        // Search Left Half
        if (num < arr[mid]) {
            return b_search(num, arr, start, mid - 1);
        }
    }
    return -1;
}

console.log(arr);
console.log('0 ? ', b_search(0, arr, start, end));
console.log('5 ? ', b_search(5, arr, start, end));
console.log('6 ? ', b_search(6, arr, start, end));
console.log('2 ? ', b_search(2, arr, start, end));
console.log('8 ? ', b_search(8, arr, start, end));
console.log('10 ? ', b_search(10, arr, start, end));