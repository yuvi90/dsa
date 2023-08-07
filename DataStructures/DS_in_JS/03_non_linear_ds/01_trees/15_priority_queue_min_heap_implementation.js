class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(element, priority) {
    const item = { element, priority };
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const minItem = this.heap[0];
    const lastItem = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = lastItem;
      this.bubbleDown(0);
    }
    return minItem.element;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.heap[0].element;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp(index) {
    const item = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (item.priority >= parent.priority) {
        break;
      }
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = item;
  }

  bubbleDown(index) {
    const length = this.heap.length;
    const item = this.heap[index];
    while (true) {
      let childIndex = 2 * index + 1;
      if (childIndex >= length) {
        break;
      }
      if (
        childIndex + 1 < length &&
        this.heap[childIndex + 1].priority < this.heap[childIndex].priority
      ) {
        childIndex++;
      }
      if (this.heap[childIndex].priority >= item.priority) {
        break;
      }
      this.heap[index] = this.heap[childIndex];
      index = childIndex;
    }
    this.heap[index] = item;
  }
}

// Example usage:

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 5);
priorityQueue.enqueue("Task 2", 2);
priorityQueue.enqueue("Task 3", 7);
priorityQueue.enqueue("Task 4", 3);

console.log(priorityQueue.dequeue()); // Output: "Task 2"
console.log(priorityQueue.dequeue()); // Output: "Task 4"
console.log(priorityQueue.peek()); // Output: "Task 1"
console.log(priorityQueue.isEmpty()); // Output: false
console.log(priorityQueue.size()); // Output: 2
