#include <iostream>
using namespace std;

int main()
{
    int m = 4;
    int n = 5;

    // Q1 ---->> Print
    // *****
    // *****
    // *****
    // *****

    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    cout << endl;

    // Q2 ----->> Print
    // *****
    // *   *
    // *   *
    // *****

    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1)
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }

    cout << endl;

    // Q3 ----->> Print
    // *
    // **
    // ***
    // ****

    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < i + 1; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    cout << endl;

    // Q4 ----->> Print
    // ****
    // ***
    // **
    // *

    for (int i = 0; i <= m; i++)
    {
        for (int j = m - i; j > 0; j--)
        {
            cout << "*";
        }
        cout << endl;
    }

    cout << endl;

    // Q5 ----->> Print
    //    *
    //   **
    //  ***
    // ****

    for (int i = m; i > 0; i--)
    {
        for (int j = 1; j < i; j++)
        {
            cout << " ";
        }

        for (int j = 0; j <= m - i; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    cout << endl;

    // Q6 ----->> Print
    // 1
    // 12
    // 123
    // 1234
    // 12345

    for (int i = 1; i <= 5; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << j + 1;
        }
        cout << endl;
    }

    cout << endl;

    // Q7 ----->> Print
    // 12345
    // 1234
    // 123
    // 12
    // 1

    for (int i = 5; i >= 0; i--)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << j;
        }
        cout << endl;
    }

    cout << endl;

    // Q8 ----->> Print
    // 1
    // 2  3
    // 4  5  6
    // 7  8  9  10
    // 11 12 13 14 15
    int count = 1;
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << count << " ";
            count++;
        }
        cout << endl;
    }

    cout << endl;

    // Q9 ----->> Print
    // 1
    // 0 1
    // 1 0 1
    // 0 1 0 1
    // 1 0 1 0 1

    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            if ((i + j) % 2 == 0)
            {
                cout << "1"
                     << " ";
            }
            else
            {
                cout << "0"
                     << " ";
            }
        }
        cout << endl;
    }

    cout << endl;

    // Q10 ----->> Print
    //     *****
    //    *****
    //   *****
    //  *****
    // *****

    int x = 5;
    int y = 10;
    for (int i = 0; i < x; i++)
    {
        for (int j = 1; j < (y-i); j++)
        {
            if (j>=(x-i))
            {
                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }

    return 0;
}