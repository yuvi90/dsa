/*
  Create a recursive function to find the greatest common divisor (GCD) of two numbers.

  GCD of 20, 30 = 10

*/

function gcd(a, b) {
  if (b === 0) {
    return a; // Base case: GCD(a, 0) = a
  }
  return gcd(b, a % b); // Recursive step: GCD(a, b) = GCD(b, a % b)
}

console.log(gcd(20, 30));
