var numSubarrayProductLessThanK = function (nums, k) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let left = i;
    let product = 1;

    while (left >= 0) {
      product *= nums[left];

      if (product < k) {
        result++;
        left--;
      } else {
        break;
      }
    }
  }

  return result;
};

// sliding window 반대로

var numSubarrayProductLessThanK = function (nums, k) {
  let result = 0;
  let cur = 1;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    cur *= nums[i];

    while (left <= i) {
      if (cur >= k) {
        cur = cur / nums[left];
        left++;
      } else {
        result += i - left + 1;
        break;
      }
    }
  }

  return result;
};
