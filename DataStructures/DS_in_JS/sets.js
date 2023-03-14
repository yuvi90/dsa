/*
    SETS
    
    SETS is a built-in data structure that can hold a collection of UNIQUE values. 
    Sets are iterables, resizable and insertion order is not maintained in JavaScript.

    Sets in JavaScript can contain a mix of different data types. You can store strings, boolean, numbers, objects in same set.    

    SET vs Array

    Array can have duplicate values but Sets we cannot have duplicate values.
    Insertion Order maintained in arrays but not in Sets.
    Searching and Deleting element in Sets is faster comparing to arrays. 

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