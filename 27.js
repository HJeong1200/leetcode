var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

// nums[i]와 val을 비교한다
// k = 0
// 만약 같으면, i++
// 만약 다르면, nums[k]에 nums[i]를 넣고, k++, i++
// k를 리턴

/* 
    26번 문제와 동일한 로직
    Time complexity : O(n)
        Assume the array has a total of n elements, both i and j traverse at most 2n steps.
    Space complexity : O(1)
*/

var removeElement = function (nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }

  return i;
};

/**
 * 만약 nums안에 val이 매우 적게 있는 경우 위 코드로 효율성 높일 수 있음
 * 시간복잡도: O(n) -> n steps
 * 공간복잡도: O(1)
 */

var removeElement = function (nums, val) {
  while (nums.some((el) => el === val)) {
    nums.splice(nums.indexOf(val), 1);
  }

  return nums.length;
};
