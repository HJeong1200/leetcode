var sortArrayByParityII = function (nums) {
  let result = [];
  let oddStack = [];
  let evenStack = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      oddStack.push(nums[i]);
    } else {
      evenStack.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i % 2) {
      result[i] = oddStack.pop();
    } else {
      result[i] = evenStack.pop();
    }
  }

  return result;
};

// 더 간단한 방법...

var sortArrayByParityII = function (nums) {
  let result = [];
  let even = 0;
  let odd = 1;

  for (let num of nums) {
    if (num % 2) {
      result[odd] = num;
      odd += 2;
    } else {
      result[even] = num;
      even += 2;
    }
  }

  return result;
};
