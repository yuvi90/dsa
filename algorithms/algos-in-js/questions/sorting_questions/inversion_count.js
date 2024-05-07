function countInversions(array) {
  // Copying array because only need count don't want to sort array
  const arr = [...array];
  return divideSort(arr, 0, arr.length - 1);
}

const array = [5, 3, 2, 1, 4];
console.log(countInversions(array)); // 7

// Code Implementation
function divideSort(array, si, ei) {
  let count = 0;
  if (si >= ei) {
    return count;
  }
  const mi = Math.floor((si + ei) / 2);
  count += divideSort(array, si, mi);
  count += divideSort(array, mi + 1, ei);
  count += merge(si, ei, mi, array);
  return count;
}

function merge(si, ei, mi, array) {
  const merged = [];
  let count = 0;
  let aIndex = si;
  let bIndex = mi + 1;
  while (aIndex <= mi && bIndex <= ei) {
    if (array[aIndex] <= array[bIndex]) {
      merged.push(array[aIndex]);
      aIndex++;
    } else {
      count += mi - aIndex + 1;
      merged.push(array[bIndex]);
      bIndex++;
    }
  }
  while (aIndex <= mi) {
    merged.push(array[aIndex]);
    aIndex++;
  }
  while (bIndex <= ei) {
    merged.push(array[bIndex]);
    bIndex++;
  }
  for (let i = 0, j = si; i < merged.length; i++, j++) {
    array[j] = merged[i];
  }
  return count;
}
