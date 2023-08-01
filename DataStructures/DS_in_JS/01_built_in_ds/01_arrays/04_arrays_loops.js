/*

  The Array.forEach(callback) method executes a provided function once for each array element. 

*/
console.log("\nForEach Method:");
["guitar", "drawing", "code"].forEach((element, index) => {
  console.log(`index = ${index} and element = ${element}`);
});

/*

  The Array.map(callback) method creates a new array populated with the results of calling a provided function on every element in the calling array.

*/
console.log("\nMap Method:");
const num = [5, 6, 7, 12, 8, 3, 4, 61];
const doubleNum = num.map((element) => element * 2);
console.log(doubleNum);

/*

  Array.filter(callback) returns new array on certain condition.
  Return element of previous array on certain condition.

*/
console.log("\nFilter Method:");
const smallerNum = num.filter((element) => element > 10);
console.log(smallerNum);

/*

  The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

  The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0). 

*/
console.log("\nReduce Method:");
// Example 1
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
// Expected output: 10

// Example 2
const totalNum = num.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 0);
console.log(totalNum);

/*

  Array.find(callback) returns first element of array of provided condition.
  If no elements satisfies conditions it returns undefined.
 
 */
console.log("\nFind Method:");
let found1 = [5, 6, 7, 12, 8, 3, 4, 61].find((element) => element > 10);
console.log(found1);

/*

  Array.findIndex(callback) returns index of first element of array of providing condition.
  If no elements satisfies condition it returns -1.
 
 */
console.log("\nFind Index Method:");
let found2 = [5, 6, 7, 12, 8, 3, 4, 61].findIndex((element) => element > 10);
console.log(found2);

/*

  Array.some(callback) & Array.every(callback) checks condition returns true / false.

*/
console.log("\nSome & Every Method:");
const rating = [2, 5, 5, 6, 4, 7, 89, 3];
console.log(rating.some((element) => element > 100));
console.log(rating.some((element) => element > 50));
console.log(rating.every((element) => element > 50));
console.log(rating.every((element) => element < 100));
