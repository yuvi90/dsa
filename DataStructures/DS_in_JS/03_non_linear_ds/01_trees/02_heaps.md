[Home](../../readme.md) <br>
[Back](./00_trees.md)

# Heaps

`Complete Binary Tree` : If all its level except possibly the last, have the maximum number of nodes and if all nodes at the last level appear as far left as possible.
Max number of nodes at height h is 2^h nodes.

Index can be easily figured out :

- Left and Right children of the node K are `2*k and 2*k+1`
- Parent of K is the node lower bound `(k/2)`
- Index starts from 1, in technical it is an array

There is no condition like binary i.e left node should be smaller or right should be greater than root

Heap is a complete binary tree. It is used in `Sorting` not for Searching. AVL and BST used for searching not for sorting. Heap can be max heap and min heap.

- The value of each node in heap is greater than to the value at each of the children of each node then it is called max heap. (parent child relationship)
- The value of each node in heap is smaller than to the value at each of the children of each node then it is called min heap.

eg. Max Heap

            100
          /     \
        19       36
        / \     /  \
      17   3   25   1
      / \
     2   7

eg. Min Heap

          6
        /   \
      7      12
      / \    /
     10  15 17

### Compare time complexities between Heaps and AVL trees

- Searching in heaps : O(n)
- Searching in avl : O(log n)

- Sorting in heaps : O(1)
- Sorting in avl : O(n)

A heap is a specialized tree-based data structure that satisfies the heap property. A heap can be visualized as a binary tree, although it is typically implemented using an array. Heaps are commonly used to efficiently manage and retrieve the largest or smallest element (depending on whether it's a max-heap or min-heap) from a collection of elements.

The heap property varies depending on the type of heap:

- Max-Heap: In a max-heap, for any given node 'i', the value of 'i' is greater than or equal to the values of its children. In simpler terms, the maximum element is always at the root.

- Min-Heap: In a min-heap, for any given node 'i', the value of 'i' is less than or equal to the values of its children. In simpler terms, the minimum element is always at the root.

The key benefit of a heap is the ability to access the maximum or minimum element in constant time (O(1)). Additionally, heaps support efficient insertion and deletion operations, both taking logarithmic time (O(log n)).

Common operations on heaps include:

- Insertion: Adding an element to the heap while maintaining the heap property. (Top to Bottom and left to right insertion)

- Deletion: Removing the maximum or minimum element from the heap while maintaining the heap property. (Delete max or min value)

- Peek/Top: Retrieving the maximum or minimum element without removing it from the heap.

- Heapify: Constructing a heap from an unsorted array in linear time (O(n)).

Heaps are utilized in various algorithms and data structures, such as priority queues, heap sort, graph algorithms like Dijkstra's algorithm, and more. They provide an efficient way to manage and retrieve the extreme elements within a collection.
