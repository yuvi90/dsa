function solve(maze, n) {
  let visited = new Array(n).fill("").map(() => new Array(n).fill(false));
  let path = "";
  let answer = [];
  solving(maze, 0, 0, n, visited, path, answer);
  if (answer.length === 0) {
    return "No path";
  } else {
    return answer.join(" ");
  }
}

function solving(maze, x, y, n, visited, path, answer) {
  // Base Case
  if (x === n - 1 && y === n - 1) {
    answer.push(path);
    return;
  }
  visited[x][y] = true;
  // Down
  let newX = x + 1;
  let newY = y;

  if (isValidStep(newX, newY, n, maze, visited)) {
    path = path + "D";
    solving(maze, newX, newY, n, visited, path, answer);
    path = path.slice(0, -1);
  }
  // Right
  newX = x;
  newY = y + 1;

  if (isValidStep(newX, newY, n, maze, visited)) {
    path = path + "R";
    solving(maze, newX, newY, n, visited, path, answer);
    path = path.slice(0, -1);
  }
  // Left
  newX = x;
  newY = y - 1;

  if (isValidStep(newX, newY, n, maze, visited)) {
    path = path + "L";
    solving(maze, newX, newY, n, visited, path, answer);
    path = path.slice(0, -1);
  }
  // Up
  newX = x - 1;
  newY = y;

  if (isValidStep(newX, newY, n, maze, visited)) {
    path = path + "U";
    solving(maze, newX, newY, n, visited, path, answer);
    path = path.slice(0, -1);
  }

  visited[x][y] = false;
}

function isValidStep(x, y, n, maze, visited) {
  return (
    x >= 0 &&
    y >= 0 &&
    x < n &&
    y < n &&
    maze[x][y] === 1 &&
    visited[x][y] === false
  );
}

const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
console.log(solve(maze, maze.length));
