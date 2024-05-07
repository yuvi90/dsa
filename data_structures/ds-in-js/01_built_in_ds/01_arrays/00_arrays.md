[Home](../../readme.md) <br>
[Back](../00_built_in_ds.md)

# Arrays

In JavaScript, array is a built-in data structure that can hold a collection of values. Arrays in JS are:

- `Iterables`
- `Resizable`
- `Zero indexed`
- `Insertion order is maintained`
- `Can contain mix data types`

## Time complexity of operations in the built-in Arrays in JavaScript :

1. `Accessing an element by index: O(1)`

   - Retrieving an element from an array by its index can be done in constant time.

2. `Insertion/Deletion at the end of the array: O(1)`

   - Adding or removing an element at the end of the array can be done in constant time.

3. `Insertion/Deletion at the beginning/middle of the array: O(n)`

   - Adding or removing an element at the beginning or in the middle of the array requires shifting elements, which takes linear time proportional to the number of elements.

4. `Searching for an element: O(n)`

   - Searching for a specific element in an unsorted array requires traversing the entire array in the worst case, resulting in linear time complexity.

5. `Sorting: O(n log n) or O(n^2)`

   - Sorting an array using efficient sorting algorithms like merge sort or quicksort has a time complexity of O(n log n).
   - If a less efficient sorting algorithm like bubble sort or insertion sort is used, the time complexity can be O(n^2).
