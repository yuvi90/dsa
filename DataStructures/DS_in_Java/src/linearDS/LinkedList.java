package linearDS;

public class LinkedList {
    class Node {
        private int value;
        private Node next;

        public Node (int data) {
            this.value = data;
        }
    }

    private Node first;
    private Node last;
    private int size;

    // check if list is empty
    boolean isEmpty () {
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

    // deleteFirst
    // deleteLast
    // contains
    // indexOf

    // toArray
    public int[] toArray() {
        int [] array = new int[this.size];
        Node current = first;
        int index = 0;
        while (current != null) 
        {
            array[index] = current.value;
            index++;
            current = current.next;
        }
        return array;
    }

    // toPrint
    public void toPrint() {
        Node current = first;
        while (current != null) 
        {
            System.out.print(current.value + " ");
            current = current.next;
        }
    }
}
