class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // childIndex / 2 and take lowerBound for Parent Index. -1 from childIndex because of 0 index array. 
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    // 2k left childIndex. +1 because of 0 indexed array.
    getLeftChildIndex(rootIndex) {
        return 2 * rootIndex + 1;
    }
    // 2k+1 right childIndex. +1 because of 0 indexed array.
    getRightChildIndex(rootIndex) {
        return 2 * rootIndex + 2;
    }

    // Check if parent, right, left node exits
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    // Get value of parent, left, right node
    getParentValue(index) {
        return this.heap[this.getParentIndex(index)];
    }
    getLeftChildValue(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    getRightChildValue(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    // Swapping values
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Finds which is the max value
    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    // Insertion
    add(item) {
        if (!this.heap.length) {
            this.heap.push(item);
        } else {
            this.heap.push(item);
            let index = this.heap.length - 1;
            while (this.getParentValue(index) < this.heap[index]) {
                const parentIndex = this.getParentIndex(index);
                this.swap(parentIndex, index);
                index = parentIndex;
            }
        }
    }

    // Deletion
    poll() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const item = this.heap[0];
        this.heap[0] = this.heap.pop();

        let index = 0;
        while (this.hasLeftChild(index)) {
            let greaterChildIndex = this.getLeftChildIndex(index);
            if (
                this.hasRightChild(index) &&
                this.getRightChildValue(index) > this.getLeftChildValue(index)
            ) {
                greaterChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] > this.heap[greaterChildIndex]) {
                break;
            } else {
                this.swap(index, greaterChildIndex);
            }
            index = greaterChildIndex;
        }

        return item;
    }
}

/*
    eg.
            100
          /     \
        19       36
       /  \     /  
      17   3   25
*/

const maxHeap = new MaxHeap();

maxHeap.add(19);
maxHeap.add(36);
maxHeap.add(17);
maxHeap.add(25);
maxHeap.add(3);
maxHeap.add(100);

console.log(maxHeap.heap)

maxHeap.poll();
console.log(maxHeap.heap);
maxHeap.poll();
console.log(maxHeap.heap);