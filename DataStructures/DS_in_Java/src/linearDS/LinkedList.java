package linearDS;

import java.util.NoSuchElementException;

public class LinkedList {
    class Node {
        private int value;
        private Node next;

        public Node(int data) {
            this.value = data;
        }
    }

    private Node first;
    private Node last;
    private int size;

    // check if list is empty
    boolean isEmpty() {
        if (this.first == null) {
            return true;
        }
        return false;
    }

    // addFirst
    public void addFirst(int data) {
        Node newNode = new Node(data);
        if (isEmpty()) {
            newNode.next = null;
            this.first = newNode;
            this.last = newNode;
            size++;
        } else {
            newNode.next = this.first;
            first = newNode;
            size++;
        }
    }

    // addLast
    public void addLast(int data) {
        Node newNode = new Node(data);
        if (isEmpty()) {
            newNode.next = null;
            this.first = newNode;
            this.last = newNode;
            size++;
        } else {
            last.next = newNode;
            newNode.next = null;
            last = newNode;
            size++;
        }
    }

    // deleteFirst --> [ 10 -> 20 -> 30 -> null ]
    public void deleteFirst() {
        if (this.isEmpty()) {
            throw new NoSuchElementException();
        }
        if (this.size == 1) {
            this.first = null;
            this.last = null;
            this.size--;
        } else {
            this.first = first.next;
            this.size--;
        }
    }

    // deleteLast
    public void deleteLast() {
        if (this.isEmpty()) {
            throw new NoSuchElementException();
        }
        if (this.size == 1) {
            this.first = null;
            this.last = null;
            this.size--;
            return;
        }
        Node current = this.first;
        while (current != null) {
            if (current.next == last) {
                break;
            }
            current = current.next;
        }
        this.last = current;
        this.last.next = null;
        this.size--;
    }

    // contains
    public boolean contains(int data) {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }
        Node current = this.first;
        while (current != null) {
            if (current.value == data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // indexOf
    public int indexOf(int data) {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }
        Node current = this.first;
        int index = 0;
        while (current != null) {
            if (current.value == data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // toArray
    public int[] toArray() {
        int[] array = new int[this.size];
        Node current = first;
        int index = 0;
        while (current != null) {
            array[index] = current.value;
            index++;
            current = current.next;
        }
        return array;
    }

    // toPrint
    public void toPrint() {
        Node current = first;
        while (current != null) {
            System.out.print(current.value + " ");
            current = current.next;
        }
        System.out.println();
    }

    // toReverse [ 10 (previous) -> 20 (current) -> 30 (next) ] <--> [ 30 -> 20 ->
    // 10 ]
    public void toReverse() {
        if (isEmpty()) {
            return;
        }
        Node previousNode = this.first;
        Node current = this.first.next;
        while (current != null) {
            Node next = current.next;
            current.next = previousNode;
            // Shifting Node for next loop
            previousNode = current;
            current = next;
        }
        last = first;
        last.next = null;
        first = previousNode;
    }

    // Find kth node from the end of a LinkedList in one pass.
    // [10 -> 20 -> 30 -> 40 -> 50]
    // * *
    // k = 1 (50)
    // k = 2 (40)
    // k = 3 (30)
    // k = 4 (20)
    // k = 5 (10)

    public int getKthFromTheEnd(int k) {
        if (isEmpty())
            throw new IllegalStateException();

        Node a = this.first;
        Node b = this.first;
        for (int i = 0; i < k - 1; i++) {
            b = b.next;
            if (b == null)
                throw new IllegalArgumentException();
        }
        while (b.next != last) {
            a = a.next;
            b = b.next;
        }
        return a.value;
    }

    // Find Middle in one pass. even has two nodes, odd has one node.
    // [10 -> 20 -> 30 -> 40 -> 50]
    // * *

    public void printMiddle() {
        if (isEmpty())
            throw new IllegalStateException();
        Node a = this.first;
        Node b = this.first;
        while (b != this.last && b.next != this.last) {
            a = a.next;
            b = b.next.next;
        }
        if (b == this.last)
            System.out.println(a.value);
        else
            System.out.println(a.value + " " + a.next.value);
    }
}
