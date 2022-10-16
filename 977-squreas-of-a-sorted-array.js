var sortedSquares = function (nums) {
  let squaredNums = nums.map((el) => {
    return el * el;
  });

  squaredNums.sort((a, b) => a - b);

  return squaredNums;
};

/**
 * Two Pointers
 *
 * Why use two pointers?
 *
 * when squared, the biggest number is the one on the far left or far right.
 * so we point at the leftmost and rightmost number and compare which one is bigger
 *
 */

var sortedSquares = function (nums) {
  nums = nums.map((el) => {
    return el * el;
  });

  let left = 0;
  let right = nums.length - 1;

  let result = [];

  while (left <= right) {
    if (nums[left] > nums[right]) {
      result.unshift(nums[left]);
      left++;
    } else {
      result.unshift(nums[right]);
      right--;
    }
  }

  return result;
};

var sortedSquares = function (nums) {
  nums = nums.map((el) => {
    return el * el;
  });

  let left = 0;
  let right = nums.length - 1;
  let cur = nums.length - 1;

  let result = [];

  while (left <= right) {
    if (nums[left] > nums[right]) {
      result[cur] = nums[left];
      left++;
    } else {
      result[cur] = nums[right];
      right--;
    }

    cur--;
  }

  return result;
};
