[Home](../../readme.md) <br>
[Back](../00_built_in_ds.md)

# Weak Sets

In JavaScript, a `WeakSet` is a built-in data structure that is similar to a regular `Set`, but with some key differences. The primary distinction is that the values in a `WeakSet` must be objects, and the references to those values are weakly held, which means they do not prevent the objects from being garbage collected when there are no other references to them.

Here are the key features and characteristics of `WeakSet`:

1. `Weak References`: Similar to `WeakMap`, a `WeakSet` does not prevent its values from being garbage collected if there are no other references to those values. This makes `WeakSet` useful for scenarios where you want to store objects as unique members in a set but don't want to prevent those objects from being cleaned up by the garbage collector when they are no longer needed.

2. `Object Values Only`: `WeakSet` only allows objects as values and does not support primitive data types (like strings or numbers) as values.

3. `Limited Functionality`: Compared to regular `Set`, `WeakSet` has limited methods and functionalities. It does not have methods like `size`, `forEach`, or `clear`. Additionally, you cannot iterate over the values of a `WeakSet` due to the lack of strong references to values.

4. `Use Cases`: Some common use cases for `WeakSet` include managing a collection of objects in a way that allows for garbage collection when objects are no longer in use, avoiding memory leaks when working with objects that are created and destroyed frequently, and ensuring that each object is stored in the set only once.

Here's an example of how to use a `WeakSet`:

```javascript
const weakSet = new WeakSet();

function addPerson(person) {
  weakSet.add(person);
}

const john = { name: "John" };
const jane = { name: "Jane" };

addPerson(john);
addPerson(jane);

console.log(weakSet.has(john)); // Output: true
console.log(weakSet.has(jane)); // Output: true

// If there are no other references to the 'john' and 'jane' objects,
// they may be garbage collected at some point, and they will no longer be in the WeakSet.
```

Remember that since `WeakSet` uses weak references, it has some limitations. For example, you cannot use a `WeakSet` when you need to iterate over its values. Additionally, `WeakSet` is not suitable for use cases where you want to store primitive values or require stronger reference management. In such cases, a regular `Set` or other data structures might be more appropriate.
