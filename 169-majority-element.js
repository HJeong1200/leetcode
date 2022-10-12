var majorityElement = function (nums) {
  let counter = {};
  let countArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!counter[nums[i]]) {
      counter[nums[i]] = 0;
    }
    counter[nums[i]] = counter[nums[i]] + 1;
    countArr = Object.keys(counter);
  }

  for (let i = 0; i < countArr.length; i++) {
    if (counter[countArr[i]] >= nums.length / 2) {
      return countArr[i];
    }
  }
};

/**
 * Solve in linear time & O(1) space?
 *
 *      Boyer-Moore Voting Algorithm (과반수 투표 알고리즘)
 *
 *      배열에 포함된 원소 중 절반 이상 포함된 원소를 linear time과 constant space로 찾을 수 있는 알고리즘
 *
 *
 *
 */

var majorityElement = function (nums) {
  let counter = 1;
  let candidate = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      counter++;
    } else {
      counter--;
    }

    if (counter === 0) {
      candidate = nums[i + 1];
    }
  }

  return candidate;
};
