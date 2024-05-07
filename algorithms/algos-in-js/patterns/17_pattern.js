/*

      A
     ABA
    ABCBA
   ABCDCBA

*/

// Method 1
function print(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    // Spaces
    for (let k = 1; k <= n - i; k++) {
      line += " ";
    }
    // Character
    let num = 1;
    let breakpoint = Math.floor((2 * i) / 2);
    for (let j = 1; j < 2 * i; j++) {
      line += String.fromCharCode(64 + num);
      if (j < breakpoint) {
        num++;
      } else num--;
    }

    console.log(line);
  }
}

print(4);

// Method 2
function p(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n - i; j++) {
      line += " ";
    }
    for (let j = 1; j <= i; j++) {
      line += String.fromCharCode(64 + j);
    }
    for (let j = i - 1; j > 0; j--) {
      line += String.fromCharCode(64 + j);
    }
    console.log(line);
  }
}
p(4);
