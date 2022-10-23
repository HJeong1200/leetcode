var findMaxConsecutiveOnes = function (nums) {
  let left = 0;
  let right = 0;
  let result = 0;

  while (right <= nums.length) {
    if (nums[right] === 1) {
      right++;
    } else {
      result = Math.max(result, right - left);
      right++;
      left = right;
    }
  }

  return result;
};

// Optimization

var findMaxConsecutiveOnes = function (nums) {
  let left = 0;
  let right = 0;
  let result = 0;

  while (right <= nums.length) {
    if (nums[right] !== 1) {
      result = Math.max(result, right - left);
      left = right + 1;
    }
    right++;
  }

  return result;
};
