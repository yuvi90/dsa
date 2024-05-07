function secondMinMax(arr) {
  if (arr.length < 2) return -1;

  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let firstMin = Infinity;
  let secondMin = Infinity;

  for (let num of arr) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax && num !== firstMax) {
      secondMax = num;
    }

    if (num < firstMin) {
      secondMin = firstMin;
      firstMin = num;
    } else if (num < secondMin && num !== firstMin) {
      secondMin = num;
    }
  }

  console.log(`Min: ${secondMin}\nMax: ${secondMax}`);
}

let numbers = [3, 4, 5, 2];
secondMinMax(numbers);
