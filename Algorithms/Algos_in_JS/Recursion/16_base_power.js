function power(base, n) {
  // Base Case
  if (n === 0) {
    return 1;
  }
  // Hypothesis Assumption
  const smallAns = power(base, n - 1);
  // Induction Step
  return base * smallAns;
}

console.log(power(2, 3));
console.log(power(2, 6));
console.log(power(4, 3));
console.log(power(3, 3));
