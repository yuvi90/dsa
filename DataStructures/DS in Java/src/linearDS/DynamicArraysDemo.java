package linearDS;

public class DynamicArraysDemo {
    public static void main() {
        DynamicArrays numbers = new DynamicArrays(3);
        System.out.println("Start");
        numbers.insert(10);
        numbers.insert(20);
        numbers.insert(30);
        numbers.insert(40);
        numbers.insert(50);
        numbers.print();

        numbers.removeAt(0);
        numbers.print();

        System.out.println(numbers.indexOf(40));
        System.out.println("End");
    }
}
