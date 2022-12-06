var isValidSudoku = function (board) {
  for (let row of board) {
    if (!checkValid(row)) return false;
  }

  for (let i = 0; i < 9; i++) {
    let column = [];

    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }

    if (!checkValid(column)) return false;
  }

  for (let i = 0; i < 7; i += 3) {
    for (let j = 0; j < 7; j += 3) {
      let arr = createBox(board, i, j);

      if (!checkValid(arr)) return false;
    }
  }

  return true;
};

function checkValid(arr) {
  let set = new Set();

  for (let el of arr) {
    if (el !== "." && !set.has(el)) {
      set.add(el);
    } else if (el !== "." && set.has(el)) {
      return false;
    }
  }

  return true;
}

function createBox(board, row, column) {
  let arr = [];

  for (let i = row; i < row + 3; i++) {
    for (let j = column; j < column + 3; j++) {
      arr.push(board[i][j]);
    }
  }

  return arr;
}
