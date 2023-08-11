/*
  Find number of digits in a number 
  
  Example:
  2345 (Bigger Problem)
  234 (Recursively Calculating Digits) | 5 (Smaller Problem)
*/

function calcDigits(n) {
  if (n === 0) {
    return 0;
  }
  const smallAns = calcDigits(Math.floor(n / 10));
  const bigAns = smallAns + 1;
  return bigAns;
}

const result = calcDigits(102);
console.log(result);
