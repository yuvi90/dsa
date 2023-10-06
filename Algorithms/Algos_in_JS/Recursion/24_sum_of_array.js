/*
  Sum of integers in array using recursion
  input : [2,3,5]
  output: 10
*/
const array = [2, 3, 5];
console.log(sum(array, array.length));

function sum(array, n) {
  // Base Case
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return array[0];
  }
  // Hypothesis
  const smallAns = sum(array, n - 1);
  // Induction Step
  return array[n - 1] + smallAns;
}
