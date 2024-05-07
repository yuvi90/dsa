/*

  ********* 
  **** ****
  ***   ***
  **     **
  *       *
  *       *
  **     **
  ***   ***
  **** ****
  *********
 
*/

function print(n) {
  // Upper Side
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = i - 1; j <= n - 1; j++) {
      line += "*";
    }
    for (let j = 1; j < 2 * i - 1; j++) {
      line += " ";
    }
    for (let j = n; j >= i; j--) {
      line += "*";
    }
    console.log(line);
  }
  // Lower Side
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      line += " ";
    }
    for (let j = 1; j < i + 1; j++) {
      line += "*";
    }
    console.log(line);
  }
}
print(6);
