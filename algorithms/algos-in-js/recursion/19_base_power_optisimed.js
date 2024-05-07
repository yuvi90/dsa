/*
  Power Base optimized version using recursion

  a^b => if b is even then a^b/2 * a^b/2
  a^b => if b is odd then a * a^b/2 * a^b/2

  2^6 => 2^3 * 2^3
  2^7 => 2 * 2^3 * 2^3
*/

// Level 1 Optimization

function exponent1(base, power) {
  if (power === 0) {
    return 1;
  }
  // If Power is Negative
  if (power < 0) {
    base = 1 / base;
    power = -1 * power;
  }
  // Hypothesis
  const halfPower = exponent1(base, Math.floor(power / 2));
  // Induction  Step : Building solution from assumption
  if (power % 2 === 0) {
    return halfPower * halfPower;
  } else {
    return base * halfPower * halfPower;
  }
}

console.log("\nMethod 1");
console.log(exponent1(2, 8));
console.log(exponent1(2, -2));

// Level 2 Optimization with memoization

function exponent2(base, power, memo = {}) {
  // Base Case
  if (power === 0) {
    return 1;
  }

  // If Power is negative
  if (power < 0) {
    base = 1 / base;
    power = -1 * power;
  }

  // If ans is cached
  if (power in memo) {
    return memo[power];
  }

  // Hypothesis
  const halfPower = exponent2(base, Math.floor(power / 2), memo);

  // Induction Step
  const squaredHalfPower = halfPower * halfPower;
  if (power % 2 === 0) {
    memo[power] = squaredHalfPower;
  } else {
    memo[power] = base * squaredHalfPower;
  }
  return memo[power];
}

console.log("\nMethod 2");
console.log(exponent2(2, 8));
console.log(exponent2(2, -2));
