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
    }
}