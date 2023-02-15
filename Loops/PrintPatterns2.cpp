#include <iostream>
using namespace std;

int main()
{
    int m = 4;
    int n = 5;

    // Q1 ---->> Print
    // *      *
    // **    **
    // ***  ***
    // ********
    // ********
    // ***  ***
    // **    **
    // *      *


    //->> Upper Half
    for (int i = 1; i <= m; i++)
    {   
        //Left Side
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        //Spaces
        for (int j = 1; j <= 2 * (m - i); j++)
        {
            cout << " ";
        }
        //Right Side
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        cout << endl;
    }
    //->> Lower Half
    for (int i = m; i >= 1; i--)
    {   
        //Left Side
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        //Spaces
        for (int j = 1; j <= 2 * (m - i); j++)
        {
            cout << " ";
        }
        //Right Side
        for (int j = 1; j <= i; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    cout << endl;

    return 0;
}