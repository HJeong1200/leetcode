var longestPalindromeSubseq = function (s) {
  const matrix = Array(s.length)
    .fill("")
    .map(() => Array(s.length).fill(0));

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        matrix[i][j] = 1;
        continue;
      }

      if (s[i] === s[j]) {
        matrix[i][j] = matrix[i + 1][j - 1] + 2;
      } else {
        matrix[i][j] = Math.max(matrix[i + 1][j], matrix[i][j - 1]);
      }
    }
  }

  return matrix[0][s.length - 1];
};
