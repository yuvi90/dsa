class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  // O(1)
  isEmpty() {
    return this.size === 0;
  }

  // O(1)
  push(value) {
    this.stack.push(value);
    this.size++;
  }

  // O(1)
  pop() {
    if (!this.isEmpty()) {
      let deleteItem = this.stack.pop();
      this.size--;
      return deleteItem;
    }
    return null;
  }

  //O(1)
  peek() {
    if (!this.isEmpty()) {
      return stack[this.size - 1];
    }
    return null;
  }

  // O(1)
  clear() {
    this.stack = [];
    this.size = 0;
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
