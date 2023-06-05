/*
    SETS is a built-in data structure that can hold a collection of UNIQUE values. 
    Sets are iterables, resizable and insertion order is not maintained in JavaScript.

    Sets in JavaScript can contain a mix of different data types. You can store strings, boolean, numbers, objects in same set.    

    SET vs Array

    Array can have duplicate values but Sets we cannot have duplicate values.
    Insertion Order maintained in arrays but not in Sets.
    Searching and Deleting element in Sets is faster comparing to arrays. 

    =======>> TIME COMPLEXITY
    
    For Sets:

    1. Adding an element: O(1)
    - Adding an element to a set has a constant time complexity, as it depends on the underlying hash function.

    2. Deleting an element: O(1)
    - Removing an element from a set also has a constant time complexity.

    3. Searching for an element: O(1) on average, O(n) in the worst case
    - Searching for an element in a set has an average time complexity of O(1) due to the efficient hash-based lookup.
    - In the worst case scenario, where multiple elements have the same hash value and need to be traversed, the time complexity can be O(n).

    4. Iterating over the set: O(n)
    - Iterating over all elements in a set has a time complexity proportional to the number of elements.

    It's important to note that these time complexities are typical for the built-in Array and Set implementations in JavaScript. However, specific optimizations and variations in JavaScript engines may affect the actual performance.
*/

const set = new Set([1, 2, 3]);

console.log(set)
set.add(4);
console.log(set.has(10));
console.log(set)

for (const item of set) {
    console.log(item)
}

set.clear();