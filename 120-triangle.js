var minimumTotal = function (triangle) {
  if (triangle.length === 1) return triangle[0][0];

  for (let i = 0; i < triangle.length; i++) {
    triangle[i] = [Infinity, ...triangle[i], Infinity];
  }

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 1; j < triangle[i].length - 1; j++) {
      triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
    }
  }

  return Math.min(...triangle[triangle.length - 1]);
};
