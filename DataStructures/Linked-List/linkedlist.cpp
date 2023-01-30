#include <iostream>
using namespace std;

//----->> Inserting/Deleteing, Sorting, Traversing, Searching

struct LinkedList
{
    int data;
    struct LinkedList *next;
} typedef Node;

Node *createNode(int value)
{
    Node *n = (Node *)malloc(sizeof(Node));
    n->data = value;
    return n;
}

void traverseList(Node *head)
{
    while (head != NULL)
    {
        cout << head->data << " ";
        head = head->next;
    }
}

int searchList(Node *head, int value)
{
    int i = 1;

    while (head != NULL)
    {
        if (head->data == value)
        {
            cout << "Element Found at : Node " << i;
            return i;
        }
        i++;
        head = head->next;
    }
    cout << "Element Not Found";
    return 0;
}

//-->> Insertions (at First, at Last, at Index)
void insertAtFirst(Node *head, int value)
{
    Node *newNode = createNode(head->data);
    newNode->next = head->next;
    head->data = value;
    head->next = newNode;
}

void insertAtLast(Node *head, int value)
{
    while (head->next != NULL)
    {
        head = head->next;
    }
    Node *newNode = createNode(value);
    head->next = newNode;
    newNode->next = NULL;
}

void insertAtIndex(Node *head, int value, int index)
{
    int i = 1;
    while (i < index-1)
    {
        i++;
        head = head->next;
    }
    Node *newNode = createNode(value);
    newNode->next = head->next;
    head->next = newNode;
}

//-->> Deletion (at First, at Last, at Index)

int main()
{
    //-------------------------------------->> Creating and Allocating Memory in Heap

    //-->> List1
    Node *head1 = (Node *)malloc(sizeof(Node));
    Node *n2 = (Node *)malloc(sizeof(Node));
    Node *n3 = (Node *)malloc(sizeof(Node));
    Node *n4 = (Node *)malloc(sizeof(Node));

    head1->data = 2;
    n2->data = 4;
    n3->data = 6;
    n4->data = 8;

    head1->next = n2;
    n2->next = n3;
    n3->next = n4;
    n4->next = NULL;

    //-->> List2
    Node *head2 = createNode(3);
    Node *m2 = createNode(6);
    Node *m3 = createNode(9);
    Node *m4 = createNode(12);

    head2->next = m2;
    m2->next = m3;
    m3->next = m4;
    m4->next = NULL;

    traverseList(head1);
    cout << endl;
    traverseList(head2);
    cout << endl;

    insertAtFirst(head1, 1);
    insertAtLast(head1, 10);
    insertAtIndex(head1, 5, 2);
    cout << endl;
    traverseList(head1);

    cout << endl;
    searchList(head1, 5);

    return 0;
}