/*
  
  12345
  1234
  123
  12
  1

*/

function print(n) {
  for (let i = n; i >= 0; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    console.log(line.trim());
  }
}

print(5);
