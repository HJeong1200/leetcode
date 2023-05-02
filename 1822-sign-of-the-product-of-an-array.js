var arraySign = function (nums) {
  let result = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) continue;
    else if (nums[i] < 0) result *= -1;
    else return 0;
  }

  return result;
};
