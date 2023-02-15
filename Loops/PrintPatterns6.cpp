#include <iostream>
using namespace std;

int main()
{

    // Q1 ----->> Print
    //      *
    //     ***
    //    *****  
    //   *******
    //   ******* 
    //    *****  
    //     ***
    //      *

    int m = 4;

    for (int i = 1; i <= m; i++)
    {
        // Spaces
        for (int j = 1; j <= m - i; j++)
        {
            cout << " ";
        }

        // Stars
        for (int j = 1; j <= 2*i-1; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    for (int i = m; i >= 1; i--)
    {
        // Spaces
        for (int j = 1; j <= m - i; j++)
        {
            cout << " ";
        }

        // Stars
        for (int j = 1; j <= 2*i-1; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    cout << endl;

    return 0;
}