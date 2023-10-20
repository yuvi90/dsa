/*
  A
  BB
  CCC
  DDDD
  EEEEE
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += String.fromCharCode(64 + i);
    }
    console.log(line);
  }
}

print(5);
