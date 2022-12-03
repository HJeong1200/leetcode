var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);

  let result = [];
  let left = 0;

  while (left < nums.length - 3) {
    let right = nums.length - 1;

    while (right >= left + 3) {
      let leftPointer = left + 1;
      let rightPointer = right - 1;

      while (leftPointer < rightPointer) {
        let sum =
          nums[left] + nums[leftPointer] + nums[right] + nums[rightPointer];

        if (sum > target) {
          rightPointer--;
        } else if (sum < target) {
          leftPointer++;
        } else {
          result.push([
            nums[left],
            nums[leftPointer],
            nums[rightPointer],
            nums[right],
          ]);

          let leftTemp = leftPointer;
          let rightTemp = rightPointer;

          while (nums[leftTemp] === nums[leftPointer]) leftPointer++;
          while (nums[rightTemp] === nums[rightPointer]) rightPointer--;
        }
      }

      let rightTemp = right;
      while (nums[rightTemp] === nums[right]) right--;
    }

    let leftTemp = left;
    while (nums[leftTemp] === nums[left]) left++;
  }

  return result;
};

/*
    3Sum 문제는 가장 왼쪽을 pointer로 놓고, left와 right을 움직이면서 target을 찾음
    4Sum 문제는 가장 오른쪽을 pointer로 놓고, leftPointer와 rightPointer를 움직이면서 target 찾음
     -> 이것을 가장 left가 nums.length - 3 전까지 반복
*/
