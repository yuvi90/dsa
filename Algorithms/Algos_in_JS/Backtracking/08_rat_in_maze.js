/*
  Rat in the Maze

  [
    [1, 1, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 1, 1, 1],
  ]

  (x,y) = (0,0)
  Find way to get to the (x,y) == n-1 

  This code only explores all solutions.
*/

function solve(maze, x, y, n, answer, solution) {
  // Base Case
  if (x === n && y === n) {
    answer[x][y] = 1;
    // Deep copy of answer matrix
    solution.push([...answer.map((row) => [...row])]);
    answer[x][y] = 0;
    return;
  }
  if (isValidStep(x, y, n, maze)) {
    answer[x][y] = 1;
    // x direction
    solve(maze, x + 1, y, n, answer, solution);
    // y direction
    solve(maze, x, y + 1, n, answer, solution);
    // Backtrack
    answer[x][y] = 0;
  }
}

function isValidStep(x, y, n, maze) {
  return x >= 0 && y >= 0 && x <= n && y <= n && maze[x][y] === 1;
}

const maze = [
  [1, 1, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 1],
];

const answer = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const solution = [];
solve(maze, 0, 0, maze.length - 1, answer, solution);
console.log(solution);
