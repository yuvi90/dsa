//----FOREACH WORKS AS LOOPS
console.log("\nForEach Method:");
["guitar", "drawing", "code"].forEach((element, index) => {
  console.log(`index = ${index} and element = ${element}`);
});

//----MAP RETURNS MODIFIED ARRAY
console.log("\nMap Method:");
const num = [5, 6, 7, 12, 8, 3, 4, 61];
const doubleNum = num.map((element) => element * 2);
console.log(doubleNum);

//----FILTER RETURNS NEW ARRAY ON CERTAIN CONDITION
console.log("\nFilter Method:");
const smallerNum = num.filter((element) => element > 10);
console.log(smallerNum);

//----REDUCE
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

//---- Find IT RETURNS FIRST ELEMENT OF ARRAY OF PROVIDING CONDITION
// IF NO ELEMENTS SATISFY CONDITION IT RETURN UNDEFINED
console.log("\nFind Method:");
let found1 = [5, 6, 7, 12, 8, 3, 4, 61].find((element) => element > 10);
console.log(found1);

//---- FIND INDEXOF IT RETURNS INDEX OF FIRST ELEMENT OF ARRAY OF PROVIDING CONDITION
// IF NO ELEMENTS SATISFY CONDITION IT RETURN -1
console.log("\nFind Index Method:");
let found2 = [5, 6, 7, 12, 8, 3, 4, 61].findIndex((element) => element > 10);
console.log(found2);

//---- SOME & EVERY CHECKS CONDITION RETURNS TRUE/FALSE
console.log("\nSome & Every Method:");
const rating = [2, 5, 5, 6, 4, 7, 89, 3];
console.log(rating.some((element) => element > 100));
console.log(rating.some((element) => element > 50));
console.log(rating.every((element) => element > 50));
console.log(rating.every((element) => element < 100));
