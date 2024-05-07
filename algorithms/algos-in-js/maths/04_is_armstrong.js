/*
  Example 1:
  Input:153 
  Output: Yes, it is an Armstrong Number
  Explanation: 1^3 + 5^3 + 3^3 = 153

  Input:170 
  Output: No, it is not an Armstrong Number
  Explanation: 1^3 + 7^3 + 0^3 != 170
*/

// Time Complexity: O(number of digits)
// Space Complexity: O(1)

function isArmstrong(n) {
  let originalNumber = n;
  let totalDigits = n.toString().length;
  let sum = 0;
  for (let i = 1; i <= totalDigits; i++) {
    let digit = n % 10;
    sum += Math.pow(digit, totalDigits);
    n = Math.floor(n / 10);
  }
  return sum === originalNumber;
}

console.log(isArmstrong(153));
console.log(isArmstrong(170));
console.log(isArmstrong(1634));
console.log(isArmstrong(103));
