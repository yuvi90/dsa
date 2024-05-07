// Print numbers 1 to 10 (ascending and descending order)

function numbersIncreasingOrder(n) {
  // Base Case
  if (n === 0) {
    return;
  }
  // Hypothesis
  numbersIncreasingOrder(n - 1);
  // Induction Step
  console.log(n);
}

function numbersDecreasingOrder(n) {
  // Base Case
  if (n === 0) {
    return;
  }
  // Induction Step
  console.log(n);
  // Hypothesis
  numbersDecreasingOrder(n - 1);
}

numbersIncreasingOrder(10);
numbersDecreasingOrder(10);
