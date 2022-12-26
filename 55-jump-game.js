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

// 뒤에서부터 현재 node에 도착할 수 있는 방법이 있는지 확인

var canJump = function (nums) {
  if (nums.length === 1) return true;
  if (nums[0] === 0) return false;

  let jumpDistance = 1;

  for (let i = nums.length - 2; i >= 1; i--) {
    if (nums[i] >= jumpDistance) {
      jumpDistance = 1;
    } else {
      jumpDistance++;
    }
  }

  return nums[0] >= jumpDistance ? true : false;
};
