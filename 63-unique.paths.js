var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1) return 0;
  if (obstacleGrid[m - 1][n - 1] === 1) return 0;
  if (m === 1 && obstacleGrid.includes(1)) return 0;

  const matrix = [];

  let arr = [];

  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 0) {
      arr.push(1);
    } else {
      const subArr = Array(n - i).fill(0);
      arr = [...arr, ...subArr];
      break;
    }
  }

  matrix.push(arr);
  let index = Infinity;

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      index = i;
      break;
    }
  }

  for (let i = 1; i < m; i++) {
    const arr = Array(n).fill(-1);
    if (i < index) {
      arr[0] = 1;
    } else {
      arr[0] = 0;
    }
    matrix.push(arr);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) matrix[i][j] = 0;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
      }
    }
  }

  return matrix[m - 1][n - 1];
};

// refactoring
// obstacleGrid 사용
// obstacleGrid[i][j] === 1이면 0으로 바꾸기

var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        if (j === 0) {
          obstacleGrid[i][j] = 1;
        } else if (obstacleGrid[i][j] === 0) {
          obstacleGrid[i][j] = obstacleGrid[i][j - 1];
        } else {
          obstacleGrid[i][j] = 0;
        }
      } else {
        if (j === 0 && obstacleGrid[i][j] === 0) {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j];
        } else if (obstacleGrid[i][j] === 0) {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
        } else {
          obstacleGrid[i][j] = 0;
        }
      }
    }
  }

  return obstacleGrid[m - 1][n - 1];
};
