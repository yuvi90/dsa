// Print numbers 1 to 10 (ascending and descending order)

function numbersIncreasingOrder(n) {
  if (n === 0) {
    return;
  }
  numbersIncreasingOrder(n - 1);
  console.log(n);
}

function numbersDecreasingOrder(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  numbersDecreasingOrder(n - 1);
}

numbersIncreasingOrder(10);
numbersDecreasingOrder(10);
