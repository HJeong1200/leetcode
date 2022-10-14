var moveZeroes = function (nums) {
  let counter = 0;

  while (nums.indexOf(0) !== -1) {
    nums.splice(nums.indexOf(0), 1);
    counter++;
  }

  while (counter > 0) {
    nums.push(0);
    counter--;
  }
};

/**
 *  Two pointers
 *
 *  Fast pointer -> iterate the array and find non-zero elements
 *  Slow pointer -> point the position where the non-zero element should be
 *
 */

var moveZeroes = function (nums) {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  for (let i = pointer; i < nums.length; i++) {
    nums[i] = 0;
  }
};
