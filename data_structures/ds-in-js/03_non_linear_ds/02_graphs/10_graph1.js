/*
    Graphs implemented using Adjacency List (Hashmap)
*/

class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(value) {
        if (!this.nodes.has(value)) {
            this.nodes.set(value, []);
        }
    }

    addEdge(node1, node2) {
        if (this.nodes.has(node1) && this.nodes.has(node2)) {
            this.nodes.get(node1).push(node2);
            this.nodes.get(node2).push(node1);
        }
    }

    removeNode(value) {
        if (this.nodes.has(value)) {
            const adjacentNodes = this.nodes.get(value);
            // Delete Edges on Each Node Adjacent Nodes
            adjacentNodes.forEach((node) => {
                const neighbors = this.nodes.get(node);
                const index = neighbors.indexOf(value);
                // If condition just verifies, if is it a correct index
                if (index > -1) {
                    neighbors.splice(index, 1);
                }
            });
            this.nodes.delete(value);
        }
    }

    removeEdge(node1, node2) {
        if (this.nodes.has(node1) && this.nodes.has(node2)) {
            const neighbors1 = this.nodes.get(node1);
            const index1 = neighbors1.indexOf(node2);
            // If condition just verifies, if is it a correct index
            if (index1 > -1) {
                neighbors1.splice(index1, 1);
            }

            const neighbors2 = this.nodes.get(node2);
            const index2 = neighbors2.indexOf(node1);
            // If condition just verifies, if is it a correct index
            if (index2 > -1) {
                neighbors2.splice(index2, 1);
            }
        }
    }

    breadthFirstTraversal(startNode) {
        const queue = [startNode];
        const visitedNodes = new Set();
        visitedNodes.add(startNode);

        while (queue.length > 0) {
            const node = queue.shift();
            console.log(node);

            const neighbors = this.nodes.get(node);
            for (const neighbor of neighbors) {
                if (!visitedNodes.has(neighbor)) {
                    visitedNodes.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    depthFirstTraversal(startNode, visitedNodes = new Set()) {
        visitedNodes.add(startNode);
        console.log(startNode);

        const neighbors = this.nodes.get(startNode);
        for (const neighbor of neighbors) {
            if (!visitedNodes.has(neighbor)) {
                this.depthFirstTraversal(neighbor, visitedNodes)
            }
        }
    }
}

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log(graph)