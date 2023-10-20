/*
  1      1
  12    21
  123  321
  12344321
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    // Ascending
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    // Spaces
    for (let j = i; j < n * 2 - i; j++) {
      line += " ";
    }
    // Descending
    for (j = i; j >= 1; j--) {
      line += j;
    }
    console.log(line.trim());
  }
}

print(4);
