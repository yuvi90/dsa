#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node* next;
    struct Node* prev;
};

void showList(struct Node* list)
{
    while (list != NULL)
    {
        printf("%d ", list->data);
        list = list -> next;
    }
}

void reverseList(struct Node* list)
{
    while (list != NULL)
    {
        printf("%d ", list->data);
        list = list -> prev;
    }
}

struct  Node* insertAtFirst(struct Node* head, int data)
{
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node*));
    newNode->data = data;
    newNode->prev = NULL;
    newNode->next = head;
    head->prev = newNode;
    return newNode;
}

struct  Node* insertIndex (struct Node* head, int data, int index)
{
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node*));
    struct Node* h = head;

    int i = 0;
    while (i != index - 1)
    {
        h = h->next;
        i++;  
    }
    
    newNode->data = data;
    newNode->next = h->next;
    newNode->prev = h;

    h->next->prev = newNode;
    h->next = newNode;
    
    return newNode;
}

struct  Node* insertAtEnd (struct Node* head, int data)
{
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node*));
    struct Node* h = head;

    while (h->next!=NULL)
    {
        h = h->next;  
    }

    h->next = newNode;
    
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = h;

    
    return newNode;
}

// struct  Node* insertAtEnd(struct Node* tail, int data)
// {
//     struct Node* newNode = (struct Node*)malloc(sizeof(struct Node*));
//     tail->next = newNode;
//     newNode->prev = tail;
//     newNode->next = NULL;
//     newNode->data = data;
//     return newNode;
// }

int main()
{
    
    // ---------- Allocating Memory in Heap
    struct Node* head;
    struct Node* second;
    struct Node* third;
    struct Node* tail;

    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));
    tail = (struct Node*)malloc(sizeof(struct Node));

    // --------->> Linking and Adding Data  
    head->data = 2;
    head->next = second;
    head->prev = NULL;

    second->data = 4;
    second->next = third;
    second->prev = head;
    
    third->data = 6;
    third->next = tail;
    third->prev = second;
    
    tail->data = 8;
    tail->next = NULL;
    tail->prev = third;

    // --------->> Traversing List
    showList(head);
    printf("\n");
    reverseList(tail);

    printf("\n");
    printf("\n");

    head = insertAtFirst(head, 1);
    showList(head);
    printf("\n");
    reverseList(tail);

    printf("\n");
    printf("\n");

    insertIndex(head, 5, 3);
    showList(head);
    printf("\n");
    reverseList(tail);

    printf("\n");
    printf("\n");

    insertAtEnd(head, 10);
    showList(head);
    printf("\n");
    reverseList(tail);

    return 0;
}