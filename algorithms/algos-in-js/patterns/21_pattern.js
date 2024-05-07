/*

  *        * 
  **      **
  ***    ***
  ****  ****
  **********
  ****  ****
  ***    ***
  **      **
  *        *

*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    // Left Stars
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    // Spaces
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      line += " ";
    }
    // Right Stars
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
  for (let i = 1; i < n; i++) {
    let line = "";
    // Left Stars
    for (let j = n - 1; j >= i; j--) {
      line += "*";
    }
    // Spaces
    for (let j = 1; j <= 2 * i; j++) {
      line += " ";
    }
    // Right Stars
    for (let j = n - 1; j >= i; j--) {
      line += "*";
    }
    console.log(line);
  }
}

print(5);
