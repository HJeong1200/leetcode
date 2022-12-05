var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
      if (nums[right] < nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else if (nums[right] < nums[mid] && target > nums[right]) {
        right = mid;
      } else {
        right = mid;
      }
    } else if (target > nums[mid]) {
      if (nums[left] > nums[mid] && target < nums[left]) {
        left = mid + 1;
      } else if (nums[left] > nums[mid] && target >= nums[left]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  }

  return nums[left] === target ? left : -1;
};

// refactoring

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
      if (nums[right] < nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    } else if (target > nums[mid]) {
      if (nums[left] > nums[mid] && target >= nums[left]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  }

  return nums[left] === target ? left : -1;
};

// ver.2

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      // left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      // right half is sorted
      if (nums[right] >= target && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  return nums[left] === target ? left : -1;
};
