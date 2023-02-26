var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2) mid--;

    if (nums[mid] === nums[mid + 1]) left = mid + 2;
    else right = mid;
  }

  return nums[left];
};
