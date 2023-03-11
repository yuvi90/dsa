package linearDS;
import java.util.Arrays;

public class LinkedListDemo {
    public static void main() {
        LinkedList list = new LinkedList();
        
        list.addFirst(10);
        list.addLast(20);
        list.addLast(30);
        
        list.toPrint();
        // int[] arr = list.toArray();
        // System.out.println(Arrays.toString(arr));
        list.addFirst(5);
        list.toPrint();
        list.addFirst(1);
        list.toPrint();
        System.out.println(list.contains(10));
        
        list.addLast(40);
        list.toPrint();
        list.addLast(50);
        list.toPrint();
        System.out.println(list.indexOf(50));
        
        list.deleteFirst();
        list.toPrint();
        list.deleteFirst();
        list.toPrint();
        
        list.deleteLast();
        list.toPrint();
        list.deleteLast();
        list.toPrint();
        
        System.out.println(list.contains(5));
        System.out.println(list.indexOf(50));
        
        System.out.println();
        list.toPrint();
        // list.toReverse();
        list.addLast(40);
        list.addLast(50);

        list.toPrint();
        list.printMiddle();
    }
}