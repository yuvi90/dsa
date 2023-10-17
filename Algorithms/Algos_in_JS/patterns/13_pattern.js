/*
  1
  2 3
  4 5 6
  7 8 9 10
  11 12 13 14 15
*/

function print(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += count + " ";
      count++;
    }
    console.log(pattern);
  }
}

print(5);
