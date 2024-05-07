[Home](../readme.md)

# Non-Linear Data Structure

Non-linear data structures are data structures in which the elements are not arranged in a sequential or linear manner. Unlike linear data structures, non-linear data structures allow elements to be connected in a more complex and hierarchical manner. These structures are widely used to represent relationships, hierarchies, and interconnected data.

Here are some common examples of non-linear data structures:

1. Trees: Trees are hierarchical data structures that consist of nodes connected by edges. Each tree has a root node, and every node (except the root) has a parent node and zero or more child nodes. Trees can be further classified into binary trees, AVL trees, B-trees, and more.

2. Graphs: Graphs consist of a set of vertices (nodes) connected by edges (links). Graphs can be directed (edges have a direction) or undirected (edges have no direction). Graphs are widely used to represent networks, social connections, computer networks, etc.

3. Heaps: Heaps are specialized trees used to maintain a specific order among their elements. Commonly used heaps are binary heaps and Fibonacci heaps, which are used in priority queues and scheduling algorithms.

4. Trie (Prefix Tree): A trie is a tree-like data structure used to efficiently store and search a dynamic set of strings. It allows quick search operations for words with a common prefix.

5. Hash table (Hash Map): While hash maps are typically considered as associative arrays (linear data structures), they can also be viewed as non-linear data structures when chaining is used to handle hash collisions. In this case, each slot of the array may hold a linked list or a binary search tree, creating a more complex interconnected structure.

Non-linear data structures are valuable in various applications where relationships and hierarchies exist between data elements. They allow efficient representation, storage, and retrieval of interconnected data, making them suitable for tasks like representing file systems, organizing hierarchical data, network routing, and more.

# Learn more

- [Trees](./01_trees/00_trees.md)
- [Graphs](./02_graphs/00_graphs.md)
- [Heaps](./03_heaps/00_heaps.md)
- [Hash Maps](./03_hashmaps/00_hashmap.md)
