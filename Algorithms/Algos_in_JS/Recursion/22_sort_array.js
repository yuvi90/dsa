/*
  Sort Array recursively
*/

const array = [1, 3, 5, 2];
console.log(sort(array));

function sort(array) {
  // Base Case
  if (array.length === 1) {
    return array;
  }
  // Hypothesis
  const temp = array.pop();
  sort(array);
  // Induction Step
  insert(array, temp);
  return array;
}

function insert(array, number) {
  // Base Case
  if (array.length === 0 || array[0] >= number) {
    array.unshift(number);
    return array;
  } else if (array[array.length - 1] <= number) {
    array.push(number);
    return array;
  }
  // Hypothesis
  const temp = array.pop();
  insert(array, number);
  // Induction Step
  array.push(temp);
  return array;
}
