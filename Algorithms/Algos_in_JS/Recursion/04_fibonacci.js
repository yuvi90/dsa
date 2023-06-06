/*
    Fibonacci Sequence: Write a recursive function to calculate the nth number in the Fibonacci sequence. In the Fibonacci sequence, each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, ...
*/

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3));