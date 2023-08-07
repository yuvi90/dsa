[Home](../../readme.md) <br>
[Back](./00_trees.md)

# Priority Queues

A priority queues is an abstract data type that is similar to a queue but assigns a priority value to each element. The priority determines the order in which elements are processed and removed from the queue. Elements with higher priority values are processed and removed before elements with lower priority values. In other words, elements are served based on their priority, rather than the order of their insertion.

Priority queues are commonly used in scenarios where elements have different levels of importance or urgency. For example, in a scheduling system, tasks with higher priority (such as critical system processes) need to be executed before tasks with lower priority.

The key operations of a priority queue typically include:

1. Insertion: Adding an element to the priority queue while assigning it a priority value.

2. Deletion: Removing the element with the highest priority from the priority queue.

3. Peek/Top: Retrieving the element with the highest priority without removing it from the priority queue.

Priority queues can be implemented using various data structures, such as arrays, linked lists, heaps, or binary search trees. Among these, the binary heap is a commonly used data structure for efficient priority queue implementation.

There are two types of priority queues:

1. `Max Priority Queue`: In this type, elements with higher priority values are served first. The element with the maximum priority value is placed at the front of the queue.

2. `Min Priority Queue`: In this type, elements with lower priority values are served first. The element with the minimum priority value is placed at the front of the queue.

Priority queues have various applications in computer science, including job scheduling, network routing algorithms, task management, event-driven simulations, and graph algorithms like Dijkstra's algorithm and Prim's algorithm.

It's important to note that priority queues are not strictly limited to queues and can also be implemented as other data structures, such as heaps or balanced binary search trees, depending on the requirements and desired efficiency of the operations.

### Time Complexity

The time complexity of priority queues implemented using built-in Array or Set data structures in JavaScript would depend on the specific implementation approach chosen. Here are two possible scenarios:

1. Priority Queue implemented using an Array:

- Enqueue (Insertion): O(1)
  - Adding an element to the end of an array has a constant time complexity.
- Dequeue (Removal): O(n)
  - Removing an element from the array would require searching for the element with the highest priority, which could take linear time in the worst case scenario if the array is unsorted.
- Peek (Retrieval): O(n)
  - Accessing the element with the highest priority would require searching for it in the array, which could take linear time in the worst case.
- Note: To improve the time complexity of dequeue and peek operations, you would need to maintain the array in a sorted order based on priority, which would require additional operations during insertion to keep it sorted. This approach would increase the time complexity of enqueue operations to O(n) due to the need for sorting.

2. Priority Queue implemented using a Set:

- Enqueue (Insertion): O(1)
  - Adding an element to a Set has a constant time complexity.
- Dequeue (Removal): O(n)
  - Removing an element with the highest priority would require iterating over all elements in the Set to find the element with the highest priority, resulting in linear time complexity.
- Peek (Retrieval): O(n)
  - Accessing the element with the highest priority would require iterating over all elements in the Set to find the element with the highest priority, resulting in linear time complexity.

In both scenarios, the time complexity of the dequeue and peek operations is O(n) in the worst case because they involve searching or iterating over the elements in the data structure. To achieve better time complexity for these operations, a more efficient data structure such as a binary heap or a balanced binary search tree would be preferred.

Time complexity of priority queue implemented using a binary heap:

1. Enqueue (Insertion): O(log n)

- Adding an element to the priority queue requires inserting it into the binary heap and maintaining the heap property.
- The time complexity is O(log n) because the element may need to bubble up to its correct position in the heap, which takes logarithmic time based on the number of elements in the heap.

2. Dequeue (Removal): O(log n)

- Removing the element with the highest priority (the root) requires swapping it with the last element in the heap, popping the last element, and then restoring the heap property by bubbling down the new root.
- The time complexity is O(log n) because the element may need to bubble down to its correct position in the heap, which takes logarithmic time based on the number of elements in the heap.

3. Peek (Retrieval): O(1)

- Retrieving the element with the highest priority (the root) can be done in constant time as it is always located at the top of the heap.

4. IsEmpty: O(1)

- Checking if the priority queue is empty can be done in constant time by checking the length of the heap array.

5. Size: O(1)

- Returning the number of elements in the priority queue can be done in constant time by accessing the length of the heap array.

The time complexity of the enqueue and dequeue operations is logarithmic (O(log n)), where "n" is the number of elements in the priority queue. This efficiency is achieved due to the binary heap's structural properties, which allow for efficient heap property maintenance during insertion and removal. The peek, isEmpty, and size operations have constant time complexity (O(1)) as they only involve accessing or checking the length of the heap array.
