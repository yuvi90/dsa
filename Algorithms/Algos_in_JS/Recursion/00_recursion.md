# Recursion

Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller instances of the same problem. In other words, recursion involves solving a problem by solving smaller versions of the same problem.

A recursive function typically includes two essential components:

1. **`Base Case`:** A termination condition that defines when the recursion should stop. It's the simplest scenario of the problem that can be solved directly without further recursion. The base case ensures that the recursive function eventually terminates and prevents infinite recursion.

2. **`Recursive Step`:** A part of the function that involves making one or more recursive calls to itself with modified arguments. The recursive step breaks down the original problem into smaller sub problems, which are then solved recursively. These smaller sub problems are expected to lead to the base case eventually.

The process of recursion involves repeatedly applying the recursive step, making the problem size smaller with each iteration, until the base case is reached. At that point, the function begins to "unwind" the recursive calls, combining the solutions of the smaller sub problems to solve the original problem.

Recursion is a powerful and elegant technique used to solve problems that exhibit self-similarity or can be naturally divided into smaller instances. It's commonly used in computer science and programming to solve a wide range of problems, including mathematical calculations, searching, sorting, tree traversal, and more. However, it's important to design recursive functions carefully, considering base cases, termination conditions, and potential efficiency concerns.

# Identification

1. Problem will always be breakable... into sub problems exactly identical to the original problem but smaller that the original problem.
2. There will always be a base case.

# Approach

1. Know what your function should do.
2. Pick a sub problem and just `assume` that your function already works on it.
3. Using the value returned from the previous problem to construct the solution of original problem.
4. Identify the base condition.

# Approaching Recursion Effectively

It involves understanding its principles and recognizing patterns in problems that can be solved recursively. Here's a step-by-step guide on how to approach recursion and identify recursion problems:

**1. Understand Recursion:**

- Recursion is a programming technique where a function calls itself to solve smaller instances of a problem.
- It involves breaking down a complex problem into smaller sub problems that are solved recursively.
- Recursive functions have two components: base case(s) and a recursive case.

**2. Identify Base Cases:**

- Base cases are the simplest scenarios of the problem that can be directly solved without recursion.
- They provide the termination condition for the recursive calls, preventing infinite recursion.
- Base cases typically represent the trivial or smallest instance of the problem.

**3. Define Recursive Case:**

- The recursive case involves breaking down the problem into smaller sub problems.
- The function calls itself with modified input, moving towards the base cases.
- Each recursive call should make progress towards the base case, ensuring that the problem becomes simpler with each step.

**4. Solve Smaller Sub problems:**

- Trust that the recursive calls will eventually reach the base cases and return the correct values.
- Solve the sub problems by making the recursive calls and utilizing their results.
- Combine the results of sub problems to solve the larger problem.

**5. Ensure Progress Toward Base Case:**

- Ensure that the parameters passed to recursive calls move closer to the base cases.
- If parameters do not change with each recursive call, you risk infinite recursion.
- Making inputs smaller.

**6. Visualize the Call Stack:**

- Visualize how the recursive calls are stacked in memory, helping you understand the flow of execution.
- Each recursive call adds a new frame to the call stack, and base cases lead to frames being removed.

**7. Avoid Redundant Work:**

- Use techniques like memoization (caching) to avoid recalculating results for the same subproblem multiple times.

**8. Practice Recognizing Recursion Problems:**

- Look for problems that can be naturally divided into smaller, similar sub problems.
- Common patterns that indicate recursion include divide and conquer, tree structures, and backtracking.

**9. Examples of Recursion Patterns:**

- Tree Traversal (pre-order, in-order, post-order)
- Factorial and Fibonacci calculations
- Combining results of sub problems (e.g., merging sorted arrays)
- Depth-First Search (DFS) in graphs
- Backtracking problems (e.g., generating permutations, subsets)

**10. Study Existing Solutions:**

- Study solutions to known recursive problems to gain insight into how recursion is applied effectively.

Remember that practice is key to becoming proficient in solving recursion problems. Start with simpler problems and gradually work your way up to more complex ones. As you gain experience, you'll become better at identifying when recursion is a suitable approach and how to design recursive solutions.

## Different Approaches

- Base Case, Recursion Hypothesis, Induction Step
- Draw Decision Tree
- Draw Choices Tree

## Learn More:

- [Types of Recursion](./01_types_of_recursion.md)
- [Identify Recursion Problems](./02_identify_recursion.md)
- [Finding Recursive Relation](./03_finding_recursive_relation.md)
- [Relation between PMI and Recursion](./04_pmi_and_recursion.md)
- [Base Case, Recursion Hypothesis, Induction Step](./05_bhi.md)
- [Recursion Questions](./06_recursion_questions.md)
