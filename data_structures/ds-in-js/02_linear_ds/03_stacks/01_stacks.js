// TODO: Question --> push element at the end of stack --> reverse stack elements.

// Implemented Stack Using Fixed Arrays
// (JavaScript arrays is not fixed, it is only for logic)
class StackFA {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  isEmpty() {
    if (this.count == 0) {
      return true;
    }
    return false;
  }

  push(data) {
    this.items[this.count] = data;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Empty Stack");
      return;
    }
    let deleteItem = this.items.pop();
    this.count--;
    return deleteItem;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Empty Stack");
      return;
    }
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = [];
    this.count = 0;
  }

  print() {
    console.log(this.items);
  }
}

// Implemented Stack Using Dynamic Arrays
class StackDA {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    if (this.items.length == 0) {
      return true;
    }
    return false;
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items);
  }
}

// Implemented Stack Using Linked List
class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class StackLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head == null;
  }

  push(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.size++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    let top = this.head.value;
    this.head = this.head.next;
    this.size--;
    return top;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.head.value;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  print() {
    if (this.isEmpty()) {
      return;
    }
    let currentNode = this.head;
    let items = [];
    while (currentNode != null) {
      items.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(items);
  }
}

const stack = new StackDA();

stack.push(10);
stack.push(20);
stack.push(30);
