/*
  ABCDE
  ABCD
  ABC
  AB
  A
*/

// Method 1 (It takes more space as it carries letters data structure)

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function print(n) {
  if (n > letters.length) {
    n = 26;
  }
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j < n - i; j++) {
      pattern += letters[j];
    }
    console.log(pattern);
  }
}

print(5);

// Method 2

function p(n) {
  for (let i = 0; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n - i; j++) {
      pattern += String.fromCharCode(64 + j);
    }
    console.log(pattern);
  }
}

p(5);
