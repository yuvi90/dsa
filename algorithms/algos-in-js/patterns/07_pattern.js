/*

      *
     ***
    *****
   *******
  *********

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
}

print(5);

// Method 2

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    pattern += " ".repeat(n - i - 1);
    pattern += "*".repeat(2 * i + 1);
    console.log(pattern);
  }
}

console.log("\n");
printPattern(5);
