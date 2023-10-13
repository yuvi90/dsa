/*
  Sum of the digits of a positive integer.

  456 => 4 + 5 + 6 = 15
*/

function sumOfDigits(n) {
  // Base Case
  if (n === 0) {
    return 0;
  }
  // Hypothesis Assumption
  const smallAns = sumOfDigits(parseInt(n / 10));
  // Induction Step
  return (n % 10) + smallAns;
}

console.log(sumOfDigits(456));
