#include <stdio.h>
#include <stdlib.h>

void printArray(int *A, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", A[i]);
    }
}

int partition(int A[], int low, int high)
{
    int pivot = A[low];
    int i = low + 1;
    int j = high;
    int temp;

    do
    {

        while (A[i] <= pivot)
        {
            i++;
        }

        while (A[j] > pivot)
        {
            j--;
        }

        if (i < j)
        {
        // Swap low, high
            temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }

    } while (i < j);

    // Swap pivot with high
    temp = A[low];
    A[low] = A[j];
    A[j] = temp;

    return j;
}

void quickSort(int A[], int low, int high)
{
    int partitionIndex;

    if (low < high)
    {
        partitionIndex = partition(A, low, high);
        quickSort(A, low, partitionIndex - 1);  // sort left partition
        quickSort(A, partitionIndex + 1, high); // sort right partition
    }
}

int main()
{
    int array[] = {2, 1, 5, 4, 3};
    int n = 5;

    printf("\nBefore Quick Sort\n");
    printArray(array, n);

    quickSort(array, 0, n - 1);

    printf("\nAfter Quick Sort\n");
    printArray(array, n);

    printf("\n");

    return 0;
}