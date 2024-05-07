[Back](./00_recursion.md)

# Base Case, Hypothesis, and Induction Step

It is essential when working with recursion. These concepts help you design, analyze, and prove the correctness of recursive algorithms.

**1. `Base Case`:**
The base case is the simplest scenario of the problem that can be directly solved without further recursion. It defines when the recursion should stop and provides a specific result. Base cases are crucial to prevent infinite recursion and ensure that the recursive function eventually terminates.

In mathematical terms, the base case serves as the foundation of your recursive algorithm. It establishes the starting point from which the solution can be built up through recursive calls. Without a base case, the recursion would continue indefinitely, leading to a stack overflow or incorrect results.

**2. `Hypothesis`:**
The hypothesis is an assumption that you make when using recursion. It states that your recursive function correctly solves smaller instances of the same problem. In other words, you assume that if you call your recursive function with smaller inputs (closer to the base case), it will correctly produce the expected result.

The hypothesis allows you to break down a complex problem into smaller, more manageable sub problems. By relying on the correctness of the function for smaller cases, you can then build up the solution for the larger problem.

**3. `Induction Step`:**
The induction step is the process of using the assumption (hypothesis) to prove that the recursive function works for a larger case. It involves showing that if your function works for one case, it also works for the next case. The induction step is crucial for establishing the validity of your recursive solution.

The induction step involves proving that if your recursive function works correctly for a certain size or configuration of the problem, it will also work for the next size or configuration. This step establishes the recursive relation between the problem and its smaller sub problems. It's a way of showing that if the hypothesis holds (i.e., the function works for smaller instances), then the function can also solve the larger problem by combining the results of the smaller sub problems.

In mathematical induction, the induction step often involves proving that if a statement is true for a specific value (say, \(k\)), then it must also be true for the next value (\(k + 1\)). Similarly, in recursive algorithms, the induction step shows that if the function correctly solves a problem for a smaller input (according to the hypothesis), it can also solve the problem for a larger input.

In summary:

- The base case provides a specific result for the simplest scenario and prevents infinite recursion.
- The hypothesis assumes that the recursive function works for smaller instances of the problem.
- The induction step uses the hypothesis to prove that the function works for the current instance by building on the solution of smaller sub problems.

<hr>

To illustrate these concepts, Let's explore a few more examples of recursive functions and how the hypothesis and induction step apply to each case:

**Example 1: `Fibonacci Sequence`**
The Fibonacci sequence is defined as follows: \(F(n) = F(n-1) + F(n-2)\) with base cases \(F(0) = 0\) and \(F(1) = 1\).

```javascript
function fibonacci(n) {
  // Base cases
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // Hypothesis: Assume fibonacci(n-1) and fibonacci(n-2) work correctly
  const fib1 = fibonacci(n - 1);
  const fib2 = fibonacci(n - 2);

  // Induction step: Use the assumption to calculate fibonacci(n)
  return fib1 + fib2;
}
```

In this example:

- `Hypothesis`: The assumption is that `fibonacci(n-1)` and `fibonacci(n-2)` work correctly (i.e., they produce the correct Fibonacci numbers for smaller indices).
- `Induction step`: We use the assumption to calculate `fibonacci(n)` by adding the results of `fibonacci(n-1)` and `fibonacci(n-2)`.

**Example 2: `Factorial`**
The factorial of a non-negative integer \(n\) is defined as \(n! = n \times (n-1)!\) with base case \(0! = 1\).

```javascript
function factorial(n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Hypothesis: Assume factorial(n-1) works correctly
  const smallerFactorial = factorial(n - 1);

  // Induction step: Use the assumption to solve factorial(n)
  return n * smallerFactorial;
}
```

In this example, the hypothesis is that the `factorial` function works correctly for `n-1`, and the induction step is using this assumption to solve `factorial(n)`.

- `Hypothesis`: We assume that `factorial(n-1)` works correctly (i.e., it calculates the factorial of `(n-1)` correctly).
- `Induction step`: We use the assumption to calculate `factorial(n)` by multiplying \(n\) with the result of `factorial(n-1)`.

These examples showcase how recursion involves the interplay between the hypothesis (assuming correctness for smaller cases) and the induction step (using the assumption to solve the current problem). Recursive functions build their solutions incrementally by relying on the correctness of the smaller sub problems.

<hr>

**Example 4: `Printing numbers to n`**

Let's explain the concepts of Base Case, Hypothesis, and Induction Step in the context of printing numbers from 1 to \(n\) using recursion.

**Printing Numbers from 1 to \(n\) Using Recursion:**

Here's the recursive function to print numbers from 1 to \(n\) using JavaScript:

```javascript
function printNumbers(n) {
  if (n > 0) {
    printNumbers(n - 1); // Hypothesis: Assume printNumbers(n-1) works correctly
    console.log(n); // Induction Step: Print the current number
  }
}

const n = 5;
printNumbers(n);
```

Now, let's break down the concepts:

**1. `Base Case`:**
In the context of printing numbers, the base case is when \(n\) becomes 0. When \(n\) reaches 0, the recursion stops, and the function doesn't make any more recursive calls. This is essential to prevent the function from running indefinitely and to ensure that each number is printed exactly once.

**2. `Hypothesis`:**
The hypothesis in this context is that the function `printNumbers(n-1)` works correctly and prints the numbers from 1 to \(n-1\) in the desired order. You assume that the recursive call to `printNumbers(n-1)` produces the expected output.

**3. `Induction Step`:**
The induction step involves combining the assumption (hypothesis) with the current step to achieve the desired result. In this case, the induction step consists of two parts:

- First, the recursive call `printNumbers(n - 1)` follows the assumption and prints the numbers from 1 to \(n-1\) in the correct order.
- Second, after the recursive call, the line `console.log(n)` prints the current number \(n\), completing the induction step.

Putting it all together, as the recursion unfolds:

1. The function starts with the base case when \(n = 0\) and stops.
2. Then, for each \(n\) from 1 to \(n\), it performs the recursive call and prints the current number.

The base case ensures that the recursion stops, the hypothesis allows you to build the solution for \(n\) by assuming correctness for smaller cases, and the induction step combines the assumption with the current step to achieve the desired output.

When you run `printNumbers(5)`, the output will be:

```
1
2
3
4
5
```

This demonstrates how these three concepts work together to solve the problem of printing numbers from 1 to \(n\) using recursion.

<hr>

**Example 5: `Tower of Hanoi`**

The Tower of Hanoi is a classic puzzle that involves moving a tower of disks from one peg to another, using a third peg as an auxiliary, following certain rules:

1. Only one disk can be moved at a time.
2. Each move consists of taking the top disk from one of the stacks and placing it on top of another stack or on an empty peg.
3. No disk may be placed on top of a smaller disk.

To solve the Tower of Hanoi problem recursively, we can follow these steps:

**1. `Base Case`:**
If there's only one disk, we can directly move it from the source peg to the destination peg.

**2. `Recursive Hypothesis`:**
Assume we can solve the Tower of Hanoi problem for \(n-1\) disks, i.e., we can move the top \(n-1\) disks from the source peg to the auxiliary peg, using the destination peg as the auxiliary.

**3. `Induction Step`:**
To solve the problem for \(n\) disks, we follow these steps:

- Move the top \(n-1\) disks from the source peg to the auxiliary peg (using the destination peg as the auxiliary).
- Move the nth disk from the source peg to the destination peg.
- Move the \(n-1\) disks from the auxiliary peg to the destination peg (using the source peg as the auxiliary).

Here's how this recursive solution looks in JavaScript:

```javascript
function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

const numDisks = 3;
towerOfHanoi(numDisks, "A", "B", "C");
```

In this example:

- `towerOfHanoi` is the recursive function that takes the number of disks, source peg, auxiliary peg, and destination peg as parameters.
- The base case (n === 1) directly moves the disk from the source peg to the destination peg.
- The recursive steps involve solving the problem for \(n-1\) disks using the auxiliary peg, moving the nth disk, and then solving the problem for \(n-1\) disks again.

When you run this code with `numDisks` set to 3, it will output the sequence of moves needed to solve the Tower of Hanoi puzzle with 3 disks. The recursive nature of the solution becomes evident as you see how the problem is broken down into smaller sub problems and then combined to solve the entire puzzle.
