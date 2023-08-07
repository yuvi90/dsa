class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    enqueue(item, priority) {
        this.heap.push({ item, priority });
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const maxItem = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return maxItem;
    }

    bubbleUp(index) {
        const item = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor(index - 1 / 2);
            const parentValue = this.heap[parentIndex];
            if (parentValue.priority >= item.priority) {
                break;
            }
            this.heap[index] = parentValue;
            index = parentIndex;
        }
        this.heap[index] = item;
    }

    bubbleDown(index) {
        const item = this.heap[index];
        const length = this.heap.length;
        while (true) {
            const childIndex = 2 * index + 1;
            if (childIndex >= length) {
                break;
            }
            if (childIndex + 1 < length && this.heap[childIndex + 1].priority > this.heap[childIndex].priority) {
                childIndex++;
            }
            if (this.heap[childIndex].priority <= this.heap[index].priority) {
                break;
            }
            this.heap[index] = this.heap[childIndex];
            index = childIndex;
        }
        this.heap[index] = item;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.heap[0].item;
    }
}

const maxPriorityQueue = new PriorityQueue();

maxPriorityQueue.enqueue("Task 1", 30);
maxPriorityQueue.enqueue("Task 2", 40);
maxPriorityQueue.enqueue("Task 3", 20);
maxPriorityQueue.enqueue("Task 4", 50);

console.log(maxPriorityQueue.dequeue());
console.log(maxPriorityQueue.dequeue());
console.log(maxPriorityQueue.peek());
console.log(maxPriorityQueue.isEmpty());
console.log(maxPriorityQueue.size());