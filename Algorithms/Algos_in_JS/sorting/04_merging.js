/*
    Merging Two Sorted Arrays

    eg. 
    [1,4,5] + [3,6,8,10] => [1,3,4,5,6,8,10]
*/

let arr_1 = [1, 4, 5];
let arr_2 = [3, 6, 8, 10];

// O(n) Time & Space Complexity
function merge(arr_1, arr_2) {
  let merged_array = [];
  let i = 0;
  let j = 0;

  while (i < arr_1.length && j < arr_2.length) {
    if (arr_1[i] < arr_2[j]) {
      merged_array.push(arr_1[i]);
      i++;
    } else {
      merged_array.push(arr_2[j]);
      j++;
    }
  }

  while (i < arr_1.length) {
    merged_array.push(arr_1[i]);
    i++;
  }

  while (j < arr_2.length) {
    merged_array.push(arr_2[j]);
    j++;
  }

  return merged_array;
}

console.log(merge(arr_1, arr_2));
