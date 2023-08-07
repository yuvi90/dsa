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

## More Tree Topics

- [Binary Search Trees](./01_bst.md)
- [Heaps](./02_heaps.md)
- [Priority Queues](./03_priority_queues.md)
