# Queue

Queues is based on FIFO Principle i.e. First In First Out.
Stores elements from Rear and removes from Front.

add() to add to the top. Complexity : O(1)

remove() to remove from the top. Complexity : O(1)

peek() to see current top element. Complexity : O(1)

Can be implemented using Fixed Array, Dynamic Array, LinkedList, Stacks.

Using Fixed/Dynamic Arrays Queue Implementation remove() `has complexity of O(n)` because of sliding elements but other operations are O(1).

If circular queue is implemented then `all operations are O(1)`.

In Linked List implementation `all operations are O(1)`.

There is also double ended queue most commonly known as Array Dequeue. In this queue we can add or remove elements from both sides.

The best implementation of queues depends on the specific requirements and constraints of your use case. However, two common and efficient implementations of queues are:

1. `Array-Based Implementation:`

- In this approach, the queue is implemented using an underlying array where elements are enqueued at the rear and dequeued from the front of the array.
- `Advantages:`

  - Simple and straightforward implementation.
  - Random access to elements, allowing for constant time access and updates.

- `Drawbacks:`

  - Limited capacity: The size of the queue may be constrained by the size of the underlying array, and resizing the array can be an expensive operation.
  - Dynamic resizing: If the queue needs to grow beyond the initial capacity, the array may need to be resized, which can result in a time-consuming operation.
  - Dequeuing from the front requires shifting all elements in the array, resulting in linear time complexity.

2. `Linked List-Based Implementation:`

- In this approach, the queue is implemented using a singly linked list, where each element in the queue is represented as a node in the linked list. The head of the linked list represents the front of the queue, and the tail represents the rear of the queue.
- `Advantages:`

  - Dynamic size: The queue can grow or shrink dynamically without the need for resizing operations.
  - Efficient enqueue and dequeue operations: Adding elements at the tail and removing elements from the head of the linked list can be done in constant time.

- `Drawbacks:`

  - Extra memory overhead: Each element in the queue requires additional memory to store the node object and maintain the links between nodes.
  - No random access: Accessing elements in the middle of the queue would require traversing the linked list, resulting in linear time complexity.

The choice between the array-based and linked list-based implementation depends on factors such as the expected size of the queue, the need for dynamic resizing, and the frequency of enqueue and dequeue operations. If the size of the queue is known and fixed, or if random access to elements is important, the array-based implementation may be a suitable choice. On the other hand, if the size of the queue may change dynamically or efficient enqueue and dequeue operations are crucial, the linked list-based implementation could be more appropriate.

3. `Stack Based Implementation:`

Implementing queues using stacks has its own set of pros and cons.

- `Advantages:`

  - Simplicity: Implementing a queue using stacks is relatively simple and straightforward, especially if you already have a stack implementation available.
  - Space Efficiency: Depending on the implementation, using stacks to implement a queue can potentially be more space-efficient compared to other implementations that use arrays or linked lists.
  - Flexibility: The stack-based implementation allows for flexibility in terms of choosing the underlying stack implementation. You can use an array-based stack or a linked list-based stack depending on your specific needs and constraints.

- `Drawbacks:`

- Time Complexity: While enqueue and dequeue operations can be implemented using stacks, the time complexity for enqueue and dequeue operations would be suboptimal compared to traditional queue implementations. Specifically, dequeueing an element would require transferring all elements from one stack to another, resulting in a time complexity of O(n) for the dequeue operation.
- Space Overhead: Implementing a queue using stacks may require additional space to maintain the two stacks. This can result in increased space overhead compared to a direct implementation of a queue using an array or linked list.
- Potential Stack Overflow: If the size of the queue exceeds the capacity of the underlying stack, it can lead to a stack overflow error. This limitation arises because stacks have a fixed capacity.

Overall, implementing queues using stacks can be a viable option in certain scenarios where simplicity and space efficiency are priorities, and if the expected number of elements in the queue is not large enough to cause performance issues. However, it's important to consider the trade-offs and limitations of this approach, particularly in terms of time complexity and potential stack overflow issues.
