class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    isEmpty() {
        if (this.count == 0) {
            return true;
        }
        return false;
    }

    push(data) {
        this.items[this.count] = data;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Empty Stack")
            return -1;
        }
        let deleteItem = this.items.pop();
        this.count--;
        return deleteItem;
    }

    peek() {
        return this.items[this.count - 1];
    }

    size() {
        return this.count;
    }

    clear() {
        this.items = [];
        this.count = 0;
    }

    print() {
        console.log(this.items);
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
stack.print();
console.log(stack.isEmpty());