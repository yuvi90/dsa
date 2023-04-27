/*
    A binary tree is a tree data structure in which each node has at at most two children. They are referred to as right child and left child.

    Binary Search Tree - value of left subtree must be smaller than root and value of right subtree is greater that root.
    In BST each node has at most two children.

    example of BST: 
           10
          /  \
        5     15
       / \     
      3   7

    BST Operations-

    Insertion
    Search
    DFS & BSF (Traversing)
    Deletion
    Contains

    Binary Search Tree Applications
    - Searching
    - Sorting
    - To implement abstract data types such as look up tables and priority queues.

    Linear data structures having one way to traverse but in hierarchal data structure have different ways to traversing.
    Traversing means visiting every node in the tree.

    Two methods are :-
    - Depth First Search
    - Breadth First Search

    DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking.
    Visit the root node, visit all nodes in left subtree and visit all the nodes in the right subtree.
    Depending on the order in which we do this, there can be three types of DFS traversals :-  
    - pre-order (Root, Left, Right)
    - in-order (Left, Root, Right)
    - post-order (Left, Right, Root)

    In BFS, explore all nodes at the present depth prior to moving on to the nodes at the next depth level.
    Steps :- 
    - Create Queue
    - Enqueue the root node
    - As long as a node exists in the queue
        a. Dequeue the node from the front
        b. Read the node's value
        c. Enqueue the node's left child if it exists
        d. Enqueue the node's right child if it exists
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(rootNode, newNode) {
        if (rootNode.value > newNode.value) {
            if (rootNode.left === null) {
                rootNode.left = newNode;
            } else {
                this.insertNode(rootNode.left, newNode);
            }
        } else {
            if (rootNode.right === null) {
                rootNode.right = newNode;
            } else {
                this.insertNode(rootNode.right, newNode);
            }
        }
    }

    find(value) {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.findNode(this.root, value);
        }
    }

    findNode(rootNode, value) {
        if (rootNode.value === value) {
            return true;
        }
        if (rootNode.value > value) {
            if (rootNode.left === null) {
                return false;
            } else {
                return this.findNode(rootNode.left, value);
            }
        } else {
            if (rootNode.left === null) {
                return false;
            } else {
                return this.findNode(rootNode.right, value);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}

const bst = new BST();

console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.isEmpty());

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
bst.postOrder(bst.root);