# Divide and Conquer

**Divide and Conquer** is a problem-solving paradigm in computer science and mathematics that involves breaking down a complex problem into smaller, more manageable subproblems, solving them independently, and then combining their solutions to solve the original problem. This approach is particularly effective for solving problems that can be divided into similar or identical subproblems, and it often leads to efficient algorithms for a wide range of problems.

There are also many problems that humans naturally use divide and conquer approaches to solve, such as sorting a stack of playing cards or looking for a phone number in a phone book.

### Steps

The general approach of Divide and Conquer can be summarized in three steps:

1. **Divide**: Break the original problem into smaller, related subproblems. This division can be done recursively until the subproblems are simple enough to be solved directly. Each subproblem should be a smaller instance of the original problem.

2. **Conquer**: Solve each of the subproblems independently. If the subproblems are simple enough, they can be solved directly. If not, the Divide and Conquer approach is applied again to solve these sub-subproblems.

3. **Combine**: Combine the solutions of the subproblems to obtain the solution for the original problem. This step typically involves merging or aggregating the subproblem solutions.

### Identification

To apply the Divide and Conquer approach, you need to identify certain characteristics in the problem:

1. **Overlapping Subproblems**: The problem can be divided into subproblems that are smaller instances of the same problem.

2. **Optimal Substructure**: The solution to the original problem can be constructed from the solutions of its subproblems.

3. **Reduction in Problem Size**: By dividing the problem into smaller subproblems, the overall problem size reduces with each step.

Divide and Conquer is often used to solve problems like sorting (e.g., merge sort, quicksort), searching (e.g., binary search), matrix multiplication (e.g., Strassen's algorithm), and more complex problems like the fast Fourier transform.

When identifying problems suitable for the Divide and Conquer approach, look for patterns where a problem can be broken down into smaller instances of the same problem.

`Some indicators include`:

- The problem size can be significantly reduced by splitting it into smaller parts.
- The problem exhibits a recursive structure.
- There is a way to combine the solutions of subproblems to obtain the solution for the original problem.
- The problem is naturally divided into independent parts that can be solved separately.

### Conclusion

In summary, Divide and Conquer is a powerful problem-solving technique that involves breaking down complex problems into smaller, more manageable subproblems, solving them independently, and then combining their solutions. It is effective for problems with overlapping subproblems, optimal substructure, and a potential reduction in problem size through division.

# Examples

Divide and conquer can be done in three broad steps, `divide` (into sub problems), `conquer` (by solving the sub problems), and `combine` (the answers to solve the original problem). Divide and conquer has a recursive step, where sub problems are solved, and a base case, which is the point where the problem can't be broken down any further.

`Example :`

How do you order a deck of cards?

There are many examples of problems for which humans naturally take a divide and conquer approach. Let’s say you have a stack of playing cards that you want to put in order. Sorting the entire deck is the original problem, but we can break this into sub problems by comparing only some of the cards at a time.

To do this, take the first and second card from the unsorted deck and sort those. Take another card from the unsorted deck and sort that into the sorted deck. Keep doing this until the entire deck has been sorted. Here, we divide into sub problems by sorting only some of the cards at once. At each step, we take one card from the unsorted list (the divide step), and put it into the sorted list (this makes up both the conquer and combine steps).

`Divide`:
The divide step breaks the original problem into sub problems that are smaller instances of the original problem.

`Conquer`:
The conquer step solves the sub problems recursively.

`Combine`:
The combine step puts the solved sub problems together to solve the original problem.

## Decrease and Conquer

There is a variation of divide and conquer where the problem is reduced to one subproblem. Binary search is a popular example that uses decrease and conquer. Binary search looks through a sorted list to see if a desired element is in the list. It does this efficiently by halving the search space during each iteration of the program. Basically, binary search finds the middle of the list, asks “is the element I’m looking for larger or smaller than this?” and then cuts the list in half and searches only in the left list if the element is smaller, and the right list if the element is bigger. It repeats this process until it finds the element it is looking for (or reports back that the element isn’t in the list at all).

`Example :`

Describe how you would use decrease and conquer approach to find page 88 in a 350 page textbook.

Open the book to any page. If the page you’ve opened to is greater than 88, flip some number of pages toward the beginning of the book (and some number of pages toward the end of the book if the page number is smaller than 88). Now look at the new page number you’ve turned to. If the number is less than 88, flip some amount toward the end of the book (the amount you flip by should decrease with each iteration, since you don’t want to lose progress by overshooting), and if the number is greater than 88, flip some number of pages toward the beginning of the book. Repeat until you find page 88.

Using Divide and Conquer
How to use divide and conquer:

Given a problem, identify a number of significantly smaller sub problems.
Solve each subproblem recursively (do this until the subproblem is a base-case).
Combine these solutions into a solution for the main problem.
