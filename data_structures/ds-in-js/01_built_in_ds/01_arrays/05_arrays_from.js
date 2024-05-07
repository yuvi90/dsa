/*
  Array.prototype.entries()

  The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.
*/
console.log("\nEntries Method:");
const iterator1 = ["a", "b", "c"].entries();
console.log(iterator1);
console.log(iterator1.next().value);
// Expected output: Array [0, "a"]
console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

/*
  Array.prototype.reverse()

  The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

  To reverse the elements in an array without mutating the original array, use toReversed().
*/
console.log("\nReverse Method:");
const reversed = ["one", "two", "three"].reverse();
console.log(reversed);
// Careful: reverse is destructive -- it changes the original array.

/*
  Array.of()

  The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments. 
  Array.of()
  Array.of(element0)
  Array.of(element0, element1)
  Array.of(element0, element1,....,elementN)
*/
console.log("\nOf Method:");
console.log(Array.of("foo", 2, "bar", true));
console.log(Array.of());
// Expected output: Array []

/*
  Array.prototype.copyWithin()

  The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
  
  copyWithin(target, start)
  copyWithin(target, start, end)

*/
console.log("\nCopyWithIn Method:");
const array1 = ["a", "b", "c", "d", "e"];
// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
