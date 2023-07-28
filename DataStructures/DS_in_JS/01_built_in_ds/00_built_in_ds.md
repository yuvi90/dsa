[Home](../readme.md)

In JavaScript, there are several built-in data structures that you can use to organize and manipulate data efficiently. Some of the commonly used built-in data structures include:

1. `Arrays`: Arrays are ordered collections of elements, where each element is identified by an index starting from 0. JavaScript arrays can contain elements of different types and can be resized dynamically.

2. `Objects`: Objects are key-value pairs used to store and organize data. They are useful for representing complex data structures and are often used for creating dictionaries, maps, or custom data models.

3. `Maps`: Maps are collections of key-value pairs similar to objects. However, they have some differences, such as allowing any data type as keys and preserving the order of insertion.

4. `Sets`: Sets are collections of unique values, which means they automatically remove duplicate values. Sets are useful when you need to maintain a distinct list of items.

5. `Weak Maps`: WeakMap allows you to store key-value pairs, where the keys must be objects and the references to those keys are weakly held. In other words, if there are no other references to the keys, they can be garbage collected, and the corresponding entry in the WeakMap will be automatically removed.

6. `Weak Sets`: WeakSet allows you to store unique objects, where the references to those objects are weakly held. Like WeakMap, if there are no other references to the objects in the WeakSet, they can be garbage collected, and the corresponding entry in the WeakSet will be automatically removed.

7. `Strings`: Strings are sequences of characters and are used to represent textual data.

8. `Numbers`: JavaScript supports various numeric data types, including integers and floating-point numbers, for performing mathematical operations.

9. `Booleans`: Booleans represent true or false values and are commonly used in conditional statements and comparisons.

10. `Undefined and Null`: Both `undefined` and `null` represent absence of a value. `undefined` is a default value for uninitialized variables, while `null` is typically used to indicate the intentional absence of a value.

11. `Symbols`: Symbols are unique and immutable data types often used as object property keys to prevent accidental property name collisions.

These built-in data structures provide a solid foundation for managing data in JavaScript. However, for more complex data structures like linked lists, stacks, queues, trees, graphs, and hash tables, you may need to implement custom data structures or use external libraries that provide additional functionalities.

# Learn more

- [Arrays](./01_arrays/00_arrays.md)
- [Objects](./02_objects/00_objects.md)
- [Maps](./03_maps/00_maps.md)
- [Sets](./04_sets/00_sets.md)
- [Weak Maps](./05_weak_maps/00_weak_maps.md)
- [Weak Sets](./06_weak_sets/00_weak_sets.md)
- [Weak Maps & Weak Sets](./notes/weak_maps_and_weak_sets.md)
