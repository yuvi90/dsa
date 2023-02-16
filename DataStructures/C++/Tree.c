#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *leftNode;
    struct Node *rightNode;
};

struct Node * createNode (int value) {
    struct Node *node; // Creating a node pointer
    node = (struct Node *)malloc(sizeof(struct Node)); // Allocating memory in the heap
    (*node).data = value; // Setting the data
    (*node).leftNode = NULL; // Setting Reft Node
    (*node).rightNode = NULL; // Setting Right Node
    return node;
};

int main()
{
    // Constructing Node
    struct Node *root = createNode (2);
    struct Node *node1 = createNode (3);
    struct Node *node2 = createNode (4);
    
    // Linking Nodes
    (*root).leftNode = node1;
    (*root).rightNode = node2;

    printf("%d", (*root).data);

    return 0;
}
