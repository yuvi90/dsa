#include <iostream>
using namespace std;

void printArray (int *A, int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << A[i] << " ";
    }
}

void selectionSort(int arr[], int size)
// Time Complexity : O(n^2)
// Space Complexity : O(1)
{
    for (int i = 0; i < size; i++)
    {
        int minValueIndex = i;

        for (int j = i + 1; j < size; j++)
        {
            if (arr[minValueIndex] > arr[j])
            {
                minValueIndex = j;
            }
        }

        int temp = arr[i];
        arr[i] = arr[minValueIndex];
        arr[minValueIndex] = temp;
    }
}

int main()
{
    int arr[] = {7,8,3,1,2,15};
    int size = sizeof(arr)/sizeof(arr[0]);

    cout << "\nBefore Selection Sort\n";
    printArray(arr, size);
    selectionSort(arr, size);
    cout << "\nAfter Selection Sort\n";
    printArray(arr, size);

    return 0;
}