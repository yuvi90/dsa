/*
           10
          /  \
        5     15
       / \     
      3   7
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

  // DFS Traversals - Three Ways
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

  // BFS Traversal
  breadthFirstTraversal(rootNode) {
    const queue = [rootNode];

    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node.value);

      const leftSubtree = node.left;
      const rightSubtree = node.right;
      if (leftSubtree != null) {
        queue.push(leftSubtree);
      }
      if (rightSubtree != null) {
        queue.push(rightSubtree);
      }
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

bst.preOrder(bst.root);
console.log("");
bst.inOrder(bst.root);
console.log("");
bst.postOrder(bst.root);
console.log("");
bst.breadthFirstTraversal(bst.root);
