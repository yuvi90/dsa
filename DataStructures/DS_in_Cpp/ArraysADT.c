#include <stdio.h>
#include <stdlib.h>

struct myArray
{
    int total_size;
    int used_size;
    int *base_ptr;
};

void createArray(struct myArray*a, int tSize, int uSize) {
    // (*a).total_size = tSize;
    // (*a).used_size = uSize;
    // (*a).base_ptr = (int*)malloc(tSize * sizeof(int));

    a->total_size = tSize;
    a->used_size = uSize;
    a->base_ptr = (int*)malloc(tSize * sizeof(int));
}

void setValue(struct myArray *a) {
    int n;
    for (int i = 0; i < a->used_size; i++)
    {
        printf("Enter the %d selement : ", i);
        scanf("%d", &n);
        (a->base_ptr)[i] = n;
    }
    
};

void showValue(struct myArray *a) {
    for (int i = 0; i < a->used_size; i++)
    {
        printf("Element at %d = %d\n", i, (a->base_ptr)[i]);
    }
}

int main()
{
    struct myArray marks;
    createArray(&marks, 10, 5);
    setValue(&marks);
    showValue(&marks);

    return 0;
}