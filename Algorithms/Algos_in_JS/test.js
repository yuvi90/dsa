// Input:
let x = 2.0,
  n = -2;

var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n = -1 * n;
  }
  const halfPower = myPow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return halfPower * halfPower;
  } else {
    return x * halfPower * halfPower;
  }
};

console.log(myPow(x, n));
