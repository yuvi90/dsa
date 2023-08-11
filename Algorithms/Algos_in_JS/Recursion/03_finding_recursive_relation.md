[Back](./00_recursion.md)

# Recursive Relation

Finding a recursive relation involves identifying the relationship between the terms of a sequence or function in terms of previous terms. Recursive relations are often used to define sequences or functions where each term depends on one or more previous terms. Here's a step-by-step approach to finding a recursive relation:

**1. Understand the Problem:**

- Clearly understand the problem or sequence you're working with. Determine what each term represents and how it's related to previous terms.

**2. Identify Base Cases:**

- Determine the initial terms of the sequence that are given explicitly. These are the base cases that provide a starting point for the recursion.

**3. Observe the Pattern:**

- Examine the given sequence or problem to identify patterns in how each term is related to previous terms. Look for relationships that involve addition, subtraction, multiplication, division, or other mathematical operations.

**4. Express the Recursive Relation:**

- Write down an equation that defines the current term in terms of one or more previous terms. This equation should capture the pattern you observed.

**5. Verify the Base Cases:**

- Make sure the recursive relation holds true for the base cases you identified. If it doesn't, you may need to revise the relation.

**6. Test the Recursive Relation:**

- Use the recursive relation to calculate additional terms of the sequence or function and compare the results to the actual values. This helps ensure the relation accurately represents the pattern.

**7. Consider Time Complexity:**

- Analyze the efficiency of the recursive relation, particularly if you're implementing it in a program. Recursive relations can lead to exponential time complexity in some cases.

**Example: Fibonacci Sequence:**
Consider the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...

1. **Understand the Problem:** The Fibonacci sequence is a sequence where each term is the sum of the two preceding terms.

2. **Identify Base Cases:** The base cases are F(0) = 0 and F(1) = 1.

3. **Observe the Pattern:** Each term is the sum of the two previous terms: F(n) = F(n-1) + F(n-2).

4. **Express the Recursive Relation:** F(n) = F(n-1) + F(n-2).

5. **Verify the Base Cases:** For n = 0 and n = 1, F(0) = 0 and F(1) = 1, which matches the base cases.

6. **Test the Recursive Relation:** Calculate F(2) using the relation: F(2) = F(1) + F(0) = 1 + 0 = 1, which matches the sequence.

7. **Consider Time Complexity:** Calculating Fibonacci numbers using this recursive relation can be inefficient for large values of n due to repeated calculations. Memoization or dynamic programming can be used to optimize the calculation.

Keep in mind that not all sequences or functions can be easily defined using a recursive relation. In some cases, other methods or techniques may be more suitable.
