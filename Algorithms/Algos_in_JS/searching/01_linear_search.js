// Method 1 - By Iteration
function linearSearch(array, target) {
  let flag = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      flag = 1;
      break;
    }
  }
  if (flag === 1) {
    return true;
  } else {
    return false;
  }
}

console.log("\nMethod 1");
const array1 = [4, 1, -2, 1, 0];
console.log(linearSearch(array1, -2)); // true
console.log(linearSearch(array1, 0)); // true
console.log(linearSearch(array1, 7)); // false
console.log(linearSearch(array1, 55)); // false
console.log(linearSearch(array1, 1)); // true

// Method 2 - By Recursion
function lSearch(array, target, n) {
  // Base Case
  if (array[n - 1] === target) {
    return true;
  }
  if (n === 0) {
    return false;
  }
  // Hypothesis + Induction Step
  return lSearch(array, target, n - 1);
}

console.log("\nMethod 2");
const array2 = [4, 1, -2, 1, 0];
console.log(lSearch(array2, -2, array2.length)); // true
console.log(lSearch(array2, 0, array2.length)); // true
console.log(lSearch(array2, 7, array2.length)); // false
console.log(lSearch(array2, 55, array2.length)); // false
console.log(lSearch(array2, 1, array2.length)); // true
