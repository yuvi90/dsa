[Back](./00_recursion.md)

# Types of Recursion:

**1. Direct Recursion:**
The most common type of recursion, where a function directly calls itself.

```javascript
function countdown(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);
// Output: 5 4 3 2 1
```

**2. Indirect Recursion:**
A group of functions call each other in a circular manner.

```javascript
function foo(n) {
  if (n > 0) {
    console.log("foo: " + n);
    bar(n - 1);
  }
}

function bar(n) {
  if (n > 0) {
    console.log("bar: " + n);
    foo(n - 1);
  }
}

foo(3);
// Output: foo: 3 bar: 2 foo: 1
```

**3. Tail Recursion:**
The recursive call is the last operation before the function returns.

```javascript
function factorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }
  return factorial(n - 1, n * acc);
}

console.log(factorial(5));
// Output: 120
```

**4. Non-Tail Recursion:**
The recursive call is followed by additional operations.

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
// Output: 5
```

**5. Nested Recursion:**
The recursive call involves a nested recursive call.

```javascript
function nested(n) {
  if (n > 100) {
    return n - 10;
  }
  return nested(nested(n + 11));
}

console.log(nested(50));
// Output: 91
```

**6. Tree Recursion:**
Each recursive call leads to multiple recursive calls.

```javascript
function tree(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  tree(n - 1);
  tree(n - 1);
}

tree(3);
// Output: 3 2 1 1 2 1 1
```

These examples illustrate different types of recursion and how they manifest in various problems. Keep in mind that the choice of recursion type depends on the nature of the problem and the most appropriate way to approach it recursively.
