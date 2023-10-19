/*
  A
  BB
  CCC
  DDDD
  EEEEE
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(64 + i);
    }
    console.log(pattern);
  }
}

print(5);
