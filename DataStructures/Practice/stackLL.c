#include <stdio.h>
#include <stdlib.h>

struct Node 
{
    int data;
    struct Node* next;
};

int isEmpty(struct Node *ptr)
{
    if (ptr != NULL)
    {
        // printf("Stack is not empty \n");
        return 0;
    }
    else
    {
        // printf("Stack is empty \n");
        return 1;
    }
}

int isFull(struct Node *ptr)
{
    struct Node* x = (struct Node*)malloc(sizeof(struct Node*));
    if (x != NULL)
    {
        // printf("Stack is not full \n");
        return 0;
    }
    else
    {
        // printf("Stack is full \n");
        return 1;
    }
}

struct Node* push(struct Node* top, int data)
{
    if(isFull(top))
    {
        printf("Stack Overflow \n");
    }
    else
    {
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node*));
        newNode->data = data;
        newNode->next = top;
        top = newNode;
        return top;
    }
};

void showList(struct Node* top)
{
    while (top != NULL)
    {
        printf("\n%d ", top->data);
        top = top -> next;
    }
}

int main()
{
    struct Node* top = NULL;
    top = push(top, 2);
    top = push(top, 4);
    top = push(top, 6);
    showList(top);

    return 0;
}