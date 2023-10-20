/*

      *
     ***
    *****
   *******
  *********
   *******
    *****
     ***
      *

*/

// Method 1

function print(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = i; j < n - 1; j++) {
      line += " ";
    }
    for (let k = 0; k <= 2 * i; k++) {
      line += "*";
    }
    console.log(line);
  }
  for (let i = n - 1; i >= 0; i--) {
    let line = "";
    for (let j = i; j < n - 1; j++) {
      line += " ";
    }
    for (let k = 0; k <= 2 * i; k++) {
      line += "*";
    }
    console.log(line);
  }
}

print(5);

// Method 2

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    line += " ".repeat(n - i - 1);
    line += "*".repeat(2 * i + 1);
    console.log(line);
  }
  for (let i = n - 1; i >= 0; i--) {
    let line = "";
    line += " ".repeat(n - i - 1);
    line += "*".repeat(2 * i + 1);
    console.log(line);
  }
}

console.log("\n");
printPattern(5);
