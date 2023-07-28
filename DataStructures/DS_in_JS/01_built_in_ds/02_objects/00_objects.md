[Home](../../readme.md) <br>
[Back](../00_built_in_ds.md)

# Objects

In JavaScript, Object is a built-in data structure that can hold a unordered collection of key-value pairs.

- Key must either be a `string or symbol data type`.
- Value can be of any `data type and can hold methods or functions`.
- To get value, you can use corresponding key using `dot operator or [] notation`.
- Objects are `not iterables`.

JavaScript objects are not considered iterable by default. Iterables are data structures that allow you to iterate over their elements using a loop or other iterable methods like `for...of` loops or the `forEach` method.

In JavaScript, arrays and strings are examples of iterable data structures, as they allow you to loop over their elements directly. For example:

```javascript
const arr = [1, 2, 3];

for (const item of arr) {
  console.log(item);
}
// Output: 1 2 3

const str = "hello";

for (const char of str) {
  console.log(char);
}
// Output: h e l l o
```

However, when it comes to plain JavaScript objects (key-value pairs), you cannot directly use a `for...of` loop or the `forEach` method to iterate over their properties. Instead, you would typically use a `for...in` loop to iterate over the object's keys:

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);
}
// Output: a 1 b 2 c 3
```

If you want to make JavaScript objects iterable in a more convenient way, you can use the `Object.entries()` method to convert the object into an array of key-value pairs and then use iterable methods on the resulting array:

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
// Output: a 1 b 2 c 3
```

Time complexities of these operations are:

- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)

Remember that the `Object.entries()` method is supported in modern browsers and environments that support ECMAScript 2017 (ES8) and later versions. For older environments, you may need to use a polyfill or transpiler to ensure compatibility.

## Time complexity of operations in the built-in Objects in JavaScript :

In JavaScript, objects are typically implemented as hash tables or dictionaries, and their time complexity for various operations is as follows:

1. `Insertion (Addition) and Access (Retrieval)`:

   - Average Case: O(1)
   - Best Case: O(1) - Constant time if there are no hash collisions.
   - Worst Case: O(n) - Linear time if there are many hash collisions, but this is rare in practice with well-distributed hash functions.

2. `Deletion`:

   - Average Case: O(1)
   - Best Case: O(1) - Constant time if there are no hash collisions.
   - Worst Case: O(n) - Linear time if there are many hash collisions.

3. `Search (Existence Check)`:

   - Average Case: O(1)
   - Best Case: O(1) - Constant time if there are no hash collisions.
   - Worst Case: O(n) - Linear time if there are many hash collisions.

4. `Iteration (Traversal)`:
   - In terms of time complexity, iterating over all keys or values in an object is O(n), where n is the number of keys (properties) in the object. This is because you need to visit each key once.

Overall, JavaScript objects provide very efficient access, insertion, and deletion operations with an average-case complexity of O(1) due to the use of hash tables. However, it's important to note that hash collisions can affect the worst-case performance in rare situations. In practice, the performance of objects is excellent for most use cases, and they are commonly used as data structures for storing key-value pairs in JavaScript.
