function saveBoard(board, col, n) {
    // Base Condition
    if (col >= n)
        return true;

    for (let row = 0; row < n; row++) {
        // Constrains
        if (isSafe(board, row, col, n)) {
            board[row][col] = 1;
            // Recursion, col
            if (saveBoard(board, col++, n)){
                return true;
            }
            // Backtrack
            board[row][col] = 0;
        }
    }
    return false;
}

function isSafe(board, row, col, n) {
    let i, j;

    // Checks Horizontally, Left
    for (i = 0; i < col; i++) {
        if (board[row][i] == 1) {
            return false;
        }
    }

    // Check Diagonally Upper Left
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }
    // Check Diagonally Lower Left
    for (i = row, j = col; i < n && j >= 0; i++, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }

    return true;
}

const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

const n = board.length;

if(saveBoard(board, 0, n)) {
    console.log(board)
} else {
    console.log("No Solution")
}