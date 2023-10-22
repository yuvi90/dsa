/*

  4444444
  4333334
  4322234
  4321234
  4322234
  4333334
  4444444

*/

function print(n) {
  for (let i = 1; i < 2 * n; i++) {
    let line = "";
    for (let j = 1; j < 2 * n; j++) {
      if (i == 1 || i == 2 * n - 1 || j == 1 || j == 2 * n - 1) {
        line += n;
      } else {
        line += j;
      }
    }
    console.log(line);
  }
}

print(4);
