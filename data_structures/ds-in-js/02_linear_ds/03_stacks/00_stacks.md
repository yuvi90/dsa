[Home](../../readme.md) <br>
[Back](../00_linear_ds.md)

# Stacks

Stacks is also linear data structure.
Stacks is based on LIFO Principle i.e. Last in First Out.
Stores elements like vertical tower, Books or Plates.
All insertion or deletion occur at one end, i.e. Top.

push() to add to the top. Complexity : O(1)

pop() to remove from the top. Complexity : O(1)

peek() to see current top element. Complexity : O(1)

Can be implemented using Fixed Array, Dynamic Array, LinkedList

_If stack is implemented in good way all the three major operations are O(1)._

**Applications:**

1. Undo/Redo
2. Moving back/forward through browser history
3. Call Stack
4. Backtracking algorithms

The best implementation of stacks depends on the specific requirements and constraints of your use case. However, two common and efficient implementations of stacks are:

1. `Array-Based Implementation:`

- In this approach, the stack is implemented using an underlying array where elements are pushed and popped at the end of the array.
- Advantages:
  - Simple and straightforward implementation.
  - Random access to elements, allowing for constant time access and updates.
- Drawbacks:
  - Limited capacity: The size of the stack may be constrained by the size of the underlying array, and resizing the array can be an expensive operation.
  - Dynamic resizing: If the stack needs to grow beyond the initial capacity, the array may need to be resized, which can result in a time-consuming operation.

2. `Linked List-Based Implementation:`

- In this approach, the stack is implemented using a singly linked list, where each element in the stack is represented as a node in the linked list.
- Advantages:
  - Dynamic size: The stack can grow or shrink dynamically without the need for resizing operations.
  - Efficient push and pop operations: Adding or removing elements at the head of the linked list can be done in constant time.
- Drawbacks:
  - Extra memory overhead: Each element in the stack requires additional memory to store the node object and maintain the links between nodes.
  - No random access: Accessing elements in the middle of the stack would require traversing the linked list, resulting in linear time complexity.

The choice between the array-based and linked list-based implementation depends on factors such as the expected size of the stack, the need for dynamic resizing, and the frequency of push and pop operations. If the size of the stack is known and fixed, or if random access to elements is important, the array-based implementation may be a suitable choice. On the other hand, if the size of the stack may change dynamically or efficient push and pop operations are crucial, the linked list-based implementation could be more appropriate.
