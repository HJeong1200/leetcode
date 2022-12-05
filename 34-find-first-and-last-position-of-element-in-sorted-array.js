var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);

  if (nums[left] === target && nums[right] === target) return [left, right];

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      break;
    }
  }

  let leftEnd = mid;
  let rightStart = mid;

  while (left < leftEnd) {
    let mid = Math.floor((left + leftEnd) / 2);

    if (nums[mid] === target && nums[mid - 1] < target) {
      left = mid;
      break;
    } else if (nums[mid] >= target) {
      leftEnd = mid;
    } else {
      left = mid + 1;
    }
  }

  while (rightStart < right) {
    let mid = Math.floor((rightStart + right) / 2);

    if (
      nums[mid] === target &&
      (mid + 1 === nums.length || nums[mid + 1] > target)
    ) {
      right = mid;
      break;
    } else if (nums[mid] <= target) {
      rightStart = mid + 1;
    } else {
      right = mid;
    }
  }

  if (nums[left] === target && nums[right] === target) return [left, right];
  return [-1, -1];
};

// refactoring
// 맨 첫 번째 while문 필요 없음

var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  let left = 0;
  let right = nums.length - 1;

  if (nums[left] === target && nums[right] === target) return [left, right];

  let leftEnd = right;
  let rightStart = left;

  while (left < leftEnd) {
    let mid = Math.floor((left + leftEnd) / 2);

    if (nums[mid] === target && nums[mid - 1] < target) {
      left = mid;
      break;
    } else if (nums[mid] >= target) {
      leftEnd = mid;
    } else {
      left = mid + 1;
    }
  }

  while (rightStart < right) {
    let mid = Math.floor((rightStart + right) / 2);

    if (
      nums[mid] === target &&
      (mid + 1 === nums.length || nums[mid + 1] > target)
    ) {
      right = mid;
      break;
    } else if (nums[mid] <= target) {
      rightStart = mid + 1;
    } else {
      right = mid;
    }
  }

  if (nums[left] === target && nums[right] === target) return [left, right];
  return [-1, -1];
};
