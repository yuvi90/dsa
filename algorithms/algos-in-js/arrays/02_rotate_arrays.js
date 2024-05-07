/*
  Example 1:
  Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
  Output: 6 7 1 2 3 4 5
  Explanation: array is rotated to right by 2 position .

  Example 2:
  Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
  Output: 9 10 11 3 7 8
  Explanation: Array is rotated to right by 3 position.
*/

function method1() {
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  let numbers = [3, 7, 8, 9, 10, 11];
  let n = numbers.length;
  let k = 4;
  let direction = "left";
  rotate(numbers, n, k, direction);

  function rotate(nums, n, k, direction) {
    if (n === 1) return numbers;
    let temp = [];
    if (direction == "left") {
      for (let i = n - k; i < n; i++) {
        temp.push(nums[i]);
      }
      for (let i = 0; i < n - k; i++) {
        temp.push(nums[i]);
      }
    }
    if (direction == "right") {
      for (let i = k; i < n; i++) {
        temp.push(nums[i]);
      }
      for (let i = 0; i < k; i++) {
        temp.push(nums[i]);
      }
    }
    console.log(temp.join(" "));
  }
}

method1();

function method2() {
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  let numbers = [3, 7, 8, 9, 10, 11];
  let n = numbers.length;
  let k = 4;
  let direction = "left";
  rotateLeft(numbers, n, k, direction);

  function rotateLeft(nums, n, k) {
    if (n === 1) return numbers;
    let i = 0;
    let j = n - k;

    while (i < k && j < n) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
    }
    j = n - k;
    while (i < n - k) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
    }

    console.log(numbers.join(" "));
  }
}

method2();

// Method 3 it can also done by reversal approach.
// [3,7,8,9,10,11] k=3
// [8,7,3] Reverse numbers till k
// [11,10,9] Reverse number after k
// [9,10,11,3,7,8] Reverse whole array
