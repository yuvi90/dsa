#include <stdio.h>
#include <stdlib.h>


int main()
{
    int n, data, position;
    
    printf("Enter number of elements in the array : ");
    scanf("%d", &n);
    printf("Enter %d elements \n", n);

    int nums[50];
    for(int i; i<n; i++)
    {
       scanf("%d", &nums[i]); 
    };

    printf("Enter a data to be inserted \n");
    scanf("%d", &data);

    printf("Enter the position of the item \n");
    scanf("%d", &position);

    if ((position-1) > 49)
    {
        printf("\n Position not valid.");
    }
    else
    {
        for (int i = n; i >= position ; i--)
        {
            nums[i] = nums[i-1];
        }

        nums[position-1] = data;
        n++;

        printf("Array after insertion \n");
        for (int i = 0; i < n; i++)
        {
            printf("%d ", nums[i]);
        }
        
        
    }

    return 0;
}
