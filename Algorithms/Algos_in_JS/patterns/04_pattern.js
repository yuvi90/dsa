/*
  1
  22
  333
  4444
  55555
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
      pattern += i;
    }
    console.log(pattern.trim());
  }
}

print(5);
