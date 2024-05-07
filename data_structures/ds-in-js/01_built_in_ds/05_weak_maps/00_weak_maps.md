[Home](../../readme.md) <br>
[Back](../00_built_in_ds.md)

# Weak Maps

In JavaScript, a `WeakMap` is a built-in data structure that is similar to a regular `Map`, but with some key differences. The primary distinction is that the keys in a `WeakMap` must be objects, and the references to those keys are weakly held, which means they do not prevent the objects from being garbage collected when there are no other references to them.

Here are the key features and characteristics of `WeakMap`:

1. `Weak References`: Unlike a regular `Map`, a `WeakMap` does not prevent its keys from being garbage collected if there are no other references to those keys. This makes `WeakMap` particularly useful for scenarios where you want to associate some additional data with objects but don't want to prevent those objects from being cleaned up by the garbage collector when they are no longer needed.

2. `Object Keys Only`: `WeakMap` only allows objects as keys, and it does not support primitive data types (like strings or numbers) as keys.

3. `Limited Functionality`: Compared to regular `Map`, `WeakMap` has limited methods and functionalities. It does not have methods like `size`, `forEach`, or `clear`. Additionally, you cannot iterate over the keys or entries of a `WeakMap` due to the lack of strong references to keys.

4. `Use Cases`: Some common use cases for `WeakMap` include caching data associated with objects, avoiding memory leaks when working with objects that are created and destroyed frequently, and storing private data within objects in a way that does not pollute the object's properties.

Here's an example of how to use a `WeakMap`:

```javascript
const personWeakMap = new WeakMap();

function someOperation(person) {
  personWeakMap.set(person, "Additional data related to the person");
}

const john = { name: "John" };
someOperation(john);

console.log(personWeakMap.has(john)); // Output: true

// If there are no other references to the 'john' object, it may be garbage collected at some point,
// and the entry in the WeakMap will be automatically removed.
```

Remember that since `WeakMap` uses weak references, it has some limitations. For example, you cannot use a `WeakMap` when you need to iterate over its keys or entries. Additionally, `WeakMap` is not suitable for use cases where you want to associate data with primitive values or require stronger reference management. In such cases, a regular `Map` or other data structures might be more appropriate.
