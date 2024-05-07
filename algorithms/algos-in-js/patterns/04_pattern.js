/*
  1
  22
  333
  4444
  55555
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += i;
    }
    console.log(line.trim());
  }
}

print(5);
