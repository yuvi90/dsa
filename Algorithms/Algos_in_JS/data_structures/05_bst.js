class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  add(value) {
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
}
