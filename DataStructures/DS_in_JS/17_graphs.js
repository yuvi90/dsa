/*
    A graph is a non-linear data structure that consists of a collection of nodes (also known as vertices) connected by edges. It is a versatile data structure used to represent relationships between objects or entities. Graphs are widely used in various domains, including computer science, mathematics, social networks, transportation networks, and more.

    Components of a Graph:
    1. Node (Vertex): Each node represents an entity or an object and is typically denoted by a unique identifier. Nodes can store additional data or attributes relevant to the problem being modeled.

    2. Edge: An edge represents a connection or relationship between two nodes. It defines how nodes are related to each other. Edges can be directed or undirected. In a directed graph, edges have a specific direction, indicating a one-way relationship, while in an undirected graph, edges represent a bidirectional relationship.

    Types of Graphs:
    1. Directed Graph (Digraph): A graph in which edges have a specific direction. The edges indicate a one-way relationship between nodes.

    2. Undirected Graph: A graph in which edges do not have a specific direction. The edges represent a bidirectional relationship between nodes.

    3. Weighted Graph: A graph in which each edge is assigned a weight or cost. The weights represent the value or distance associated with the relationship between nodes.

    Common Operations on Graphs:
    1. Add Node: Adding a new node to the graph.

    2. Add Edge: Creating a connection between two nodes by adding an edge.

    3. Remove Node: Removing a node and all its associated edges from the graph.

    4. Remove Edge: Removing an edge between two nodes.

    5. Traverse: Visiting all the nodes in the graph to perform a specific operation, such as searching, finding the shortest path, or performing a depth-first or breadth-first traversal.

    Graphs can be implemented using different data structures such as adjacency matrix, adjacency list, or an edge list. The choice of implementation depends on the specific requirements and characteristics of the problem being solved.

    Graphs provide a powerful way to represent and analyze complex relationships and are widely used in algorithms and applications related to network analysis, routing, path finding, social network analysis, recommendation systems, and more.

    ==========>> TIME COMPLEXITY

    The time complexity of operations in a graph can vary depending on the specific implementation and the chosen algorithms. Here are the time complexities of some common operations on a graph:

    1. Add Node: O(1)
    - Adding a node to a graph typically requires updating the data structure to include the new node. This operation can be done in constant time.

    2. Add Edge: O(1)
    - Adding an edge between two nodes in a graph can be done in constant time, assuming that the nodes are already present in the graph.

    3. Remove Node: O(E)
    - Removing a node from a graph involves removing the node and its associated edges. The time complexity depends on the number of edges connected to the node. In the worst case, we need to traverse all the edges to remove them, resulting in a time complexity of O(E), where E is the number of edges.

    4. Remove Edge: O(1)
    - Removing an edge between two nodes can typically be done in constant time, assuming that the nodes and the edge are already present in the graph.

    5. Traverse (DFS or BFS): O(V + E)
    - Traversing the graph using depth-first search (DFS) or breadth-first search (BFS) involves visiting all the nodes and edges in the graph. In the worst case, we may need to visit all the vertices (V) and edges (E) in the graph, resulting in a time complexity of O(V + E).

    6. Find Neighbors of a Node: O(1) to O(V)
    - Finding the neighbors of a node depends on the specific graph representation. In an adjacency matrix representation, finding the neighbors of a node can be done in constant time (O(1)), as we can directly access the corresponding row or column. In an adjacency list representation, finding the neighbors involves iterating over the adjacency list of the node, which can take O(V) time in the worst case, where V is the number of vertices.

    7. Find Shortest Path: O(V + E)
    - Finding the shortest path between two nodes in a graph can be done using algorithms like Dijkstra's algorithm or Bellman-Ford algorithm. The time complexity for finding the shortest path is typically O(V + E), where V is the number of vertices and E is the number of edges.

    It's important to note that these time complexities are general guidelines and can vary depending on the specific implementation and graph characteristics.
*/