/*
  
  12345
  1234
  123
  12
  1

*/

function print(n) {
  for (let i = n; i >= 0; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    console.log(pattern.trim());
  }
}

print(5);
