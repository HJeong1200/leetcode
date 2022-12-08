var canJump = function (nums) {
  const set = new Set(nums);
  if (!set.has(0)) return true;

  let curPosition = 0;

  while (curPosition < nums.length - 1) {
    if (nums[curPosition] === 0) {
      let backed = 1;

      while (backed <= curPosition && nums[curPosition - backed] <= backed) {
        backed++;
      }

      if (backed > curPosition) {
        return false;
      }
    }

    curPosition++;
  }

  return true;
};

// refactoring

var canJump = function (nums) {
  const set = new Set(nums);
  if (!set.has(0)) return true;

  let curPosition = 0;

  while (curPosition < nums.length - 1) {
    if (nums[curPosition] === 0) {
      let backed = 1;

      while (backed <= curPosition && nums[curPosition - backed] <= backed) {
        backed++;
      }

      if (backed > curPosition) {
        return false;
      }

      curPosition = curPosition - backed;
    }

    curPosition += nums[curPosition];
  }

  return true;
};
