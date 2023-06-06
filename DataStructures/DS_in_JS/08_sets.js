/*
    SETS is a built-in data structure that can hold a collection of UNIQUE values. 
    
    Sets are iterables, resizable and insertion order is not maintained in JavaScript.

    Sets in JavaScript can contain a mix of different data types. You can store strings, boolean, numbers, objects in same set.    

    =====>> SET vs ARRAY

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

const setDS = new Set([1, 2, 3]);

console.log(setDS)
setDS.add(4);
console.log(setDS.has(10));
console.log(setDS)

for (const item of setDS) {
    console.log(item)
}

setDS.clear();

// Basic Sets implementation

class mySet {
    constructor() {
        this.items = {};
    }

    // Check if an element exists in the set
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    // Add an element to the set
    add(element) {
        if (!this.has(element)) {
            this.items[element] = true;
            return true;
        }
        return false;
    }

    // Remove an element from the set
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    // Get the size of the set
    size() {
        return Object.keys(this.items).length;
    }

    // Get an array of all elements in the set
    values() {
        return Object.keys(this.items);
    }

    // Clear the set
    clear() {
        this.items = {};
    }
}

// Usage example
const set = new mySet();
set.add(1);
set.add(2);
set.add(3);
console.log(set.size());  // Output: 3
console.log(set.values());  // Output: [ '1', '2', '3' ]
set.delete(2);
console.log(set.size());  // Output: 2
console.log(set.values());  // Output: [ '1', '3' ]

/*
    =======>> SETS vs MAPS

    Sets and maps are both data structures used for organizing and managing collections of elements. The main difference between sets and maps lies in their underlying principles and how they associate values.

    Sets:
    - Sets are a collection of unique elements where the value itself serves as the key.
    - In a set, each element is unique, and duplicates are not allowed.
    - Sets are typically used when you want to store a collection of distinct elements and perform operations such as membership checks, union, intersection, and difference.
    - Sets do not store any associated values or maintain an order among the elements.
    - Examples of set operations include adding an element, removing an element, checking if an element is present, and performing set operations like union, intersection, and difference.
    - Sets are implemented using hash tables or balanced binary search trees.

    Maps:
    - Maps are a collection of key-value pairs where each value is associated with a unique key.
    - In a map, keys are unique, but values can be duplicated.
    - Maps are typically used when you want to store and retrieve values based on a specific key.
    - Maps allow you to associate values with keys and perform operations such as inserting, updating, deleting, and retrieving values based on their keys.
    - Maps may maintain the order of insertion or follow a specific ordering criterion, such as sorting the keys.
    - Examples of map operations include adding a key-value pair, updating the value associated with a key, removing a key-value pair, and retrieving the value based on the key.
    - Maps are implemented using hash tables, balanced binary search trees, or other data structures depending on the requirements.

    In summary, sets are used to store a collection of distinct elements, while maps are used to store key-value pairs, where each key is associated with a value. Sets focus on the uniqueness of elements, while maps provide a way to retrieve values based on keys.
*/