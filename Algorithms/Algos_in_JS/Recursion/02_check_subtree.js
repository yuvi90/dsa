/*
    Finding out if a given binary tree is a subtree of another binary tree.

    eg.

    Tree 1:

          1
        /   \
       2     3
     /  \   / \
    4    5 6   7

    Tree 2:

        4
      /   \
     5     6

    Return Boolean

*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

root1 = new Node(1);
root1.left = new Node(2)
root1.right = new Node(3)
root1.left.left = new Node(4)
root1.left.right = new Node(5)
root1.right.left = new Node(6)
root1.right.right = new Node(7)

root2 = new Node(2);
root2.left = new Node(4)
root2.right = new Node(5)

// root2 = new Node(4);
// root2.left = new Node(5)
// root2.right = new Node(6)

function inOrder(root, result) {
    if (root == null)
        return;

    inOrder(root.left, result);
    result.push(root.data);
    inOrder(root.right, result);
}

function preOrder(root, result) {
    if (root == null)
        return;

    result.push(root.data);
    preOrder(root.left, result);
    preOrder(root.right, result);
}

function listToString(list) {
    return list.toString().replace(/,/g, '');
}

function isSubtree(tree, subtree) {
    if (subtree == null)
        return true;

    if (tree == null)
        return false;

    let first = [];
    let second = [];
    inOrder(tree, first);
    inOrder(subtree, second);
    if (!listToString(first).includes(listToString(second)))
        return false;

    first = [];
    second = [];
    preOrder(tree, first);
    preOrder(subtree, second);
    if (!listToString(first).includes(listToString(second)))
        return false;

    return true;
}

console.log(isSubtree(root1, root2));