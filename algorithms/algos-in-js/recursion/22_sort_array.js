/*
  Sort Array recursively
*/

const array = [1, 3, 5, 2];
sort(array);
console.log(array);

function sort(array) {
  // Base Case
  if (array.length === 1) {
    return;
  }
  // Hypothesis
  const lastItem = array.pop();
  sort(array);
  // Induction Step
  insert(array, lastItem);
}

function insert(array, number) {
  // Base Case
  if (array.length === 0 || array[array.length - 1] <= number) {
    array.push(number);
    return;
  }
  // Hypothesis
  const lastItem = array.pop();
  insert(array, number);
  // Induction Step
  array.push(lastItem);
}
