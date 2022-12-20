var exist = function (board, word) {
  let wordIdx = 0;

  function search(wordIdx, i, j) {
    if (wordIdx === word.length) return true;

    const target = word[wordIdx];
    const neighbours = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let [dx, dy] of neighbours) {
      const x = i + dx;
      const y = j + dy;

      if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
        if (target === board[x][y]) {
          board[x][y] = "*";
          if (search(wordIdx + 1, x, y)) return true;
          board[x][y] = word[wordIdx];
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        board[i][j] = "*";
        if (search(wordIdx + 1, i, j)) return true;
        board[i][j] = word[0];
      }
    }
  }

  return false;
};
