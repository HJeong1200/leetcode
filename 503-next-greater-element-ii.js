var nextGreaterElements = function (nums) {
  let numsArr = [...nums, ...nums];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < numsArr.length; j++) {
      if (nums[i] < numsArr[j]) {
        result[i] = numsArr[j];
        break;
      }
    }

    if (result[i] === undefined) {
      result[i] = -1;
    }
  }

  return result;
};

// using stack
// we store indices instead of elements since there could be duplicates in the nums array.

var nextGreaterElements = function (nums) {
  let numsArr = [...nums, ...nums];
  let result = Array(nums.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numsArr.length; i++) {
    while (stack.length && numsArr[stack[stack.length - 1]] < numsArr[i]) {
      let index = stack.pop();
      result[index] = numsArr[i];
    }

    stack.push(i);
  }

  result = result.slice(0, nums.length);

  return result;
};
