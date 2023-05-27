function solveNQueens(n) {
    const result = [];
    // Concise Way for declaring 2D Array
    // const board = new Array(n).fill('').map(() => new Array(n).fill('.'));
    const board = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push('.');
        }
        board.push(row);
    }

    function isSafe(row, col) {
        // Check if there is a queen in the same column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }

        // Check if there is a queen in the upper left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }

        // Check if there is a queen in the upper right diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }

        return true;
    }

    function backtrack(row) {
        if (row === n) {
            const solution = board.map(row => row.join(''));
            result.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return result;
}

// Example usage:
const n = 4;
const solutions = solveNQueens(n);
solutions.forEach(solution => {
    console.log(solution);
    console.log('---');
});