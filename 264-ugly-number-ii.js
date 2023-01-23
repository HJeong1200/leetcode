var nthUglyNumber = function (n) {
  const uglyArr = [1];

  let twoCount = 0;
  let threeCount = 0;
  let fiveCount = 0;

  while (uglyArr.length < n) {
    const nextNum = Math.min(
      uglyArr[twoCount] * 2,
      uglyArr[threeCount] * 3,
      uglyArr[fiveCount] * 5
    );
    uglyArr.push(nextNum);

    if (nextNum === uglyArr[twoCount] * 2) twoCount++;
    if (nextNum === uglyArr[threeCount] * 3) threeCount++;
    if (nextNum === uglyArr[fiveCount] * 5) fiveCount++;
  }

  return uglyArr[n - 1];
};
