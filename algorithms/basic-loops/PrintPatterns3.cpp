#include <iostream>
using namespace std;

int main()
{

    // Q1 ----->> Print
    //     *****
    //    *****
    //   *****
    //  *****
    // *****

    int m = 5;

    for (int i = 1; i <= m; i++)
    {
        // Spaces
        for (int j = 1; j <= m - i; j++)
        {
            cout << " ";
        }

        // Stars
        for (int j = 1; j <= m; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    cout << endl;

    return 0;
}