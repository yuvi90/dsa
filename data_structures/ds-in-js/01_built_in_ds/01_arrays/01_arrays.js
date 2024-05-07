const arr = [1, 2, "data"];

// Adding item from the last Ω(1) Best Case
arr.push(3);
// Removing item from the last Ω(1) Best Case
arr.pop();
// Adding item from the last O(n) Worst Case
arr.unshift(5);
// Removing item from the last O(n) Worst Case
arr.shift();

// Output
console.log(arr);

// Iterating O(n)
for (const item of arr) {
  console.log(item);
}
