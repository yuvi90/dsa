#include <iostream>
using namespace std;

// Q1 Print numbers 1 to 5
// Q2 Print numbers 5 to 1
void printAsec(int n)
{
    if (n == 6)
    {
        return;
    }

    cout << n << " ";
    printAsec(n + 1);
}

void printDesc(int n)
{
    if (n == 0)
    {
        return;
    }

    cout << n << " ";
    printDesc(n - 1);
}

// Q3 Print the sum of natural number
// (1+2+3+4+5+...+n)

// put parameters in which value in changing in each step ->> Sum
// i is starting point and n is ending point
void printSum(int i, int n, int sum)
{
    if (i == n)
    {
        sum += i;
        cout << sum;
        return;
    }

    sum += i;
    printSum(i + 1, n, sum);
}

// Q4 Print factorial of the number

int printFactorial(int n)
{
    if (n == 0)
    {
        return 1;
    }
    return n * printFactorial(n - 1);
}

int main()
{
    printAsec(1);
    cout << "\n";
    printDesc(5);
    cout << "\n";
    printSum(1, 5, 0);
    cout << "\n";
    cout << printFactorial(5);

    return 0;
}