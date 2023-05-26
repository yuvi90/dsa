/*
    Backtracking is a general algorithmic technique used to systematically explore all possible solutions to a problem by incrementally building a solution and undoing the choices that lead to a dead end. It is particularly useful for solving combinatorial problems where the solution space is too large to be exhaustively searched.

    The basic idea behind backtracking is to explore a solution space recursively, making choices at each step, and backtracking when a choice leads to an invalid or unsuccessful solution. It involves depth-first search traversal of a tree-like search space, where each node represents a partial solution.

    Here's a general overview of how backtracking works:

    - Define the problem space: Identify the problem and define the constraints and rules for finding a solution.

    - Formulate the problem as a decision tree: Represent the problem as a tree structure, where each node represents a partial solution and each edge represents a choice or decision.

    - Explore the search space: Start at the root of the tree and recursively explore the tree by making choices at each node. If a choice leads to a valid solution, accept it and move to the next node. If a choice leads to an invalid solution or fails to satisfy the problem constraints, backtrack to the previous node and try a different choice.

    - Apply pruning and optimization techniques: During the exploration, incorporate pruning and optimization techniques to avoid unnecessary computations and reduce the search space. This can help improve the efficiency of the backtracking algorithm.

    - Termination condition: Continue the exploration until all possible solutions have been found or until a termination condition is met (e.g., a specific number of solutions have been found).

    Backtracking can be implemented using recursion, where each recursive call represents a decision point and the termination condition represents the base case of the recursion.

    Backtracking is used to solve a wide range of problems, including permutations, combinations, graph problems (such as Hamiltonian paths and graph coloring), Sudoku, N-Queens, and more. It is a powerful technique that allows for an exhaustive search of the solution space while avoiding the need to explicitly examine every possible solution.

    However, it's important to note that backtracking can have exponential time complexity in the worst case, as it may need to explore all possible solutions. Therefore, it is often beneficial to incorporate additional pruning or optimization techniques to improve the efficiency of the algorithm.
*/

/*
    Permutation Problem Statement:-
        - Arrange "ABC" in possible different ways 
        - N Factorial Solutions i.e. 3 x 2 x 1 = 6 Possible Solutions 
        - Time Complexity = O(n*n!)
*/

function getPossibleArrangements(str, perm, idx) {
    if (str.length == 0) {
        console.log(perm);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        let newString = str.substring(0, i) + str.substring(i + 1);
        getPossibleArrangements(newString, perm + currChar, idx + 1);
    }
}

let string = "ABC";
getPossibleArrangements(string, '', 0)