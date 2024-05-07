[Home](../../readme.md) <br>
[Back](../00_linear_ds.md)

# Arrays in JavaScript vs Java

1. Dynamic sizing:

   - JavaScript: Arrays in JavaScript are dynamically sized, meaning you can add or remove elements without specifying the size beforehand. They automatically adjust their size as needed.
   - Java: Arrays in Java have a fixed size, which means you must specify the size during initialization, and it cannot be changed during runtime. To create a dynamically resizable collection in Java, you typically use ArrayList or other collections from the Java Collections Framework.

2. Data types:

   - JavaScript: JavaScript arrays can store elements of different data types within the same array. They are not restricted to a specific type and can hold a mix of numbers, strings, objects, and other arrays.
   - Java: Arrays in Java are homogeneous, meaning they can only store elements of the same data type. Once you declare an array of a specific type, all its elements must be of that type.

3. Sparse arrays:

   - JavaScript: JavaScript arrays can be sparse, which means they can have gaps or undefined elements within their sequence of indices. It's not necessary to fill all indices between the start and end.
   - Java: Java arrays are always contiguous, and all elements are initialized with default values (e.g., 0 for numeric types, null for object references) if not explicitly assigned a value.

4. Built-in methods:

   - JavaScript: JavaScript arrays come with many built-in methods and features for manipulation, iteration, and functional programming, such as `push`, `pop`, `shift`, `unshift`, `forEach`, `map`, `filter`, etc.
   - Java: Java arrays do not have built-in methods for common operations like adding or removing elements. To perform such operations, you need to manually implement them or use helper methods from classes like ArrayList or Arrays.

5. Indexing:
   - JavaScript: JavaScript arrays use zero-based indexing, where the first element is accessed with index 0, the second with index 1, and so on.
   - Java: Java arrays also use zero-based indexing, following the same convention as JavaScript arrays.

In summary, JavaScript arrays are more flexible in terms of size and data types, making them easier to work with for certain scenarios. On the other hand, Java arrays are more rigid, but they can be more efficient for specific use cases where a fixed-size collection is needed with elements of the same type. For dynamic resizing and more versatile array-like behavior in Java, you often use classes from the Java Collections Framework like ArrayList or LinkedList.

### Worst Case - Time Complexity

- Lookup by Index - O(1)
- Lookup by Value - O(n)
- Insertion - O(n)
- Deletion - O(n)
