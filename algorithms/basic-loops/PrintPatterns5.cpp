#include <iostream>
using namespace std;

int main()
{

    // Q1 ----->> Print
    //     1
    //    212
    //   32123
    //  4321234
    // 543212345

    int m = 5;

    for (int i = 1; i <= m; i++)
    {
        // Spaces
        for (int j = 1; j <= m - i; j++)
        {
            cout << " ";
        }

        // Left Half
        for (int j = i; j >= 1; j--)
        {
            cout << j;
        }

        // Right Half
        for (int j = 2; j <= i; j++)
        {
            cout << j;
        }
        cout << endl;
    }

    cout << endl;

    return 0;
}