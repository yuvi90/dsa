/*
 *
 * IMPORTANT METHODS OF ARRAYS
 *
 */

// Adding Elements ---- push--unshift
console.log("\nAdding and Removing Methods:");
const hobbies = ["guitar", "drawing", "code"];
hobbies.push("gym"); //adds at last - O(1)
hobbies.unshift("music"); //adds at first - O(n)
console.log(hobbies);

// Removing Elements ---- pop--shift
hobbies.pop(); //removes at last - O(1)
hobbies.shift(); //removes at first - O(n)
console.log(hobbies);

// Length Property
console.log("\nLength:");
console.log(hobbies.length);

// Concat and returns new array
console.log("\nConcat Method:");
const concat = [1, 2, 3, 4].concat([5, 6, 7, 8]);
console.log(concat);

// Finding first occurrence of item's index - O(n)
// Returns index or -1 if not present
console.log("\nIndexOf Method:");
console.log(["basketball", "code", "drawing"].indexOf("code"));
console.log(["basketball", "code", "drawing"].indexOf("music"));

// Is item included in array
// Returns boolean
console.log("\nIncludes Method:");
console.log(["basketball", "code", "drawing"].includes("gym"));
console.log(["basketball", "code", "drawing"].includes("code"));

/*
  The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
  
  slice()
  slice(start)
  slice(start, end)
*/
console.log("\nSlice Method:");
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

/*
  The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

  To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced().

  splice(start)
  splice(start, deleteCount)
  splice(start, deleteCount, item0)
  splice(start, deleteCount, item0, item1)
  splice(start, deleteCount, item0, item1,....,itemN)
*/
console.log("\nSplice Method:");
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Sorting
console.log("\nSort Method:");
console.log("For Strings");
const sort = ["Jan", "Feb", "March", "April", "May"].sort();
console.log(sort);

console.log("For Numbers");
const num = [5, 6, 7, 12, 8, 3, 4, 61];
num.sort(); //NOT WORK PROPERLY IN NUMBERS
console.log(num);
num.sort((a, b) => a - b); //SOLUTION SORT TAKES CALLBACK
console.log(num); //Ascending
num.sort((a, b) => b - a);
console.log(num); //Descending

/**
 *  The join() method creates and returns a new string by concatenating all of the    elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
 *
 * join() , join(separator)
 */
console.log("\nJoin Method:");
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
