var subsets = function (nums) {
  const result = [];

  function powerSet(subSet, num) {
    result.push(subSet);

    for (let i = num; i < nums.length; i++) {
      powerSet([...subSet, nums[i]], i + 1);
    }
  }

  powerSet([], 0);

  return result;
};
