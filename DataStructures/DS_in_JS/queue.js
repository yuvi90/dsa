/*
    Queues is based on FIFO Principle.
    Stores elements from Rear and removes from Front.
    add() to add to the top. Complexity : O(1)
    remove() to remove from the top. Complexity : O(1)
    peek() to see current top element. Complexity : O(1)

    Can be implemented using Fixed Array, Dynamic Array, LinkedList
    Fixed/Dynamic Arrays - Queue Implementation remove() has complexity of O(n) because of sliding elements but other operations are O(1). If circular queue is implemented then All Operations are O(1).

    Linked List - All Operations are O(1).
    
    There is also double ended queue most commonly known as Array Dequeue. In this queue we can add or remove elements from both sides.
*/

class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() { return this.items == 0 ? true : false }

    size() { return this.items.length }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty)
            return null;
        else
            return this.items[0];
    }

    print() {
        console.log(this.items)
    }
}

const queue = new Queue();