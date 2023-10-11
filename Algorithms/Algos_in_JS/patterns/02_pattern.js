/*

  *
  **
  *** 
  ****
  *****

*/

let n = 5;

for (let i = 0; i < n; i++) {
  let pattern = "";
  for (let j = 0; j < i + 1; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
