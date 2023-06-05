/* 
    A linked list is a linear data structure used to store a collection of elements, called nodes. Each node in a linked list contains two parts: the data itself and a reference (or link) to the next node in the list. The reference points to the memory address or location of the next node.

    Unlike arrays, linked lists do not require contiguous memory allocation. Each node can be scattered throughout the memory, and the references connect them together to form the list. This dynamic memory allocation makes linked lists flexible for insertion, deletion, and rearrangement of elements.

    Here are some key characteristics of linked lists:

    1. Nodes: Each node in a linked list contains two components: the data it stores and a reference (pointer) to the next node in the list.

    2. Head: The first node of the linked list is called the head. It serves as the starting point and provides access to the entire list.

    3. Tail: The last node of the linked list is called the tail. It points to null or contains a special reference indicating the end of the list.

    4. Singly Linked List: In a singly linked list, each node contains a reference to the next node in the list.

    5. Doubly Linked List: In a doubly linked list, each node contains references to both the next and previous nodes in the list. This allows for easier traversal in both directions but requires more memory.

    6. Circular Linked List: In a circular linked list, the last node's reference points back to the head, forming a circular structure. This enables seamless traversal from the tail to the head.

    ========>> Linked lists have several advantages and disadvantages:

    Advantages:
    - Dynamic Size: Linked lists can grow or shrink dynamically as elements are inserted or removed, unlike arrays that have fixed sizes.
    - Efficient Insertion and Deletion: Adding or removing elements in a linked list requires adjusting the references, making these operations more efficient than in arrays.
    - Flexibility: Linked lists can handle varying data sizes and support efficient rearrangement of elements.

    Disadvantages:
    - Random Access: Unlike arrays, accessing elements in a linked list is not as efficient, as it requires traversing the list from the head to the desired position.
    - Extra Memory Overhead: Linked lists require additional memory for storing the references, which can increase memory overhead compared to arrays.
    - Sequential Access: Sequentially traversing a linked list is efficient, but random access or searching for a specific element can be slower than in arrays.

    Linked lists are commonly used when dynamic size, efficient insertion/deletion, or flexible data structure manipulation is required. They are often utilized in various applications, such as implementing stacks, queues, hash tables, and as the foundation for more complex data structures like graphs and trees.

    =======>> TIME COMPLEXITY

    Singly Linked List:
    Lookup by Value or Index = O(n) **No Index in LL you need to traverse list.
    Insertion - At End, Beginning = O(1), At Index/Middle = O(n)
    Deletion - At Beginning = O(1), At Index/Middle, End = O(n)

    The time complexity of various operations in a linked list depends on the specific implementation and the type of linked list (singly linked list, doubly linked list, etc.). Here are the common operations and their time complexities in a singly linked list:

    1. Accessing an element by index: O(n)
    - To access an element at a specific index in a singly linked list, you would need to traverse the list from the head node to the desired index. In the worst case, where the index is at the end of the list or the element does not exist, you would need to iterate through all the elements, resulting in linear time complexity.

    2. Insertion/Deletion at the beginning of the list: O(1)
    - Inserting or deleting a node at the beginning of a singly linked list can be done in constant time. It involves updating the head pointer to point to the new node or the next node.

    3. Insertion/Deletion at the end of the list: O(n)
    - Inserting or deleting a node at the end of a singly linked list requires traversing the list until reaching the last node. In the worst case, where the last node needs to be updated, you would need to iterate through all the elements, resulting in linear time complexity.

    4. Insertion/Deletion at a specific position: O(n)
    - Inserting or deleting a node at a specific position in a singly linked list requires traversing the list to reach the desired position. In the worst case, where the position is at the end of the list or the element does not exist, you would need to iterate through all the elements, resulting in linear time complexity.

    5. Searching for an element: O(n)
    - Searching for a specific element in a singly linked list requires traversing the list from the head node to the end or until finding the desired element. In the worst case, where the element is not present or is located at the end of the list, you would need to iterate through all the elements, resulting in linear time complexity.

    6. Iterating over the list: O(n)
    - To iterate over all the elements in a singly linked list, you would need to traverse the list from the head node to the end, visiting each node once. This results in linear time complexity proportional to the number of elements in the list.

    It's important to note that these time complexities are specific to singly linked lists. Doubly linked lists or other variations may have slightly different time complexities due to the presence of additional pointers or operations.
*/

class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        if (this.head && this.tail) {
            return false;
        }
        return true;
    }

    prepend(data) {
        if (this.isEmpty()) {
            this.tail = this.head = new Node(data);
            this.size++;
        } else {
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
            this.size++
        }
    }

    append(data) {
        if (this.isEmpty()) {
            this.tail = this.head = new Node(data);
            this.size++;
        } else {
            let newNode = new Node(data);
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
        }
    }

    addAt(data, index) {
        if (index > this.size) {
            return undefined;
        }
        if (this.isEmpty()) {
            this.tail = this.head = new Node(data);
            this.size++;
        } else {
            let count = 0;
            let newNode = new Node(data);
            let currentNode = this.head;
            while (currentNode != null) {
                if (index == count) {
                    currentNode.previous.next = newNode;
                    newNode.previous = currentNode.previous;
                    newNode.next = currentNode;
                    this.size++;
                    return;
                }
                currentNode = currentNode.next;
                count++;
            }
        }
    }

    deleteFirst() {
        if (this.isEmpty()) {
            return undefined;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
            this.size--;
        }
    }

    deleteLast() {
        if (this.isEmpty()) {
            return undefined;
        } else {
            this.tail.previous.next = null;
            this.tail = this.tail.previous;
            this.size--;
        }
    }

    deleteAt(index) {
        if (index > this.size) {
            return undefined;
        }
        if (this.isEmpty()) {
            return undefined;
        } else {
            let count = 0;
            let currentNode = this.head;
            while (currentNode != null) {
                if (index == count) {
                    currentNode.previous.next = currentNode.next;
                    currentNode.next.previous = currentNode.previous;
                    this.size--;
                    return currentNode.value;
                }
                currentNode = currentNode.next;
                count++;
            }
        }
    }

    getAt(index) {
        if (index > this.size) {
            return undefined;
        }
        let count = 0;
        let currentNode = this.head;
        while (currentNode != null) {
            if (index == count) {
                return currentNode.value;
            }
            count++;
            currentNode = currentNode.next;
        }
    }

    indexOf(data) {
        if (this.isEmpty()) {
            return undefined;
        } else {
            let currentNode = this.head;
            let count = 0;
            while (currentNode != null) {
                if (currentNode.value == data) {
                    return count;
                }
                currentNode = currentNode.next;
                count++;
            }
        }
        return -1;
    }

    contains(data) {
        if (this.isEmpty()) {
            return undefined;
        } else {
            let currentNode = this.head;
            while (currentNode != null) {
                if (currentNode.value == data) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    print() {
        if (this.isEmpty()) {
            return -1;
        }
        let currentNode = this.head;
        let items = [];
        while (currentNode != null) {
            items.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(items);
    }

    printReverse() {
        if (this.isEmpty()) {
            return -1;
        }
        let currentNode = this.tail;
        let items = [];
        while (currentNode != null) {
            items.push(currentNode.value);
            currentNode = currentNode.previous;
        }
        console.log(items);
    }

    clearList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);