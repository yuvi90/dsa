/**
 * Doubly Linked List Implementation
 *
 */

class Node {
  constructor(data) {
    this.value = data;
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

  isEmpty() {
    if (this.head && this.tail) {
      return false;
    }
    return true;
  }

  prepend(data) {
    if (this.isEmpty()) {
      this.tail = this.head = new Node(data);
      this.size++;
    } else {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
      this.size++;
    }
  }

  append(data) {
    if (this.isEmpty()) {
      this.tail = this.head = new Node(data);
      this.size++;
    } else {
      let newNode = new Node(data);
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  addAt(data, index) {
    if (index > this.size) {
      return undefined;
    }
    if (this.isEmpty()) {
      this.tail = this.head = new Node(data);
      this.size++;
    } else {
      let count = 0;
      let newNode = new Node(data);
      let currentNode = this.head;
      while (currentNode != null) {
        if (index == count) {
          currentNode.previous.next = newNode;
          newNode.previous = currentNode.previous;
          newNode.next = currentNode;
          this.size++;
          return;
        }
        currentNode = currentNode.next;
        count++;
      }
    }
  }

  deleteFirst() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      this.size--;
    }
  }

  deleteLast() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      this.tail.previous.next = null;
      this.tail = this.tail.previous;
      this.size--;
    }
  }

  deleteAt(index) {
    if (index > this.size) {
      return undefined;
    }
    if (this.isEmpty()) {
      return undefined;
    } else {
      let count = 0;
      let currentNode = this.head;
      while (currentNode != null) {
        if (index == count) {
          currentNode.previous.next = currentNode.next;
          currentNode.next.previous = currentNode.previous;
          this.size--;
          return currentNode.value;
        }
        currentNode = currentNode.next;
        count++;
      }
    }
  }

  getAt(index) {
    if (index > this.size) {
      return undefined;
    }
    let count = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      if (index == count) {
        return currentNode.value;
      }
      count++;
      currentNode = currentNode.next;
    }
  }

  indexOf(data) {
    if (this.isEmpty()) {
      return undefined;
    } else {
      let currentNode = this.head;
      let count = 0;
      while (currentNode != null) {
        if (currentNode.value == data) {
          return count;
        }
        currentNode = currentNode.next;
        count++;
      }
    }
    return -1;
  }

  contains(data) {
    if (this.isEmpty()) {
      return undefined;
    } else {
      let currentNode = this.head;
      while (currentNode != null) {
        if (currentNode.value == data) {
          return true;
        }
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  print() {
    if (this.isEmpty()) {
      return -1;
    }
    let currentNode = this.head;
    let items = [];
    while (currentNode != null) {
      items.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(items);
  }

  printReverse() {
    if (this.isEmpty()) {
      return -1;
    }
    let currentNode = this.tail;
    let items = [];
    while (currentNode != null) {
      items.push(currentNode.value);
      currentNode = currentNode.previous;
    }
    console.log(items);
  }

  clearList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
