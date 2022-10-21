var findDisappearedNumbers = function (nums) {
  let set = new Set(nums);
  let result = [];
  let numArr = [];

  for (let i = 0; i < nums.length; i++) {
    numArr.push(i + 1);
  }

  for (let num of numArr) {
    if (!set.has(num)) {
      result.push(num);
    }
  }

  return result;
};

// 조금 더 최적화

var findDisappearedNumbers = function (nums) {
  let result = [];
  let set = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i + 1)) {
      result.push(i + 1);
    }
  }

  return result;
};
