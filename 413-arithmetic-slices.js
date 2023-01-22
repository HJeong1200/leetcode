var numberOfArithmeticSlices = function (nums) {
  if (nums.length === 1) return 0;

  const result = Array(nums.length).fill(0);
  const prefixArr = nums.slice();
  prefixArr[0] = Infinity;

  for (let i = 1; i < prefixArr.length; i++) {
    prefixArr[i] -= nums[i - 1];

    if (prefixArr[i] === prefixArr[i - 1]) result[i] = result[i - 1] + 1;
  }

  return result.reduce((acc, cur) => acc + cur);
};

// reduce 생략 가능

var numberOfArithmeticSlices = function (nums) {
  if (nums.length === 1) return 0;

  let result = 0;
  let count = 0;
  const prefixArr = nums.slice();
  prefixArr[0] = Infinity;

  for (let i = 1; i < prefixArr.length; i++) {
    prefixArr[i] -= nums[i - 1];

    if (prefixArr[i] === prefixArr[i - 1]) {
      count++;
    } else {
      result += (count * (count + 1)) / 2;
      count = 0;
    }
  }

  return result + (count * (count + 1)) / 2;
};
