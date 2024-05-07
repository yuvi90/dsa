/*
  1
  12
  123
  1234
  12345
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    console.log(line.trim());
  }
}

print(5);
