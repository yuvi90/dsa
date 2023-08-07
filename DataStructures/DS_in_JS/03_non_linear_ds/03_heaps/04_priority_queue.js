class PriorityQueue {
  constructor(comparator) {
    this.queue = [];
    this.comparator = comparator;
  }

  enqueue(element) {
    this.queue.push(element);
    this.queue.sort(this.comparator);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

// Example usage:

// Custom comparator function to prioritize elements based on their values
const comparator = (a, b) => a - b;

const priorityQueue = new PriorityQueue(comparator);

priorityQueue.enqueue(5);
priorityQueue.enqueue(2);
priorityQueue.enqueue(7);
priorityQueue.enqueue(3);

console.log(priorityQueue.dequeue()); // Output: 2
console.log(priorityQueue.dequeue()); // Output: 3
console.log(priorityQueue.peek()); // Output: 5
console.log(priorityQueue.isEmpty()); // Output: false
console.log(priorityQueue.size()); // Output: 2
