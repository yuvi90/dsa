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

  This code only explores one solution as function will return true as soon as it finds one valid path, and it will backtrack without exploring other potential paths. This means it will find only one solution, if it exists, but it won't explore all solutions.
*/

function solveMaze(maze, x, y, sol, n) {
  // Base Case
  if (x == n - 1 && y == n - 1) {
    sol[x][y] = 1;
    return true;
  }

  if (isSafe(maze, x, y, n)) {
    sol[x][y] = 1;
    //x - direction downwards
    if (solveMaze(maze, x + 1, y, sol, n)) return true;

    //y - direction forwards
    if (solveMaze(maze, x, y + 1, sol, n)) return true;

    // Backtrack
    sol[x][y] = 0;
    return false;
  }
}

function isSafe(maze, x, y, n) {
  return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 1;
}

const maze = [
  [1, 1, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 1],
];

const sol = [];

for (let i = 0; i < maze.length; i++) {
  sol.push(new Array(maze.length).fill(0));
}

console.log(sol);

solveMaze(maze, 0, 0, sol, maze.length);

console.log(sol);
