var searchInsert = function (nums, target) {
  let temp = nums;
  let first = 0;
  let last = nums.length - 1;
  let mid = Math.floor(last - first / 2);

  while (nums.length === 1) {
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      nums.slice(first, mid);
    }
    if (nums[mid] < target) {
      nums.slice(mid + 1);
    }
  }

  let num = nums[0];

  if (num > target) {
    return temp.indexOf(num);
  } else {
    return temp.indexOf(num) + 1;
  }
};

// nums의 가운데 값을 target과 비교한다
// target이 더 크면 위 절반과 비교한다
// target이 더 작으면 아래 절반과 비교한다
// 동일하면 인덱스 반환,

/**
 * Binary search
 *
 *    1. assume [l, r] -> l = 0, r = n;
 *    6. while (l < r)
 *    2. calculate m = Math.floor((l + r) / 2)
 *    3. if arr[m] === target, return the index
 *    4. if arr[m] < target, then the insertion position should be at least m + 1 -> l = m + 1
 *    5. if arr[m] > target, then the insertion position should be at most m -> r = m
 *    7. check the 1 remaining element with target
 */

var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length;

  if (nums.length === 0) {
    return 0;
  }

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      return nums.indexOf(target);
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[l] < target ? l + 1 : l;
};

// 2023 ver

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) right = mid;
    if (nums[mid] < target) left = mid + 1;
  }

  return nums[left] < target ? left + 1 : left;
};
