/*
  Nth Term Of GP

  G.P. Series - t1, t2, t3, t4 .... tn
  Common Ratio = r
  First Term = a
  tn = ar^(n-1)

  Example
  n = 5, a = 3, r = 2
  3, 6, 12, 24, 48...
  t5 = 48
*/

function gpNTerm(nTerm, firstTerm, commonRatio) {
  if (nTerm === 1) {
    return firstTerm;
  }
  const previousTerm = gpNTerm(nTerm - 1, firstTerm, commonRatio);
  return previousTerm * commonRatio;
}

console.log(gpNTerm(5, 3, 2)); // 48
console.log(gpNTerm(4, 1, 2)); // 8
console.log(gpNTerm(6, 2, 1)); // 2
