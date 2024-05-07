class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    poll() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            this.hasParent(index) &&
            this.parent(index) > this.heap[index]
        ) {
            const parentIndex = this.getParentIndex(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (
                this.hasRightChild(index) &&
                this.rightChild(index) < this.leftChild(index)
            ) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

const minHeap = new MinHeap();
minHeap.add(10);
minHeap.add(4);
minHeap.add(7);
minHeap.add(1);
minHeap.add(6);

console.log(minHeap.peek()); // Output: 1

console.log(minHeap.poll()); // Output: 1
console.log(minHeap.poll()); // Output: 4

minHeap.add(2);

console.log(minHeap.poll()); // Output: 2
console.log(minHeap.poll()); // Output: 6
console.log(minHeap.poll()); // Output: 7
console.log(minHeap.poll()); // Output: 10

console.log(minHeap.peek()); // Output: null