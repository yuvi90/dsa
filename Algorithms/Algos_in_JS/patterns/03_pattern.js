/*
  1
  12
  123
  1234
  12345
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    console.log(pattern.trim());
  }
}

print(5);
