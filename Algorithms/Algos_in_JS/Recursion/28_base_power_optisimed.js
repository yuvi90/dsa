/*
  Power Base optimized version using recursion

  a^b => if b is even then a^b/2 * a^b/2
  a^b => if b is odd then a * a^b/2 * a^b/2

  2^6 => 2^3 * 2^3
  2^7 => 2 * 2^3 * 2^3
*/

// Level 1 Optimization

function exponent(base, power) {
  if (power === 0) {
    return 1;
  }

  const halfPower = exponent(base, Math.floor(power / 2));

  if (power % 2 === 0) {
    return halfPower * halfPower;
  } else {
    return base * halfPower * halfPower;
  }
}

// Level 2 Optimization with memoization

function exponent(base, power, memo = {}) {
  if (power === 0) {
    return 1;
  }

  if (power in memo) {
    return memo[power];
  }

  const halfPower = exponent(base, Math.floor(power / 2), memo);
  const squaredHalfPower = halfPower * halfPower;

  if (power % 2 === 0) {
    memo[power] = squaredHalfPower;
  } else {
    memo[power] = base * squaredHalfPower;
  }

  return memo[power];
}

console.log(exponent(2, 6));
