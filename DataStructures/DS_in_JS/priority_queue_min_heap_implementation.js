/*
    The time complexity of operations in a priority queue implemented using a binary heap is as follows:

    1. Enqueue (Insertion): O(log n)
    - Adding an element to the priority queue requires inserting it into the binary heap and maintaining the heap property.
    - The time complexity is O(log n) because the element may need to bubble up to its correct position in the heap, which takes logarithmic time based on the number of elements in the heap.

    2. Dequeue (Removal): O(log n)
    - Removing the element with the highest priority (the root) requires swapping it with the last element in the heap, popping the last element, and then restoring the heap property by bubbling down the new root.
    - The time complexity is O(log n) because the element may need to bubble down to its correct position in the heap, which takes logarithmic time based on the number of elements in the heap.

    3. Peek (Retrieval): O(1)
    - Retrieving the element with the highest priority (the root) can be done in constant time as it is always located at the top of the heap.

    4. IsEmpty: O(1)
    - Checking if the priority queue is empty can be done in constant time by checking the length of the heap array.

    5. Size: O(1)
    - Returning the number of elements in the priority queue can be done in constant time by accessing the length of the heap array.

    The time complexity of the enqueue and dequeue operations is logarithmic (O(log n)), where "n" is the number of elements in the priority queue. This efficiency is achieved due to the binary heap's structural properties, which allow for efficient heap property maintenance during insertion and removal. The peek, isEmpty, and size operations have constant time complexity (O(1)) as they only involve accessing or checking the length of the heap array.
*/

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
            if (childIndex + 1 < length && this.heap[childIndex + 1].priority < this.heap[childIndex].priority) {
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
