/*
  Find number of digits in a number 
  
  Example:
  2345 (Bigger Problem)
  234 (Recursively Calculating Digits) | 5 (Smaller Problem)
*/

function calcDigits(n) {
  // Base Case
  if (n === 0) {
    return 0;
  }
  // Hypothesis
  const smallAns = calcDigits(parseInt(n / 10));
  // Induction Step
  const bigAns = smallAns + 1;
  return bigAns;
}

const result = calcDigits(1032); // 4
console.log(result);
