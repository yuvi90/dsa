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