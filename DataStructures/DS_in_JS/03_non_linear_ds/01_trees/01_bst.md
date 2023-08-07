[Home](../../readme.md) <br>
[Back](./00_trees.md)

# Binary Search Tree

Binary Search Tree (BST) is a binary tree data structure with the following properties:

1. Each node has at most two child nodes: a left child and a right child.
2. The left child of a node has a value less than or equal to the node's value.
3. The right child of a node has a value greater than the node's value.
4. The tree is ordered in a way that satisfies the properties above for all nodes.

### Binary Search Tree Applications

- Searching
- Sorting
- To implement abstract data types such as look up tables and priority queues.

### BST Basics Operations

1. Insertion
2. Search
3. DFS & BSF (Traversing)
4. Deletion
5. Contains

`Traversing` means visiting every node in the tree.
Linear data structures having one way to traverse but in hierarchal data structure have different ways to traversing.

Two methods are :-

- Depth First Search
- Breadth First Search

1. `DFS algorithm` starts at the root node and explores as far as possible along each branch before backtracking.
   Visit the root node, visit all nodes in left subtree and visit all the nodes in the right subtree.

Depending on the order in which we do this, there can be three types of DFS traversals :-

- pre-order (Root, Left, Right)
- in-order (Left, Root, Right)
- post-order (Left, Right, Root)

2. `BFS algorithm`, explore all nodes at the present depth prior to moving on to the nodes at the next depth level.

Steps :-

- Create Queue
- Enqueue the root node
- As long as a node exists in the queue
  - Dequeue the node from the front
  - Read the node's value
  - Enqueue the node's left child if it exists
  - Enqueue the node's right child if it exists

Here are common operations performed on a Binary Search Tree and their average and worst-case time complexities:

1. **Insertion**:

   - Average Time Complexity: O(log n) - When the tree is balanced.
   - Worst-Case Time Complexity: O(n) - When the tree is skewed (one-sided).

2. **Deletion**:

   - Average Time Complexity: O(log n) - When the tree is balanced.
   - Worst-Case Time Complexity: O(n) - When the tree is skewed (one-sided).

3. **Search**:

   - Average Time Complexity: O(log n) - When the tree is balanced.
   - Worst-Case Time Complexity: O(n) - When the tree is skewed (one-sided).

4. **Find Minimum and Maximum**:

   - Time Complexity: O(log n) - When the tree is balanced.

5. **In-order Traversal** (Visiting nodes in ascending order):

   - Time Complexity: O(n) - Since you need to visit all nodes.

6. **Pre-order Traversal**:

   - Time Complexity: O(n) - Since you need to visit all nodes.

7. **Post-order Traversal**:

   - Time Complexity: O(n) - Since you need to visit all nodes.

8. **Check if a Value Exists**:

   - Average Time Complexity: O(log n) - When the tree is balanced.
   - Worst-Case Time Complexity: O(n) - When the tree is skewed (one-sided).

9. **Balancing (Rebalancing)**:
   - Time Complexity: O(n) - Requires visiting all nodes to rebalance.

BST operations are most efficient when the tree is balanced. In the average case, the height of a balanced BST is log(n) where 'n' is the number of nodes. However, in the worst case, if the tree becomes skewed (i.e., all nodes are on one side), the time complexity can degrade to O(n), which is similar to searching in a linked list.

To maintain the balance of the tree, various types of self-balancing Binary Search Trees (e.g., AVL Tree, Red-Black Tree) are used, which ensure that the height of the tree remains logarithmic, resulting in more consistent and predictable performance for BST operations.
