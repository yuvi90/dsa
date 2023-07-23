// Implemented using JavaScript Dynamic Arrays
class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items == 0;
  }

  size() {
    return this.items.length;
  }

  // Adds element - O(1)
  enqueue(element) {
    this.items.push(element);
  }

  // Removes element - O(n)
  dequeue() {
    return this.items.shift();
  }

  // Get current element for removal - O(1)
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  print() {
    console.log(this.items);
  }
}

// Circular Queue - All Operations are O(1)
class CircularQueue {
  // Size is used to make this fixed size array
  constructor(n) {
    this.items = [];
    this.front = -1;
    this.rear = -1;
    this.size = n;
  }

  isEmpty() {
    return this.rear == -1 && this.front == -1;
  }

  isFull() {
    return this.rear + 1 == this.front;
  }

  // Adds element - O(1)
  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is Full");
      return;
    }
    if ((this.rear + 1) % this.size == 0 && this.front == 0) {
      console.log("Queue Full");
      return;
    } else {
      if (this.front == -1) {
        this.front++;
      }
      this.rear = (this.rear + 1) % this.size;
      this.items[this.rear] = element;
    }
  }

  // Removes element - O(1)
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    let data = this.items[this.front];
    // For single element
    if (this.rear == this.front) {
      this.rear = this.front = -1;
    } else {
      this.items[this.front] = undefined;
      this.front = (this.front + 1) % this.size;
    }
    return data;
  }

  // Get current element for removal - O(1)
  peek() {
    if (this.front == -1) {
      return;
    }
    return this.items[this.front];
  }

  print() {
    console.log(this.items);
  }
}

// Implemented using Stack

class QueueStack {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  enqueue(value) {
    this.inputStack.push(value);
  }

  dequeue() {
    if (this.outputStack.length === 0) {
      // If outputStack is empty, transfer elements from inputStack
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }

    return this.outputStack.pop();
  }

  isEmpty() {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }

  size() {
    return this.inputStack.length + this.outputStack.length;
  }
}

// Implemented using Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueLL {
  constructor() {
    this.head = null; //Front
    this.tail = null; //Rear
    this.size = 0;
  }

  isEmpty() {
    return this.head == null;
  }

  // Adds element - O(1)
  enqueue(element) {
    let newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
      this.size++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  // Removes element - O(1)
  dequeue() {
    if (this.isEmpty()) {
      return;
    }
    let data = this.head.data;
    this.head = this.head.next;
    this.size--;
    return data;
  }

  // Get current element for removal - O(1)
  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.head.data;
  }

  print() {
    let currentNode = this.head;
    let items = [];
    while (currentNode != null) {
      items.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(items);
  }
}

const queue = new CircularQueue(4);
