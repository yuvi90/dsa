class Edge {
    constructor(src, des) {
        this.src = src;
        this.des = des;
    }
}

class Graph {
    constructor(size) {
        this.size = size;
        this.nodes = new Array(size);
        for (let i = 0; i < size; i++) {
            this.nodes[i] = [];
        }
    }

    addEdge(src, des) {
        if (src < this.size && des < this.size) {
            const e = new Edge(src, des);
            this.nodes[src].push(e);
        } else {
            console.log("Nodes not present in list.")
        }
    }

    showNeighbors(src) {
        if (src < this.size) {
            this.nodes[src].forEach(des => {
                console.log(`Source - ${src} : Destination ${des.des}`);
            });
        } else {
            console.log("Nodes not present in list.")
        }
    }

    bfs() {
        const visited = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            visited[i] = false;
        }

        function traversal(start, visited) {
            const queue = [start];
            while (queue.length > 0) {
                const currentNode = queue.shift();
                if (!visited[currentNode]) {
                    console.log(currentNode);
                    visited[currentNode] = true;
                    this.nodes[currentNode].forEach((neighbor) => {
                        queue.push(neighbor.des);
                    })
                }
            }
        }

        for (let i = 0; i < this.size; i++) {
            if (!visited[i])
                traversal.call(this, i, visited);
        }
    }

    dfs() {
        const visited = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            visited[i] = false;
        }

        function traversal(start, visited) {
            const currentNode = start;
            if (!visited[currentNode]) {
                console.log(currentNode);
                visited[currentNode] = true;
                this.nodes[currentNode].forEach((neighbor) => {
                    traversal.call(this, neighbor.des, visited);
                })
            }
        }

        for (let i = 0; i < this.size; i++) {
            if (!visited[i])
                traversal.call(this, i, visited);
        }
    }

    printAllPaths(start, target) {
        const startNode = start;
        const path = `${startNode}`;
        const visited = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            visited[i] = false;
        }

        function traversal(start, target, visited, path) {
            const currentNode = start;

            if (currentNode == target) {
                console.log(path)
                return;
            }

            // for (let i = 0; i < this.nodes[currentNode].length; i++) {
            //     const e = this.nodes[currentNode][i]
            //     if (!visited[e.des]) {
            //         const newPath = `${path}----${e.des}`;
            //         visited[currentNode] = true;
            //         traversal.call(this, e.des, target, visited, newPath);
            //         visited[currentNode] = false;
            //     }
            // }

            if (!visited[currentNode]) {
                visited[currentNode] = true;
                this.nodes[currentNode].forEach(neighbor => {
                    const newPath = `${path}----${neighbor.des}`
                    traversal.call(this, neighbor.des, target, visited, newPath);
                })
                visited[currentNode] = false;
            }
        }

        traversal.call(this, startNode, target, visited, path);
    }

    isCycleUndirected() {
        const startNode = 0;
        const parentNode = -1;
        const visited = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            visited[i] = false;
        }

        function traversal(start, visited, parent) {
            const currentNode = start;
            visited[currentNode] = true;

            for (let i = 0; i < this.nodes[currentNode].length; i++) {
                const e = this.nodes[currentNode][i];
                if (visited[e.des] && e.des != parent) {
                    return true;
                }
                else if (!visited[e.des]) {
                    if(traversal.call(this, e.des, visited, currentNode)) {
                        return true;
                    }
                }
            }
            return false;
        }

        return traversal.call(this, startNode, visited, parentNode);
    }
}

//======================================>> GRAPH 1

const graph1 = new Graph(4);
/*
    0       1
      \   /   \
        2  ___  3
*/

graph1.addEdge(0, 2);
graph1.addEdge(1, 2);
graph1.addEdge(1, 3);
graph1.addEdge(2, 0);
graph1.addEdge(2, 1);
graph1.addEdge(2, 3);
graph1.addEdge(3, 1);
graph1.addEdge(3, 2);

// graph1.bfs();
// graph1.dfs();

//======================================>> GRAPH 2

const graph2 = new Graph(7);

/*  
        1------3
      /        | \
    0          |  5----6
      \        | /
        2------4   
*/

graph2.addEdge(0, 1);
graph2.addEdge(0, 2);
graph2.addEdge(1, 0);
graph2.addEdge(1, 3);
graph2.addEdge(2, 0);
graph2.addEdge(2, 4);
graph2.addEdge(3, 1);
graph2.addEdge(3, 4);
graph2.addEdge(3, 5);
graph2.addEdge(4, 2);
graph2.addEdge(4, 3);
graph2.addEdge(4, 5);
graph2.addEdge(5, 3);
graph2.addEdge(5, 4);
graph2.addEdge(5, 6);
graph2.addEdge(6, 5);

// graph2.printAllPaths(0, 5)

//======================================>> GRAPH 3

const graph3 = new Graph(5);

/*
Disconnected Graph

0----1----2

3----4

*/

graph3.addEdge(0, 1);
graph3.addEdge(1, 0);
graph3.addEdge(1, 2);
graph3.addEdge(2, 1);
graph3.addEdge(3, 4);
graph3.addEdge(4, 3);

// graph3.bfs()
// graph3.dfs();