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
  for (let i = 0; i < 2 * n - 1; i++) {
    let line = "";
    for (let j = 0; j < 2 * n - 1; j++) {
      let topDistance = i;
      let leftDistance = j;
      let rightDistance = 2 * n - 2 - j;
      let bottomDistance = 2 * n - 2 - i;

      line +=
        n - Math.min(topDistance, leftDistance, rightDistance, bottomDistance);
    }
    console.log(line);
  }
}

print(4);
