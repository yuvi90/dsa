/*
  Doubly Linked List Operations
  
  - Insertion
  - Deletion
  - Searching
  - Merging
  - Sorting
  - Updating
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // O(1)
  isEmpty() {
    return this.size === 0;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // O(n)
  addAt(value, index) {
    if (index > this.size || index < 0) {
      throw new Error("Out of Bounds !");
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    let i = 0;
    let currentNode = this.head;
    while (i < index - 1) {
      currentNode = currentNode.next;
      i++;
    }
    newNode.next = currentNode.next;
    newNode.previous = currentNode;
    if (currentNode.next) {
      currentNode.next.previous = newNode;
    } else {
      this.tail = newNode;
    }
    currentNode.next = newNode;
    this.size++;
  }

  // O(1)
  removeFirst() {
    if (!this.isEmpty()) {
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }
      this.size--;
    }
  }

  // O(1)
  removeLast() {
    if (!this.isEmpty()) {
      this.tail = this.tail.previous;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.size--;
    }
  }

  // O(n)
  removeAt(index) {
    if (index >= this.size || index < 0) {
      throw new Error("Out of Bounds !");
    }
    let currentNode = this.head;
    if (index === 0) {
      this.removeFirst();
      return;
    } else if (index === this.size - 1) {
      this.removeLast();
      return;
    }
    let i = 0;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }
    currentNode.previous.next = currentNode.next;
    currentNode.next.previous = currentNode.previous;
    this.size--;
  }

  // O(n)
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return -1;
  }

  // O(n)
  accessAt(index) {
    if (index >= this.size || index < 0) {
      throw new Error("Out of Bounds !");
    }
    let currentNode = this.head;
    let i = 0;
    while (currentNode !== null) {
      if (index === i) {
        console.log(currentNode.value);
        return currentNode.value;
      }
      currentNode = currentNode.next;
      i++;
    }
    return null;
  }

  // O(n)
  updateAt(index, value) {
    if (index >= this.size || index < 0) {
      throw new Error("Out of Bounds !");
    }
    let currentNode = this.head;
    let i = 0;
    while (currentNode !== null) {
      if (index === i) {
        currentNode.value = value;
        return true;
      }
      currentNode = currentNode.next;
      i++;
    }
    return false;
  }

  // O(n^2)
  sort() {
    let i = 0;
    let currentNode_1 = this.head;
    while (i < this.size) {
      let j = 0;
      let currentNode_2 = this.head;
      while (j < this.size) {
        if (currentNode_2.value > currentNode_1.value) {
          let temp = currentNode_1.value;
          currentNode_1.value = currentNode_2.value;
          currentNode_2.value = temp;
        }
        currentNode_2 = currentNode_2.next;
        j++;
      }
      currentNode_1 = currentNode_1.next;
      i++;
    }
  }

  // O(n)
  print() {
    let values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values);
  }
}

// Merge Function
function merge(listA, listB) {
  let mergedList = new LinkedList();
  let l1 = listA.head;
  let l2 = listB.head;
  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      mergedList.append(l1.value);
      l1 = l1.next;
    } else {
      mergedList.append(l2.value);
      l2 = l2.next;
    }
  }
  while (l1 !== null) {
    mergedList.append(l1.value);
    l1 = l1.next;
  }
  while (l2 !== null) {
    mergedList.append(l2.value);
    l2 = l2.next;
  }
  return mergedList;
}

// Examples

const a = new LinkedList();
a.append(9);
a.append(1);
a.append(-1);
a.append(2);
a.sort();

const b = new LinkedList();
b.append(6);
b.append(0);
b.append(3);
b.sort();

const c = merge(a, b);
c.print();
