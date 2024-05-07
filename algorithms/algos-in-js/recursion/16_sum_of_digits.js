/*
  Sum of the digits of a positive integer.

  456 => 4 + 5 + 6 = 15
*/

function sumOfDigits(n) {
  // Base Case
  if (n === 0) {
    return 0;
  }
  const currentDigit = n % 10;
  // Hypothesis Assumption
  const smallAns = sumOfDigits(parseInt(n / 10));
  // Induction Step
  return currentDigit + smallAns;
}

console.log(sumOfDigits(456));
