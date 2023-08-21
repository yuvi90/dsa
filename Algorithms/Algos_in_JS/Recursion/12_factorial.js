// Find factorial of number

function factorial(n) {
  // Base Case
  if (n == 1 || n == 0) {
    return 1;
  }
  // Hypothesis: Assume factorial(n-1) works correctly
  const smallerFactorial = factorial(n - 1);

  // Induction step: Use the assumption to solve factorial(n)
  return n * smallerFactorial;
}

console.log(factorial(4));
