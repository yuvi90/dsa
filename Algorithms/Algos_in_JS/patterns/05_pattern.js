/*

  *****
  ****
  ***
  **
  *
 
*/

function print(n) {
  for (let i = n; i >= 0; i--) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    console.log(pattern.trim());
  }
}

print(5);
