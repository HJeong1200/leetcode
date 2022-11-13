var binaryGap = function (n) {
  const binaryNum = n.toString(2);

  let left = 0;
  let max = 0;

  for (let i = 1; i < binaryNum.length; i++) {
    if (binaryNum[i] === "1") {
      max = Math.max(max, i - left);
      left = i;
    }
  }

  return max;
};
