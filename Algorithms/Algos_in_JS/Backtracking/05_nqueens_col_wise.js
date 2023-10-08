function nQueens(boardSize) {
  const result = [];
  const board = [];
  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push(".");
    }
    board.push(row);
  }

  function isSafe(row, col) {
    let i, j;
    // Checks Horizontally, Left
    for (i = 0; i < col; i++) {
      if (board[row][i] === "Q") return false;
    }
    // Check Diagonally Upper Left
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    // Check Diagonally Lower Left
    for (i = row, j = col; i < boardSize && j >= 0; i++, j--) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function saveQueens(col) {
    // Base Condition
    if (col === boardSize) {
      const solution = board.map((row) => row.join(""));
      result.push(solution);
      return;
    }
    for (let row = 0; row < boardSize; row++) {
      // Constrains
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        // Recursion for col
        saveQueens(col + 1);
        // Backtrack
        board[row][col] = ".";
      }
    }
  }

  saveQueens(0);
  return result;
}

const result = nQueens(4);
console.log(result);
