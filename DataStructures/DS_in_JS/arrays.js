/*
    Array is a built-in data structure that can hold a collection of values. Array are iterables, resizable, zero indexed and insertion order is maintained in JavaScript.
    Arrays in JavaScript can contain a mix of different data types. You can store strings, boolean, numbers, objects in same array.    

    Lookup by Index - O(1)
    Lookup by Value - O(n)
    Insertion - O(n)
    Deletion - O(n)

    ============>> TIME COMPLEXITY
    
    The time complexity of operations in the built-in Array and Set data structures in JavaScript is as follows:

    For Arrays:

    1. Accessing an element by index: O(1)
    - Retrieving an element from an array by its index can be done in constant time.

    2. Insertion/Deletion at the end of the array: O(1)
    - Adding or removing an element at the end of the array can be done in constant time.

    3. Insertion/Deletion at the beginning/middle of the array: O(n)
    - Adding or removing an element at the beginning or in the middle of the array requires shifting elements, which takes linear time proportional to the number of elements.

    4. Searching for an element: O(n)
    - Searching for a specific element in an unsorted array requires traversing the entire array in the worst case, resulting in linear time complexity.

    5. Sorting: O(n log n) or O(n^2)
    - Sorting an array using efficient sorting algorithms like merge sort or quicksort has a time complexity of O(n log n).
    - If a less efficient sorting algorithm like bubble sort or insertion sort is used, the time complexity can be O(n^2).
*/

const arr = [1,2,"data"];

arr.push(3); // Ω(1)
arr.pop(); // Ω(1)
arr.shift(); // O(n)
arr.unshift(5); // O(n)