/******************************************************************************

  Binary Search Tree
       8
      / \
     3   10
    /\
   1  6

*******************************************************************************/

#include <stdio.h>
#include <malloc.h>

//---------Tree Data Type

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

//---------Create Node

struct node *createNode(int data)
{
    struct node *n = (struct node *)malloc(sizeof(struct node));
    n->data = data;
    n->left = NULL;
    n->right = NULL;
    return n;
};

//---------Traversing

void inOrder(struct node *root)
{
    if (root != NULL)
    {
        inOrder(root->left);
        printf("%d  ", root->data);
        inOrder(root->right);
    }
};

void preOrder(struct node *root)
{
    if (root != NULL)
    {
        printf("%d  ", root->data);
        preOrder(root->left);
        preOrder(root->right);
    }
};

void postOrder(struct node *root)
{
    if (root != NULL)
    {
        postOrder(root->left);
        postOrder(root->right);
        printf("%d  ", root->data);
    }
};

//---------Searching

struct node* searchBST(struct node *root, int key)
{
    if (root != NULL)
    {
        if (root->data == key)
        {
            return root;
        }
        else if (root->data < key)
        {
            root = root->right;
            return searchBST(root, key);
        }
        else
        {
            root = root -> left;
            return searchBST(root , key);
        }
    }
    return NULL;
};

void searchNode (struct node *root, int key)
{
    struct node *n = searchBST(root, key);
    if (n != NULL)
    {
        printf("Node Found : %d", key);
    }
    else 
    {
        printf("Node Notfound : %d", key);
    }
};

//---------Inserting

struct node* insertNode(struct node* root, int node)
{
    if (root != NULL)
    {
        if (root->data > node)
        {
            root -> left = insertNode(root -> left, node);
        }
        else if (root->data < node)
        {
            root -> right = insertNode(root -> right, node);
        }
        return root;
    }
    else
    {
        createNode(node);
    }
}


//----------------------------------------------Main Method

int main()
{
    //----- Creating Nodes
    struct node *root = createNode(8);
    struct node *n1 = createNode(3);
    struct node *n2 = createNode(10);
    struct node *n3 = createNode(1);
    struct node *n4 = createNode(6);

    //------ Linking Nodes
    root->left = n1;
    root->right = n2;
    n1->left = n3;
    n1->right = n4;

    //------ Traversing
    inOrder(root);
    printf("\n");
    preOrder(root);
    printf("\n");
    postOrder(root);
    printf("\n");

    //------ Searching
    searchNode(root, 8);
    printf("\n");
    searchNode(root, 6);
    printf("\n");
    searchNode(root, 13);
    printf("\n");
    searchNode(root, 1);
    printf("\n");
    searchNode(root, 4);
    printf("\n");

    //------ Inserting
    insertNode(root, 4);
    insertNode(root, 13);

    inOrder(root);
    printf("\n");

    searchNode(root, 13);
    printf("\n");
    searchNode(root, 4);
    printf("\n");

    return 0;
}