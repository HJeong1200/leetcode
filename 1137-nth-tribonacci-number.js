var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  let curNum = 1;
  let prevNum = 1;
  let prevPrevNum = 0;

  for (let i = 3; i <= n; i++) {
    [curNum, prevNum, prevPrevNum] = [
      curNum + prevNum + prevPrevNum,
      curNum,
      prevNum,
    ];
  }

  return curNum;
};
