/*

  *****
  ****
  ***
  **
  *
 
*/

function print(n) {
  for (let i = n; i >= 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line.trim());
  }
}

print(5);
