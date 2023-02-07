var maxAreaOfIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let maxArea = 0;
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0 || visited[i][j]) continue;

      const curArea = dfs(i, j, grid, visited);

      maxArea = Math.max(maxArea, curArea);
    }
  }

  return maxArea;
};

function dfs(i, j, grid, visited) {
  const dx = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [];
  let curArea = 1;

  visited[i][j] = 1;

  queue.push([i, j]);

  while (queue.length) {
    const [i, j] = queue.shift();

    dx.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (
        yPos < 0 ||
        xPos < 0 ||
        yPos >= grid.length ||
        xPos >= grid[0].length ||
        !grid[yPos][xPos] ||
        visited[yPos][xPos]
      )
        return;

      visited[yPos][xPos] = 1;
      curArea++;
      queue.push([yPos, xPos]);
    });
  }

  return curArea;
}

// visited 없이 grid[i][j] = 0으로 세팅해도 됨

var maxAreaOfIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let maxArea = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) continue;

      const curArea = dfs(i, j, grid);

      maxArea = Math.max(maxArea, curArea);
    }
  }

  return maxArea;
};

function dfs(i, j, grid) {
  const dx = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [];
  let curArea = 1;

  grid[i][j] = 0;

  queue.push([i, j]);

  while (queue.length) {
    const [i, j] = queue.shift();

    dx.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (
        yPos < 0 ||
        xPos < 0 ||
        yPos >= grid.length ||
        xPos >= grid[0].length ||
        !grid[yPos][xPos]
      )
        return;

      grid[yPos][xPos] = 0;
      curArea++;
      queue.push([yPos, xPos]);
    });
  }

  return curArea;
}
