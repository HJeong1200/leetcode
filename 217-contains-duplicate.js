var containsDuplicate = function (nums) {
  let numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsObj[nums[i]] === undefined) {
      numsObj[nums[i]] = 1;
    } else {
      return true;
    }
  }

  return false;
};

/**
 *
 * Set 사용
 * set은 중복을 허용하지 않으며, 키가 없음
 * new Set(iterable) -> iterable 객체를 전달받으면 그 값을 복사해서 set 생성
 *
 */

var containsDuplicate = function (nums) {
  let numsSet = new Set(nums);
  if (numsSet.size === nums.length) {
    return false;
  } else {
    return true;
  }
};
