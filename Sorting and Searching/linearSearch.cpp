#include <iostream>
using namespace std;

int searchElement(int n, int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        if (n == arr[i])
        {
            cout << "Element found at index : " << i;
            return i;
        }
    }
    cout << "Element not found";
    return 0;
}

int main()
{
    int arr[] = {7, 8, 3, 1, 2};
    int size = sizeof(arr) / sizeof(arr[0]);
    searchElement(2, arr, size);

    return 0;
}