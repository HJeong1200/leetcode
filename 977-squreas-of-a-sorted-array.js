var sortedSquares = function (nums) {
  let squaredNums = nums.map((el) => {
    return el * el;
  });

  squaredNums.sort((a, b) => a - b);

  return squaredNums;
};
