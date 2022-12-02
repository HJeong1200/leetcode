var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  if (nums[0] > 0) return [];

  let result = [];
  let pointer = 0;

  while (nums[pointer] <= 0) {
    if (pointer > 0 && nums[pointer] === nums[pointer - 1]) {
      pointer++;
      continue;
    }

    const target = -nums[pointer];

    let left = pointer + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] === target) {
        result.push([nums[pointer], nums[left], nums[right]]);
        const lastLeft = nums[left];
        const lastRight = nums[right];

        while (nums[left] === lastLeft) {
          left++;
        }
        while (nums[right] === lastRight) {
          right--;
        }
      } else if (nums[left] + nums[right] > target) right--;
      else if (nums[left] + nums[right] < target) left++;
    }

    pointer++;
  }

  return result;
};
