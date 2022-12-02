var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let best = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    let sum;

    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return target;
      }

      if (Math.abs(sum - target) < Math.abs(best - target)) {
        best = sum;
      }
    }
  }

  return best;
};
