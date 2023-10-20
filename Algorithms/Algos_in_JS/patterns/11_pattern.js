/*
  1
  01
  101
  0101
  10101
*/

function print(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    if (i % 2 === 0) {
      line += "0";
    } else {
      line += "1";
    }
    for (let j = 1; j < i; j++) {
      if (line.charAt(line.length - 1) === "0") {
        line += "1";
      } else {
        line += "0";
      }
    }
    console.log(line);
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
