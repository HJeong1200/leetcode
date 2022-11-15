var sortArrayByParity = function (nums) {
  let result = [];

  for (let el of nums) {
    if (el % 2) {
      result.push(el);
    } else {
      result.unshift(el);
    }
  }

  return result;
};

// 조금 더 빠르게 unshift 안쓰는 방법

var sortArrayByParity = function (nums) {
  let result = Array(nums.legth).fill(0);
  let left = 0;
  let right = nums.length - 1;

  for (let el of nums) {
    if (el % 2) {
      result[right] = el;
      right--;
    } else {
      result[left] = el;
      left++;
    }
  }

  return result;
};
