[Home](../../readme.md) <br>
[Back](../00_non_linear_ds.md)

# Trees

A Tree is a hierarchical data structure that consists of nodes connected by edges.
A tree is a non-linear data structure, compared to arrays, linked list, stacks and queues which are linear data structures.

In linear data structure, the time required to search is proportional to the size of the data set, ie. more data more time needed to search.
Trees however, owing to the non linear nature allow quicker and easier access to the data.
A tree will not contain any loops or cycles.

Usage:--

- Family tree
- Organization tree
- DOM Tree
- Chat bots
- Abstract syntax trees

## Terminology for trees:

1. **Root Node**: The root node is the topmost node in a tree hierarchy. It is the starting point of the tree structure and has no parent nodes.

2. **Parent Node**: A parent node is a node that has one or more child nodes originating from it.

3. **Child Node**: A child node is a node that is directly connected to and originates from a parent node.

4. **Leaf Node**: A leaf node (or terminal node) is a node that has no child nodes. It is located at the end of a branch.

5. **Siblings**: Sibling nodes are nodes that share the same parent node. In other words, sibling nodes are children of the same parent node.

6. **Ancestor Node**: An ancestor node of a given node is any node that lies on the path from the given node to the root node.

7. **Successor Node**: A successor node of a given node is any node that can be reached by moving down the tree, starting from the given node.

8. **Degree**: The degree of a node in a tree is the number of its child nodes.

9. **Degree of Tree**: The degree of a tree is the maximum degree of any node in the tree. It represents the maximum number of child nodes any node can have.

10. **Path**: A path in a tree is a sequence of nodes where each node is connected to the next node. It represents a route from one node to another.

11. **Distance**: The distance between two nodes in a tree is the number of edges (or levels) between them in the tree.

12. **Height**: The height of a node in a tree is the length of the longest path from that node to a leaf node. The height of the root node is the height of the entire tree.

13. **Depth**: The depth of a node in a tree is the length of the path from the root node to that node. The depth of the root node is 0.

In summary, these terms help describe the relationships and structure of nodes in a tree data structure. Trees are commonly used in computer science for various applications, including hierarchical data representation, search algorithms, and more.

## Types of trees

1. **Binary Tree**: A binary tree is a tree in which each node has at most two children, referred to as the left child and the right child.

2. **[Binary Search Trees](./01_bst.md) (BST)**: A binary search tree is a binary tree in which the left child of a node has a value less than or equal to the node's value, and the right child has a value greater than the node's value. It allows for efficient searching, insertion, and deletion operations.

3. **AVL Tree**: An AVL tree is a self-balancing binary search tree in which the heights of the two child subtrees of any node differ by at most one. This balancing ensures that the tree remains relatively balanced and maintains a logarithmic height.

4. **Red-Black Tree**: A red-black tree is another type of self-balancing binary search tree in which nodes are colored red or black. The tree follows certain rules to ensure that the tree remains balanced, providing efficient operations.

5. **B-Tree**: A B-tree is a balanced tree structure that is commonly used in databases and file systems. It is designed to optimize disk reads and writes by allowing multiple keys per node and ensuring that the tree remains balanced.

6. **[Heap](../03_heaps/00_heaps.md)**: A heap is a specialized tree-based data structure that satisfies the heap property. In a max-heap, the value of each parent node is greater than or equal to the values of its children. In a min-heap, the value of each parent node is less than or equal to the values of its children. Heaps are often used for implementing priority queues.

7. **Trie (Prefix Tree)**: A trie is a tree-like data structure used for storing a dynamic set of strings, such as words in a dictionary. It allows for efficient string search and insertion operations.

8. **Suffix Tree**: A suffix tree is a tree-like data structure used for pattern matching in strings. It is particularly useful for finding all occurrences of a substring within a larger string.

9. **Segment Tree**: A segment tree is a binary tree used for range queries on arrays or lists. It is commonly used in various computational geometry and data manipulation algorithms.

10. **Quad tree**: A quad tree is a tree structure used to partition a two-dimensional space into smaller regions. It is often used in computer graphics and image processing for spatial indexing and efficient search.

11. **Octree**: An octree is an extension of a quad tree into three dimensions. It is used in 3D graphics and spatial indexing for representing volumetric data.

These are just a few examples of the many types of trees used in computer science and data structures. Each type of tree has its own strengths and weaknesses, making it suitable for specific use cases and applications. The choice of tree structure depends on the problem you're trying to solve and the specific requirements of your application.
