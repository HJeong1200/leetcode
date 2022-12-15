var longestCommonSubsequence = function (text1, text2) {
  text1 = " " + text1;
  text2 = " " + text2;

  const DP = Array(text1.length).fill(0);

  for (let i = 0; i < DP.length; i++) {
    DP[i] = Array(text2.length).fill(0);
  }

  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        DP[i][j] = DP[i - 1][j - 1] + 1;
      } else {
        DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
      }
    }
  }

  return Math.max(...DP.flat());
};
