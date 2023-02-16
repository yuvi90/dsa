package linearDS;

// Dynamic Arrays Class
public class DynamicArrays {
    // --------------Properties
    
    private int[] array;
    private int usedCount;

    // ---------------Methods

    // Constructor
    public DynamicArrays(int size) {
        this.array = new int[size];
    }

    // Insertion
    public void insert(int item) {
        // if the array is full, resize it
        if (this.array.length == this.usedCount) {
            // create a new array (twice the size)
            int[] newArray = new int[this.usedCount * 2];
            // copy all the existing item
            for (int i = 0; i < this.usedCount; i++) {
                newArray[i] = this.array[i];
            }
            // set "items" to this new array
            this.array = newArray;
        }
        // Add the new item at end
        this.array[this.usedCount] = item;
        this.usedCount++;
    }

    // Removing
    public void removeAt(int index) {
        // validate Index
        if (index < 0 || index >= this.usedCount) {
            throw new IllegalArgumentException();
        }
        // shifting Array
        for (int i = index; i < this.usedCount; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.usedCount--;
    }

    // Searching
    public int indexOf(int item) {
        for (int i = 0; i < this.usedCount; i++) {
            if (this.array[i] == item) {
                return i;
            }
        }
        return -1;
    }

    // Printing
    public void print() {
        for (int i = 0; i < this.usedCount; i++) {
            System.out.println(this.array[i]);
        }
    }
}
