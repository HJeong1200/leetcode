var solveNQueens = function (n) {
  if (n === 1) return [["Q"]];
  const row = createRow(n);
  const board = Array(n).fill(row);
  const results = [];
  let queens = n;

  function dfs(queens, row, board) {
    if (queens === 0) {
      results.push([...Array.from(board)]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isValid(row, i, board)) {
        board[row] = board[row].slice(0, i) + "Q" + board[row].slice(i + 1);
        dfs(queens - 1, row + 1, board);
        board[row] = board[row].slice(0, i) + "." + board[row].slice(i + 1);
      }
    }
  }

  dfs(queens, 0, board);

  return results;
};

function createRow(num) {
  let row = "";

  for (let i = 1; i <= num; i++) {
    row += ".";
  }

  return row;
}

function isValid(row, col, board) {
  if (col > 0 && queenOnDiagonalBack(row, col, board)) return false;
  if (queenOnRow(row, col, board)) return false;
  if (col < board.length - 1 && queenOnDiagonalFront(row, col, board))
    return false;

  return true;
}

function queenOnRow(row, col, board) {
  while (row > 0) {
    row--;
    if (board[row][col] === "Q") return true;
  }

  return false;
}

function queenOnDiagonalBack(row, col, board) {
  while (row > 0 && col > 0) {
    row--;
    col--;
    if (board[row][col] === "Q") return true;
  }

  return false;
}

function queenOnDiagonalFront(row, col, board) {
  while (row > 0 && col < board.length - 1) {
    row--;
    col++;
    if (board[row][col] === "Q") return true;
  }

  return false;
}
