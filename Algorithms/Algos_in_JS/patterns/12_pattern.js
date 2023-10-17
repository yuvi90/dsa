/*
  1      1
  12    21
  123  321
  12344321
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    // Ascending
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    // Spaces
    for (let j = i; j < n * 2 - i; j++) {
      pattern += " ";
    }
    // Descending
    for (j = i; j >= 1; j--) {
      pattern += j;
    }
    console.log(pattern.trim());
  }
}

print(4);
