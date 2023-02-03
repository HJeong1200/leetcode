var updateBoard = function (board, click) {
  const [x, y] = click;
  const m = board.length;
  const n = board[0].length;

  if (board[x][y] === "M") {
    board[x][y] = "X";
    return board;
  }

  if (board.every((row) => row.every((el) => el === "E")))
    return board.map((row) => row.map((el) => "B"));

  const boardWithMine = Array(m)
    .fill("")
    .map(() => Array(n).fill(0));
  const dx = [
    [1, 1],
    [1, 0],
    [1, -1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [-1, 1],
    [0, 1],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "M") {
        boardWithMine[i][j] = "M";

        dx.forEach(([y, x]) => {
          const yPos = i + y;
          const xPos = j + x;
          if (
            yPos < 0 ||
            xPos < 0 ||
            yPos >= m ||
            xPos >= n ||
            boardWithMine[yPos][xPos] === "M"
          )
            return;

          boardWithMine[yPos][xPos] += 1;
        });
      }
    }
  }

  const queue = [click];

  while (queue.length) {
    const [i, j] = queue.shift();

    if (boardWithMine[i][j] > 0 && boardWithMine[i][j] < 9) {
      board[i][j] = String(boardWithMine[i][j]);
      continue;
    }

    if ((board[i][j] = "E")) {
      board[i][j] = "B";
      boardWithMine[i][j] = "B";
    }

    dx.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (yPos < 0 || xPos < 0 || yPos >= m || xPos >= n) return;

      if (!isNaN(boardWithMine[yPos][xPos]) && board[yPos][xPos] === "E") {
        queue.push([yPos, xPos]);
      }
    });
  }

  return board;
};
