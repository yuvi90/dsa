#include <iostream>
using namespace std;

int main()
{

    // Q1 ----->> Print
    //     1
    //    2 2
    //   3 3 3
    //  4 4 4 4
    // 5 5 5 5 5

    int m = 5;

    for (int i = 1; i <= m; i++)
    {
        // Spaces
        for (int j = 1; j <= m - i; j++)
        {
            cout << " ";
        }

        // Stars
        for (int j = 1; j <= i; j++)
        {
            cout << i << " ";
        }
        cout << endl;
    }

    cout << endl;

    return 0;
}