var maxDistance = function (grid) {
  const queue = [];
  const visited = Array(grid.length)
    .fill(0)
    .map(() => Array(grid.length).fill(0));

  grid = grid.map(
    (arr, i) =>
      (arr = arr.map((el, j) => {
        if (el === 1) {
          queue.push([i, j]);
          visited[i][j] = 1;
          return 0;
        } else {
          return Infinity;
        }
      }))
  );

  if (queue.length === 0 || queue.length === Math.pow(grid.length, 2))
    return -1;

  const dx = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let result = -1;

  while (queue.length) {
    const [i, j] = queue.shift();

    dx.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (
        yPos < 0 ||
        xPos < 0 ||
        yPos >= grid.length ||
        xPos >= grid.length ||
        grid[i][j] >= grid[yPos][xPos] ||
        visited[yPos][xPos]
      )
        return;

      visited[yPos][xPos] = 1;
      grid[yPos][xPos] = grid[i][j] + 1;
      queue.push([yPos, xPos]);
    });
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      result = Math.max(result, grid[i][j]);
    }
  }

  return result;
};
