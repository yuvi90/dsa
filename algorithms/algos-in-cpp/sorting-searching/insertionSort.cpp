#include <iostream>
using namespace std;

void printArray(int *A, int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << A[i] << " ";
    }
}

void insertionSort(int arr[], int size)
// Time Complexity : O(n^2)
// Space Complexity : O(1)
{
    // Loop for -> unsorted part of array
    for (int i = 1; i < size; i++)
    {
        int current = arr[i];

        // Loop for -> sorted part of array
        int j = i - 1;
        while (j >= 0 && current < arr[j])
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}

int main()
{
    int arr[] = {7, 8, 3, 1, 2};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "\nBefore Insertion Sort\n";
    printArray(arr, size);
    insertionSort(arr, size);
    cout << "\nAfter Insertion Sort\n";
    printArray(arr, size);

    return 0;
}