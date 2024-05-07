/*
  E
  D E
  C D E
  B C D E
  A B C D E
*/

function print(n) {
  for (let i = n; i > 0; i--) {
    let line = String.fromCharCode(64 + i);
    for (let j = i + 1; j <= n; j++) {
      line += " " + String.fromCharCode(64 + j);
    }
    console.log(line);
  }
}

print(5);
