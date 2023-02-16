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

struct node
{
  int data;
  struct node *left;
  struct node *right;
};

// ------------------------------------------Creating Node
struct node * createNode (int data)
{
  struct node *n;
  n = (struct node *) malloc (sizeof (struct node));
  n->data = data;
  n->left = NULL;
  n->right = NULL;
  return n;
}

// -------------------------------------------Traversels
void preOrder (struct node *root)
{
  if (root != NULL)
    {
      printf ("%d\t", root->data);
      preOrder (root->left);
      preOrder (root->right);
    }
}

void postOrder (struct node *root)
{
  if (root != NULL)
    {
      postOrder (root->left);
      postOrder (root->right);
      printf ("%d\t", root->data);
    }
}

void inOrder (struct node *root)
{
  if (root != NULL)
    {
      inOrder (root->left);
      printf ("%d\t", root->data);
      inOrder (root->right);
    }
}

// --------------------------------------------- Searching BST


// Recursive Method
struct node* searchBST (struct node *root, int key)
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

// Iterative Method
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


//----------------------------------------------Inserting Elements

struct node* insertElement(struct node* root, int x)
{
  // When the tree is empty
  if (root == NULL) {
    struct node* temp = createNode(x);
    return temp;
  } 
  // Value is smaller
  if (root->data >= x)
  {
    root->left = insertElement(root->left,x);
  }
  else // Value is greater
  {
    root->right = insertElement(root->right,x);
  }
  return root;
};


//----------------------------------------------- Main()

int main ()
{
  // Creating Nodes for Binary Search Tree
  struct node *root = createNode (8);
  struct node *n1 = createNode (3);
  struct node *n2 = createNode (10);
  struct node *n3 = createNode (1);
  struct node *n4 = createNode (6);

  // Linking Nodes
  root->left = n1;
  root->right = n2;
  n1->left = n3;
  n1->right = n4;

  // Traversing Nodes
  preOrder (root);

  printf ("\n");
  printf ("\n");
  
  postOrder (root);
  
  printf ("\n");
  printf ("\n");
  
  inOrder (root);
  
  printf ("\n");
  printf ("\n");
  
  
  // Searching searchBST
  struct node* search = searchBST(root, 4);
  if (search != NULL) 
  {
    printf("Element Found : %d", search->data);
  }
  else
  {
    printf("Element Not Found !!");
  }
  
  
  printf("\n");
  printf("\n");
  
  
  // Searching BST Iteratively
  struct node* search2 = searchBSTiter(root, 6);
  if (search2 != NULL) 
  {
    printf("Element found : %d", search2->data);
  }
  else
  {
    printf("Element not found");
  }

  // Insertion
  insertElement(root, 4);
  insertElement(root, 15);
  insertElement(root, 30);
  insertElement(root, 7);
  
  printf ("\n");
  printf ("\n");
  
  
  // Searching searchBST
  struct node* search3 = searchBST(root, 4);
  if (search3 != NULL) 
  {
    printf("Element Found : %d", search3->data);
  }
  else
  {
    printf("Element Not Found !!");
  }
  
  printf ("\n");
  printf ("\n");
  
  inOrder (root);

  return 0;
}