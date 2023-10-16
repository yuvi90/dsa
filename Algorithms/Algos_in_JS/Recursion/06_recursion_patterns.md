[Back](./00_recursion.md)

# Patterns In Recursion

### Functional Recursion

```javascript
// This how function gives output to bigger problem broken down to smaller & smaller problem.
function sumOfn(n) {
  if (n < 1) return 0;
  let ans = n + sumOfn(n - 1);
  return ans;
}
sumOfn(5);
```

### Parameterized Recursion

```javascript
function sumOfn(n, sum) {
  if (n < 1) {
    console.log(sum);
    return;
  }
  sumOfn(n - 1, n + sum);
}
sumOfn(5, 0);
```

### Areas in Recursion

```javascript
function fn(n) {
  if (n === 0) {
    return;
  }
  /*
    Processing area before calling recursive function.
    Before adding to call stack.
    Used to processing data before recursive call. 
  */
  fn(n - 1);
  /*
    Processing area after recursive function on removing from call stack.
    After base case return. 
    Used to processing data before return values to main function or to backtrack.
  */
}
```

# Important Points to Remember

1. Solve one case or take one step rest recursion handles.
2. PMI Method (Hypothesis or Assume that your function works on problem on that assumption takes Induction Step or Build Solution)
3. Learn to draw recursive tree
4. Tree Patterns
   - PMI (Single Arm or Call Tree)
   - Forming solution by including or excluding choices (Multiple Recursion) eg. Subsequence Problem
   - Forming solution from Two Recursive Call (Multiple Recursion) eg. Fibonacci
   - Backtracking (Exploring All Choices and Find Valid Ones)
5. Recursion takes stack space

# Handle Return Values Effectively

#### `No return value in base case` : Exploring all recursive cases and add results to other data structure or prints.

It is also a parameterized recursion.

`Example 1`

```javascript
/*
  Array = [1,2,1]
  Find subsets whose sum = 2
*/

// Variation 1 - Solve for all available solutions
const array = [1, 2, 1];
const sumTarget = 2;
const solution = [];
solve(array, 0, 0, sumTarget, [], solution);
console.log(solution);

function solve(arr, index, sum, sumTarget, currentSubset, solution) {
  if (index > arr.length - 1) {
    if (sum === sumTarget) {
      solution.push([...currentSubset]);
    }
    return;
  }
  // Include Number
  currentSubset.push(arr[index]);
  sum += arr[index];
  solve(arr, index + 1, sum, sumTarget, currentSubset, solution);
  // Exclude Number
  sum -= arr[index];
  currentSubset.pop();
  solve(arr, index + 1, sum, sumTarget, currentSubset, solution);
}
```

#### `Boolean return value in base case` : Explore first occurrence of solution when it hits base case and add results to other data structure or prints and returns from the function.

`Important Point` : Make sure build a solution from value returned from base case.

`Example 1`

```javascript
// Variation 2 - Solve for first available solution
function solveForFirstOne(arr, index, sum, sumTarget, currentSubset, solution) {
  if (index > arr.length - 1) {
    if (sum === sumTarget) {
      solution.push([...currentSubset]);
      return true;
    } else return false;
  }
  // Include Number
  currentSubset.push(arr[index]);
  sum += arr[index];
  if (solveForFirstOne(arr, index + 1, sum, sumTarget, currentSubset, solution))
    return true;
  // Exclude Number
  sum -= arr[index];
  currentSubset.pop();
  if (solveForFirstOne(arr, index + 1, sum, sumTarget, currentSubset, solution))
    return true;

  return false;
}

array = [1, 2, 1];
sumTarget = 2;
solution = [];
solveForFirstOne(array, 0, 0, sumTarget, [], solution);
console.log("\nVariation 2\n", solution);
```

`Example 2`

```javascript
// Variation 3 - Count all available solutions
function solveForCount(arr, index, sum, sumTarget, currentSubset) {
  if (index > arr.length - 1) {
    if (sum === sumTarget) {
      return 1;
    } else return 0;
  }
  // Include Number
  currentSubset.push(arr[index]);
  sum += arr[index];
  let includeCount = solveForCount(
    arr,
    index + 1,
    sum,
    sumTarget,
    currentSubset
  );
  // Exclude Number
  sum -= arr[index];
  currentSubset.pop();
  let excludeCount = solveForCount(
    arr,
    index + 1,
    sum,
    sumTarget,
    currentSubset
  );

  return includeCount + excludeCount;
}

array = [1, 2, 1];
sumTarget = 2;
solution = solveForCount(array, 0, 0, sumTarget, []);
console.log("\nVariation 3\n", solution);
```
