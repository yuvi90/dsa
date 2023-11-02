class Queue {
  constructor(n) {
    this.items = new Array(n);
    this.size = n;
    this.front = -1;
    this.rear = -1;
    this.length = 0;
  }

  // O(1)
  isEmpty() {
    return this.front === -1 && this.rear === -1;
  }

  // O(1)
  isFull() {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.rear + 1 === this.front
    );
  }

  // O(1)
  add(value) {
    if (this.isFull()) {
      console.log("Queue is Full");
      return;
    }
    if (this.isEmpty()) {
      this.front++;
      this.rear++;
      this.items[this.rear] = value;
    } else {
      this.rear = ++this.rear % this.size;
      this.items[this.rear] = value;
    }
    this.length++;
  }

  // O(1)
  remove() {
    if (this.isEmpty()) return;
    const deletedValue = this.items[this.front];
    this.items[this.front] = undefined;
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = ++this.front % this.size;
    }
    this.length--;
    return deletedValue;
  }

  // O(1)
  peek() {
    if (!this.isEmpty()) return this.items[this.front];
  }

  // O(1)
  clear() {
    this.items = new Array(this.size);
    this.front = -1;
    this.rear = -1;
    this.length = 0;
  }

  // O(1)
  print() {
    console.log(this.items);
  }
}

const queue = new Queue(4);
queue.add(10);
queue.add(20);
queue.add(30);
queue.print();
