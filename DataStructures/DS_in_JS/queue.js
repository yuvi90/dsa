/*
    Queues is based on FIFO Principle.
    Stores elements from Rear and removes from Front.
    add() to add to the top. Complexity : O(1)
    remove() to remove from the top. Complexity : O(1)
    peek() to see current top element. Complexity : O(1)

    Can be implemented using Fixed Array, Dynamic Array, LinkedList, Stacks
    Fixed/Dynamic Arrays - Queue Implementation remove() has complexity of O(n) because of sliding elements but other operations are O(1). If circular queue is implemented then All Operations are O(1).

    Linked List - All Operations are O(1).
    
    There is also double ended queue most commonly known as Array Dequeue. In this queue we can add or remove elements from both sides.

    ================>> BEST IMPLEMENTATION
    
    The best implementation of queues depends on the specific requirements and constraints of your use case. However, two common and efficient implementations of queues are:

    1. Array-Based Implementation:
    - In this approach, the queue is implemented using an underlying array where elements are enqueued at the rear and dequeued from the front of the array.
    - Advantages:
        - Simple and straightforward implementation.
        - Random access to elements, allowing for constant time access and updates.
    - Drawbacks:
        - Limited capacity: The size of the queue may be constrained by the size of the underlying array, and resizing the array can be an expensive operation.
        - Dynamic resizing: If the queue needs to grow beyond the initial capacity, the array may need to be resized, which can result in a time-consuming operation.
        - Dequeuing from the front requires shifting all elements in the array, resulting in linear time complexity.

    2. Linked List-Based Implementation:
    - In this approach, the queue is implemented using a singly linked list, where each element in the queue is represented as a node in the linked list. The head of the linked list represents the front of the queue, and the tail represents the rear of the queue.
    - Advantages:
        - Dynamic size: The queue can grow or shrink dynamically without the need for resizing operations.
        - Efficient enqueue and dequeue operations: Adding elements at the tail and removing elements from the head of the linked list can be done in constant time.
    - Drawbacks:
        - Extra memory overhead: Each element in the queue requires additional memory to store the node object and maintain the links between nodes.
        - No random access: Accessing elements in the middle of the queue would require traversing the linked list, resulting in linear time complexity.

    The choice between the array-based and linked list-based implementation depends on factors such as the expected size of the queue, the need for dynamic resizing, and the frequency of enqueue and dequeue operations. If the size of the queue is known and fixed, or if random access to elements is important, the array-based implementation may be a suitable choice. On the other hand, if the size of the queue may change dynamically or efficient enqueue and dequeue operations are crucial, the linked list-based implementation could be more appropriate.

    ======================== STACKS IMPLEMENTATION
    
    Implementing queues using stacks has its own set of pros and cons. Let's explore them:

    Pros:

    1. Simplicity: Implementing a queue using stacks is relatively simple and straightforward, especially if you already have a stack implementation available.

    2. Space Efficiency: Depending on the implementation, using stacks to implement a queue can potentially be more space-efficient compared to other implementations that use arrays or linked lists.

    3. Flexibility: The stack-based implementation allows for flexibility in terms of choosing the underlying stack implementation. You can use an array-based stack or a linked list-based stack depending on your specific needs and constraints.

    Cons:

    1. Time Complexity: While enqueue and dequeue operations can be implemented using stacks, the time complexity for enqueue and dequeue operations would be suboptimal compared to traditional queue implementations. Specifically, dequeueing an element would require transferring all elements from one stack to another, resulting in a time complexity of O(n) for the dequeue operation.

    2. Space Overhead: Implementing a queue using stacks may require additional space to maintain the two stacks. This can result in increased space overhead compared to a direct implementation of a queue using an array or linked list.

    3. Potential Stack Overflow: If the size of the queue exceeds the capacity of the underlying stack, it can lead to a stack overflow error. This limitation arises because stacks have a fixed capacity.

    Overall, implementing queues using stacks can be a viable option in certain scenarios where simplicity and space efficiency are priorities, and if the expected number of elements in the queue is not large enough to cause performance issues. However, it's important to consider the trade-offs and limitations of this approach, particularly in terms of time complexity and potential stack overflow issues.
*/


// Implemented using JavaScript Dynamic Arrays
class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() { return this.items == 0 }

    size() { return this.items.length }

    // Adds element - O(1)
    enqueue(element) {
        this.items.push(element);
    }

    // Removes element - O(n)
    dequeue() {
        return this.items.shift();
    }

    // Get current element for removal - O(1)
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    print() {
        console.log(this.items)
    }
}

// Circular Queue - All Operations are O(1)
class CircularQueue {
    // Size is used to make this fixed size array
    constructor(n) {
        this.items = [];
        this.front = -1;
        this.rear = -1;
        this.size = n;
    }

    isEmpty() { return (this.rear == -1 && this.front == -1) }

    isFull() { return this.rear + 1 == this.front }

    // Adds element - O(1)
    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is Full");
            return;
        }
        if ((this.rear + 1) % this.size == 0 && this.front == 0) {
            console.log("Queue Full")
            return;
        } else {
            if (this.front == -1) {
                this.front++;
            }
            this.rear = (this.rear + 1) % this.size;
            this.items[this.rear] = element;
        }
    }

    // Removes element - O(1)
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }
        let data = this.items[this.front];
        // For single element
        if (this.rear == this.front) {
            this.rear = this.front = -1;
        } else {
            this.items[this.front] = undefined;
            this.front = (this.front + 1) % this.size;
        }
        return data;
    }

    // Get current element for removal - O(1)
    peek() {
        if (this.front == -1) {
            return;
        }
        return this.items[this.front];
    }

    print() {
        console.log(this.items)
    }
}

// Implemented using Stack

class QueueStack {
    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    enqueue(value) {
        this.inputStack.push(value);
    }

    dequeue() {
        if (this.outputStack.length === 0) {
            // If outputStack is empty, transfer elements from inputStack
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop());
            }
        }

        return this.outputStack.pop();
    }

    isEmpty() {
        return this.inputStack.length === 0 && this.outputStack.length === 0;
    }

    size() {
        return this.inputStack.length + this.outputStack.length;
    }
}



// Implemented using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueLL {
    constructor() {
        this.head = null; //Front
        this.tail = null; //Rear
        this.size = 0;
    }

    isEmpty() { return this.head == null }

    // Adds element - O(1)
    enqueue(element) {
        let newNode = new Node(element);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
            this.size++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
        }
    }

    // Removes element - O(1)
    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        let data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    // Get current element for removal - O(1)
    peek() {
        if (this.isEmpty()) {
            return;
        }
        return this.head.data;
    }

    print() {
        let currentNode = this.head;
        let items = [];
        while (currentNode != null) {
            items.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(items);
    }
}

const queue = new CircularQueue(4);

