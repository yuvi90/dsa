[Home](../../readme.md) <br>
[Back](../00_built_in_ds.md)

# Maps

In JavaScript, both objects and maps can be used to store key-value pairs, but they have some differences in terms of their features and intended use cases.

- Both `Keys and Values` can be any data type.
- To get value, you can use `corresponding key`.
- Maps are `iterables`.

## Maps vs Objects

1. Maps are `ordered` but objects are `unordered`.

2. In Maps `keys` can be any data type but in Objects it can symbol or strings.

3. Maps are `iterables` while objects are not.

4. Objects prototype has keys which `may collide with your own keys` but Maps no keys are present.

5. Apart from storing data you can attach `functionality` to an objects where as maps are restricted to just storing data.

6. Number of items in an object must be determined manually where as it is readily available with `size property` in map.

`Objects`:

- Objects are a fundamental data type in JavaScript and have been traditionally used to store key-value pairs.
- Keys in objects are restricted to be strings or symbols.
- Objects provide a rich set of built-in methods and features, such as property access with dot notation or square bracket notation, object literal syntax, prototype chain for inheritance, and support for object-oriented programming concepts.
- Objects have a default behavior of maintaining the insertion order of properties.
- Objects are commonly used for general-purpose key-value storage, creating complex data structures, representing real-world entities, and implementing object-oriented programming patterns.

`Maps`:

- Maps are a built-in data structure introduced in ES6 specifically designed for key-value storage.
- Keys in maps can be of any data type, including objects and functions. The original data type of the key is preserved.
- Maps provide a separate data structure dedicated to key-value storage, with a simpler and more consistent interface compared to objects.
- Maps have built-in methods for common operations such as `set`, `get`, `has`, `delete`, and `size`, which makes them convenient for working with key-value pairs.
- Maps maintain the insertion order of elements, so the order of keys remains consistent.
- Maps also provide the ability to iterate over keys, values, or entries using `forEach`, `for...of` loops, or the `entries`, `keys`, and `values` methods.
- Maps are commonly used when you need a data structure solely for key-value storage and do not require the additional features and complexity provided by objects.

In summary, objects are versatile and offer a wide range of features beyond key-value storage, while maps are specialized data structures designed specifically for efficient key-value storage and retrieval. Consider using objects when you need more advanced functionality and object-oriented programming capabilities, and use maps when you prioritize simplicity, consistency, and efficient key-value operations.

```javascript
const myMap = new Map([
  ["a", 1],
  ["b", 2],
]);

myMap.set("c", 3);
myMap.has("s"); // false
console.log(myMap.size);
for (const [key, value] of myMap) {
  console.log(`${key} : ${value}`);
}

myMap.clear();
```

## Time complexity of operations in the built-in Maps in JavaScript :

In JavaScript, the `Map` data structure is a built-in collection that allows you to store key-value pairs, similar to objects. However, `Map` provides some additional benefits, such as maintaining the order of insertion, allowing any data type as keys, and providing built-in methods for iteration and manipulation.

Here are the time complexities for common operations in the `Map` data structure:

1. **Insertion (Addition) and Access (Retrieval)**:

   - Average Case: O(1)
   - Best Case: O(1) - Constant time for most insertions and access operations.
   - Worst Case: O(log n) - Logarithmic time for rare scenarios where tree balancing is required to maintain the sorted order of keys.

2. **Deletion**:

   - Average Case: O(1)
   - Best Case: O(1) - Constant time for most deletions.
   - Worst Case: O(log n) - Logarithmic time for rare scenarios where tree balancing is required to maintain the sorted order of keys.

3. **Search (Existence Check)**:

   - Average Case: O(1)
   - Best Case: O(1) - Constant time for most searches.
   - Worst Case: O(log n) - Logarithmic time for rare scenarios where tree balancing is required to maintain the sorted order of keys.

4. **Iteration (Traversal)**:
   - In terms of time complexity, iterating over all keys or values in a `Map` is O(n), where n is the number of key-value pairs (entries) in the map. This is because you need to visit each entry once.

Overall, `Map` provides efficient time complexity for most operations, especially when dealing with a large number of key-value pairs. It is particularly useful when maintaining the order of insertion or when using complex data types as keys, where objects may not be suitable due to their limitations. The logarithmic time complexity for some operations is typically not a concern in practical scenarios since it occurs only in rare situations when the tree structure needs to be balanced.
