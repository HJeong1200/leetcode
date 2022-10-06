var missingNumber = function (nums) {
  let n = nums.length;
  let result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      result = i;
      return result;
    }
  }

  if (result === undefined) {
    result = n;
  }

  return result;
};

/**
 * nums를 sort -> 시간복잡도 증가
 */

var missingNumber = function (nums) {
  const n = nums.length;
  const total = (n * (n + 1)) / 2;

  return nums.reduce((acc, cur) => {
    return acc - cur;
  }, total);
};
