/*
  Linear Search using recursion

  Input : [2,5,8,0]
  Output : true / false
*/

const array = [2, 5, 8, 0];
console.log(linearSearch(array, 5, array.length));
console.log(linearSearch(array, -1, array.length));
console.log(linearSearch(array, 0, array.length));
console.log(linearSearch(array, 2, array.length));
console.log(linearSearch(array, 1, array.length));

function linearSearch(array, target, n) {
  // Base Case
  if (n === 0) {
    return false;
  }
  if (array[n - 1] === target) {
    return true;
  }
  // Hypothesis + Induction Step
  return linearSearch(array, target, n - 1);
}
