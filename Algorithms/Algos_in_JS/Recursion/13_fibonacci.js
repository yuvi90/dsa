/*
    Fibonacci Sequence: Write a recursive function to calculate the nth number in the Fibonacci sequence. In the Fibonacci sequence, each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13,...nth
*/

function fibonacci(n) {
  // Base Case
  if (n === 0 || n === 1) {
    return n;
  }
  // Hypothesis: Assume fibonacci(n-1) and fibonacci(n-2) work correctly
  const fib1 = fibonacci(n - 1);
  const fib2 = fibonacci(n - 2);

  // Induction step: Use the assumption to calculate fibonacci(n)
  return fib1 + fib2;
}

console.log(fibonacci(3));
