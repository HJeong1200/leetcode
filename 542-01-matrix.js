var updateMatrix = function (mat) {
  const queue = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  const dx = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    const [i, j, dist] = queue.shift();

    dx.forEach(([y, x]) => {
      const [yPos, xPos] = [i + y, j + x];

      if (yPos < 0 || xPos < 0 || yPos >= mat.length || xPos >= mat[0].length)
        return;
      if (mat[yPos][xPos] !== Infinity) return;

      mat[yPos][xPos] = dist + 1;
      queue.push([yPos, xPos, dist + 1]);
    });
  }

  return mat;
};
