var containsNearbyDuplicate = function (nums, k) {
  const numsSet = new Set(nums);
  if (numsSet.size === nums.length) {
    return false;
  }

  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!numsMap.has(nums[i])) {
      numsMap.set(nums[i], []);
    }
    let value = numsMap.get(nums[i]);
    value.push(i);
    numsMap.set(nums[i], value);
  }

  for (let arr of numsMap.values()) {
    if (arr.length > 1) {
      for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i - 1]) <= k) {
          return true;
        }
      }
    }
  }

  return false;
};

/**
 * With only O(n) time complexity:
 */

var containsNearbyDuplicate = function (nums, k) {
  const hasmap = new Map();
  for (let idx = 0; idx < nums.length; idx++) {
    // Check if the difference between duplicates is less than k
    if (idx - hasmap.get(nums[idx]) <= k) {
      return true;
    }
    hasmap.set(nums[idx], idx);
  }
  return false;
};
