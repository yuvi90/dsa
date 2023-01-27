#include <iostream>
using namespace std;

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

//-->> Insertions (at first, at end, at index)

int main()
{
    //-------------------------------------->> Creating and Allocating Memory in Heap

    //-->> List1
    Node *n1 = (Node *)malloc(sizeof(Node));
    Node *n2 = (Node *)malloc(sizeof(Node));
    Node *n3 = (Node *)malloc(sizeof(Node));
    Node *n4 = (Node *)malloc(sizeof(Node));

    n1->data = 2;
    n2->data = 4;
    n3->data = 6;
    n4->data = 8;

    n1->next = n2;
    n2->next = n3;
    n3->next = n4;
    n4->next = NULL;

    //-->> List2
    Node *m1 = createNode(3);
    Node *m2 = createNode(6);
    Node *m3 = createNode(9);
    Node *m4 = createNode(12);

    m1->next = m2;
    m2->next = m3;
    m3->next = m4;
    m4->next = NULL;

    traverseList(n1);
    cout << endl;
    traverseList(m1);
    cout << endl;
    searchList(m1, 9);

    return 0;
}