/******************************************************************************

Binary Tree
       4
      / \
     1   6
    /\
   5  2
  
  
  Binary Search Tree 
       8
      / \
     3   10
    /\
   1  6
   
*******************************************************************************/

#include <stdio.h>
#include <malloc.h>

struct node
{
  int data;
  struct node *left;
  struct node *right;
};

struct node *
createNode (int data)
{
  struct node *n;
  n = (struct node *) malloc (sizeof (struct node));
  n->data = data;
  n->left = NULL;
  n->right = NULL;
  return n;
}

void
preOrder (struct node *root)
{
  if (root != NULL)
    {
      printf ("%d", root->data);
      preOrder (root->left);
      preOrder (root->right);
    }
}

void
postOrder (struct node *root)
{
  if (root != NULL)
    {
      postOrder (root->left);
      postOrder (root->right);
      printf ("%d", root->data);
    }
}

void
inOrder (struct node *root)
{
  if (root != NULL)
    {
      inOrder (root->left);
      printf ("%d", root->data);
      inOrder (root->right);
    }
}

struct node*
searchBST (struct node *root, int key)
{
  if (root == NULL)
  {
      return NULL;
  }    
  if (key==root->data)
  {
  	  return root;
  }
  else if (key<root->data)
  {
  	  return searchBST (root->left, key);
  }
  else
  {
  	  return searchBST (root->right, key);
  }
}

struct node* searchBSTiter (struct node* root, int key)
{
  while (root!=NULL)
  {
    if(key==root->data)
    {
      return root;
    }
    else if(key < root->data) 
    {
      root = root->left;
    }
    else 
    {
      root = root->right;
    }
  }
  return NULL;
}

int
main ()
{
  // Creating Nodes for Binary Tree
  struct node *root = createNode (4);
  struct node *n1 = createNode (1);
  struct node *n2 = createNode (6);
  struct node *n3 = createNode (5);
  struct node *n4 = createNode (2);

  // Linking Nodes
  root->left = n1;
  root->right = n2;
  n1->left = n3;
  n1->right = n4;

  // Traversing Nodes
  preOrder (root);
  printf ("\n");
  postOrder (root);
  printf ("\n");
  inOrder (root);
  printf ("\n");

  // Creating Nodes for Binary Search Tree
  struct node *root2 = createNode (8);
  struct node *n12 = createNode (3);
  struct node *n22 = createNode (10);
  struct node *n32 = createNode (1);
  struct node *n42 = createNode (6);

  // Linking Nodes
  root2->left = n12;
  root2->right = n22;
  n12->left = n32;
  n12->right = n42;

  // Traversing Nodes
  preOrder (root2);
  printf ("\n");
  postOrder (root2);
  printf ("\n");
  inOrder (root2);
  printf ("\n");
  
  
  // Searching searchBST
  struct node* search = searchBST(root2, 4);
  if (search != NULL) 
  {
    printf("Element found : %d", search->data);
  }
  else
  {
    printf("Element not found");
  }
  
  
  printf("\n");
  
  
  // Searching BST Iteratively
  struct node* search2 = searchBSTiter(root2, 6);
  if (search2 != NULL) 
  {
    printf("Element found : %d", search2->data);
  }
  else
  {
    printf("Element not found");
  }

  return 0;
}