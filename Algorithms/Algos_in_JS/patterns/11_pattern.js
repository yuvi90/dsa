/*
  1
  01
  101
  0101
  10101
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    if (i % 2 === 0) {
      pattern += "0";
    } else {
      pattern += "1";
    }
    for (let j = 1; j < i; j++) {
      if (pattern.charAt(pattern.length - 1) === "0") {
        pattern += "1";
      } else {
        pattern += "0";
      }
    }
    console.log(pattern);
  }
}

print(5);

function p(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i % 2 === j % 2 ? "1" : "0";
    }
    console.log(row);
  }
}
