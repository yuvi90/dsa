const arr = [1, 2, "data"];

arr.push(3); // Ω(1) Best Case
arr.pop(); // Ω(1) Best Case
arr.shift(); // O(n) Worst Case
arr.unshift(5); // O(n) Worst Case
