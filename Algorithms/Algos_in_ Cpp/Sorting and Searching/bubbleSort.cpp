#include <iostream>
using namespace std;

void printArray (int *A, int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << A[i] << " ";
    }
}

void bubbleSort(int arr[], int size)
// Time Complexity : O(n^2)
// Space Complexity : O(1)
{
    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < (size - i); j++)
        {
            if (arr[j] > arr[j+1])
            {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } 
        }
    }
}

int main()
{
    int arr[] = {7,8,3,3,1,2,14,6,3,15};
    int size = sizeof(arr)/sizeof(arr[0]);

    cout << "\nBefore Bubble Sort\n";
    printArray(arr, size);
    bubbleSort(arr, size);
    cout << "\nAfter Bubble Sort\n";
    printArray(arr, size);

    return 0;
}