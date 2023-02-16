// Basic operations >>->>  Insert (Push) and Delete (Pop)

#include <stdio.h>
#include <stdlib.h>

struct stack
{
    int size;
    int top;
    int *arr;
};

int isEmpty(struct stack *ptr)
{
    if (ptr->top == -1)
    {
        // printf("Stack is empty \n");
        return 1;
    }
    else
    {
        // printf("Stack is empty \n");
        return 0;
    }
}

int isFull(struct stack *ptr)
{
    if (ptr->top >= ptr->size)
    {
        // printf("Stack is full \n");
        return 1;
    }
    else
    {
        // printf("Stack is not full \n");
        return 0;
    }
}

void push(struct stack *ptr, int data)
{
    if (isFull(ptr))
    {
        printf("Error!!\nStack is full\n");
        exit(0);
    }

    ptr->top++;
    ptr->arr[ptr->top] = data;
}

int pop(struct stack *ptr)
{
    if (isEmpty(ptr))
    {
        printf("Error!!\nStack is empty\n");
        exit(0);
    }
    int val = ptr->arr[ptr->top];
    ptr->top--;
    return val;
}

void showStack(struct stack *ptr)
{
    if (isEmpty(ptr))
    {
        exit(0);
    }

    int i = ptr->top;
    while (i >= 0)
    {
        printf("\n%d ", ptr->arr[i]);
        i--;
    }
}

void peek(struct stack *ptr)
{
    if (isEmpty(ptr))
    {
        exit(0);
    }

    printf("\nTop Element : %d", ptr->arr[ptr->top]);
}

int main()
{
    struct stack s;
    s.size = 4;
    s.top = -1;
    s.arr = (int *)malloc(s.size * sizeof(int));

    isEmpty(&s);
    isFull(&s);
    push(&s, 2);
    push(&s, 4);
    push(&s, 6);
    push(&s, 8);
    push(&s, 10);
    printf("\n");
    peek(&s);
    // push(&s, 12);

    printf("\n");
    printf("\n");

    printf("%d", pop(&s));
    printf("\n");
    peek(&s);
    printf("\n");
    showStack(&s);

    // printf("\n", s.top);
    // printf("%d", s.top);
    // printf("\n", s.top);
    // printf("%d", s.size);

    return 0;
}