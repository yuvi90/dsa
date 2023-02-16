#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <conio.h>


int main(int argc, char const *argv[])
{
    int nums[] = {55,22,2,43,12,8,32,15};

    printf("Values present in A[8] = ");

    for (int i = 0; i < 8; i++)
    {
        printf("%d ", nums[i]);
    }


//------------------------------ Sorting

    for (int i = 1; i < 8; i++)
    {  
        for (int j = 0; j < 8-1; j++)
        {
            if (nums[j] > nums[j+1])
            {
                int temp = nums[j];
                nums[j] = nums[j+1];                
                nums[j+1] = temp;                
            }
        }
    }

    printf("\nValues present in A[8] after sorting = ");

    for (int i = 0; i < 8; i++)
    {
        printf("%d ", nums[i]);
    }

    // ------------------>> Searching
    int search;
    printf("\nEnter number for search : \n");
    scanf("%d", &search);

    int searchNum(int n)
    {
        for (int i = 0; i < 8; i++)
        {
            if (nums[i] == n)
            {
                printf("Number found at : %d index", i);
                return 1;
            }      
        }
        printf("Number not found : %d", n);
        return 0;
    };

    searchNum(search);

    return 0;
}
