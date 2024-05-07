/*
  Check if array is sorted using recursion
*/

function isSorted(array, n) {
  // Base Cases
  if (n === 1 || n === 0) {
    return true;
  }
  if (array[n - 1] < array[n - 2]) {
    return false;
  }
  // Hypothesis
  const result = isSorted(array, n - 1);

  // Induction Step
  return result;
}

const a = [1, 2, 3, 4, 5];
console.log(isSorted(a, a.length));
const b = [1, 3, 2, 4, 5];
console.log(isSorted(b, b.length));
const c = [1, 2, -3, 4, 5];
console.log(isSorted(c, c.length));
const d = [-2, -1, 0, 2, 8, 10];
console.log(isSorted(d, d.length));
